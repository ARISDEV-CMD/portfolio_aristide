/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { filterTimeline } from '../utils/filterLogic';
import { NavScreen } from '../components/Navbar';

interface ParcoursViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenCv: () => void;
}

export const ParcoursView: React.FC<ParcoursViewProps> = ({ onNavigate, onOpenCv }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [copiedTerminal, setCopiedTerminal] = useState(false);

  const filteredItems = filterTimeline(PORTFOLIO_DATA.timeline, activeFilter);

  const auditScript = `# Audit de déploiement et intégrité système — Aristide Kenfack
$ docker run --rm ak/infra-audit:latest --target=prod
[✓] Reverse Proxy Nginx : TLS 1.3 Strict-Transport-Security actif
[✓] Typesense Cluster : 3 noeuds synchronisés, latence p95 = 28ms
[✓] Redis Queue Worker : 0 job en échec sur 140,290 transactions
[✓] CI/CD Automation : Déploiement sans coupure certifié`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(auditScript);
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2000);
  };

  return (
    <div className="w-full flex flex-col pt-6 pb-20 bg-white">
      {/* 1. HERO BANNER */}
      <section className="w-full px-4 md:px-8 py-12 md:py-16 bg-white border-b border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B3E]/5 border border-[#0D1B3E]/15 text-[#0D1B3E] text-xs font-mono self-start font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              PARCOURS PROFESSIONNEL & EXPÉDITION TECHNIQUE
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0D1B3E] tracking-tight leading-tight">
              Trajectoire, Évolution & <span className="text-[#FF8A00]">Jalons d'Ingénierie</span>
            </h1>

            <p className="text-sm sm:text-base text-[#1E3A8A] leading-relaxed font-medium">
              De la maîtrise rigoureuse des fondations algorithmiques à l'ENSPD au déploiement d'architectures distribuées et pipelines CI/CD résilients. Chronologie détaillée d'un engagement constant vers l'excellence logicielle.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {[
              { id: 'all', label: 'Tous les jalons' },
              { id: 'exp', label: 'Expériences & Rôles' },
              { id: 'infra', label: "Réalisations d'Infrastructure" },
              { id: 'edu', label: 'Formations & Fondations' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === btn.id
                    ? 'bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white shadow-md shadow-orange-500/20'
                    : 'bg-white text-[#0D1B3E] hover:text-[#FF8A00] hover:bg-slate-50 border border-[#0D1B3E]/15'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* KPI Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-white rounded-xl p-4 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FF8A00]">4+</span>
              <span className="text-xs font-mono text-[#0D1B3E] font-bold uppercase mt-1">Années de Pratique</span>
            </div>
            <div className="bg-white rounded-xl p-4 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0D1B3E]">-45%</span>
              <span className="text-xs font-mono text-[#1E3A8A] font-bold uppercase mt-1">Durée Release CI/CD</span>
            </div>
            <div className="bg-white rounded-xl p-4 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FF8A00]">99.9%</span>
              <span className="text-xs font-mono text-[#0D1B3E] font-bold uppercase mt-1">Disponibilité Cible</span>
            </div>
            <div className="bg-white rounded-xl p-4 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">12+</span>
              <span className="text-xs font-mono text-[#0D1B3E] font-bold uppercase mt-1">Pipelines & Microservices</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHRONOLOGIE OPÉRATIONNELLE */}
      <section className="w-full px-4 md:px-8 py-16 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#0D1B3E]/10">
            <div>
              <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
                INDEXATION SÉQUENTIELLE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B3E] mt-1">
                Étapes Clés & Impacts Mesurables (2021 — 2026)
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#1E3A8A] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
              <span>Dernière mise à jour : Production Ready</span>
            </div>
          </div>

          {/* Vertical Timeline Track */}
          <div className="relative pl-6 md:pl-10 flex flex-col gap-10">
            {/* The Rail */}
            <div className="absolute left-2 md:left-4 top-3 bottom-8 w-1 bg-gradient-to-b from-[#FF8A00] via-[#0D1B3E] to-[#1E3A8A] rounded-full" />

            {filteredItems.map((item) => (
              <div key={item.id} className="relative flex flex-col gap-3 group">
                {/* Node Dot */}
                <div className="absolute -left-6 md:-left-10 top-2 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-[#0D1B3E] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-4 border-2 border-[#0D1B3E]/10 shadow-sm hover:border-[#FF8A00]/50 transition-colors">
                  {/* Top line with period & badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#FF8A00] text-white">
                        {item.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 text-[#0D1B3E] border border-[#0D1B3E]/15 font-semibold">
                        {item.typeLabel}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-[#FF8A00] font-bold uppercase tracking-wider">
                      {item.statusBadge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B3E] group-hover:text-[#FF8A00] transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#1E3A8A]">
                      {item.organization}
                    </p>
                  </div>

                  {/* Special Institution Spotlight if ENSPD */}
                  {item.institutionLogo && (
                    <div className="my-2 p-4 rounded-xl bg-slate-50 border-2 border-[#0D1B3E]/10 flex flex-col sm:flex-row items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm border border-[#0D1B3E]/10">
                        <span className="material-symbols-outlined text-3xl text-[#0D1B3E]">school</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#FF8A00] uppercase tracking-wider">
                            Formation d'Élite
                          </span>
                          <span className="text-xs text-[#0D1B3E]/40">•</span>
                          <span className="text-xs font-mono text-[#1E3A8A] font-semibold">Polytechnique Douala</span>
                        </div>
                        <h4 className="font-bold text-[#0D1B3E] text-base mt-0.5">
                          École Nationale Supérieure Polytechnique de Douala (ENSPD)
                        </h4>
                        <p className="text-xs text-[#1E3A8A] mt-1 font-medium">
                          Enseignements approfondis en mathématiques appliquées, génie logiciel, réseaux informatiques et architecture des systèmes distribués.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* KPIs preview if available */}
                  {item.kpis && item.kpis.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
                      {item.kpis.map((kpi, kIdx) => (
                        <div
                          key={kIdx}
                          className="bg-white border-2 border-[#0D1B3E]/10 rounded-xl p-3 flex flex-col justify-between"
                        >
                          <span className="text-xs font-mono text-[#FF8A00] font-bold">
                            {kpi.label}
                          </span>
                          <span className="text-xs text-[#0D1B3E] font-medium mt-1">{kpi.desc}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <div className="flex flex-col gap-2 py-1">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-sm text-[#0D1B3E]">
                        <span className="material-symbols-outlined text-[#FF8A00] text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="leading-relaxed font-medium">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#0D1B3E]/10">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 text-[#0D1B3E] border border-[#0D1B3E]/15 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TERMINAL SNIPPET AUDIT */}
      <section className="w-full px-4 md:px-8 py-10 bg-slate-50 border-y border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-2xl bg-white border-2 border-[#0D1B3E]/15 shadow-sm p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#0D1B3E]/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0D1B3E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-[#0D1B3E] font-semibold ml-2">production-pipeline-audit.sh</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#FF8A00] uppercase font-bold">STATUS: VERIFIED</span>
                <button
                  onClick={handleCopyScript}
                  className="text-xs font-mono text-[#0D1B3E] hover:text-[#FF8A00] flex items-center gap-1 cursor-pointer font-semibold"
                >
                  <span className="material-symbols-outlined text-[15px]">
                    {copiedTerminal ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedTerminal ? 'Copié' : 'Copier'}</span>
                </button>
              </div>
            </div>

            <pre className="font-mono text-xs sm:text-[13px] text-[#0D1B3E] overflow-x-auto leading-relaxed py-2 font-medium">
              {auditScript}
            </pre>
          </div>
        </div>
      </section>

      {/* 4. COLLABORATION CTA */}
      <section className="w-full px-4 md:px-8 py-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#0D1B3E]/15 shadow-sm">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
                ENGAGEMENT TECHNIQUE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B3E]">
                Intéressé par mon parcours pour une mission ou opportunité ?
              </h3>
              <p className="text-sm text-[#1E3A8A] max-w-xl font-medium">
                Disponible pour concevoir des architectures Full Stack, auditer des pipelines CI/CD ou rejoindre votre équipe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={onOpenCv}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white font-bold text-sm shadow-md hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>Télécharger mon CV complet</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Échanger sur votre projet</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
