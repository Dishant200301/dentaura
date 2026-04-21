import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./modules/home/home";
import About from "./modules/about/about";
import Services from "./modules/services/services";
import ServiceDetails from "./modules/service-details/service-details";
import Team from "./modules/team/team";
import Gallery from "./modules/gallery/gallery";
import BlogPage from "./modules/blog/blog";
import BlogDetails from "./modules/blog-details/blog-details";
import Appointment from "./modules/appointment/appointment";
import Contact from "./modules/contact/contact";
import Privacy from "./modules/privacy/privacy";
import Terms from "./modules/terms/terms";
import NotFound from "./modules/not-found/not-found";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const seen = sessionStorage.getItem("oc-loader-seen");
    if (seen) setShowLoader(false);
    else {
      const t = setTimeout(() => {
        sessionStorage.setItem("oc-loader-seen", "1");
        setShowLoader(false);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col bg-brand-bg">
              <Navbar />
              <main className="flex-1">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
