import { useLocation } from "react-router-dom";
import "./App.css";
import Router from "./routers/Router";
import { useState } from "react";
import { CommonContext } from "./contexts/CommonContext";
import LayoutIndex from "./components/layouts/LayoutIndex";

function App() {
  const { pathname } = useLocation();
  const [testContext, setTestContext] = useState("default value");
  return (
    <CommonContext.Provider value={{ testContext, setTestContext }}>
      <LayoutIndex pathname={pathname}>
        <Router />
      </LayoutIndex>
    </CommonContext.Provider>
  );
}

export default App;
