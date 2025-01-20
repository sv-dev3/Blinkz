import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "src/pages/Home";
import About from "src/pages/About";
import Navbar from "src/components/ui-components/Navbar";
import Marquee from "src/components/ui-elements/Marquee";
import ComingSoon from "src/pages/ComingSoon";

function App() {
  const marqueeData = ["Call Us +91 8448033658"];
  const marqueeLinks = [
    "https://www.example.com/1",
    "https://www.example.com/2",
    "https://www.example.com/3",
    "https://www.example.com/4",
    "https://www.example.com/5",
    "https://www.example.com/6",
  ];
  return (
    <BrowserRouter>
      <Marquee data={marqueeData} links={marqueeLinks} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
