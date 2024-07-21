import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDev } from "react-icons/fa";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import "../css/Navbar.css";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    const collapseElement = document.getElementById("collapse-nev-mobile");
    if (collapseElement) {
      if (isCollapsed) {
        collapseElement.classList.add("show");
      } else {
        collapseElement.classList.remove("show");
      }
    }
  };

  return (
    <nav>
      <div className="position-relative">
        <div className="style-nav style-menu">
          <Link to="/">
            <FaDev className="icon-size me-2" />
          </Link>
          <div className="d-none d-md-block">
            <Link to="/">home</Link>
            <Link to="/">about</Link>
            <Link to="/">education</Link>
            <Link to="/">skills & expertise</Link>
            <Link to="/">contact</Link>
          </div>
          <div className="d-block d-md-none">
            {isCollapsed ? (
              <HiOutlineBars2
                className="icon-size"
                data-bs-toggle="collapse"
                href="#collapse-nev-mobile"
                aria-expanded={isCollapsed.toString()}
                aria-controls="collapse-nev-mobile"
                onClick={toggleCollapse}
              />
            ) : (
              <IoCloseOutline
                className="icon-size"
                data-bs-toggle="collapse"
                href="#collapse-nev-mobile"
                aria-expanded={isCollapsed.toString()}
                aria-controls="collapse-nev-mobile"
                onClick={toggleCollapse}
              />
            )}
          </div>
        </div>
        <div
          className="collapse style-menu mt-4 d-md-none"
          id="collapse-nev-mobile"
        >
          <div>
            <Link to="/">home</Link>
          </div>
          <div>
            <Link to="/">about</Link>
          </div>
          <div>
            <Link to="/">education</Link>
          </div>
          <div>
            <Link to="/">skills & expertise</Link>
          </div>
          <div className="border-0">
            <Link to="/">contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
