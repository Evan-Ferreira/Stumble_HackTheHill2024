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
          <Route path="/module1" element={<ModulePage index={1} />} />
          <Route path="/module2" element={<ModulePage index={2} />} />
          <Route path="/module3" element={<ModulePage index={3} />} />
          <Route path="/module4" element={<ModulePage index={4} />} />
          <Route path="/module5" element={<ModulePage index={5} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
