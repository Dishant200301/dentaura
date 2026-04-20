import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly (override smooth scroll for route changes)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });

    // Fallback for older browsers
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    // Force layout recalculation to ensure scroll happens
    void document.body.offsetHeight;
  }, [pathname]);

  return null;
};

