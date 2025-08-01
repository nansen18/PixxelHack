import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";
import Portfolio from "./pages/Portfolio";
import Shop from "./pages/Shop";
import Organic from "./pages/Organic";
import Collections from "./pages/Collections";
import Team from "./pages/Team";
import Stellar from "./pages/Stellar";
import Minimal from "./pages/Minimal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/organic" element={<Organic />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/team" element={<Team />} />
          <Route path="/stellar" element={<Stellar />} />
          <Route path="/minimal" element={<Minimal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
