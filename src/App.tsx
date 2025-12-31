
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import ShowerLeakRepair from "./pages/ShowerLeakRepair";
import ShowerReTile from "./pages/ShowerReTile";
import BalconyLeakRepair from "./pages/BalconyLeakRepair";
import BalconyReTile from "./pages/BalconyReTile";
import BathroomKitchenRestoration from "./pages/BathroomKitchenRestoration";
import SilverIonTechnology from "./pages/SilverIonTechnology";
import PreventativeMaintenance from "./pages/PreventativeMaintenance";
import CommercialWaterproofing from "./pages/CommercialWaterproofing";
import CompleteReconstruction from "./pages/CompleteReconstruction";
import EpoxyGroutLeakRepair from "./pages/EpoxyGroutLeakRepair";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";
import { usePageTracking } from "./hooks/useAnalytics";

const queryClient = new QueryClient();

const AppContent = () => {
  usePageTracking();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shower-leak-repair" element={<ShowerLeakRepair />} />
        <Route path="/shower-re-tile" element={<ShowerReTile />} />
        <Route path="/balcony-leak-repair" element={<BalconyLeakRepair />} />
        <Route path="/balcony-re-tile" element={<BalconyReTile />} />
        <Route path="/bathroom-kitchen-restoration" element={<BathroomKitchenRestoration />} />
        <Route path="/silver-ion-technology" element={<SilverIonTechnology />} />
        <Route path="/preventative-maintenance" element={<PreventativeMaintenance />} />
        <Route path="/commercial-waterproofing" element={<CommercialWaterproofing />} />
        <Route path="/complete-reconstruction" element={<CompleteReconstruction />} />
        <Route path="/epoxy-grout-leak-repair" element={<EpoxyGroutLeakRepair />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
