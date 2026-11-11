/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavScreen } from './Navbar';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCv }) => {
  return (
    <footer className="w-full bg-slate-50 border-t border-[#0D1B3E]/10 pt-16 pb-24 lg:pb-16 text-[#0D1B3E] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#0D1B3E]/10">
          {/* Identity & Bio */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#0D1B3E] p-0.5 shadow-sm">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center font-mono font-bold text-sm text-[#0D1B3E]">
                  <span className="text-[#FF8A00]">A</span>K
                </div>
              </div>
              <div>
                <span className="font-bold text-[#0D1B3E] text-lg tracking-tight block">
                  {PORTFOLIO_DATA.profile.name}
                </span>
                <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-semibold">
                  ENSPD Polytechnique · Douala, CM
                </span>
              </div>
            </div>

            <p className="text-sm text-[#1E3A8A] max-w-md leading-relaxed">
              Ingénieur Full Stack & DevOps certifié (DCA & AWS). Architectures logicielles résilientes, pipelines CI/CD automatisés et transmission technique via l'émission{' '}
              <span className="text-[#FF8A00] font-semibold">« Le Quotidien de l'Ingénieur »</span>.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF8A00] text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
                Disponible pour missions & recrutement
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
              Navigation
            </span>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('accueil'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#0D1B3E] hover:text-[#FF8A00] font-medium transition-colors cursor-pointer text-left"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('parcours'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#0D1B3E] hover:text-[#FF8A00] font-medium transition-colors cursor-pointer text-left"
                >
                  Parcours & Jalons
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('competences'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#0D1B3E] hover:text-[#FF8A00] font-medium transition-colors cursor-pointer text-left"
                >
                  Compétences & Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('projets'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#0D1B3E] hover:text-[#FF8A00] font-medium transition-colors cursor-pointer text-left"
                >
                  Projets & Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('quotidien'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#0D1B3E] hover:text-[#FF8A00] font-medium transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Le Quotidien de l'Ingénieur</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-orange-100 text-[#FF8A00] font-bold">Live</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#0D1B3E] hover:text-[#FF8A00] font-medium transition-colors cursor-pointer text-left"
                >
                  Contact & Demande de Devis
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCv}
                  className="text-[#FF8A00] font-bold hover:underline transition-all cursor-pointer text-left flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">description</span>
                  <span>Consulter le CV complet</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels & Contact */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
              Réseaux & Contact
            </span>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#0D1B3E] hover:text-[#FF8A00] font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#1E3A8A]">terminal</span>
                <span>GitHub · Open Source</span>
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#0D1B3E] hover:text-[#FF8A00] font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#1E3A8A]">badge</span>
                <span>LinkedIn · Profil Pro</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="inline-flex items-center gap-2 text-[#0D1B3E] hover:text-[#FF8A00] font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#FF8A00]">mail</span>
                <span className="truncate">{PORTFOLIO_DATA.profile.email}</span>
              </a>
              <a
                href={PORTFOLIO_DATA.profile.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#FF8A00] font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#FF8A00]">chat</span>
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Baseline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#1E3A8A]">
          <p>© 2026 Aristide Kenfack · ENSPD Polytechnique de Douala · Cameroun</p>
          <div className="flex items-center gap-2 text-[#0D1B3E]">
            <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
            <span className="font-semibold text-[#FF8A00]">Thème Blanc · Textes Bleu & Orange</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
