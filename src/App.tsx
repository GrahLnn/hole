import "@fontsource/maple-mono";
import { useEffect } from "react";
import "./App.css";
import crab from "./cmd";
import { Scrollbar } from "./components/scrollbar/scrollbar";
import TopBar from "./topbar";
import Pages from "./pages/pages";

function App() {
  useEffect(() => {
    crab.appReady();
  }, []);
  return (
    <div className="min-h-screen flex flex-col overflow-hidden hide-scrollbar">
      <TopBar />
      <main className="flex-1 flex overflow-hidden mt-8 hide-scrollbar">
        <Pages />
      </main>
      <Scrollbar />
    </div>
  );
}

export default App;
