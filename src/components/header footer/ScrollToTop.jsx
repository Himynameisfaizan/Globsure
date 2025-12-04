import { useLayoutEffect } from "react"; // useEffect ki jagah ye import karo
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Ye screen dikhne se pehle hi chal jayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;