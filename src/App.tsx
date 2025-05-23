'use client';

import React, { useState, memo } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import { QuoteContext } from "./components/PlanComparison";

const queryClient = new QueryClient();

const App = () => {
  const [quoteData, setQuoteData] = useState<any>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <QuoteContext.Provider value={quoteData}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Index onQuoteUpdate={setQuoteData} />
        </TooltipProvider>
      </QuoteContext.Provider>
    </QueryClientProvider>
  );
};

App.displayName = 'App';

export default memo(App);
