import React, { useState } from "react";
import Popup from "./components/Popup"; 
import Desktop from "./components/Desktop"; 

const App = () => {
  const [showPopup, setShowPopup] = useState(true); 

  return (
    <div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <Desktop />
    </div>
  );
};

export default App;
