import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
  isSmall: boolean;
  isM: boolean;
  isLg: boolean;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
	isSmall: false,
	isM: false,
	isLg: false
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
		isSmall: window.innerWidth < 640,
		isM: window.innerWidth >= 640 && window.innerWidth < 1024,
		isLg: window.innerWidth >= 1024,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler immediately to set initial size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return windowSize;
}

export default useWindowSize;