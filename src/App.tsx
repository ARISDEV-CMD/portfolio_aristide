import React, { useState, useEffect } from 'react';
import { Navbar, NavScreen } from './components/Navbar';
import { BottomMobileNav } from './components/BottomMobileNav';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { HomeView } from './views/HomeView';
import { ParcoursView } from './views/ParcoursView';
import { CompetencesView } from './views/CompetencesView';
import { ProjetsView } from './views/ProjetsView';
import { QuotidienView } from './views/QuotidienView';
import { ArticleView } from './views/ArticleView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<NavScreen>('accueil');
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Sync with browser URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['accueil', 'parcours', 'competences', 'projets', 'quotidien', 'article', 'contact'].includes(hash)) {
        setCurrentScreen(hash as NavScreen);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (screen: NavScreen) => {
    setCurrentScreen(screen);
    window.location.hash = screen;
  };

  const handleOpenArticle = (slug: string) => {
    setCurrentScreen('article');
    window.location.hash = 'article';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0D1B3E] selection:bg-[#FF8A00] selection:text-white font-sans antialiased">
      {/* Top Navbar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Screen Transition Container */}
      <main className="flex-1 w-full pt-20">
        <div key={currentScreen} className="w-full animate-screen-in">
            {currentScreen === 'accueil' && (
              <HomeView
                onNavigate={handleNavigate}
                onOpenCv={() => setIsCvOpen(true)}
              />
            )}
            {currentScreen === 'parcours' && (
              <ParcoursView
                onNavigate={handleNavigate}
                onOpenCv={() => setIsCvOpen(true)}
              />
            )}
            {currentScreen === 'competences' && (
              <CompetencesView
                onNavigate={handleNavigate}
                onOpenCv={() => setIsCvOpen(true)}
              />
            )}
            {currentScreen === 'projets' && (
              <ProjetsView
                onNavigate={handleNavigate}
                onOpenCv={() => setIsCvOpen(true)}
              />
            )}
            {currentScreen === 'quotidien' && (
              <QuotidienView
                onNavigate={handleNavigate}
                onOpenArticle={handleOpenArticle}
              />
            )}
            {currentScreen === 'article' && (
              <ArticleView
                onNavigate={handleNavigate}
              />
            )}
            {currentScreen === 'contact' && (
              <ContactView
                onOpenCv={() => setIsCvOpen(true)}
              />
            )}
        </div>
      </main>

      {/* Bottom Mobile Quick Dock */}
      <BottomMobileNav
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
      />

      {/* Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Interactive CV Preview Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        onGoToContact={() => handleNavigate('contact')}
      />
    </div>
  );
}
