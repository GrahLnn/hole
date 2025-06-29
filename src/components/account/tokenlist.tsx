import { icons, motionIcons } from "@/src/assets/icons";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { detailStation, DataCat, Pair, DataList, EditKV } from "./uni";
import { cn } from "@/lib/utils";
import { Token } from "@/src/cmd/commands";
import { station } from "@/src/subpub/buses";

function TokenShow({
  tokens,
  onEdit,
}: {
  tokens: Token[];
  onEdit: () => void;
}) {
  const [titleIsHover, setTitleIsHover] = useState(false);
  const setCurEdit = detailStation.curEdit.useSet();
  return (
    <>
      <div className="flex items-center justify-between py-2">
        <div
          className="flex items-center gap-2 cursor-pointer pr-1.5"
          onMouseEnter={() => setTitleIsHover(true)}
          onMouseLeave={() => setTitleIsHover(false)}
          onClick={() => {
            setCurEdit(DataCat.Token);
            onEdit();
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {!titleIsHover ? (
              <icons.barcode
                className="text-[#404040] dark:text-[#d4d4d4] transition"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motionIcons.penWriting7
                className="text-[#404040] dark:text-[#d4d4d4] transition"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          <div className="text-[#404040] dark:text-[#d4d4d4] transition font-semibold">
            Tokens
          </div>
        </div>
        <div className="text-xs text-[#525252] dark:text-[#a3a3a3] transition">
          {tokens.length} items
        </div>
      </div>

      {tokens.map((token) => (
        <Pair
          key={token.name}
          label={token.name}
          on={token.status === "Active"}
          bantoggle
          value={token.value}
          action={motionIcons.duplicate2}
        />
      ))}
    </>
  );
}

function TokenEdit() {
  const [account, setAccount] = station.accountDetail.useAll();

  return (
    <>
      <div className="flex flex-col gap-6 px-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 pr-1.5">
            <motion.div className="text-[#404040] dark:text-[#d4d4d4] transition font-semibold text-lg">
              Tokens
            </motion.div>
            <div
              className={cn([
                "text-xs text-[#525252] dark:text-[#737373] hover:text-[#262626] dark:hover:text-[#d4d4d4] transition duration-300 ease-in-out",
                "hover:bg-[#e7eced] dark:hover:bg-[#383838] rounded-md px-2 py-1",
                "opacity-0 group-hover:opacity-100 transition duration-300 -mr-4",
              ])}
              onClick={() => {
                if (
                  account &&
                  (account.platform.tokens.length === 0 ||
                    account.platform.tokens[account.platform.tokens.length - 1]
                      .name !== "" ||
                    account.platform.tokens[account.platform.tokens.length - 1]
                      .value !== "")
                )
                  setAccount({
                    ...account,
                    platform: {
                      ...account.platform,
                      tokens: [
                        ...account.platform.tokens,
                        { name: "", value: "", status: "Active" },
                      ],
                    },
                  });
              }}
            >
              Add Token
            </div>
          </div>
          <div className="text-xs text-[#525252] dark:text-[#a3a3a3] transition">
            Tokens are important credentials used for platform authentication,
            permission control, or API access. You can store and conveniently
            manage their availability here.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            {account?.platform.tokens.map((token, i) => (
              <EditKV
                key={token.name}
                k={token.name}
                v={token.value}
                holderK="Key"
                holderV="Value"
                onDelete={() => {
                  const copy = [...account.platform.tokens];
                  if (copy.length === 1) {
                    copy[0] = { name: "", value: "", status: "Active" };
                  } else {
                    copy.splice(i, 1);
                  }
                  setAccount({
                    ...account,
                    platform: {
                      ...account.platform,
                      tokens: copy,
                    },
                  });
                }}
                onChangeK={(newName) => {
                  const copy = [...account.platform.tokens];
                  copy[i].name = newName;
                  setAccount({
                    ...account,
                    platform: {
                      ...account.platform,
                      tokens: copy,
                    },
                  });
                }}
                onChangeV={(newValue) => {
                  const copy = [...account.platform.tokens];
                  copy[i].value = newValue;
                  setAccount({
                    ...account,
                    platform: {
                      ...account.platform,
                      tokens: copy,
                    },
                  });
                }}
                canDelete={account?.platform.tokens.length > 1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function TokenList({
  tokens,
  onEdit,
}: {
  tokens: Token[];
  onEdit: () => void;
}) {
  const curEdit = detailStation.curEdit.useSee();
  return (
    <DataList className="group" label={DataCat.Token} noteLen={tokens.length}>
      {!curEdit ? <TokenShow tokens={tokens} onEdit={onEdit} /> : <TokenEdit />}
    </DataList>
  );
}
