import HomePage from "./pages/Home";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModulePage from "./pages/ModulePage";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="text-center">
      {/* <Menu></Menu> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/module" element={<ModulePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
