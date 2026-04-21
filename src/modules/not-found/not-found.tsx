import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { NotFoundContent } from "./components/NotFoundContent";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO title="404 — Page Not Found | DentAura" description="The page you are looking for could not be found." path={location.pathname} />
      <NotFoundContent />
    </>
  );
};

export default NotFound;
