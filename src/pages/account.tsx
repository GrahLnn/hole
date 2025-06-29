import { useEffect, useState } from "react";
import { station, account } from "../subpub/buses";
import { cn } from "@/lib/utils";
import { icons, motionIcons } from "../assets/icons";
import ToolButton from "../components/toolButton";
import { boxMachine } from "../components/modalDetailCard";
import { AccountEntry } from "../components/account/entry";
import { AccountSummary } from "../cmd/commands";
import AccountDetail from "../components/account/detail";
import { DataCat, detailStation } from "../components/account/uni";
import crab from "@/src/cmd";
import NewAccount from "../components/account/newaccount";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

export default function Account() {
  const selectedAccount = account.selectedAccount.useSee();
  const setCenterTool = station.centerTool.useSet();
  const [addNew, setAddNewAccount] = detailStation.addNewAccount.useAll();
  const setCurEdit = detailStation.curEdit.useSet();
  const [accounts, setAccounts] = useState<AccountSummary[]>([]);
  const setHideCenterTool = station.hideCenterTool.useSet();
  const [newAccountType, setNewAccountType] = station.newAccountType.useAll();

  useEffect(() => {
    crab.readAccountSummary().then((result) => {
      result.tap((accounts) => setAccounts(accounts));
    });
  }, []);

  useEffect(() => {
    setCenterTool({
      key: "account",
      node: (
        <AnimatePresence mode="wait" initial={false}>
          {addNew ? (
            <motion.div
              key="new account"
              className={cn(["flex items-center h-full gap-2"])}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ToolButton
                label="Single"
                icon={<motionIcons.userUpdate size={12} />}
                fn={() => setNewAccountType("single")}
                active={newAccountType === "single"}
              />
              <ToolButton
                label="Multiple"
                icon={<motionIcons.usersDots size={12} />}
                fn={() => setNewAccountType("multiple")}
                active={newAccountType === "multiple"}
              />
            </motion.div>
          ) : (
            <motion.div
              key="account"
              className={cn(["flex items-center h-full gap-2"])}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ToolButton label="Board" icon={<icons.signboard size={12} />} />
              <ToolButton
                label="Status"
                icon={<icons.progressCircle8of8 size={12} />}
              />
              <ToolButton label="Order" icon={<icons.sorting size={12} />} />
              <ToolButton
                icon={<icons.plus size={12} />}
                fn={() => {
                  setAddNewAccount(true);
                  setCurEdit(DataCat.Empty);
                  // setHideCenterTool(true);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      ),
    });
  }, [addNew, newAccountType]);

  if (addNew)
    return (
      <div className="flex-1 flex flex-col items-center justify-start">
        <div className="flex flex-col w-full max-w-2xl gap-4 select-none">
          <NewAccount />
        </div>
      </div>
    );
  return accounts.length > 0 && !addNew ? (
    <div className="flex-1 flex flex-col items-center justify-start">
      {selectedAccount ? (
        <AccountDetail account={selectedAccount} />
      ) : (
        <div className="flex flex-col p-6 w-full max-w-2xl">
          {accounts.map((account, index) => (
            <AccountEntry
              key={account.email}
              account={account}
              index={index}
              length={accounts.length}
            />
          ))}
        </div>
      )}
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col text-center gap-8 overflow-hidden flex-1">
      <p className="text-gray-500">No accounts found</p>
    </div>
  );
}
