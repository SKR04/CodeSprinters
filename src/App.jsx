import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; // Import the Header component
import Footer from "./components/Footer";
import "./fonts/Geist-Light.otf";
import "./fonts/Geist-Bold.otf";
import "./fonts/Geist-SemiBold.otf";
import "./fonts/Geist-Regular.otf";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
