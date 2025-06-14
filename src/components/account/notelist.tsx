import { icons, motionIcons } from "@/src/assets/icons";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import {
  detailStation,
  DataClass,
  Pair,
  DataList,
  ItemEditTitle,
  ItemEditContent,
  EditKV,
} from "./uni";
import { Platform } from "@/src/subpub/type";
import React from "react";
import { cn } from "@/lib/utils";

function NoteShow({ platform }: { platform: Platform }) {
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
            setCurEdit(DataClass.Note);
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {!titleIsHover ? (
              <icons.note
                size={18}
                className="text-[#404040] dark:text-[#d4d4d4] transition"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motionIcons.gear3
                size={18}
                className="text-[#404040] dark:text-[#d4d4d4] transition"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          <motion.div
            className="text-[#404040] dark:text-[#d4d4d4] transition font-semibold"
            // layoutId="note-title"
          >
            Notes
          </motion.div>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-xs text-[#525252] dark:text-[#a3a3a3] transition">
            {platform.notes.length} items
          </div>
        </div>
      </div>

      {platform.notes.map((note) => (
        <Pair
          key={note.name}
          label={note.name}
          value={<div className="">{note.value}</div>}
          action={motionIcons.duplicate2}
        />
      ))}
    </>
  );
}

function NoteEdit({ platform }: { platform: Platform }) {
  const [newNotes, setNewNotes] = useState(
    (platform.notes.length > 0
      ? platform.notes
      : [{ name: "", value: "" }]
    ).map((n) => ({ ...n }))
  );

  return (
    <>
      <div className="flex flex-col gap-6 px-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 pr-1.5">
            <motion.div className="text-[#404040] dark:text-[#d4d4d4] transition font-semibold text-lg">
              Notes
            </motion.div>

            <div
              className={cn([
                "text-xs text-[#525252] dark:text-[#737373] hover:text-[#262626] dark:hover:text-[#d4d4d4] transition duration-300 ease-in-out",
                "hover:bg-[#e7eced] dark:hover:bg-[#383838] rounded-md px-2 py-1",
                "opacity-0 group-hover:opacity-100 transition duration-300 -mr-4",
              ])}
              onClick={() => {
                if (
                  newNotes.length === 0 ||
                  newNotes[newNotes.length - 1].name !== "" ||
                  newNotes[newNotes.length - 1].value !== ""
                )
                  setNewNotes([...newNotes, { name: "", value: "" }]);
              }}
            >
              Add Note
            </div>
          </div>
          <div className="text-xs text-[#525252] dark:text-[#a3a3a3] transition">
            Use notes to add supplementary descriptions, tags, or critical
            sub-information for your records. Notes help you annotate,
            structure, and organize important details that support your main
            data.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            {newNotes.map((note, i) => (
              <EditKV
                key={note.name}
                k={note.name}
                v={note.value}
                holderK="Name"
                holderV="Content"
                onChangeK={(newName) => {
                  const copy = [...newNotes];
                  copy[i].name = newName;
                  setNewNotes(copy);
                }}
                onChangeV={(newValue) => {
                  const copy = [...newNotes];
                  copy[i].value = newValue;
                  setNewNotes(copy);
                }}
                onDelete={() => {
                  const copy = [...newNotes];
                  if (copy.length === 1) {
                    // 如果是最后一个，替换为空对象
                    copy[0] = { name: "", value: "" };
                  } else {
                    // 否则正常删除
                    copy.splice(i, 1);
                  }
                  setNewNotes(copy);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function NoteList({ platform }: { platform: Platform }) {
  const curEdit = detailStation.curEdit.useSee();
  return (
    <DataList
      className="group"
      label={DataClass.Note}
      noteLen={platform.notes.length}
    >
      {!curEdit ? (
        <NoteShow platform={platform} />
      ) : (
        <NoteEdit platform={platform} />
      )}
    </DataList>
  );
}
