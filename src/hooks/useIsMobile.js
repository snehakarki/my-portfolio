import { useEffect, useState } from "react";

const useIsMobile = () => {
  const checkIsMobile = () => {
    // Check for touch capability
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Check screen width
    const isMobileWidth = window.innerWidth <= 768;
    
    // Check user agent for mobile devices
    const isMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Specific tablet detection
    const isTablet = /iPad|Android(?!.*Mobile)|Tablet/i.test(navigator.userAgent);
    
    // Consider a device mobile if it has touch capabilities AND either has mobile width, mobile UA, or is a tablet
    return hasTouch && (isMobileWidth || isMobileDevice || isTablet);
  };

  const [isMobile, setIsMobile] = useState(checkIsMobile());

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      // Debounce the resize handler
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(checkIsMobile());
      }, 250); // Wait 250ms after the last resize event
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
