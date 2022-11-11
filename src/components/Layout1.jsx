import React from "react";

// Components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// views
import Dashboard from "../views/Dashboard";
import Home from "../views/Home";

export default function Layout1() {
  return (
    <>
      {/* <!-- top navigation bar --> */}
      <Navbar />
      {/* <!-- top navigation bar --> */}

      {/* <!-- offcanvas --> */}
      <Sidebar />
      {/* <!-- End offcanvas --> */}

      {/* Content */}
      <Home />
      {/* End Contents */}
    </>
  );
}
