import { createAtom } from "@/src/subpub/core";
import {
  IconProps,
  icons,
  motionIcons,
  type MotionIconProps,
} from "@/src/assets/icons";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { matchable } from "@/lib/matchable";

export function Pair({
  label,
  value,
  bantoggle,
  on,
  actionfn,
  action,
}: {
  label: string | React.ReactNode;
  value: string | React.ReactNode;
  bantoggle?: boolean;
  on?: boolean;
  actionfn?: () => void;
  action?: (props: MotionIconProps | IconProps) => React.ReactNode;
}) {
  const [labelIsHover, setLabelIsHover] = useState(false);
  const [valueIsHover, setValueIsHover] = useState(false);
  const [valueIsCopied, setValueIsCopied] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div
        className="relative"
        onMouseEnter={() => on && setLabelIsHover(true)}
        onMouseLeave={() => on && setLabelIsHover(false)}
      >
        <div className="text-xs text-[#525252] dark:text-[#a3a3a3] transition ">
          {label}
        </div>
        <AnimatePresence>
          {bantoggle && labelIsHover && (
            <div className="absolute -top-0.5 left-0 z-50">
              <div className="flex items-center">
                <motion.div
                  className="bg-[#f9f9f9] dark:bg-[#383838] rounded-md shadow pr-1.5 pl-1 py-0.5 border border-[#d4d4d4] dark:border-[#4a4a4a] cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-0.5 whitespace-nowrap">
                    {on ? (
                      <icons.ban
                        size={12}
                        className="text-[#262626] dark:text-[#a3a3a3]"
                      />
                    ) : (
                      <icons.circleCheck3
                        size={12}
                        className="text-[#262626] dark:text-[#a3a3a3]"
                      />
                    )}
                    <div className="text-xs text-[#404040] dark:text-[#a3a3a3] transition">
                      {on ? "Disable" : "Enable"}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-6 py-0.5 mask-tor"
                  initial={{ backdropFilter: "blur(0px)" }}
                  animate={{
                    backdropFilter: "blur(1px)",
                  }}
                  exit={{
                    backdropFilter: "blur(0px)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xs opacity-0">D</div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <div
        className="relative"
        onMouseEnter={() => setValueIsHover(true)}
        onMouseLeave={() => setValueIsHover(false)}
      >
        <motion.div
          className={cn([
            "flex items-center overflow-hidden",
            action && "cursor-pointer",
          ])}
          onClick={() => {
            setValueIsCopied(true);
            setTimeout(() => setValueIsCopied(false), 1000);
          }}
        >
          <motion.div className="text-sm text-[#262626] dark:text-[#d4d4d4] transition">
            {value}
          </motion.div>
          {action && (
            <AnimatePresence mode="wait" initial={false}>
              {(valueIsHover || valueIsCopied) && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {valueIsCopied ? (
                      <motionIcons.check3
                        size={12}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-1 dark:text-[#22c55e] text-[#1c9c4b] transition"
                      />
                    ) : (
                      action({
                        size: 12,
                        initial: { pathLength: 0 },
                        animate: { pathLength: 1 },
                        exit: { pathLength: 0 },
                        transition: { duration: 0.3 },
                        className:
                          "text-[#262626] dark:text-[#a3a3a3] transition ml-1",
                      })
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export function PairEdit({
  label,
  value,
  explain,
  multiLine = false,
}: {
  label: string;
  value: string;
  explain?: string;
  multiLine?: boolean;
}) {
  const [text, setText] = useState(value);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <div className="text-sm font-semibold text-[#262626] dark:text-[#d4d4d4] transition ">
          {label}
        </div>
        <div className="text-xs text-[#525252] dark:text-[#a3a3a3] transition">
          {explain}
        </div>
      </div>
      {multiLine ? (
        <ItemEditContent content={text} onChange={(val) => setText(val)} />
      ) : (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={cn([
            "text-sm text-[#262626] dark:text-[#d4d4d4] transition px-2 py-1",
            "bg-[#f1f5f9] dark:bg-[#171717] rounded-md border border-[#e5e5e5] dark:border-[#262626]",
            "focus:outline-none focus:ring-0",
          ])}
        />
      )}
    </div>
  );
}

export function KVPair({ k, v }: { k: string; v: string }) {
  return (
    <div
      className={cn([
        "flex items-center gap-1 transition",
        "text-xs",
        "bg-[#f1f5f9] dark:bg-[#171717]",
        "rounded-sm px-2 ",
        "border border-[#e5e5e5] dark:border-[#262626]",
        "min-w-0 max-w-xs trim-cap",
      ])}
    >
      <div
        className={cn([
          "text-[#525252] dark:text-[#a3a3a3] flex-shrink-0 transition py-0.5",
        ])}
      >
        {k}
      </div>
      <div className="w-px mx-0.5 h-full bg-[#d4d4d4] dark:bg-[#373737] flex-shrink-0 transition" />
      <div className="text-xs text-[#525252] dark:text-[#8a8a8a] truncate min-w-0 transition">
        {v}
      </div>
    </div>
  );
}

export function DataList({
  children,
  className,
  label,
  noteLen,
}: {
  children: React.ReactNode;
  className?: string;
  label: DataClass;
  tokenLen?: number;
  noteLen: number;
}) {
  const [curEdit, setCurEdit] = detailStation.curEdit.useAll();
  return (
    <div
      className={cn([
        "flex flex-col gap-2 p-3 border-[#e5e5e5] dark:border-[#171717] overflow-hidden bg-[#f7fafc] dark:bg-[#0c0c0c] transition duration-300",
        curEdit
          ? matchable(curEdit).match({
              [DataClass.Whole]: () =>
                matchable(label).match({
                  [DataClass.Meta]: () =>
                    noteLen > 0
                      ? "border-t border-l border-r rounded-t-lg"
                      : "border rounded-lg",
                  [DataClass.Token]: () => "border-l border-r",
                  [DataClass.Note]: () =>
                    "border-l border-r border-b rounded-b-lg",
                  _: () => "",
                }),
              [DataClass.Token]: () =>
                matchable(label).match({
                  [DataClass.Meta]: () => "h-0 p-0 m-0",
                  [DataClass.Token]: () => "border rounded-lg",
                  [DataClass.Note]: () => "h-0 p-0 m-0",
                  _: () => "",
                }),
              [DataClass.Note]: () =>
                matchable(label).match({
                  [DataClass.Meta]: () => "h-0 p-0 m-0",
                  [DataClass.Token]: () => "h-0 p-0 m-0",
                  [DataClass.Note]: () => "border rounded-lg",
                  _: () => "",
                }),
              _: () => "border",
            })
          : "border rounded-lg",
        className,
      ])}
    >
      {children}
    </div>
  );
}
export enum DataClass {
  Whole = "Whole",
  Meta = "Meta",
  Token = "Token",
  Note = "Note",
}
export const detailStation = {
  curEdit: createAtom<DataClass | null>(null),
  firstEnterDetail: createAtom<boolean>(true),
  addNewAccount: createAtom<boolean>(false),
};

export function EntryToolButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={cn([
        "flex items-center gap-1 cursor-pointer transition duration-300 ease-in-out group",
        "hover:bg-[#e7eced] dark:hover:bg-[#383838] rounded-md px-2 py-1",
      ])}
      onClick={onClick}
    >
      {icon}
      <div className="text-xs text-[#525252] group-hover:text-[#262626] dark:text-[#a3a3a3] group-hover:dark:text-[#d4d4d4] transition">
        {label}
      </div>
    </div>
  );
}

export function ItemEditTitle({ title }: { title: string }) {
  return (
    <div className="text-sm font-semibold text-[#404040] dark:text-[#d4d4d4] transition">
      {title}
    </div>
  );
}

export function ItemEditContent({
  content,
  onChange,
  className,
  holder,
}: {
  content: string;
  onChange?: (val: string) => void;
  className?: string;
  holder?: string;
}) {
  const [value, setValue] = useState(content);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // 每次 value 变化都 resize
  useEffect(() => {
    resizeTextArea();
  }, [value]);

  // 父组件 content 变化同步本地
  useEffect(() => {
    setValue(content);
  }, [content]);

  // 挂载和窗口 resize 时也要 resize
  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);
    return () => window.removeEventListener("resize", resizeTextArea);
    // eslint-disable-next-line
  }, []);

  function resizeTextArea() {
    const el = textAreaRef.current;
    if (!el) return;

    // 1) 先自动高度
    el.style.height = "auto";

    // 2) 读取计算样式里的 border 宽度，避免硬编码 2
    const style = window.getComputedStyle(el);
    const borderTop = parseFloat(style.borderTopWidth);
    const borderBottom = parseFloat(style.borderBottomWidth);

    // 3) 用 Math.ceil 消除 scrollHeight 的截断误差
    const newHeight = Math.ceil(el.scrollHeight) + borderTop + borderBottom;

    el.style.height = `${newHeight}px`;
  }

  return (
    <textarea
      ref={textAreaRef}
      className={cn([
        "text-sm transition break-all resize-none",
        "bg-[#f1f5f9] dark:bg-[#171717] text-[#262626] dark:text-[#d4d4d4]",
        "px-2 py-1 rounded ",
        "border border-[#e5e5e5] dark:border-[#262626]",
        "outline-none transition duration-300 hide-scrollbar focus:outline-none focus:ring-0",
        className,
      ])}
      placeholder={holder}
      value={value}
      rows={1}
      onChange={(e) => {
        setValue(e.target.value);
        onChange?.(e.target.value);
      }}
    />
  );
}

export function EditKV({
  k,
  v,
  holderK,
  holderV,
  onChangeK,
  onChangeV,
  onDelete,
}: {
  k: string;
  v: string;
  holderK: string;
  holderV: string;
  onChangeK?: (val: string) => void;
  onChangeV?: (val: string) => void;
  onDelete?: () => void;
}) {
  return (
    <>
      <div className="flex items-start gap-1">
        <div className="flex items-center gap-1 w-full">
          <div
            className={cn([
              "p-1 rounded-full transition duration-300 cursor-pointer",
              "hover:bg-[#e7eced] dark:hover:bg-[#383838]",
              "text-[#525252] dark:text-[#a3a3a3]",
              "hover:text-[#262626] dark:hover:text-[#d4d4d4]",
            ])}
            onClick={onDelete}
          >
            <icons.xmark size={12} />
          </div>
          <ItemEditContent
            content={k}
            className="w-full"
            holder={holderK}
            onChange={onChangeK}
          />
        </div>
      </div>
      <ItemEditContent content={v} holder={holderV} onChange={onChangeV} />
    </>
  );
}
