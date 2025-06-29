import { icons, motionIcons } from "@/src/assets/icons";
import { LoginMethod, PlatformDetail } from "@/src/cmd/commands";
import {
  Pair,
  DataList,
  KVPair,
  detailStation,
  DataCat,
  PairEdit,
} from "./uni";
import { station } from "@/src/subpub/buses";
import { matchable } from "@/lib/matchable";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

function MetaShow({ platform }: { platform: PlatformDetail }) {
  return (
    <>
      <Pair
        label="URL"
        value={platform.url}
        action={motionIcons.openInBrowser}
      />
      <Pair
        label="Site"
        value={platform.sitename}
        action={motionIcons.duplicate2}
      />
      {matchable(platform.login.login_method).match({
        SingleSignOn: (r) => (
          <Pair
            label="Login from"
            value={r.login_site.sitename}
            action={motionIcons.duplicate2}
          />
        ),
        NamePassword: (r) => (
          <Pair
            label="Password"
            value={r.password}
            action={motionIcons.duplicate2}
          />
        ),
      })}
      <Pair label="Cookies" value={<icons.chevronDown size={12} />} />
      {/* <div className="flex gap-1 flex-wrap">
        {platform.login.cookies.map((cookie) => (
          <KVPair key={cookie.name} k={cookie.name} v={cookie.value} />
        ))}
      </div> */}
    </>
  );
}

function MetaEdit() {
  const isNew = detailStation.addNewAccount.useSee();
  const [account, setAccount] = station.accountDetail.useAll();
  return (
    <div className="flex flex-col gap-4 px-2">
      <div className="flex flex-col gap-1">
        <div className="text-[#404040] dark:text-[#d4d4d4] transition font-semibold text-lg">
          General
        </div>
        <div className="text-xs text-[#525252] dark:text-[#a3a3a3] transition">
          General information about the account.
        </div>
      </div>
      {isNew && (
        <PairEdit
          label="Email"
          value={account?.email ?? ""}
          onChange={(val) => {
            if (!account) return;
            setAccount({
              ...account,
              email: val,
            });
          }}
          explain="Needed to log in or identify your account. Used together with cookies or password."
        />
      )}
      {isNew && (
        <PairEdit
          label="Password"
          value={
            account?.platform.login.login_method
              ? matchable(account?.platform.login.login_method).match({
                  NamePassword: (r) => r.password,
                  _: () => "",
                })
              : ""
          }
          onChange={(val) => {
            if (!account) return;
            const mu = matchable(account.platform.login.login_method);
            if (mu.is("NamePassword")) {
              setAccount({
                ...account,
                platform: {
                  ...account.platform,
                  login: {
                    ...account.platform.login,
                    login_method: {
                      NamePassword: {
                        ...mu.value,
                        password: val,
                      },
                    },
                  },
                },
              });
            }
          }}
          explain="Used for login when cookies aren’t available. Stored securely, but avoid editing unless needed."
        />
      )}
      {!isNew && account && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-[#262626] dark:text-[#d4d4d4] transition ">
              Login Method
            </div>
            <motion.div
              className="text-xs text-[#525252] dark:text-[#a3a3a3] hover:bg-[#e7eced] dark:hover:bg-[#383838] rounded-md px-2 py-1 flex items-center gap-2"
              onClick={() =>
                setAccount({
                  ...account,
                  platform: {
                    ...account.platform,
                    login: {
                      ...account.platform.login,
                      login_method: matchable(
                        account.platform.login.login_method
                      ).match<LoginMethod>({
                        NamePassword: () => ({
                          SingleSignOn: {
                            login_site: { sitename: "", url: "" },
                          },
                        }),
                        SingleSignOn: () => ({
                          NamePassword: { password: "" },
                        }),
                      }),
                    },
                  },
                })
              }
            >
              <AnimatePresence mode="wait">
                {matchable(account.platform.login.login_method).match({
                  SingleSignOn: () => (
                    <motion.div
                      key="sso"
                      initial={{ y: 10, opacity: 0, width: 81.38 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0, width: 88.7 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="text-nowrap"
                    >
                      Single-Sign-On
                    </motion.div>
                  ),
                  NamePassword: () => (
                    <motion.div
                      key="namepass"
                      initial={{ y: -10, opacity: 0, width: 88.7 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0, width: 81.38 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="text-nowrap"
                    >
                      Name-Password
                    </motion.div>
                  ),
                })}
              </AnimatePresence>
              <motionIcons.arrowsOppositeDirectionY size={12} />
            </motion.div>
          </div>
        </div>
      )}
      <PairEdit
        label="Site"
        value={account?.platform.sitename ?? ""}
        onChange={(val) => {
          if (!account) return;
          if (isNew) {
            if (!account) return;
            setAccount({
              ...account,
              platform: {
                ...account.platform,
                sitename: val,
              },
            });
          }
        }}
        explain="Just a name to help you recognize which platform this is. Can be anything that makes sense to you."
      />
      <PairEdit
        label="URL"
        value={account?.platform.url ?? ""}
        onChange={(val) => {
          if (!account) return;
          if (isNew) {
            if (!account) return;
            setAccount({
              ...account,
              platform: {
                ...account.platform,
                url: val,
              },
            });
          }
        }}
        explain="Used to locate the site when connecting or autofilling. Double-check if something doesn’t work."
      />
      {/* <PairEdit
        label="Username"
        value={platform.login.login_method.password}
        explain="Needed to log in or identify your account. Used together with cookies or password."
      /> */}
      {!isNew &&
        account &&
        matchable(account.platform.login.login_method).match({
          NamePassword: (r) => (
            <PairEdit
              label="Password"
              value={r.password}
              explain="Used for login when cookies aren’t available. Stored securely, but avoid editing unless needed."
            />
          ),
          SingleSignOn: (r) => (
            <PairEdit
              label="SSO"
              value={r.login_site.sitename}
              explain="Single Sign-On (SSO): Log in with your platform account. No local password required."
            />
          ),
        })}
      <PairEdit
        label="Cookies"
        value={account?.platform.login.cookies ?? ""}
        onChange={(val) => {
          if (!account) return;
          if (isNew) {
            if (!account) return;
            setAccount({
              ...account,
              platform: {
                ...account.platform,
                login: {
                  ...account.platform.login,
                  cookies: val,
                },
              },
            });
          }
        }}
        explain="Keeps you logged in and enables one-click access to your account page — no password required. Best used on trusted devices."
        multiLine
      />
    </div>
  );
}

export default function MetaList({ platform }: { platform: PlatformDetail }) {
  const curEdit = detailStation.curEdit.useSee();
  return (
    <DataList label={DataCat.Meta} noteLen={platform.notes.length}>
      {curEdit ? <MetaEdit /> : <MetaShow platform={platform} />}
    </DataList>
  );
}
