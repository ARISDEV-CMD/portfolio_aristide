/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export type NavScreen = 'accueil' | 'parcours' | 'competences' | 'projets' | 'quotidien' | 'article' | 'contact';

interface NavbarProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate, onOpenCv }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavScreen; label: string; icon: string; badge?: string }[] = [
    { id: 'accueil', label: 'Accueil', icon: 'home' },
    { id: 'parcours', label: 'Parcours', icon: 'timeline' },
    { id: 'competences', label: 'Compétences', icon: 'terminal' },
    { id: 'projets', label: 'Projets', icon: 'layers' },
    { id: 'quotidien', label: "Le Quotidien de l'Ingénieur", icon: 'school', badge: 'ENSPD' },
    { id: 'contact', label: 'Contact & Devis', icon: 'mail' },
  ];

  const handleNavClick = (screen: NavScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#0D1B3E]/10 shadow-[0_2px_12px_rgba(13,27,62,0.04)] transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('accueil')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="Accueil Aristide Kenfack"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#0D1B3E] p-0.5 shadow-sm group-hover:border-[#FF8A00] transition-colors">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center font-bold font-mono text-sm tracking-wider text-[#0D1B3E]">
                  <span className="text-[#FF8A00]">A</span>K
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#FF8A00] border-2 border-white" title="Disponible pour missions" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#0D1B3E] tracking-tight text-base group-hover:text-[#FF8A00] transition-colors">
                  {PORTFOLIO_DATA.profile.name}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-[#1E3A8A] border border-blue-200">
                  ENSPD
                </span>
              </div>
              <span className="text-xs font-mono text-[#FF8A00] tracking-wider uppercase font-semibold">
                Full Stack · DevOps
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id || (item.id === 'quotidien' && currentScreen === 'article');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-orange-50 text-[#FF8A00] border border-orange-200 shadow-sm'
                      : 'text-[#0D1B3E] hover:text-[#FF8A00] hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-[#1E3A8A] border border-blue-200">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: CV Trigger & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF8A00] text-white font-bold text-sm shadow-md hover:bg-[#EA580C] active:scale-95 transition-all cursor-pointer"
              aria-label="Consulter le CV"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>CV</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-slate-50 border border-[#0D1B3E]/15 text-[#0D1B3E] flex items-center justify-center hover:text-[#FF8A00] hover:border-[#FF8A00] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer in White Theme */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#0D1B3E]/10 bg-white/98 backdrop-blur-2xl px-4 py-4 shadow-lg animate-screen-in">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = currentScreen === item.id || (item.id === 'quotidien' && currentScreen === 'article');
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-orange-50 text-[#FF8A00] border border-orange-200'
                        : 'text-[#0D1B3E] hover:bg-slate-50 hover:text-[#FF8A00]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-[#FF8A00]' : 'text-[#1E3A8A]'}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {item.badge ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#1E3A8A] border border-blue-200">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-[16px] text-[#0D1B3E]/40">
                        chevron_right
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#0D1B3E]/10 flex items-center justify-between">
                <span className="text-xs font-mono text-[#1E3A8A]">
                  Douala, CM · ENSPD Polytech
                </span>
                <button
                  onClick={() => {
                    onOpenCv();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-mono text-[#FF8A00] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">download</span>
                  <span>Télécharger CV</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
