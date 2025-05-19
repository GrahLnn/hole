import { createMatchAtom, createAtom, createDerivedAtom } from "./core";
import {
  platform as OSplatform,
  type Platform as OSPlatform,
} from "@tauri-apps/plugin-os";
import { CenterToolProp, MainPage } from "./type";

export const station = {
  centerTool: createAtom<CenterToolProp | null>(null),
  allowBarInteraction: createAtom<boolean>(true),

  os: createMatchAtom<OSPlatform>(OSplatform() as OSPlatform),
  main_page: createMatchAtom<MainPage>(MainPage.Home),
};

export const driveStation = {};

export const sizeMap: Map<string, [number, number]> = new Map();
