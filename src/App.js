import { useState } from "react";
import "./App.css";
import PrintSlip from "./components/PrintSlip";
import productContext from "./Context/appContext";
import Routing from "./pages/Routing";

function App() {
  const [showLog, setShowLog] = useState(false);
  return (
    <>
      <productContext.Provider
        value={{
          showLog: showLog,
          setShowLog: setShowLog,
        }}
      >
        <Routing />
        <PrintSlip/>
      </productContext.Provider>
    </>
  );
}

export default App;
