import { createMatchAtom, createAtom, createDerivedAtom } from "./core";
import {
  platform as OSplatform,
  type Platform as OSPlatform,
} from "@tauri-apps/plugin-os";
import { CenterToolProp, MainPage } from "./type";
import {
  AccountSummary,
  PlatformDetail,
  PlatformSummary,
  AccountSlot,
} from "@/src/cmd/commands";

export const station = {
  centerTool: createAtom<CenterToolProp | null>(null),
  allowBarInteraction: createAtom<boolean>(true),
  hideCenterTool: createAtom<boolean>(false),
  newAccountType: createAtom<"single" | "multiple">("single"),
  accountDetail: createAtom<AccountSlot | null>(null),

  os: createMatchAtom<OSPlatform>(OSplatform() as OSPlatform),
  main_page: createMatchAtom<MainPage>(MainPage.Home),
};

export const account = {
  selectedAccount: createAtom<AccountSummary | null>(null),
  selectedPlatform: createAtom<string | null>(null),
};

export const driveStation = {};

export const sizeMap: Map<string, [number, number]> = new Map();
