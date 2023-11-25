import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Works from "./pages/works/Works";
import Header from "./component/Header";

function App() {
  return (
    <div className="App text-[#060640]">
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/work" element={<Works/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
