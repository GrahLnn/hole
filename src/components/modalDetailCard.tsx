import PayoutMethods from "./detailCard";
import { cn } from "@/lib/utils";
import { toggleVisibility } from "@/src/state_machine/barVisible";
import { newModalMachine } from "@/src/state_machine/modalbox";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export type Payload = {
  email: string;
};

export const boxMachine = newModalMachine<Payload>("DetailCard");

export const { open: openLightbox, close: closeLightbox } = boxMachine;

export default function ModalBox() {
  const { isExiting, isOpen, payload } = boxMachine.useModalState();
  const [toMax, setToMax] = useState(false);
  const [zoomable, setZoomable] = useState(false);

  // 页面滚动控制
  useEffect(() => {
    if (isOpen) {
      toggleVisibility(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setToMax(false);
    }
    return () => {
      document.body.style.pointerEvents = "";
    };
  }, [isOpen]);

  // 退出时恢复 bar
  useEffect(() => {
    if (isExiting) {
      toggleVisibility(true);
    }
  }, [isExiting]);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
          animate={{
            backdropFilter: "blur(24px)",
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          exit={{
            backdropFilter: "blur(0px)",
            opacity: 0,
            transition: { duration: 0.2 },
            pointerEvents: "none",
          }}
          className={cn([
            "fixed top-0 left-0 w-screen h-screen z-100 select-none pt-8",
            "flex justify-center items-start",
            // zoomable && toMax ? "items-start" : "items-center",
            "overflow-auto hide-scrollbar",
            isExiting ? "pointer-events-none" : "pointer-events-auto",
          ])}
          onClick={() => boxMachine.close()}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              boxMachine.close();
            }
          }}
        >
          {/* <PayoutMethods /> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
