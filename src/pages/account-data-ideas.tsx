import { cn } from "@/lib/utils";

// 这里展示一些可以在账号列表中显示的其他数据的想法

export default function AccountDataIdeas() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-8">账号列表 - 其他数据展示想法</h1>

      {/* 想法1: 展示最后活跃时间 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">想法1: 最后活跃时间</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm dark:text-white/90">user@example.com</div>
          <div className="text-xs text-gray-500 mt-1">
            GitHub • Google • Twitter • Last active: 2 hours ago
          </div>
        </div>
      </section>

      {/* 想法2: 展示创建时间和账龄 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">想法2: 账号年龄</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm dark:text-white/90">user@example.com</div>
          <div className="text-xs text-gray-500 mt-1">
            GitHub • Google • Created 3 months ago
          </div>
        </div>
      </section>

      {/* 想法3: 展示安全状态 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">想法3: 安全信息</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm dark:text-white/90">user@example.com</div>
          <div className="text-xs text-gray-500 mt-1">
            GitHub • Google • 2FA enabled • Password updated 30d ago
          </div>
        </div>
      </section>

      {/* 想法4: 展示使用频率 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">想法4: 使用频率/活跃度</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm dark:text-white/90">user@example.com</div>
          <div className="text-xs text-gray-500 mt-1">
            GitHub • Google • High activity (124 logins/month)
          </div>
        </div>
      </section>

      {/* 想法5: 展示标签/分类 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">想法5: 标签分类</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm dark:text-white/90">user@example.com</div>
          <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
            <span>GitHub • Google</span>
            <span className="text-blue-500">• #work</span>
            <span className="text-purple-500">#development</span>
          </div>
        </div>
      </section>

      {/* 想法6: 展示关联信息 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">想法6: 关联/共享信息</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm dark:text-white/90">user@example.com</div>
          <div className="text-xs text-gray-500 mt-1">
            GitHub • Google • Shared with 3 team members
          </div>
        </div>
      </section>

      {/* 想法7: 展示同步状态 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">想法7: 同步/备份状态</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm dark:text-white/90">user@example.com</div>
          <div className="text-xs text-gray-500 mt-1">
            GitHub • Google • ✓ Synced • Backed up 1h ago
          </div>
        </div>
      </section>

      {/* 想法8: 展示通知/警告 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">想法8: 重要通知</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm dark:text-white/90">user@example.com</div>
          <div className="text-xs text-gray-500 mt-1">
            GitHub • Google • ⚠️ Password expires in 5 days
          </div>
        </div>
      </section>

      {/* 综合示例 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">综合示例：组合多种信息</h2>
        <div className="space-y-2">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <div className="text-sm dark:text-white/90">work@company.com</div>
            <div className="text-xs text-gray-500 mt-1">
              GitHub • Slack • +3 more • Active 2h ago • #work
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <div className="text-sm dark:text-white/90">personal@gmail.com</div>
            <div className="text-xs text-gray-500 mt-1">
              Google • Twitter • 2FA on • Last sync: 5 min ago
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
            <div className="text-sm dark:text-white/90">dev@github.com</div>
            <div className="text-xs text-gray-500 mt-1">
              GitHub • GitLab • High usage • ⚠️ Review permissions
            </div>
          </div>
        </div>
      </section>

      {/* 数据密度对比 */}
      <section>
        <h2 className="text-lg font-semibold mb-4">数据密度对比</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">低密度（简洁）</h3>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <div className="text-sm dark:text-white/90">user@example.com</div>
              <div className="text-xs text-gray-500 mt-1">
                3 platforms • Active
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">中密度（平衡）</h3>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <div className="text-sm dark:text-white/90">user@example.com</div>
              <div className="text-xs text-gray-500 mt-1">
                GitHub • Google • +1 more • Last active 2h ago
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">高密度（详细）</h3>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <div className="text-sm dark:text-white/90">user@example.com</div>
              <div className="text-xs text-gray-500 mt-1">
                GitHub • Google • Twitter • 2FA • Active 2h ago • #work • Synced
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 