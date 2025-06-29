import {
  IconProps,
  icons,
  motionIcons,
  type MotionIconProps,
} from "@/src/assets/icons";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect, memo } from "react";
import { account as accountBus, station } from "../../subpub/buses";
import { cn } from "@/lib/utils";
import { useTheme } from "@/src/hooks/useTheme";
import {
  useCurrentState,
  toggleAccountShow,
} from "@/src/state_machine/accountShow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToolButton from "../toolButton";
import ItemsBrief from "./breaf";
import MetaList from "./meta";
import TokenList from "./tokenlist";
import NoteList from "./notelist";
import { detailStation, DataCat, EntryToolButton } from "./uni";
import NewAccount from "./newaccount";
import {
  AccountSummary,
  PlatformDetail as PlatformDetailType,
  PlatformSummary,
} from "@/src/cmd/commands";
import crab from "@/src/cmd";
import { matchable } from "@/lib/matchable";
interface IconsItemProps {
  icon?: React.ReactNode;
  text: string;
}
function IconsItem({ icon, text }: IconsItemProps) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </div>
  );
}
interface CardToolItemProps {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ToolItem = memo(function CardToolItemComp({
  icon,
  label,
  onClick,
}: CardToolItemProps) {
  return (
    <DropdownMenuItem
      onClick={onClick}
      className="opacity-70 hover:opacity-100 transition"
    >
      <IconsItem icon={icon} text={label} />
    </DropdownMenuItem>
  );
});

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
      <DropdownMenuContent align="end" className="min-w-45">
        <ToolItem icon={<motionIcons.pen size={12} />} label="Modify Email" />
        <ToolItem
          icon={<motionIcons.trashSlash size={12} />}
          label="Delete Account"
        />
      </DropdownMenuContent>
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

function PlatformTopbar({ platform }: { platform: PlatformDetailType }) {
  const setCurEdit = detailStation.curEdit.useSet();
  const curEdit = detailStation.curEdit.useSee();
  const selectedAccount = accountBus.selectedAccount.useSee();
  const setAccount = station.accountDetail.useSet();
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
                  platform.login.status === "Online"
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
              {platform.login.status === "Online"
                ? "Online"
                : platform.login.status === "Unavailable"
                ? "Unavailable"
                : "Deleted"}
            </div>
          </div>
          <div
            className={cn([
              "text-xs text-[#525252] dark:text-[#737373] hover:text-[#262626] dark:hover:text-[#d4d4d4] transition duration-300 cursor-pointer",
              "hover:bg-[#e7eced] dark:hover:bg-[#383838] rounded-md px-2 py-1",
            ])}
            onClick={() => {
              if (!selectedAccount) return;
              setCurEdit(DataCat.Whole);
              setAccount({
                email: selectedAccount.email,
                platform: platform,
              });
            }}
          >
            Edit
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PlatformDetail({
  email,
  sitename,
}: {
  email: string;
  sitename: string;
}) {
  const [curEdit, setCurEdit] = detailStation.curEdit.useAll();
  const setAccount = station.accountDetail.useSet();
  const selectedAccount = accountBus.selectedAccount.useSee();
  const account = station.accountDetail.useSee();
  const [platform, setDetailData] = useState<PlatformDetailType | null>(null);

  useEffect(() => {
    setDetailData(null);
    crab
      .readPlatformDetail(email, sitename)
      .then((result) => result.tap((platform) => setDetailData(platform)));
  }, [email, sitename]);
  if (!platform) return;
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
        {(platform.tokens.length > 0 ||
          (curEdit && [DataCat.Token, DataCat.Empty].includes(curEdit))) && (
          <>
            <PlatformListSeparator />
            <TokenList
              tokens={platform.tokens}
              onEdit={() => {
                if (selectedAccount) {
                  setAccount({
                    email: selectedAccount.email,
                    platform,
                  });
                }
              }}
            />
          </>
        )}
        {(platform.notes.length > 0 ||
          (curEdit && [DataCat.Note, DataCat.Empty].includes(curEdit))) && (
          <>
            <PlatformListSeparator />
            <NoteList
              notes={platform.notes}
              onEdit={() => {
                if (selectedAccount) {
                  setAccount({
                    email: selectedAccount.email,
                    platform,
                  });
                }
              }}
            />
          </>
        )}
        {(platform.tokens.length === 0 || platform.notes.length === 0) &&
          !curEdit && (
            <>
              <div className="h-4" />
              <div className="flex gap-4 items-center justify-center">
                {platform.tokens.length === 0 && selectedAccount && (
                  <EntryToolButton
                    icon={<icons.barcode size={12} />}
                    label="Add Token"
                    onClick={() => {
                      setCurEdit(DataCat.Token);
                      setAccount({
                        email: selectedAccount.email,
                        platform: {
                          ...platform,
                          tokens: [{ name: "", value: "", status: "Active" }],
                        },
                      });
                    }}
                  />
                )}
                {platform.notes.length === 0 && selectedAccount && (
                  <EntryToolButton
                    icon={<icons.note size={12} />}
                    label="Add Note"
                    onClick={() => {
                      setCurEdit(DataCat.Note);
                      setAccount({
                        email: selectedAccount.email,
                        platform: {
                          ...platform,
                          notes: [{ name: "", value: "" }],
                        },
                      });
                    }}
                  />
                )}
              </div>
            </>
          )}
        {curEdit &&
        account &&
        account.platform &&
        account.platform.login.login_method &&
        matchable(account.platform.login.login_method).match({
          NamePassword: (r) => !!r.password,
          SingleSignOn: (r) => !!(r.login_site.sitename && r.login_site.url),
        }) &&
        account.platform.sitename &&
        account.platform.url ? (
          <>
            <div className="h-4" />
            <div className="flex gap-4 items-center justify-center">
              <EntryToolButton
                icon={<icons.check3 size={12} />}
                label={curEdit === DataCat.Empty ? "Save" : "Save Changes"}
                onClick={() => {
                  if (account)
                    crab.updateAccount(account).then((res) =>
                      res.tap(() => {
                        setAccount(null);
                        setCurEdit(null);
                        crab
                          .readPlatformDetail(email, sitename)
                          .then((res) =>
                            res.tap((platform) => setDetailData(platform))
                          );
                      })
                    );
                }}
              />
            </div>
          </>
        ) : (
          curEdit && (
            <>
              <div className="h-2" />
              <div className="text-xs text-[#525252] dark:text-[#a3a3a3] w-full px-4">
                Notice: Site, URL and Password are required.
              </div>
            </>
          )
        )}
      </div>
    </motion.div>
  );
}

function PlatformPill({ platform }: { platform: string }) {
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
        height: curEdit === DataCat.Empty ? 0 : "auto",
        marginRight: curEdit ? 0 : 8,
        visibility:
          platform !== selectedPlatform && curEdit ? "hidden" : "visible",
      }}
    >
      <motion.div
        key={platform}
        className={cn([
          "h-5 rounded-full",
          "flex items-center py-1 px-2",
          "trim-cap text-xs whitespace-nowrap",
        ])}
        initial={{
          opacity: selectedPlatform === platform ? 0.9 : 0.6,
        }}
        animate={{
          // [TODO] 用xstate的状态机来管理
          backgroundColor: curEdit
            ? undefined
            : selectedPlatform === platform
            ? isDark
              ? "#383838"
              : "#e5e5e5"
            : isDark
            ? "#1e1e1e"
            : "#f2f2f2",
          opacity: selectedPlatform === platform ? 0.9 : 0.6,
          transition: {
            duration: 0.3,
          },
        }}
        whileHover={{
          opacity: 0.9,
          backgroundColor: curEdit ? undefined : isDark ? "#383838" : "#e5e5e5",
        }}
        onClick={() => {
          selectedPlatform !== platform && setSelectedPlatform(platform);
        }}
        // layout
      >
        {platform}
      </motion.div>
    </motion.div>
  );
}

function ItemsDetail({ account }: { account: AccountSummary }) {
  const [currentPlatform, setCurrentPlatform] =
    accountBus.selectedPlatform.useAll();
  const [curEdit, setCurEdit] = detailStation.curEdit.useAll();
  const setAccount = station.accountDetail.useSet();

  return (
    <div className="flex flex-col gap-2">
      <motion.div
        className={curEdit ? "flex justify-between items-center" : "flex"}
        animate={{ marginLeft: !curEdit ? 0 : -6 }}
        transition={{ duration: 0.2 }}
      >
        {curEdit !== DataCat.Empty ? (
          account.platforms.map((platform) => (
            <PlatformPill
              key={platform.sitename}
              platform={platform.sitename}
            />
          ))
        ) : (
          <div
            className={cn([
              "text-xs text-[#525252] dark:text-[#737373] px-[6px]",
            ])}
          >
            New Platform
          </div>
        )}

        <AnimatePresence>
          {!curEdit ? (
            <motion.div
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.3 }}
            >
              <ToolButton
                icon={<icons.plus size={12} />}
                fn={() => {
                  crab.newPlatform().then((platform) => {
                    setAccount({
                      email: account.email,
                      platform,
                    });
                    setCurEdit(DataCat.Empty);
                  });
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              className={cn([
                "text-xs text-[#525252] dark:text-[#737373] hover:text-[#262626] dark:hover:text-[#d4d4d4] transition duration-300 cursor-pointer",
                "hover:bg-[#e7eced] dark:hover:bg-[#383838] rounded-md px-2 py-1",
              ])}
              onClick={() => {
                setAccount(null);
                setCurEdit(null);
              }}
            >
              Cancle
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {currentPlatform && (
        <PlatformDetail email={account.email} sitename={currentPlatform} />
      )}
    </div>
  );
}

interface AccountDetailProps {
  account: AccountSummary;
}

export default function AccountDetail({ account }: AccountDetailProps) {
  const currentState = useCurrentState();
  const setFirstEnterDetail = detailStation.firstEnterDetail.useSet();
  const curEdit = detailStation.curEdit.useSee();

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
            <motion.h1
              className="text-2xl w-fit"
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {account.email}
            </motion.h1>
            {!curEdit && <AccountActions />}
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
        {currentState.match({
          brief: () => <ItemsBrief account={account} />,
          detail: () => <ItemsDetail account={account} />,
        })}
      </div>
    </div>
  );
}
