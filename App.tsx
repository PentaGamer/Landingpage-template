
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import ThankYouPage from './components/ThankYouPage';
import { PageState, LeadData } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.LANDING);
  const [leadData, setLeadData] = useState<LeadData | null>(null);

  const handleCapture = (data: LeadData) => {
    setLeadData(data);
    setCurrentPage(PageState.THANK_YOU);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Basic Hash Navigation support
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#obrigado-descomplicamkt') {
        setCurrentPage(PageState.THANK_YOU);
      } else {
        setCurrentPage(PageState.LANDING);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-green-100 selection:text-green-900">
      {currentPage === PageState.LANDING ? (
        <LandingPage onCapture={handleCapture} />
      ) : (
        <ThankYouPage leadName={leadData?.name || 'Inscrito'} />
      )}
    </div>
  );
};

export default App;
