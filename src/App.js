import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Homepage/Home";
import Rajasthan from "./component/Packages/Rajasthan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rajasthan-tour" element={<Rajasthan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
