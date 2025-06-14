import { type Account } from "./entry";
import {
  IconProps,
  icons,
  motionIcons,
  type MotionIconProps,
} from "@/src/assets/icons";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { account as accountBus } from "../../subpub/buses";
import { cn } from "@/lib/utils";
import { useTheme } from "@/src/hooks/useTheme";
import {
  useCurrentState,
  toggleAccountShow,
} from "@/src/state_machine/accountShow";
import { Platform } from "@/src/subpub/type";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToolButton from "../toolButton";
import ItemsBrief from "./breaf";
import MetaList from "./meta";
import TokenList from "./tokenlist";
import NoteList from "./notelist";
import { detailStation, DataClass, EntryToolButton } from "./uni";
import NewAccount from "./newaccount";

function AccountActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn([
          "focus:outline-none focus:ring-0 focus:border-0",
          "p-1.5 hover:bg-[#e6e6e7] dark:hover:bg-[#212121] opacity-90",
          "data-[state=open]:bg-[#e6e6e7] dark:data-[state=open]:bg-[#212121]",
          "rounded-md cursor-default",
          "transition-all duration-300 ease-in-out",
          "group-hover:opacity-100 data-[state=open]:opacity-100",
          // className,
        ])}
      >
        <icons.dotsVertical size={14} />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}

function BackButton() {
  const [isHover, setIsHover] = useState(false);
  const setSelectedAccount = accountBus.selectedAccount.useSet();
  const setCurEdit = detailStation.curEdit.useSet();
  const curEdit = detailStation.curEdit.useSee();
  return (
    <div
      className="flex items-center gap-2 cursor-pointer py-2 pr-2 h-8"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        setSelectedAccount(null);
        toggleAccountShow(false);
        setCurEdit(null);
      }}
    >
      <icons.arrowLeft size={16} color="#737373" thick={2} />
      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ width: 0, filter: "blur(6px)" }}
            animate={{ width: "auto", filter: "blur(0px)" }}
            exit={{ width: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.2 }}
            className="overflow-x-hidden"
          >
            <div className="text-[#737373] whitespace-nowrap font-semibold">
              Go back
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PlatformListSeparator() {
  const curEdit = detailStation.curEdit.useSee();
  const firstEnterDetail = detailStation.firstEnterDetail.useSee();
  return (
    <AnimatePresence mode="wait" initial={firstEnterDetail}>
      {!curEdit && (
        <motion.div
          className="h-4 ml-5 w-px bg-[#e5e5e5] dark:bg-[#171717] transition"
          initial={{
            height: 0,
          }}
          animate={{
            height: 16,
          }}
          transition={{
            duration: 0.3,
          }}
          exit={{
            height: 0,
          }}
        />
      )}
    </AnimatePresence>
  );
}

function PlatformTopbar({ platform }: { platform: Platform }) {
  const setCurEdit = detailStation.curEdit.useSet();
  const curEdit = detailStation.curEdit.useSee();
  return (
    <AnimatePresence>
      {!curEdit && (
        <motion.div
          className={cn(["flex items-center justify-between"])}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.2 }}
        >
          <div
            className={cn([
              "flex items-center justify-center gap-1 h-full transition duration-300",
              "hover:bg-[#e7eced] dark:hover:bg-[#383838] rounded-md pl-2 pr-3 py-1",
            ])}
          >
            <div className="flex items-center justify-center h-full">
              <icons.focusMode
                size={12}
                className={cn([
                  "transition",
                  platform.meta.status === "active"
                    ? "text-green-500 dark:text-green-600"
                    : "text-red-500 dark:text-red-600",
                ])}
              />
            </div>
            <div
              className={cn([
                "text-sm text-[#404040] dark:text-[#d4d4d4] transition",
              ])}
            >
              {platform.meta.status === "active"
                ? "Online"
                : platform.meta.status === "inactive"
                ? "Unavailable"
                : "Deleted"}
            </div>
          </div>
          <div
            className={cn([
              "text-xs text-[#525252] dark:text-[#737373] hover:text-[#262626] dark:hover:text-[#d4d4d4] transition duration-300 ease-in-out",
              "hover:bg-[#e7eced] dark:hover:bg-[#383838] rounded-md px-2 py-1",
            ])}
            onClick={() => {
              setCurEdit(DataClass.Whole);
            }}
          >
            Edit
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PlatformDetail({ platform }: { platform: Platform }) {
  const [curEdit, setCurEdit] = detailStation.curEdit.useAll();

  return (
    <motion.div
      className={cn(["flex flex-col gap-4 mb-32"])}
      animate={{ marginTop: curEdit ? 0 : 16 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <PlatformTopbar platform={platform} />
          <motion.div
            animate={{ height: curEdit ? 0 : 4 }}
            transition={{ duration: 0.2 }}
          />
          <MetaList platform={platform} />
        </div>
        {(platform.tokens.length > 0 || curEdit === DataClass.Token) && (
          <>
            <PlatformListSeparator />
            <TokenList platform={platform} />
          </>
        )}
        {(platform.notes.length > 0 || curEdit === DataClass.Note) && (
          <>
            <PlatformListSeparator />
            <NoteList platform={platform} />
          </>
        )}
        {(platform.tokens.length === 0 || platform.notes.length === 0) &&
          !curEdit && (
            <>
              <div className="h-4" />
              <div className="flex gap-4 items-center justify-center">
                {platform.tokens.length === 0 && (
                  <EntryToolButton
                    icon={<icons.barcode size={12} />}
                    label="Add Token"
                    onClick={() => {
                      setCurEdit(DataClass.Token);
                    }}
                  />
                )}
                {platform.notes.length === 0 && (
                  <EntryToolButton
                    icon={<icons.note size={12} />}
                    label="Add Note"
                    onClick={() => {
                      setCurEdit(DataClass.Note);
                    }}
                  />
                )}
              </div>
            </>
          )}
        {curEdit && (
          <>
            <div className="h-4" />
            <div className="flex gap-4 items-center justify-center">
              <EntryToolButton
                icon={<icons.check3 size={12} />}
                label="Save Changes"
                onClick={() => {
                  setCurEdit(null);
                }}
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

function PlatformPill({ platform }: { platform: Platform }) {
  const [selectedPlatform, setSelectedPlatform] =
    accountBus.selectedPlatform.useAll();
  const curEdit = detailStation.curEdit.useSee();
  const isDark = useTheme();
  return (
    <motion.div
      className="overflow-hidden"
      animate={{
        filter:
          platform !== selectedPlatform && curEdit ? "blur(6px)" : "blur(0px)",
        opacity: platform !== selectedPlatform && curEdit ? 0 : 1,
        transition: {
          duration: 0.3,
        },
        width: platform !== selectedPlatform && curEdit ? 0 : "auto",
        marginRight: curEdit ? 0 : 8,
        visibility:
          platform !== selectedPlatform && curEdit ? "hidden" : "visible",
      }}
    >
      <motion.div
        key={platform.meta.sitename}
        className={cn([
          "h-5 rounded-full",
          "flex items-center py-1 px-2",
          "trim-cap text-xs whitespace-nowrap",
        ])}
        initial={{
          opacity:
            selectedPlatform?.meta.sitename === platform.meta.sitename
              ? 0.9
              : 0.6,
        }}
        animate={{
          // [TODO] 用xstate的状态机来管理
          backgroundColor: curEdit
            ? undefined
            : selectedPlatform?.meta.sitename === platform.meta.sitename
            ? isDark
              ? "#383838"
              : "#e5e5e5"
            : isDark
            ? "#1e1e1e"
            : "#f2f2f2",
          opacity:
            selectedPlatform?.meta.sitename === platform.meta.sitename
              ? 0.9
              : 0.6,
          transition: {
            duration: 0.3,
          },
        }}
        whileHover={{
          opacity: 0.9,
          backgroundColor: curEdit ? undefined : isDark ? "#383838" : "#e5e5e5",
        }}
        onClick={() => {
          selectedPlatform?.meta.sitename !== platform.meta.sitename &&
            setSelectedPlatform(platform);
        }}
        // layout
      >
        {platform.meta.sitename}
      </motion.div>
    </motion.div>
  );
}

function ItemsDetail({ account }: { account: Account }) {
  const currentPlatform = accountBus.selectedPlatform.useSee();
  const selectedPlatform = accountBus.selectedPlatform.useSee();
  const curEdit = detailStation.curEdit.useSee();

  return (
    <div className="flex flex-col gap-2">
      <motion.div
        className="flex"
        animate={{ marginLeft: !curEdit ? 0 : -6 }}
        transition={{ duration: 0.2 }}
      >
        {/* {(curEdit
          ? account.platforms.filter(
              (platform) => platform === selectedPlatform
            )
          : account.platforms
        ).map((platform) => (
          <PlatformPill key={platform.meta.sitename} platform={platform} />
        ))} */}
        {account.platforms.map((platform) => (
          <PlatformPill key={platform.meta.sitename} platform={platform} />
        ))}
        <AnimatePresence>
          {!curEdit && (
            <motion.div
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2, transition: { duration: 0 } }}
              transition={{ duration: 0.3 }}
            >
              <ToolButton icon={<icons.plus size={12} />} fn={() => {}} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {currentPlatform && <PlatformDetail platform={currentPlatform} />}
    </div>
  );
}

interface AccountDetailProps {
  account: Account;
}

export default function AccountDetail({ account }: AccountDetailProps) {
  const currentState = useCurrentState();
  const setFirstEnterDetail = detailStation.firstEnterDetail.useSet();
  const curEdit = detailStation.curEdit.useSee();
  const addNewAccount = detailStation.addNewAccount.useSee();

  useEffect(() => {
    console.log("addNewAccount", addNewAccount);
  }, [addNewAccount]);

  useEffect(() => {
    if (currentState.is("detail"))
      setTimeout(() => setFirstEnterDetail(false), 100);
    else setFirstEnterDetail(true);
  }, [currentState]);

  return (
    <div className="flex flex-col w-full max-w-2xl gap-4 select-none">
      <motion.div
        className="flex items-center mt-2 gap-2 select-none text-sm"
        animate={{
          height: curEdit ? 0 : "auto",
          opacity: curEdit ? 0 : 1,
          visibility: curEdit ? "hidden" : "visible",
        }}
        transition={{ duration: 0.2 }}
      >
        <BackButton />
      </motion.div>

      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center justify-between">
            {curEdit === DataClass.Whole ? (
              <motion.input
                className={cn([
                  "text-2xl font-semibold w-full outline-none",
                  // "px-2 -ml-2",
                  "bg-[#f1f5f9] dark:bg-[#171717] rounded-md",
                ])}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                value={account.email}
                onChange={(e) => {
                  // 这里需要添加更新 account.email 的逻辑
                  // setAccount({...account, email: e.target.value})
                }}
              />
            ) : (
              <motion.h1
                className="text-2xl w-fit"
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {account.email}
              </motion.h1>
            )}
            <AccountActions />
          </div>
          <motion.div
            className="text-sm font-medium text-[#737373] "
            animate={{ height: curEdit ? 0 : "auto", opacity: curEdit ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {account.platforms.length} platforms
          </motion.div>
        </div>
        <motion.div
          animate={{ height: curEdit ? 0 : 16 }}
          transition={{ duration: 0.2 }}
        />
        {addNewAccount ? (
          <NewAccount />
        ) : (
          currentState.match({
            brief: () => <ItemsBrief account={account} />,
            detail: () => <ItemsDetail account={account} />,
          })
        )}
      </div>
    </div>
  );
}
