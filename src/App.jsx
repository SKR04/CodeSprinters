import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; // Import the Header component
import Footer from "./components/Footer";
import "./fonts/Geist-Light.otf";
import "./fonts/Geist-Bold.otf";
import "./fonts/Geist-SemiBold.otf";
import "./fonts/Geist-Regular.otf";
import Fryde from "./components/Fryde";
import Workforce from "./components/Workforce";
import Forcast from "./components/Forcast";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative sm:-8 p-2  min-h-screen flex flex-row">
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
