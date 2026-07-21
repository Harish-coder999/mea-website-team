import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect, lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground";
import PageLoader from "./components/PageLoader";
import PageTransition from "./components/PageTransition";

// Lazy load route components for code-splitting
const Home = lazy(() => import("./pages/Home"));
const Events = lazy(() => import("./pages/Events"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));
const Mechnotron = lazy(() => import("./pages/Mechnotron"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { usePreventZoom } from "./hooks/usePreventZoom";

const queryClient = new QueryClient();

const App = () => {
  usePreventZoom();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LazyMotion features={domAnimation}>
            <Toaster />
            <Sonner />
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <AppContent />
            </BrowserRouter>
          </LazyMotion>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Show loader on route changes
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 600); // Loader shows for 600ms on each page change
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Combined loading state: show loader if video is loading OR navigating
  const isLoading = !isVideoLoaded || isNavigating;

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <VideoBackground onVideoLoaded={setIsVideoLoaded} />
        <div className="w-full max-w-[1600px] mx-auto flex flex-col flex-grow relative z-10 pb-24 md:pb-0">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Suspense fallback={<PageLoader isLoading={true} />}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                  <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
                  <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
                  <Route path="/mechnotron" element={<PageTransition><Mechnotron /></PageTransition>} />
                  <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
