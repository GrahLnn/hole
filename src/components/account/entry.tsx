import { cn } from "@/lib/utils";
import { account as accountBus } from "../../subpub/buses";
import { motion } from "motion/react";
import { Platform } from "@/src/subpub/type";

export interface Account {
  id: string;
  email: string;
  platforms: Platform[];
}

interface AccountEntryProps {
  account: Account;
  index: number;
  length: number;
}

export function AccountEntry({ account, index, length }: AccountEntryProps) {
  const setSelectedAccount = accountBus.selectedAccount.useSet();
  const isAllActive = account.platforms.every((p) => p.meta.status === "active");
  const partialActive = account.platforms.some((p) => p.meta.status === "active");
  const healthStatus = isAllActive
    ? "healthy"
    : partialActive
    ? "unhealthy"
    : "unavailable";
  const statusColor =
    healthStatus === "healthy"
      ? "text-green-500"
      : healthStatus === "unhealthy"
      ? "text-yellow-500"
      : "text-red-500";
  const bgColor =
    healthStatus === "healthy"
      ? "bg-green-500"
      : healthStatus === "unhealthy"
      ? "bg-yellow-500"
      : "bg-red-500";
  return (
    <div
      key={account.id}
      className={cn([
        "relative group select-none",
        "py-3.5 px-4 -mx-4",
        "cursor-pointer transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-transparent hover:via-gray-100/70 dark:hover:via-gray-50/50 hover:to-transparent",
        "dark:hover:via-gray-800/20",
        index !== length - 1 &&
          "border-b border-gray-100 dark:border-gray-800/50",
      ])}
      onClick={() => setSelectedAccount(account)}
    >
      {/* 左侧状态指示线 */}
      <div
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full transition-all duration-300",
          bgColor,
          "opacity-60 group-hover:opacity-100 group-hover:h-8 group-hover:w-1"
        )}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* 状态点和邮箱 */}
          <div className="flex items-center gap-3">
            <div>
              <motion.div
                className="text-sm font-medium dark:text-white/90 text-gray-800 group-hover:text-black dark:group-hover:text-white transition-colors"
                layoutId={`account-email-${account.email}`}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {account.email}
              </motion.div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 transition-opacity duration-300">
                {/* 方案1: 智能截断 - 显示前3个平台，超过时显示数量 */}
                {account.platforms.length <= 3
                  ? account.platforms.map((p) => p.meta.sitename).join(" • ")
                  : `${account.platforms
                      .slice(0, 2)
                      .map((p) => p.meta.sitename)
                      .join(" • ")} +${account.platforms.length - 2} more`}

                {/* 方案2: 横向滚动（注释掉的备选方案）
                    <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                      {account.platforms.map(p => p.name).join(" • ")}
                    </div>
                    */}

                {/* 方案3: 悬浮展开（注释掉的备选方案）
                    <div className="relative">
                      <span className="truncate block max-w-[300px]">
                        {account.platforms.map(p => p.name).join(" • ")}
                      </span>
                      <div className="absolute left-0 top-full mt-1 p-2 bg-white dark:bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-normal">
                        <div className="text-xs">
                          All platforms: {account.platforms.map(p => p.name).join(", ")}
                        </div>
                      </div>
                    </div>
                    */}
              </div>
            </div>
          </div>
        </div>

        {/* 右侧信息 */}
        <div className="flex items-center gap-4">
          {/* 平台图标组 */}
          <div className="flex -space-x-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {account.platforms.slice(0, 3).map((platform, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 ring-2 ring-white dark:ring-gray-900 flex items-center justify-center"
              >
                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">
                  {platform.meta.sitename.charAt(0)}
                </span>
              </div>
            ))}
            {account.platforms.length > 3 && (
              <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-600 ring-2 ring-white dark:ring-gray-900 flex items-center justify-center">
                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">
                  +{account.platforms.length - 3}
                </span>
              </div>
            )}
          </div>

          {/* 状态和平台数 */}
          <div className="text-right">
            <div
              className={cn(
                "text-xs font-medium transition-colors",
                statusColor
              )}
            >
              {isAllActive
                ? "All active"
                : partialActive
                ? "Partial active"
                : "Unavailable"}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {account.platforms.length}{" "}
              {account.platforms.length === 1 ? "platform" : "platforms"}
            </div>
          </div>

          {/* 操作箭头 */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
