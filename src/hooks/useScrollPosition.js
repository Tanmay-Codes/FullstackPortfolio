import { useState } from "react";
import { useEffect } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateposition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updateposition);
    return () => {
      window.removeEventListener("scroll", updateposition);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;
