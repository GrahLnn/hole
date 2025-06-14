export interface CenterToolProp {
  key: string;
  node: React.ReactNode;
}

export enum MainPage {
  Home = "Home",
  Account = "Account",
  SSH = "SSH",
  BankCard = "BankCard",
  SeedPhrase = "SeedPhrase",
  Notes = "Notes",
  Settings = "Settings",

  NotFound = "NotFound",
}

export enum PlatformStatus {
  Active = "Active",
  Inactive = "Inactive",
  Deleted = "Deleted",
}

export interface PlatformMeta {
  sitename: string;
  url: string;
  username: string;
  password: string;
  status: string;
  cookies: PlatformCookie[];
}

export interface PlatformToken {
  name: string;
  value: string;
  expires: string;
  status: string;
}

export interface PlatformCookie {
  name: string;
  value: string;
  expires: string;
  domain: string;
}

export interface PlatformNote {
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export interface Platform {
  meta: PlatformMeta;
  tokens: PlatformToken[];
  notes: PlatformNote[];
}
