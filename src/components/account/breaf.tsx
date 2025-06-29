import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { account as accountBus } from "../../subpub/buses";
import { cn } from "@/lib/utils";
import { toggleAccountShow } from "@/src/state_machine/accountShow";
import { AccountSummary } from "@/src/cmd/commands";

export default function ItemsBrief({ account }: { account: AccountSummary }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activePillStyle, setActivePillStyle] = useState({});
  const platformRefs = useRef<(HTMLDivElement | null)[]>([]);
  const setSelectedPlatform = accountBus.selectedPlatform.useSet();
  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = platformRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetTop, offsetHeight, offsetWidth, offsetLeft } =
          hoveredElement;
        setActivePillStyle({
          top: `${offsetTop}px`,
          left: `${offsetLeft}px`,
          height: `${offsetHeight}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  return (
    <div className="relative">
      {/* Background Highlight */}
      <div
        className="absolute transition-all duration-300 ease-out bg-[#ffffff] dark:bg-[#171717] rounded-lg"
        style={{
          ...activePillStyle,
          opacity: hoveredIndex !== null ? 1 : 0,
        }}
      />

      {/* Platform Items */}
      <div className="relative ">
        {account.platforms.map((platform, index) => (
          <div
            key={platform.sitename}
            ref={(el) => {
              platformRefs.current[index] = el;
            }}
            className="px-3 py-2 rounded-lg transition-colors duration-300 cursor-default"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              setSelectedPlatform(platform.sitename);
              toggleAccountShow(true);
            }}
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={cn([
                      "w-1 h-1 rounded-full",
                      platform.status === "Online"
                        ? "bg-green-500"
                        : "bg-red-500",
                    ])}
                  />
                  <motion.div
                    className="text-sm font-semibold text-[#262626] dark:text-[#d4d4d4]"
                    layoutId={`platform-${platform.sitename}`}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {platform.sitename}
                  </motion.div>
                </div>
                <div
                  className={cn([
                    "text-xs text-[#525252] dark:text-[#a3a3a3] hover:bg-[#f7f7f9] dark:hover:bg-[#373737] hover:dark:text-[#e5e5e5] p-1 rounded-md opacity-0 transition duration-300 cursor-pointer",
                    "hover:shadow-[var(--butty-shadow)] dark:hover:[box-shadow:0_0_30px_0_#8a8a8a,0_0_50px_30px_#262626] dark:hover:[mix-blend-mode:plus-lighter]",
                    hoveredIndex === index && "opacity-100",
                  ])}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Go to Site
                </div>
              </div>
              <div className="text-xs text-[#a3a3a3] ">
                no cookies|no tokens|no notes
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
