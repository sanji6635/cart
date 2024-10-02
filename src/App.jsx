import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { DataContext } from "./context/DataContextProvider";
import { useContext } from "react";

function App() {
  const { trackData } = useContext(DataContext);
  console.log("trackData is =>", trackData);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={trackData ? <Dashboard /> : <Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
