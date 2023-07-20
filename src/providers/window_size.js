import { createContext, useContext, useEffect, useState } from 'react'

const WindowSizeContext = createContext(null)

export function WindowSizeProvider ({ children }) {
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={windowSize}>
        {children}
    </WindowSizeContext.Provider>
  )
}

export function useWindowSize () {
  return useContext(WindowSizeContext)
}
