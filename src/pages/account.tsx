import { useEffect, useState } from "react";
import { station, account } from "../subpub/buses";
import { cn } from "@/lib/utils";
import { icons } from "../assets/icons";
import ToolButton from "../components/toolButton";
import { boxMachine } from "../components/modalDetailCard";
import { type Account, AccountEntry } from "../components/account/entry";
import AccountDetail from "../components/account/detail";
import { Platform } from "../subpub/type";
import { detailStation } from "../components/account/uni";

export default function Account() {
  const selectedAccount = account.selectedAccount.useSee();
  const setCenterTool = station.centerTool.useSet();
  const setAddNewAccount = detailStation.addNewAccount.useSet();

  useEffect(() => {
    setCenterTool({
      key: "account",
      node: (
        <div className={cn(["flex items-center h-full gap-2"])}>
          <ToolButton label="Board" icon={<icons.signboard size={12} />} />
          <ToolButton
            label="Status"
            icon={<icons.progressCircle8of8 size={12} />}
          />
          <ToolButton label="Order" icon={<icons.sorting size={12} />} />
          <ToolButton
            icon={<icons.plus size={12} />}
            fn={() => setAddNewAccount(true)}
          />
        </div>
      ),
    });
  }, []);

  const accounts: Account[] = [
    {
      id: "1",
      email: "9OewgS2hLpP@jiangytiuo.com",
      platforms: [
        {
          meta: {
            sitename: "GitHub",
            url: "https://github.com",
            username: "user1",
            password: "GithubPass123!",
            status: "active",
            cookies: [
              {
                name: "_gh_sess",
                value: "abc123xyz",
                expires: "2024-06-30",
                domain: ".github.com",
              },
            ],
          },
          tokens: [
            {
              name: "Personal Access Token",
              value: "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              expires: "2024-12-31",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Login Info",
              value: "主要用于开发项目，2FA已启用",
              createdAt: "2024-01-15",
              updatedAt: "2024-01-20",
            },
          ],
        },
        {
          meta: {
            sitename: "Google",
            url: "https://accounts.google.com",
            username: "user1@gmail.com",
            password: "GooglePass456!",
            status: "active",
            cookies: [
              {
                name: "SID",
                value: "xxx_session_id_xxx",
                expires: "2024-07-15",
                domain: ".google.com",
              },
            ],
          },
          tokens: [],

          notes: [],
        },
      ],
    },
    {
      id: "2",
      email: "oB9ejDa5jcL@jiangytiuo.com",
      platforms: [],
    },
    {
      id: "3",
      email: "sSAfTgCdPzU@jiangytiuo.com",
      platforms: [
        {
          meta: {
            sitename: "GitHub",
            url: "https://github.com",
            username: "user3_inactive",
            password: "OldPass789",
            status: "inactive",
            cookies: [],
          },
          tokens: [
            {
              name: "Old Token",
              value: "ghp_expired_token_here",
              expires: "2023-12-31",
              status: "expired",
            },
          ],

          notes: [
            {
              name: "Account Status",
              value: "账号已被暂停，需要重新验证邮箱",
              createdAt: "2023-11-01",
              updatedAt: "2023-11-01",
            },
          ],
        },
      ],
    },
    {
      id: "4",
      email: "jhqI7CaOzFM@jiangytiuo.com",
      platforms: [
        {
          meta: {
            sitename: "GitHub",
            url: "https://github.com",
            username: "developer_john",
            password: "SecurePass2024!",
            status: "active",
            cookies: [
              {
                name: "_gh_sess",
                value: "session_data_here",
                expires: "2024-06-30",
                domain: ".github.com",
              },
            ],
          },
          tokens: [
            {
              name: "Repo Access Token",
              value: "ghp_repository_access_token_here",
              expires: "2024-08-15",
              status: "active",
            },
            {
              name: "Workflow Token",
              value: "ghp_workflow_token_here",
              expires: "2024-09-30",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Repositories",
              value: "管理3个私有仓库和5个公开仓库",
              createdAt: "2024-01-01",
              updatedAt: "2024-01-15",
            },
          ],
        },
      ],
    },
    {
      id: "5",
      email: "zbsu1MwYjEt4@jianvan.com",
      platforms: [
        {
          meta: {
            sitename: "GitHub",
            url: "https://github.com",
            username: "opensource_dev",
            password: "OpenSource123!",
            status: "active",
            cookies: [],
          },
          tokens: [
            {
              name: "Public Repo Token",
              value: "ghp_public_repo_token",
              expires: "2024-10-31",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Contribution Info",
              value: "主要贡献开源项目，专注于前端开发",
              createdAt: "2024-02-01",
              updatedAt: "2024-02-10",
            },
          ],
        },
      ],
    },
    {
      id: "6",
      email: "ScottJohnFd@gmail.com",
      platforms: [
        {
          meta: {
            sitename: "GitHub",
            url: "https://github.com",
            username: "scottj",
            password: "ScottDev2024!",
            status: "active",
            cookies: [
              {
                name: "_gh_sess",
                value: "scott_session_data",
                expires: "2024-06-30",
                domain: ".github.com",
              },
            ],
          },
          tokens: [
            {
              name: "Full Access Token",
              value: "ghp_full_access_token_scott",
              expires: "2024-11-30",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Project Notes",
              value: "团队项目管理员，负责代码审查",
              createdAt: "2024-01-10",
              updatedAt: "2024-01-25",
            },
          ],
        },
        {
          meta: {
            sitename: "Google",
            url: "https://accounts.google.com",
            username: "scottj@gmail.com",
            password: "GoogleScott456!",
            status: "active",
            cookies: [
              {
                name: "SID",
                value: "scott_google_session",
                expires: "2024-07-15",
                domain: ".google.com",
              },
              {
                name: "HSID",
                value: "scott_hsid_value",
                expires: "2024-07-15",
                domain: ".google.com",
              },
            ],
          },
          tokens: [
            {
              name: "OAuth Token",
              value: "ya29.oauth_token_here",
              expires: "2024-07-01",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Google Services",
              value: "使用Gmail、Drive、Calendar等服务",
              createdAt: "2024-01-05",
              updatedAt: "2024-01-20",
            },
          ],
        },
      ],
    },
    {
      id: "7",
      email: "WhiteMargaretjQKmTx@gmail.com",
      platforms: [
        {
          meta: {
            sitename: "Twitter",
            url: "https://twitter.com",
            username: "@margaretw",
            password: "TwitterMarg2024!",
            status: "active",
            cookies: [
              {
                name: "auth_token",
                value: "twitter_auth_token_margaret",
                expires: "2024-08-01",
                domain: ".twitter.com",
              },
            ],
          },
          tokens: [
            {
              name: "API Bearer Token",
              value: "AAAAAAAAAAAAAAAAAAAAAMLheAAAAAAA",
              expires: "never",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Social Media Strategy",
              value: "专注科技和设计相关内容，1.2k粉丝",
              createdAt: "2024-01-12",
              updatedAt: "2024-02-01",
            },
          ],
        },
        {
          meta: {
            sitename: "LinkedIn",
            url: "https://linkedin.com",
            username: "margaret.white",
            password: "LinkedInMarg456!",
            status: "active",
            cookies: [
              {
                name: "li_at",
                value: "linkedin_session_margaret",
                expires: "2024-09-01",
                domain: ".linkedin.com",
              },
            ],
          },
          tokens: [],

          notes: [
            {
              name: "Professional Network",
              value: "UI/UX设计师，500+连接，定期发布设计文章",
              createdAt: "2024-01-08",
              updatedAt: "2024-01-28",
            },
          ],
        },
      ],
    },
    {
      id: "8",
      email: "YoungEdwardzHf@gmail.com",
      platforms: [
        {
          meta: {
            sitename: "GitHub",
            url: "https://github.com",
            username: "edwardy",
            password: "EdwardDev2024!",
            status: "active",
            cookies: [
              {
                name: "_gh_sess",
                value: "edward_github_session",
                expires: "2024-06-30",
                domain: ".github.com",
              },
            ],
          },
          tokens: [
            {
              name: "Main Token",
              value: "ghp_edward_main_token",
              expires: "2024-12-01",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Development Work",
              value: "全栈开发者，维护多个开源项目",
              createdAt: "2024-01-03",
              updatedAt: "2024-02-05",
            },
          ],
        },
        {
          meta: {
            sitename: "Stack Overflow",
            url: "https://stackoverflow.com",
            username: "edward.young",
            password: "StackPass789!",
            status: "active",
            cookies: [
              {
                name: "acct",
                value: "stackoverflow_edward_session",
                expires: "2024-08-15",
                domain: ".stackoverflow.com",
              },
            ],
          },
          tokens: [],

          notes: [
            {
              name: "Community Contribution",
              value: "2.3k声望，专长JavaScript和React",
              createdAt: "2024-01-01",
              updatedAt: "2024-01-30",
            },
          ],
        },
        {
          meta: {
            sitename: "Medium",
            url: "https://medium.com",
            username: "edward.young",
            password: "MediumEd456!",
            status: "active",
            cookies: [
              {
                name: "sid",
                value: "medium_edward_session",
                expires: "2024-07-01",
                domain: ".medium.com",
              },
            ],
          },
          tokens: [],

          notes: [
            {
              name: "Writing",
              value: "技术博客作者，200+粉丝，专写前端开发",
              createdAt: "2024-01-15",
              updatedAt: "2024-02-01",
            },
          ],
        },
        {
          meta: {
            sitename: "Youtube",
            url: "https://youtube.com",
            username: "edward.young",
            password: "YoutubeEd789!",
            status: "active",
            cookies: [
              {
                name: "SESSION_TOKEN",
                value: "youtube_edward_session",
                expires: "2024-06-30",
                domain: ".youtube.com",
              },
            ],
          },
          tokens: [
            {
              name: "API Key",
              value: "AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              expires: "never",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Content Creation",
              value: "编程教程频道，800订阅者，每周更新",
              createdAt: "2024-01-20",
              updatedAt: "2024-02-10",
            },
          ],
        },
        {
          meta: {
            sitename: "Instagram",
            url: "https://instagram.com",
            username: "edward.young",
            password: "InstaEd123!",
            status: "active",
            cookies: [
              {
                name: "sessionid",
                value: "instagram_edward_session",
                expires: "2024-08-01",
                domain: ".instagram.com",
              },
            ],
          },
          tokens: [],

          notes: [
            {
              name: "Lifestyle Content",
              value: "分享编程生活和技术灵感，1.5k粉丝",
              createdAt: "2024-01-25",
              updatedAt: "2024-02-05",
            },
          ],
        },
        {
          meta: {
            sitename: "Tiktok",
            url: "https://tiktok.com",
            username: "edward.young",
            password: "TiktokEd456!",
            status: "active",
            cookies: [
              {
                name: "tt_webid",
                value: "tiktok_edward_webid",
                expires: "2024-09-01",
                domain: ".tiktok.com",
              },
            ],
          },
          tokens: [],

          notes: [
            {
              name: "Short Videos",
              value: "编程小技巧短视频，3.2k粉丝，高互动率",
              createdAt: "2024-02-01",
              updatedAt: "2024-02-15",
            },
          ],
        },
      ],
    },
    {
      id: "9",
      email: "WrightJenniferkBhX@gmail.com",
      platforms: [
        {
          meta: {
            sitename: "GitHub",
            url: "https://github.com",
            username: "jenniferw",
            password: "JenDev2024!",
            status: "active",
            cookies: [
              {
                name: "_gh_sess",
                value: "jennifer_github_session",
                expires: "2024-06-30",
                domain: ".github.com",
              },
            ],
          },
          tokens: [
            {
              name: "Repo Token",
              value: "ghp_jennifer_repo_token",
              expires: "2024-10-15",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Backend Focus",
              value: "后端开发专家，专注Node.js和Python",
              createdAt: "2024-01-05",
              updatedAt: "2024-01-22",
            },
          ],
        },
        {
          meta: {
            sitename: "Medium",
            url: "https://medium.com",
            username: "jennifer.wright",
            password: "MediumJen789!",
            status: "inactive",
            cookies: [
              {
                name: "sid",
                value: "medium_jennifer_expired",
                expires: "2023-12-31",
                domain: ".medium.com",
              },
            ],
          },
          tokens: [],

          notes: [
            {
              name: "Writing Status",
              value: "账号暂停使用，需要重新激活会员",
              createdAt: "2023-12-01",
              updatedAt: "2023-12-01",
            },
          ],
        },
      ],
    },
    // 添加更多多样化的场景数据
    {
      id: "10",
      email: "TechStartupCEO@startup.io",
      platforms: [
        {
          meta: {
            sitename: "AWS Console",
            url: "https://console.aws.amazon.com",
            username: "ceo@startup.io",
            password: "AWSSecure2024!",
            status: "active",
            cookies: [],
          },
          tokens: [
            {
              name: "Access Key",
              value: "AKIAIOSFODNN7EXAMPLE",
              expires: "never",
              status: "active",
            },
            {
              name: "Secret Key",
              value: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
              expires: "never",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Infrastructure",
              value: "管理公司所有云资源，月费用$2000+",
              createdAt: "2024-01-01",
              updatedAt: "2024-02-15",
            },
            {
              name: "Security",
              value: "已启用MFA，定期轮换密钥",
              createdAt: "2024-01-10",
              updatedAt: "2024-02-10",
            },
          ],
        },
        {
          meta: {
            sitename: "Stripe Dashboard",
            url: "https://dashboard.stripe.com",
            username: "ceo@startup.io",
            password: "StripeSecure456!",
            status: "active",
            cookies: [
              {
                name: "session",
                value: "stripe_dashboard_session",
                expires: "2024-06-30",
                domain: ".stripe.com",
              },
            ],
          },
          tokens: [
            {
              name: "Live Secret Key",
              value: "sk_live_xxxxxxxxxxxxxxxxxxxx",
              expires: "never",
              status: "active",
            },
            {
              name: "Test Secret Key",
              value: "sk_test_xxxxxxxxxxxxxxxxxxxx",
              expires: "never",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Payment Processing",
              value: "处理所有用户付款，月交易额$50k+",
              createdAt: "2024-01-05",
              updatedAt: "2024-02-12",
            },
          ],
        },
      ],
    },
    {
      id: "11",
      email: "SecurityExpert@cybersec.com",
      platforms: [
        {
          meta: {
            sitename: "HackerOne",
            url: "https://hackerone.com",
            username: "whitehat_expert",
            password: "H1Secure2024!@#",
            status: "active",
            cookies: [
              {
                name: "_h1_session",
                value: "hackerone_expert_session",
                expires: "2024-07-01",
                domain: ".hackerone.com",
              },
            ],
          },
          tokens: [
            {
              name: "API Token",
              value: "h1_api_token_security_expert",
              expires: "2024-08-30",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Bug Bounty Stats",
              value: "安全研究员，已发现120+漏洞，获得$25k奖金",
              createdAt: "2023-06-01",
              updatedAt: "2024-02-20",
            },
            {
              name: "Hall of Fame",
              value: "获得Google、Apple、Microsoft等公司认可",
              createdAt: "2023-08-15",
              updatedAt: "2024-01-30",
            },
          ],
        },
        {
          meta: {
            sitename: "Bugcrowd",
            url: "https://bugcrowd.com",
            username: "sec_researcher",
            password: "BugcrowdSec789!",
            status: "active",
            cookies: [
              {
                name: "bugcrowd_session",
                value: "researcher_session_data",
                expires: "2024-06-15",
                domain: ".bugcrowd.com",
              },
            ],
          },
          tokens: [],

          notes: [
            {
              name: "Platform Stats",
              value: "排名前50的研究员，专注Web应用安全",
              createdAt: "2023-07-01",
              updatedAt: "2024-02-10",
            },
          ],
        },
      ],
    },
    {
      id: "12",
      email: "DigitalNomad@freelancer.work",
      platforms: [
        {
          meta: {
            sitename: "Upwork",
            url: "https://upwork.com",
            username: "nomad_developer",
            password: "UpworkFree123!",
            status: "active",
            cookies: [
              {
                name: "oauth2_global_js_token",
                value: "upwork_oauth_token",
                expires: "2024-07-15",
                domain: ".upwork.com",
              },
              {
                name: "ticket_expires",
                value:
                  "eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjgzNjY3MjYsImlhdCI6MTcyODEwNzQ2NiwicGx0IjotMX0.BOvHA2QMtBVhFVhDQ75YqPp_PxKB-L8qzgAVwjdLvgI",
                expires: "2024-07-15",
                domain: ".upwork.com",
              },
            ],
          },
          tokens: [
            {
              name: "API Token",
              value: "sk-zaSyCPR2CiICxKC0QoHlPyjUgmNMwTy-1ahYw",
              expires: "2024-09-30",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Freelance Profile",
              value: "Top Rated Plus，完成85+项目，5.0评分",
              createdAt: "2023-03-01",
              updatedAt: "2024-02-18",
            },
            {
              name: "Earnings",
              value: "去年收入$65k，主要做React和Node.js项目",
              createdAt: "2024-01-01",
              updatedAt: "2024-02-01",
            },
          ],
        },
        {
          meta: {
            sitename: "Fiverr",
            url: "https://fiverr.com",
            username: "digital_nomad_dev",
            password: "FiverrNomad456!",
            status: "active",
            cookies: [
              {
                name: "fpr",
                value: "fiverr_session_nomad",
                expires: "2024-08-01",
                domain: ".fiverr.com",
              },
            ],
          },
          tokens: [
            {
              name: "API Token",
              value: "sk-zaSyCPR2CiICxKC0QoHlPyjUgmNMwTy-1ahYw",
              expires: "2024-09-30",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Gig Performance",
              value: "Level 2卖家，5个活跃Gig，月收入$3k+",
              createdAt: "2023-05-15",
              updatedAt: "2024-02-12",
            },
          ],
        },
        {
          meta: {
            sitename: "Wise",
            url: "https://wise.com",
            username: "nomad@freelancer.work",
            password: "WiseBank789!",
            status: "active",
            cookies: [
              {
                name: "wise_session",
                value: "wise_banking_session",
                expires: "2024-06-30",
                domain: ".wise.com",
              },
            ],
          },
          tokens: [
            {
              name: "API Token",
              value: "wise_api_token_nomad",
              expires: "2024-09-30",
              status: "active",
            },
          ],

          notes: [
            {
              name: "Multi-Currency",
              value: "管理USD、EUR、GBP账户，月转账$8k+",
              createdAt: "2023-04-01",
              updatedAt: "2024-02-15",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-start">
      {selectedAccount ? (
        <AccountDetail account={selectedAccount} />
      ) : (
        <div className="flex flex-col p-6 w-full max-w-2xl">
          {accounts.map((account, index) => (
            <AccountEntry
              key={account.id}
              account={account}
              index={index}
              length={accounts.length}
            />
          ))}
        </div>
      )}
    </div>
  );
}
