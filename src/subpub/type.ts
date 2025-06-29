import { PlatformDetail } from "../cmd/commands";

export interface CenterToolProp {
  key: string;
  node: React.ReactNode;
}

export enum MainPage {
  Home = "Home",
  Account = "Account",
  SSH = "SSH",
  BankCard = "BankCard",
  SeedPhrase = "SeedPhrase",
  Notes = "Notes",
  Settings = "Settings",

  NotFound = "NotFound",
}
