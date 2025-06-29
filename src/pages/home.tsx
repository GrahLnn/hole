import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useMemo } from "react";
import { station } from "../subpub/buses";
import { MainPage } from "../subpub/type";
import { labels } from "../components/labels";

interface GuideCardProps {
  content: React.ReactNode;
  title: string;
  idx: number;
  rotation: number;
  zIndex: number;
  onClick?: () => void;
}

interface GuideItem {
  title: string;
  content: React.ReactNode;
  fn?: () => void;
}

const GuideCard: React.FC<GuideCardProps> = ({
  content,
  title,
  idx,
  rotation,
  zIndex,
  onClick,
}) => {
  const formattedIdx = String(idx).padStart(2, "0");
  const randomRotation = useMemo(() => {
    return rotation === -1
      ? Math.floor(Math.random() * 6) + 3
      : Math.floor(Math.random() * 6) + 9;
  }, [rotation]);

  const randomY = useMemo(() => {
    return Math.floor(Math.random() * 20) - 10;
  }, []);

  return (
    <motion.div
      className={"group -ml-8 first:ml-0 relative hover:z-50 select-none"}
      style={{
        zIndex,
        rotate: rotation === -1 ? -randomRotation : randomRotation,
        y: randomY,
      }}
      whileHover={{ scale: 1.2, rotate: 0, y: 0 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div
        className={
          "duration-250 flex h-[120px] w-[100px] flex-col items-center justify-between rounded-xl bg-white p-1 shadow-lg ring ring-[#DEDEDE]/50 dark:ring-[#333333]/50 transition-all group-hover:shadow-xl dark:border dark:border-white/5 dark:bg-[#1A1A1A] md:h-[160px] md:w-[140px]"
        }
      >
        <div className="h-4" />
        {content}
        <div className="w-full self-end p-2">
          <div className="text-xs text-[#DEDEDE] dark:text-[#333333]">
            {formattedIdx}
          </div>
          <div className="text-xs font-medium text-[#171717] dark:text-[#D9D9D9] dark:group-hover:text-white">
            {title}
          </div>
        </div>
        <div className="absolute top-24 h-10 w-full bg-transparent md:top-36" />
      </div>
    </motion.div>
  );
};

function GuideCardList() {
  const setPage = station.main_page.useSet();
  const GUIDE_ITEMS: GuideItem[] = [
    {
      title: "Account",
      content: labels.account,
      fn: () => setPage(MainPage.Account),
    },

    {
      title: "Bank Card",
      content: labels.bankcard,
    },
    {
      title: "Seed Phrase",
      content: labels.prase,
    },

    {
      title: "Prompts",
      content: labels.prompt,
    },
    {
      title: "Code Snippets",
      content: labels.snip,
    },
    {
      title: "SSH",
      content: labels.code,
    },
    {
      title: "Notes",
      content: labels.note,
    },
    {
      title: "Settings",
      content: labels.settings,
    },
  ];
  return (
    <div className="flex items-center">
      {GUIDE_ITEMS.map((item, index) => (
        <GuideCard
          key={item.title}
          content={item.content}
          title={item.title}
          idx={index + 1}
          rotation={index % 2 === 0 ? -1 : 1}
          zIndex={index}
          onClick={item.fn}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const setCenterTool = station.centerTool.useSet();
  useEffect(() => {
    setCenterTool(null);
  }, []);
  return (
    <div className="flex-1 flex justify-center items-center">
      <GuideCardList />
    </div>
  );
}
