import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useMemo } from "react";
import { station } from "../subpub/buses";
import { MainPage } from "../subpub/type";

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
      content: (
        <div className="w-14 h-12 md:w-20 md:h-14 border border-black/5 group-hover:border-black/10 rounded-md dark:borderWhite/5 dark:group-hover:borderWhite/10 py-2 px-4 flex flex-col items-center justify-center gap-2">
          <div className="rounded-full h-2 w-2 bg-[#E5E5E5] group-hover:bg-[#E8E8E8] dark:bg-[#242424] dark:group-hover:bg-[#2E2E2E] transition-colors duration-300" />
          <div className="w-full flex flex-col gap-1">
            <div className="rounded-[1px] h-1 w-full bg-[#f2f2f2] group-hover:bg-[#E8E8E8] dark:bg-[#242424] dark:group-hover:bg-[#2E2E2E] transition-colors duration-300" />
            <div className="rounded-[1px] h-1 w-2/5 bg-[#f2f2f2] group-hover:bg-[#E8E8E8] dark:bg-[#242424] dark:group-hover:bg-[#2E2E2E] transition-colors duration-300" />
            <div className="rounded-[1px] h-1 w-3/5 bg-[#f2f2f2] group-hover:bg-[#E8E8E8] dark:bg-[#242424] dark:group-hover:bg-[#2E2E2E] transition-colors duration-300" />
          </div>
        </div>
      ),
      fn: () => setPage(MainPage.Account),
    },
    {
      title: "SSH",
      content: (
        <div className="font-neuemontrealmono text-[38px] text-[#F2F2F2] transition-colors duration-300 group-hover:text-[#E8E8E8] dark:text-[#242424] dark:group-hover:text-[#2E2E2E] md:text-[56px]">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 18 18"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <polyline points="2.75 14.25 8 9 2.75 3.75" />
              <line x1="9.5" y1="14.25" x2="15.25" y2="14.25" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      title: "Bank Card",
      content: (
        <div className="h-12 text-[#F2F2F2] transition-colors duration-300 group-hover:text-[#E8E8E8] dark:text-[#242424] dark:group-hover:text-[#2E2E2E] md:h-16">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 18 18"
            className="fill-current w-full h-full"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path d="M3.25,5.75V14.25c0,1.105,.895,2,2,2h7.5c1.105,0,2-.895,2-2V5.75" />
              <line x1="10.75" y1="16.25" x2="10.75" y2="5.75" />
              <line x1="6.25" y1="13.25" x2="6.25" y2="10.75" />
              <line
                x1="1.75"
                y1="2.75"
                x2="16.25"
                y2="2.75"
                strokeWidth="0.9"
              />
            </g>
          </svg>
        </div>
      ),
    },
    {
      title: "Seed Phrase",
      content: (
        <div
          className={cn([
            "flex h-8 w-9/12 items-center justify-center md:h-10 md:w-8/12 md:textLg",
            "rounded-full bg-[#f2f2f2] text-sm text-[#d6d6d6]",
            "transition-colors duration-300 group-hover:bg-[#E8E8E8] group-hover:text-[#C2C2C2]",
            "dark:bg-[#242424] dark:text-[#1A1A1A] dark:group-hover:bg-[#2E2E2E] dark:group-hover:text-[#121212]",
          ])}
          style={{ fontFamily: '"Maple Mono", monospace' }}
        >
          $&@%
        </div>
      ),
    },
    {
      title: "Secret Notes",
      content: (
        <div className="h-12 text-[#F2F2F2] transition-colors duration-300 group-hover:text-[#E8E8E8] dark:text-[#242424] dark:group-hover:text-[#2E2E2E] md:h-16">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 18 18"
            className="fill-current w-full h-full"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.9"
              stroke="currentColor"
            >
              <path
                d="M13.25 1.75H4.75C3.64543 1.75 2.75 2.64543 2.75 3.75V14.25C2.75 15.3546 3.64543 16.25 4.75 16.25H13.25C14.3546 16.25 15.25 15.3546 15.25 14.25V3.75C15.25 2.64543 14.3546 1.75 13.25 1.75Z"
                stroke="none"
              />
              <path d="M5.75 11.25H9" strokeWidth="1.5" />
              <path d="M5.75 8.25H12.25" strokeWidth="1.5" />
              <path d="M5.75 5.25H12.25" strokeWidth="1.5" />
              <path d="M13.25 1.75H4.75C3.64543 1.75 2.75 2.64543 2.75 3.75V14.25C2.75 15.3546 3.64543 16.25 4.75 16.25H13.25C14.3546 16.25 15.25 15.3546 15.25 14.25V3.75C15.25 2.64543 14.3546 1.75 13.25 1.75Z" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      title: "Settings",
      content: (
        <div className="h-12 text-[#F2F2F2] transition-colors duration-300 group-hover:text-[#E8E8E8] dark:text-[#242424] dark:group-hover:text-[#2E2E2E] md:h-16">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 18 18"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <circle cx="9" cy="9" r="1.75" fill="currentColor" />
              <path d="m16.25,9.355v-.71c0-.51-.383-.938-.89-.994l-1.094-.122-.503-1.214.688-.859c.318-.398.287-.971-.074-1.332l-.502-.502c-.36-.36-.934-.392-1.332-.074l-.859.688-1.214-.503-.122-1.094c-.056-.506-.484-.89-.994-.89h-.71c-.51,0-.938.383-.994.89l-.122,1.094-1.214.503-.859-.687c-.398-.318-.971-.287-1.332.074l-.502.502c-.36.36-.392.934-.074,1.332l.688.859-.503,1.214-1.094.122c-.506.056-.89.484-.89.994v.71c0,.51.383.938.89.994l1.094.122.503,1.214-.687.859c-.318.398-.287.972.074,1.332l.502.502c.36.36.934.392,1.332.074l.859-.688,1.214.503.122,1.094c.056.506.484.89.994.89h.71c.51,0,.938-.383.994-.89l.122-1.094,1.214-.503.859.688c.398.318.971.287,1.332-.074l.502-.502c.36-.36.392-.934.074-1.332l-.687-.859.503-1.214,1.094-.122c.506-.056.89-.484.89-.994l-.002-.001Z" />
            </g>
          </svg>
        </div>
      ),
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
