import React, { useState } from "react";
import Popup from "./components/Desktop/Popup";
import Desktop from "./components/Desktop/Desktop";
import Mobile from "./components/Mobile/Home";
import useIsMobile from "./hooks/useIsMobile"; 

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const isMobile = useIsMobile();

  return (
    <div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
};

export default App;
