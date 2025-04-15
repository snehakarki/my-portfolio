import React, { useState } from "react";
import Popup from "./components/Desktop/Popup";
import Desktop from "./components/Desktop/Desktop";
import MobileHome from "./components/Mobile/MobileHome";
import useIsMobile from "./hooks/useIsMobile"; 
import DeviceSuggestion from "./components/DeviceSuggestion";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const isMobile = useIsMobile();

  return (
    <div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <DeviceSuggestion isMobile={isMobile} />
      {isMobile ? <MobileHome /> : <Desktop />}
    </div>
  );
};

export default App;
