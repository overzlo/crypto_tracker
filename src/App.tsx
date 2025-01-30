import { BrowserRouter as Router, Route, Routes } from "react-router";
import Sidebar, { SidebarItem } from "./components/Sidebar.tsx";
import {ChartNoAxesCombined, FileHeart, HomeIcon} from "lucide-react";
import Home from "./pages/Home";
import Test from "./components/test.tsx";

const menuItems = [
  { icon: <HomeIcon size={30} />, text: "Home", to: "/" },
  { icon: <ChartNoAxesCombined size={30} />, text: "Tranding", to: "/icon" },
  { icon: <FileHeart size={30} />, text: "Favorite", to: "/icon" },
];

function App() {
  return (
    <Router>
      <div className="flex overflow-hidden">
        <Sidebar>
          {menuItems.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </Sidebar>
        <div className="mx-auto flex-1 p-3 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/icon" element={<Test />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
