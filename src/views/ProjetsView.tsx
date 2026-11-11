/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { filterProjects } from '../utils/filterLogic';
import { NavScreen } from '../components/Navbar';

interface ProjetsViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenCv: () => void;
}

export const ProjetsView: React.FC<ProjetsViewProps> = ({ onNavigate, onOpenCv }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filterProjects(PORTFOLIO_DATA.projects, selectedCategory);

  const filterButtons = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'fullstack', label: 'Full Stack & Web' },
    { id: 'devops', label: 'DevOps & Cloud Infra' },
    { id: 'mobile', label: 'Applications Mobiles' },
    { id: 'fintech', label: 'FinTech & Paiements' },
  ];

  return (
    <div className="w-full flex flex-col pt-6 pb-20 bg-white">
      {/* 1. HERO SECTION */}
      <section className="w-full px-4 md:px-8 py-12 md:py-16 bg-white border-b border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B3E]/5 border border-[#0D1B3E]/15 text-[#0D1B3E] text-xs font-mono self-start font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
              RÉALISATIONS & ÉTUDES DE CAS TECHNIQUES
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0D1B3E] tracking-tight leading-tight">
              Systèmes Déployés, <span className="text-[#FF8A00]">Architectures Résilientes</span> & Produits Livrés
            </h1>

            <p className="text-sm sm:text-base text-[#1E3A8A] leading-relaxed font-medium">
              Une sélection de plateformes web, mobiles et d'infrastructures DevOps conçues avec rigueur industrielle, disponibilité continue et impact mesurable à Douala et à l'international.
            </p>
          </div>

          {/* Key Global Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Systèmes Core</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">layers</span>
              </div>
              <div className="mt-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#FF8A00]">5+</div>
                <p className="text-xs text-[#0D1B3E] font-medium mt-1">Systèmes critiques en production 24/7</p>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-[#FF8A00] h-full w-full rounded-full" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Optimisation Index</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">speed</span>
              </div>
              <div className="mt-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0D1B3E]">−30%</div>
                <p className="text-xs text-[#0D1B3E] font-medium mt-1">Latence d'indexation Typesense</p>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-[#0D1B3E] h-full w-[70%] rounded-full" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">SLA Infrastructure</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">verified</span>
              </div>
              <div className="mt-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#FF8A00]">99.98%</div>
                <p className="text-xs text-[#0D1B3E] font-medium mt-1">Disponibilité serveurs & CI/CD</p>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-[#FF8A00] h-full w-[99.98%] rounded-full" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Débit Charge FinTech</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">bolt</span>
              </div>
              <div className="mt-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0D1B3E]">2 000+</div>
                <p className="text-xs text-[#0D1B3E] font-medium mt-1">Transactions/sec sans dégradation</p>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-[#0D1B3E] h-full w-[85%] rounded-full" />
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedCategory(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === btn.id
                    ? 'bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white shadow-md shadow-orange-500/20'
                    : 'bg-white text-[#0D1B3E] hover:text-[#FF8A00] hover:bg-slate-50 border border-[#0D1B3E]/15'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CASE STUDIES DEEP DIVE */}
      <section className="w-full px-4 md:px-8 py-16 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border-2 border-[#0D1B3E]/10 shadow-sm hover:border-[#FF8A00]/50 transition-all"
              >
                {/* Visual / Telemetry Column */}
                <div
                  className={`lg:col-span-6 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 ${
                    isEven ? 'lg:border-r border-[#0D1B3E]/10' : 'lg:order-2 lg:border-l border-[#0D1B3E]/10'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0D1B3E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-mono text-[#0D1B3E] font-semibold ml-2">
                        {project.id}.cluster.prod
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#0D1B3E] border border-[#0D1B3E]/15 uppercase font-bold">
                      Live Monitor
                    </span>
                  </div>

                  {/* Terminal telemetry block */}
                  {project.terminalLogs && (
                    <div className="my-4 font-mono text-xs text-[#0D1B3E] space-y-1.5 bg-white p-4 rounded-xl border border-[#0D1B3E]/15 shadow-inner font-medium">
                      {project.terminalLogs.map((log, lIdx) => (
                        <div key={lIdx} className="leading-relaxed">
                          <span className="text-[#FF8A00] font-bold mr-2">▸</span>
                          <span className={log.includes('passed') || log.includes('OK') || log.includes('100%') ? 'text-[#FF8A00] font-bold' : ''}>
                            {log}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Image Preview */}
                  <div className="relative rounded-xl overflow-hidden h-48 bg-white border border-[#0D1B3E]/10 mt-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content & Specs Column */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between ${
                    isEven ? '' : 'lg:order-1'
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono text-[#FF8A00] uppercase font-bold">
                        {project.subtitle}
                      </span>
                      <span className="text-[#0D1B3E]/30">•</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 text-[#0D1B3E] border border-[#0D1B3E]/15 font-bold">
                        {project.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B3E] tracking-tight">
                      {project.title}
                    </h2>

                    <p className="text-sm text-[#1E3A8A] leading-relaxed font-medium">
                      {project.description}
                    </p>

                    {/* Impact Metrics 3-Col Box */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 my-2">
                      {project.impactMetrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-slate-50 border border-[#0D1B3E]/10 p-3 rounded-xl flex flex-col justify-between text-center sm:text-left"
                        >
                          <span className="text-base sm:text-lg font-bold text-[#FF8A00]">
                            {metric.value}
                          </span>
                          <span className="text-[11px] text-[#0D1B3E] mt-0.5 font-mono font-semibold">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 text-[#0D1B3E] border border-[#0D1B3E]/15 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-6 mt-4 border-t border-[#0D1B3E]/10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">account_tree</span>
                      <span>Consulter l'architecture</span>
                    </button>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] hover:bg-slate-50 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#FF8A00]">chat</span>
                      <span>Cadrer un projet similaire</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. MODAL DE DÉTAIL D'ARCHITECTURE */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-modal-in">
          <div className="relative w-full max-w-2xl bg-white border-2 border-[#0D1B3E]/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#0D1B3E] max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-[#0D1B3E]/10">
              <div>
                <span className="text-xs font-mono text-[#FF8A00] uppercase font-bold">
                  Spécification Technique
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B3E] mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-xl bg-slate-50 border border-[#0D1B3E]/15 text-[#0D1B3E] hover:text-[#FF8A00] flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="py-6 flex flex-col gap-6 text-sm">
              <p className="text-[#1E3A8A] leading-relaxed font-medium">
                {selectedProject.description}
              </p>

              <div>
                <span className="text-xs font-mono text-[#FF8A00] font-bold uppercase tracking-wider block mb-2">
                  Points Clés de l'Architecture
                </span>
                <ul className="space-y-2.5 text-[#0D1B3E]">
                  {selectedProject.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] shrink-0 mt-2" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono text-[#0D1B3E] font-bold uppercase tracking-wider block mb-2">
                  Stack & Outils Impliqués
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-slate-50 border border-[#0D1B3E]/15 text-[#0D1B3E] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#0D1B3E]/10 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-50 text-[#0D1B3E] hover:bg-slate-100 text-xs font-bold border border-[#0D1B3E]/15 cursor-pointer"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onNavigate('contact');
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white text-xs font-bold shadow-md hover:brightness-105 cursor-pointer"
              >
                Discuter de cette architecture
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. WORKFLOW & STANDARDS DE LIVRAISON */}
      <section className="w-full px-4 md:px-8 py-16 bg-slate-50 border-t border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
              RIGUEUR INDUSTRIELLE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0D1B3E] tracking-tight">
              Workflow & Standards de Livraison
            </h2>
            <p className="text-sm text-[#1E3A8A] font-medium">
              Chaque projet confié à Aristide Kenfack répond aux critères stricts de maintenabilité, d'observabilité et de sécurité logicielle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0D1B3E] flex items-center justify-center text-[#FF8A00] mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">contract</span>
                </div>
                <span className="text-xs font-mono text-[#FF8A00] font-bold block mb-1">01. ARCHITECTURE PREMIÈRE</span>
                <h3 className="text-lg font-bold text-[#0D1B3E] mb-2">Spécifications & Contrats API Clairs</h3>
                <p className="text-xs sm:text-sm text-[#1E3A8A] leading-relaxed font-medium">
                  Rédaction formelle des schémas OpenAPI / Swagger avant toute implémentation. Typage strict de bout en bout (TypeScript / Go) et validation systématique de toutes les requêtes en entrée.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#0D1B3E]/10 text-xs font-mono text-[#0D1B3E] font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">check_circle</span>
                <span>Zéro dérive de schéma</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0D1B3E] flex items-center justify-center text-[#FF8A00] mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">fact_check</span>
                </div>
                <span className="text-xs font-mono text-[#FF8A00] font-bold block mb-1">02. QUALITÉ PROUVÉE</span>
                <h3 className="text-lg font-bold text-[#0D1B3E] mb-2">Tests Automatisés & CI/CD</h3>
                <p className="text-xs sm:text-sm text-[#1E3A8A] leading-relaxed font-medium">
                  Couverture de tests unitaires et d'intégration systématique (Jest, PHPUnit, suites Go). Linting rigoureux, hooks de pré-commit stricts et validation automatique avant tout merge.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#0D1B3E]/10 text-xs font-mono text-[#0D1B3E] font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">check_circle</span>
                <span>Couverture critique &gt; 85%</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0D1B3E] flex items-center justify-center text-[#FF8A00] mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">monitoring</span>
                </div>
                <span className="text-xs font-mono text-[#FF8A00] font-bold block mb-1">03. RÉSILIENCE OPÉRATIONNELLE</span>
                <h3 className="text-lg font-bold text-[#0D1B3E] mb-2">Conteneurs & Monitoring Actif</h3>
                <p className="text-xs sm:text-sm text-[#1E3A8A] leading-relaxed font-medium">
                  Construction d'images Docker multi-stage épurées sans failles CVE identifiées. Collecte des métriques vitales sous Prometheus, dashboards Grafana et alertes instantanées.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#0D1B3E]/10 text-xs font-mono text-[#0D1B3E] font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">check_circle</span>
                <span>Traçabilité & alerting continu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="w-full px-4 md:px-8 py-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#0D1B3E]/15 shadow-sm">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
                INGÉNIERIE & INFRASTRUCTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B3E]">
                Vous avez un projet technique ambitieux ?
              </h3>
              <p className="text-sm text-[#1E3A8A] max-w-xl font-medium">
                Disponible pour des missions d'ingénierie logicielle Full Stack, audit de performance backend, sécurisation et déploiement DevOps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white font-bold text-sm shadow-md hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Démarrer un projet</span>
              </button>
              <button
                onClick={onOpenCv}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#FF8A00]">download</span>
                <span>Télécharger mon CV (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
