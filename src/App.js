import Home from "./pages/Home";
import About from "./pages/About";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="/dashboard" element={<AdminLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
