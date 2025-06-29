import { icons } from "@/src/assets/icons";
import { motion, AnimatePresence } from "motion/react";

import MetaList from "./meta";
import TokenList from "./tokenlist";
import NoteList from "./notelist";
import { detailStation, EntryToolButton } from "./uni";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import crab from "@/src/cmd";
import { PlatformDetail } from "@/src/cmd/commands";
import { station } from "@/src/subpub/buses";
import { matchable } from "@/lib/matchable";

function AccountPill({ account }: { account: string }) {
  return (
    <div
      className={cn([
        "h-5 rounded-full",
        "flex items-center py-1 px-2",
        "trim-cap text-xs whitespace-nowrap",
        "bg-[#e5e5e5] dark:bg-[#383838]",
      ])}
    >
      {account}
    </div>
  );
}

export default function NewAccount() {
  const [curEdit, setCurEdit] = detailStation.curEdit.useAll();
  // const [platform, setPlatform] = useState<PlatformDetail | null>(null);
  const [account, setAccount] = station.accountDetail.useAll();

  useEffect(() => {
    crab.newPlatform().then((result) => {
      setAccount({
        email: "",
        platform: result,
      });
    });
  }, []);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!account) return null;

  return (
    <motion.div
      className={cn(["flex flex-col gap-4 mb-32"])}
      animate={{ marginTop: curEdit ? 0 : 16 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <motion.div
            animate={{ height: curEdit ? 0 : 4 }}
            transition={{ duration: 0.2 }}
          />
          <MetaList platform={account.platform} />
        </div>
        <TokenList tokens={[]} onEdit={() => {}} />
        <NoteList notes={[]} onEdit={() => {}} />
        {account &&
        account.email &&
        account.platform &&
        account.platform.login.login_method &&
        matchable(account.platform.login.login_method).match({
          NamePassword: (r) => !!r.password,
          _: () => false,
        }) &&
        account.platform.sitename &&
        account.platform.url ? (
          <>
            <div className="h-4" />
            <div className="flex gap-4 items-center justify-center">
              <EntryToolButton
                icon={<icons.check3 size={12} />}
                label="Save"
                onClick={() => {
                  crab.createNewAccount(account);
                  setCurEdit(null);
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="h-2" />
            <div className="text-xs text-[#525252] dark:text-[#a3a3a3] w-full px-4">
              Notice: Email, Password, Site, URL are required.
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
