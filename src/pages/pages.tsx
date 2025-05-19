import Home from "./home";
import Account from "./account";
import { station } from "../subpub/buses";
import { MainPage } from "../subpub/type";

export default function Pages() {
  const page = station.main_page.useSee();

  return page.match({
    [MainPage.Home]: () => <Home />,
    [MainPage.Account]: () => <Account />,
    [MainPage.SSH]: () => <Home />,
    [MainPage.BankCard]: () => <Home />,
    [MainPage.SeedPhrase]: () => <Home />,
    [MainPage.Notes]: () => <Home />,
    [MainPage.Settings]: () => <Home />,
    [MainPage.NotFound]: () => <Home />,
  });
}
