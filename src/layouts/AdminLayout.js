// layouts/AdminLayout.js
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="container">
      <main>
        <Outlet /> {/* จุดที่เนื้อหาจากเส้นทางลูกจะแทรกเข้ามา */}
      </main>
    </div>
  );
};

export default AdminLayout;
