/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavScreen } from './Navbar';

interface BottomMobileNavProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
}

export const BottomMobileNav: React.FC<BottomMobileNavProps> = ({ currentScreen, onNavigate }) => {
  const items: { id: NavScreen; label: string; icon: string }[] = [
    { id: 'accueil', label: 'Accueil', icon: 'home' },
    { id: 'parcours', label: 'Parcours', icon: 'timeline' },
    { id: 'competences', label: 'Compétences', icon: 'terminal' },
    { id: 'projets', label: 'Projets', icon: 'layers' },
    { id: 'quotidien', label: 'Quotidien', icon: 'school' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  const handleTabClick = (screen: NavScreen) => {
    onNavigate(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-2xl border-t border-[#0D1B3E]/10 shadow-[0_-2px_12px_rgba(13,27,62,0.06)] pb-[env(safe-area-inset-bottom,0px)]"
      aria-label="Navigation mobile rapide"
    >
      <div className="flex items-center justify-around h-16 px-2 max-w-lg mx-auto">
        {items.map((item) => {
          const isActive = currentScreen === item.id || (item.id === 'quotidien' && currentScreen === 'article');
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`flex flex-col items-center justify-center min-w-[50px] min-h-[46px] py-1 px-1 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'text-[#FF8A00] font-bold'
                  : 'text-[#1E3A8A] hover:text-[#FF8A00]'
              }`}
            >
              <div className="relative">
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-[#FF8A00]' : 'text-[#1E3A8A]'}`}>
                  {item.icon}
                </span>
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                )}
              </div>
              <span className="text-[10px] font-mono tracking-tight mt-0.5 truncate max-w-[58px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
