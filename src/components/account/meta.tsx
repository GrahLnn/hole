import { icons, motionIcons } from "@/src/assets/icons";
import { Platform } from "@/src/subpub/type";
import {
  Pair,
  DataList,
  KVPair,
  detailStation,
  DataClass,
  PairEdit,
} from "./uni";

function MetaShow({ platform }: { platform: Platform }) {
  return (
    <>
      <Pair
        label="URL"
        value={platform.meta.url}
        action={motionIcons.openInBrowser}
      />
      <Pair
        label="Site"
        value={platform.meta.sitename}
        action={motionIcons.duplicate2}
      />
      <Pair
        label="Username"
        value={platform.meta.username}
        action={motionIcons.duplicate2}
      />
      <Pair
        label="Password"
        value={platform.meta.password}
        action={motionIcons.duplicate2}
      />
      <Pair label="Cookies" value={<icons.chevronDown size={12} />} />
      <div className="flex gap-1 flex-wrap">
        {platform.meta.cookies.map((cookie) => (
          <KVPair key={cookie.name} k={cookie.name} v={cookie.value} />
        ))}
      </div>
    </>
  );
}

function MetaEdit({ platform }: { platform: Platform }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="text-[#404040] dark:text-[#d4d4d4] transition font-semibold text-lg">
          General
        </div>
        <div className="text-xs text-[#525252] dark:text-[#a3a3a3] transition">
          General information about the site.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-[#262626] dark:text-[#d4d4d4] transition ">
            Login Method
          </div>
          <div className="text-xs text-[#525252] dark:text-[#a3a3a3] transition hover:bg-[#e7eced] dark:hover:bg-[#383838] rounded-md px-2 py-1 flex items-center gap-2">
            Single-Sign-On / Name-Password
            <motionIcons.arrowsOppositeDirectionY size={12} />
          </div>
        </div>
      </div>
      <PairEdit
        label="URL"
        value={platform.meta.url}
        explain="Used to locate the site when connecting or autofilling. Double-check if something doesn’t work."
      />
      <PairEdit
        label="Site"
        value={platform.meta.sitename}
        explain="Just a name to help you recognize which platform this is. Can be anything that makes sense to you."
      />
      <PairEdit
        label="Username"
        value={platform.meta.username}
        explain="Needed to log in or identify your account. Used together with cookies or password."
      />
      <PairEdit
        label="Password"
        value={platform.meta.password}
        explain="Used for login when cookies aren’t available. Stored securely, but avoid editing unless needed."
      />
      <PairEdit
        label="Cookies"
        value={platform.meta.cookies.map((cookie) => cookie.name).join(", ")}
        explain="Keeps you logged in and enables one-click access to your account page — no password required. Best used on trusted devices."
        multiLine
      />
    </div>
  );
}

export default function MetaList({ platform }: { platform: Platform }) {
  const curEdit = detailStation.curEdit.useSee();
  return (
    <DataList label={DataClass.Meta} noteLen={platform.notes.length}>
      {!curEdit ? (
        <MetaShow platform={platform} />
      ) : (
        <MetaEdit platform={platform} />
      )}
    </DataList>
  );
}
