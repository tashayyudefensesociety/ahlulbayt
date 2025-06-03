
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Basics from "./pages/Basics";
import Scholars from "./pages/Scholars";
import History from "./pages/History";
import Misconceptions from "./pages/Misconceptions";
import Articles from "./pages/Articles";
import AnsweringSunnis from "./pages/AnsweringSunnis";
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/scholars" element={<Scholars />} />
          <Route path="/history" element={<History />} />
          <Route path="/misconceptions" element={<Misconceptions />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/answering-sunnis" element={<AnsweringSunnis />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
