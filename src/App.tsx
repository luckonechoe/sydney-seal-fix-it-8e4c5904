
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";
import { usePageTracking } from "./hooks/useAnalytics";

// Eagerly load the homepage for fastest LCP
import Index from "./pages/Index";

// Lazy load all other routes
const ShowerLeakRepair = lazy(() => import("./pages/ShowerLeakRepair"));
const ShowerReTile = lazy(() => import("./pages/ShowerReTile"));
const BalconyLeakRepair = lazy(() => import("./pages/BalconyLeakRepair"));
const BalconyReTile = lazy(() => import("./pages/BalconyReTile"));
const BathroomKitchenRestoration = lazy(() => import("./pages/BathroomKitchenRestoration"));
const SilverIonTechnology = lazy(() => import("./pages/SilverIonTechnology"));
const PreventativeMaintenance = lazy(() => import("./pages/PreventativeMaintenance"));
const CommercialWaterproofing = lazy(() => import("./pages/CommercialWaterproofing"));
const CompleteReconstruction = lazy(() => import("./pages/CompleteReconstruction"));
const EpoxyGroutLeakRepair = lazy(() => import("./pages/EpoxyGroutLeakRepair"));
const MaintenancePlans = lazy(() => import("./pages/MaintenancePlans"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));

const queryClient = new QueryClient();

const AppContent = () => {
  usePageTracking();
  
  return (
    <>
      <Suspense fallback={null}>
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
          <Route path="/maintenance-plans" element={<MaintenancePlans />} />
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
      </Suspense>
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
