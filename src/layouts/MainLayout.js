// layouts/MainLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet /> {/* จุดที่เนื้อหาจากเส้นทางลูกจะแทรกเข้ามา */}
      </main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
