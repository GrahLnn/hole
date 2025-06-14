use crate::database::enums::table::{Rel, Table};
use crate::database::Crud;
use crate::{app_schema, impl_crud};
use anyhow::Result;
use futures::future;
use serde::{Deserialize, Serialize};
use specta::Type;
use surrealdb::sql::Datetime;
use surrealdb::RecordId;

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub enum AccountStatus {
    Online,
    Unavailable,
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub enum LoginMethod {
    SingleSignOn { login_site: Platform },
    NamePassword { password: String },
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub enum TokenStatus {
    Active,
    Inactive,
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub struct Token {
    pub name: String,
    pub value: String,
    // #[specta(type = String)]
    // pub expires: Datetime,
    pub status: TokenStatus,
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub struct Note {
    pub name: String,
    pub value: String,
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub struct Login {
    pub login_method: LoginMethod,
    pub status: AccountStatus,
    pub cookies: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub struct Platform {
    pub sitename: String,
    pub url: String,
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub struct Account {
    pub email: String,
}

impl_crud!(Account, Table::Account);
impl_crud!(Platform, Table::Platform);
impl_crud!(Token, Table::Token);
impl_crud!(Note, Table::Note);
impl_crud!(Login, Table::Login);

app_schema!(
    Account,
    "DEFINE INDEX unique_email ON TABLE account FIELDS email UNIQUE;"
);
app_schema!(
    Platform,
    "DEFINE INDEX unique_sitename ON TABLE platform FIELDS sitename UNIQUE;"
);
app_schema!(
    Token,
    "DEFINE INDEX unique_name ON TABLE token FIELDS name UNIQUE;"
);
app_schema!(
    Note,
    "DEFINE INDEX unique_name ON TABLE note FIELDS name UNIQUE;"
);

impl Account {
    pub async fn create_account(email: &str) -> Result<()> {
        let account = Account {
            email: email.to_string(),
        };
        account.create().await?;
        Ok(())
    }
}

impl Platform {
    pub async fn create_platform(sitename: &str, url: &str) -> Result<()> {
        let platform = Platform {
            sitename: sitename.to_string(),
            url: url.to_string(),
        };
        platform.create().await?;
        Ok(())
    }
}

impl Login {
    pub async fn create_login(
        login_method: LoginMethod,
        status: AccountStatus,
        cookies: Option<String>,
    ) -> Result<RecordId> {
        let login = Login {
            login_method,
            status,
            cookies,
        };
        login.create_return_id().await
    }
}

impl Token {
    pub async fn create_token(
        name: &str,
        value: &str,
        // expires: &str,
        status: TokenStatus,
    ) -> Result<RecordId> {
        let token = Token {
            name: name.to_string(),
            value: value.to_string(),
            // expires: expires.parse::<chrono::DateTime<chrono::Utc>>()?.into(),
            status: status,
        };
        token.create_return_id().await
    }
}

impl Note {
    pub async fn create_note(name: &str, value: &str) -> Result<RecordId> {
        let note = Note {
            name: name.to_string(),
            value: value.to_string(),
        };
        note.create_return_id().await
    }
}

#[tauri::command]
#[specta::specta]
pub async fn create_account(email: &str) -> Result<(), String> {
    Account::create_account(email)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
#[specta::specta]
pub async fn create_platform(sitename: &str, url: &str) -> Result<(), String> {
    Platform::create_platform(sitename, url)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
#[specta::specta]
pub async fn relate_platform(email: &str, platform: &str) -> Result<(), String> {
    let account = Account::select_record_id("email", email)
        .await
        .map_err(|e| e.to_string())?;
    let platform = Platform::select_record_id("sitename", platform)
        .await
        .map_err(|e| e.to_string())?;
    Account::relate_by_id(account, platform, Rel::SignIn)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
#[specta::specta]
pub async fn unrelate_platform(email: &str, platform: &str) -> Result<(), String> {
    let account = Account::select_record_id("email", email)
        .await
        .map_err(|e| e.to_string())?;
    let platform = Platform::select_record_id("sitename", platform)
        .await
        .map_err(|e| e.to_string())?;
    Account::unrelate_by_id(account, platform, Rel::SignIn)
        .await
        .map_err(|e| e.to_string())
}

async fn sign_in_edge(email: &str, platform: &str) -> Result<RecordId> {
    let account = Account::select_record_id("email", email).await?;
    let platform = Platform::select_record_id("sitename", platform).await?;
    Rel::SignIn.record_id(account, platform).await
}

#[tauri::command]
#[specta::specta]
pub async fn relate_login_info(email: &str, platform: &str, login: Login) -> Result<(), String> {
    let edge = sign_in_edge(email, platform)
        .await
        .map_err(|e| e.to_string())?;
    let login_id = login.create_return_id().await.map_err(|e| e.to_string())?;
    Login::relate_by_id(edge, login_id, Rel::HasLoginInfo)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
#[specta::specta]
pub async fn update_login_info(email: &str, platform: &str, login: Login) -> Result<(), String> {
    let edge = sign_in_edge(email, platform)
        .await
        .map_err(|e| e.to_string())?;
    let login_id = Login::outs(edge, Rel::HasLoginInfo, Table::Login)
        .await
        .map_err(|e| e.to_string())?
        .into_iter()
        .next()
        .ok_or(anyhow::anyhow!("login not found"))
        .map_err(|e| e.to_string())?;
    Login::upsert_by_id(login_id.clone(), login)
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
#[specta::specta]
pub async fn delete_login_info(email: &str, platform: &str) -> Result<(), String> {
    let edge = sign_in_edge(email, platform)
        .await
        .map_err(|e| e.to_string())?;
    Login::unrelate_all(edge, Rel::HasLoginInfo)
        .await
        .map_err(|e| e.to_string())
}

async fn read_login_info(email: &str, platform: &str) -> Result<Login, String> {
    let edge = sign_in_edge(email, platform)
        .await
        .map_err(|e| e.to_string())?;
    let login_id = Login::outs(edge, Rel::HasLoginInfo, Table::Login)
        .await
        .map_err(|e| e.to_string())?
        .into_iter()
        .next()
        .ok_or(anyhow::anyhow!("login not found"))
        .map_err(|e| e.to_string())?;
    Login::select_record(login_id)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
#[specta::specta]
pub async fn relate_token(email: &str, platform: &str, token: Token) -> Result<(), String> {
    let edge = sign_in_edge(email, platform)
        .await
        .map_err(|e| e.to_string())?;
    let token_id = token.create_return_id().await.map_err(|e| e.to_string())?;
    Token::relate_by_id(edge, token_id, Rel::HasToken)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
#[specta::specta]
pub async fn update_token(name: &str, token: Token) -> Result<(), String> {
    let token_id = Token::select_record_id("name", name)
        .await
        .map_err(|e| e.to_string())?;
    Token::upsert_by_id(token_id, token)
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
#[specta::specta]
pub async fn delete_token(email: &str, platform: &str, name: &str) -> Result<(), String> {
    let edge = sign_in_edge(email, platform)
        .await
        .map_err(|e| e.to_string())?;
    let token_id = Token::select_record_id("name", name)
        .await
        .map_err(|e| e.to_string())?;
    Token::unrelate_by_id(edge, token_id, Rel::HasToken)
        .await
        .map_err(|e| e.to_string())
}

async fn read_tokens(email: &str, platform: &str) -> Result<Vec<Token>> {
    let edge = sign_in_edge(email, platform).await?;
    let outs = Token::outs(edge, Rel::HasToken, Table::Token).await?;
    let token_futures = outs.into_iter().map(|t| Token::select_record(t));
    let tokens = future::try_join_all(token_futures).await?;
    Ok(tokens)
}

#[tauri::command]
#[specta::specta]
pub async fn relate_note(email: &str, platform: &str, note: Note) -> Result<(), String> {
    let edge = sign_in_edge(email, platform)
        .await
        .map_err(|e| e.to_string())?;
    let note_id = note.create_return_id().await.map_err(|e| e.to_string())?;
    Note::relate_by_id(edge, note_id, Rel::HasNote)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
#[specta::specta]
pub async fn update_note(name: &str, note: Note) -> Result<(), String> {
    let note_id = Note::select_record_id("name", name)
        .await
        .map_err(|e| e.to_string())?;
    Note::upsert_by_id(note_id, note)
        .await
        .map_err(|e| e.to_string())?;
    Ok(())
}

#[tauri::command]
#[specta::specta]
pub async fn delete_note(email: &str, platform: &str, name: &str) -> Result<(), String> {
    let edge = sign_in_edge(email, platform)
        .await
        .map_err(|e| e.to_string())?;
    let note_id = Note::select_record_id("name", name)
        .await
        .map_err(|e| e.to_string())?;
    Note::unrelate_by_id(edge, note_id, Rel::HasNote)
        .await
        .map_err(|e| e.to_string())
}

async fn read_notes(email: &str, platform: &str) -> Result<Vec<Note>> {
    let edge = sign_in_edge(email, platform).await?;
    let outs = Note::outs(edge, Rel::HasNote, Table::Note).await?;
    let note_futures = outs.into_iter().map(|n| Note::select_record(n));
    let notes = future::try_join_all(note_futures).await?;
    Ok(notes)
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub struct PlatformSummary {
    pub sitename: String,
    pub status: AccountStatus,
    pub has_cookie: bool,
    pub token_count: u32,
    pub note_count: u32,
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub struct AccountSummary {
    pub email: String,
    pub platforms: Vec<PlatformSummary>,
}

#[tauri::command]
#[specta::specta]
pub async fn read_account_summary() -> Result<Vec<AccountSummary>, String> {
    let accounts = Account::select_all().await.map_err(|e| e.to_string())?;
    let account_futures = accounts
        .into_iter()
        .map(|account| async move {
            let email = account.email;
            let account_id = Account::select_record_id("email", &email)
                .await
                .map_err(|e| e.to_string())?;
            let platform_ids = Platform::outs(account_id, Rel::SignIn, Table::Platform)
                .await
                .map_err(|e| e.to_string())?;
            let platforms = platform_ids
                .into_iter()
                .map(|p| {
                    let value = email.clone();
                    async move {
                        let platform = Platform::select_record(p.clone())
                            .await
                            .map_err(|e| e.to_string())?;
                        let login = read_login_info(&value, &platform.sitename.clone())
                            .await
                            .map_err(|e| e.to_string())?;
                        Ok::<PlatformSummary, String>(PlatformSummary {
                            sitename: platform.sitename,
                            status: login.status,
                            has_cookie: login.cookies.is_some(),
                            token_count: Token::outs(p.clone(), Rel::HasToken, Table::Token)
                                .await
                                .map_err(|e| e.to_string())?
                                .len() as u32,
                            note_count: Note::outs(p.clone(), Rel::HasNote, Table::Note)
                                .await
                                .map_err(|e| e.to_string())?
                                .len() as u32,
                        })
                    }
                })
                .collect::<Vec<_>>();
            let platforms = future::try_join_all(platforms).await?;

            Ok::<AccountSummary, String>(AccountSummary { email, platforms })
        })
        .collect::<Vec<_>>();
    future::try_join_all(account_futures)
        .await
        .map_err(|e| e.to_string())
}

#[derive(Debug, Serialize, Deserialize, Clone, Type)]
pub struct PlatformDetail {
    pub sitename: String,
    pub url: String,
    pub status: AccountStatus,
    pub cookies: Option<String>,
    pub tokens: Vec<Token>,
    pub notes: Vec<Note>,
}

#[tauri::command]
#[specta::specta]
pub async fn read_platform_detail(email: &str, platform: &str) -> Result<PlatformDetail, String> {
    let platform_id = Platform::select_record_id("sitename", platform)
        .await
        .map_err(|e| e.to_string())?;
    let platform = Platform::select_record(platform_id)
        .await
        .map_err(|e| e.to_string())?;
    let login = read_login_info(email, &platform.sitename)
        .await
        .map_err(|e| e.to_string())?;
    let tokens = read_tokens(email, &platform.sitename)
        .await
        .map_err(|e| e.to_string())?;
    let notes = read_notes(email, &platform.sitename)
        .await
        .map_err(|e| e.to_string())?;
    Ok(PlatformDetail {
        sitename: platform.sitename,
        url: platform.url,
        status: login.status,
        cookies: login.cookies,
        tokens,
        notes,
    })
}
