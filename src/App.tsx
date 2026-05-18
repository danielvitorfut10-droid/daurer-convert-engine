import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LazyMotion, domMax } from "framer-motion";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

import { SmoothScroll } from "@/components/ui/smooth-scroll";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LazyMotion features={domMax}>
        <SmoothScroll />
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <div className="relative w-full">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </LazyMotion>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;

