import { cn } from "@/lib/utils";

interface ToolButtomProps {
  label?: string;
  icon?: React.ReactNode;
  fn?: () => void;
  active?: boolean;
}

export default function ToolButton({ label, icon, fn, active }: ToolButtomProps) {
  return (
    <div
      className={cn([
        " rounded-full group",
        label && icon ? "pl-2 pr-1.5" : label ? "px-2 h-5" : "px-1",
        "bg-[#f2f2f2] dark:bg-[#1e1e1e] hover:bg-[#e5e5e5] dark:hover:bg-[#2f2f2f]",
        "transition duration-300",
        active && "bg-[#e5e5e5] dark:bg-[#2f2f2f]",
      ])}
      onClick={fn}
      onKeyDown={() => null}
    >
      <div
        className={cn([
          "flex items-center gap-1 py-1",
          "opacity-60 group-hover:opacity-90",
          "transition duration-300",
          active && "opacity-90",
        ])}
      >
        {label && (
          <div className="trim-cap text-xs text-[var(--content)]">{label}</div>
        )}
        {icon}
      </div>
    </div>
  );
}
