import { icons } from "@/src/assets/icons";
import { motion, AnimatePresence } from "motion/react";

import MetaList from "./meta";
import TokenList from "./tokenlist";
import NoteList from "./notelist";
import { detailStation, EntryToolButton } from "./uni";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function NewAccount() {
  const [curEdit, setCurEdit] = detailStation.curEdit.useAll();
  const platform = useState({
    meta: {
      sitename: "New Account",
    },
    tokens: [],
    notes: [],
  });

  return (
    <motion.div
      className={cn(["flex flex-col gap-4 mb-32"])}
      animate={{ marginTop: curEdit ? 0 : 16 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          {/* <PlatformTopbar platform={platform} /> */}
          <motion.div
            animate={{ height: curEdit ? 0 : 4 }}
            transition={{ duration: 0.2 }}
          />
          <MetaList platform={platform} />
        </div>
        <TokenList platform={platform} />
        <NoteList platform={platform} />

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
