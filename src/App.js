import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Carousel from "./components/Carousel";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
