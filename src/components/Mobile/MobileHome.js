import React from "react";
import TopBar from "./TopBar";
import AppGrid from "./AppGrid";
import BottomNav from "./BottomNav";
import "../../styles/Mobile/MobileHome.css";

const MobileHome = () => {
  return (
    <div className="mobile-home">
      <TopBar />
      <AppGrid />
      <BottomNav />
    </div>
  );
};

export default MobileHome;
