/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { filterSkillCategories } from '../utils/filterLogic';
import { NavScreen } from '../components/Navbar';

interface CompetencesViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenCv: () => void;
}

export const CompetencesView: React.FC<CompetencesViewProps> = ({ onNavigate, onOpenCv }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = filterSkillCategories(PORTFOLIO_DATA.skillCategories, selectedCategory);

  const filterButtons = [
    { id: 'all', label: 'Toutes les compétences' },
    { id: 'devops', label: 'DevOps, Cloud & CI/CD' },
    { id: 'backend', label: 'Backend & Architecture' },
    { id: 'frontend', label: 'Frontend & Interface' },
    { id: 'mobile', label: 'Mobile Multiplateforme' },
    { id: 'data', label: 'Bases de Données & Caches' },
    { id: 'security', label: 'Sécurité & Qualité' },
  ];

  return (
    <div className="w-full flex flex-col pt-6 pb-20 bg-white">
      {/* 1. HERO SECTION */}
      <section className="w-full px-4 md:px-8 py-12 md:py-16 bg-white border-b border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1B3E]/5 border border-[#0D1B3E]/15 text-[#0D1B3E] text-xs font-mono self-start font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              RÉPERTOIRE TECHNIQUE & MAÎTRISE OPÉRATIONNELLE
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0D1B3E] tracking-tight leading-tight">
              Compétences, Architecture & <span className="text-[#FF8A00]">Stack Technique</span>
            </h1>

            <p className="text-sm sm:text-base text-[#1E3A8A] leading-relaxed font-medium">
              Une vue exhaustive des technologies, outils d'automatisation et pratiques d'ingénierie logicielle éprouvés sur des systèmes en production 24/7 dans des environnements bancaires, logistiques et critiques.
            </p>
          </div>

          {/* 4 Metric Bento Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Technologies</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">layers</span>
              </div>
              <div className="mt-3">
                <div className="text-3xl font-extrabold text-[#0D1B3E]">15+</div>
                <p className="text-xs text-[#1E3A8A] font-medium mt-1">Outils & frameworks maîtrisés de bout en bout</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Qualité Code</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">verified</span>
              </div>
              <div className="mt-3">
                <div className="text-3xl font-extrabold text-[#0D1B3E]">100%</div>
                <p className="text-xs text-[#1E3A8A] font-medium mt-1">Typage strict (TS / Go) & tests automatisés</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Disponibilité</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">bolt</span>
              </div>
              <div className="mt-3">
                <div className="text-3xl font-extrabold text-[#0D1B3E]">0 Downtime</div>
                <p className="text-xs text-[#1E3A8A] font-medium mt-1">Déploiements CI/CD Blue/Green & Rolling</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Latence API</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">speed</span>
              </div>
              <div className="mt-3">
                <div className="text-3xl font-extrabold text-[#0D1B3E]">p95 &lt; 40ms</div>
                <p className="text-xs text-[#1E3A8A] font-medium mt-1">Caches Redis & requêtes SQL profilées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CATEGORY SELECTOR */}
      <section className="w-full px-4 md:px-8 py-6 bg-white sticky top-20 z-30 border-y border-[#0D1B3E]/10 shadow-sm">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 flex-nowrap">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedCategory(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === btn.id
                    ? 'bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white shadow-md shadow-orange-500/20'
                    : 'bg-white text-[#0D1B3E] hover:text-[#FF8A00] hover:bg-slate-50 border border-[#0D1B3E]/15'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#FF8A00] shrink-0 font-bold">
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span>Mode Audit Actif</span>
          </div>
        </div>
      </section>

      {/* 3. DETAILED SKILL CATEGORIES CARDS */}
      <section className="w-full px-4 md:px-8 py-16 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <article
              key={cat.id}
              className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm relative overflow-hidden group hover:border-[#FF8A00]/50 transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8A00] to-[#0D1B3E]" />

              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D1B3E] flex items-center justify-center text-[#FF8A00] shadow-sm">
                    <span className="material-symbols-outlined text-[26px]">{cat.icon}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-slate-50 text-[#0D1B3E] border border-[#0D1B3E]/15 font-bold">
                    {cat.id === 'devops' ? 'Noyau Industriel' : cat.id === 'backend' ? 'Haute Performance' : 'Gouvernance'}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0D1B3E] mb-1 group-hover:text-[#FF8A00] transition-colors">
                  {cat.name}
                </h2>
                <p className="text-xs text-[#1E3A8A] mb-5 leading-relaxed font-medium">{cat.tagline}</p>

                {/* Tech List */}
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-slate-50 border border-[#0D1B3E]/10 rounded-xl p-3.5 flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#0D1B3E] text-sm">{skill.name}</span>
                        <span className="text-xs font-mono font-bold text-[#FF8A00]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#1E3A8A] leading-relaxed font-medium">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#0D1B3E]/10 flex items-center justify-between text-xs font-mono text-[#0D1B3E] font-semibold">
                <span>{cat.footerTag}</span>
                <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">verified</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. CERTIFICATIONS OFFICIELLES & ACCRÉDITATIONS */}
      <section className="w-full px-4 md:px-8 py-16 bg-slate-50 border-y border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              RECONNAISSANCE OFFICIELLE & STANDARDS DE L'INDUSTRIE
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#0D1B3E] tracking-tight">
                  Certifications Professionnelles & Accréditations
                </h2>
                <p className="text-sm text-[#1E3A8A] max-w-2xl mt-1 font-medium">
                  Validations formelles attestant d'une rigueur d'ingénierie et d'une maîtrise des standards cloud et conteneurs en environnement critique.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#0D1B3E]/15 text-[#0D1B3E] text-xs font-mono shrink-0 font-bold shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">verified</span>
                <span>Titres Certifiés & Actifs</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border-2 border-[#0D1B3E]/10 shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF8A00]" />

                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0D1B3E] flex items-center justify-center text-[#FF8A00] shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">{cert.icon}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono bg-slate-50 text-[#0D1B3E] border border-[#0D1B3E]/15 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                      Vérifié & Actif
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider block font-bold">
                    {cert.issuer}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B3E] mt-1 mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1E3A8A] mb-5 leading-relaxed font-medium">
                    {cert.id === 'dca'
                      ? "Accréditation industrielle certifiant la maîtrise approfondie de la conteneurisation d'entreprise, des multi-stage builds et de la résilience opérationnelle."
                      : "Conception d'architectures cloud souveraines, redondantes et scalables, alignées sur le AWS Well-Architected Framework."}
                  </p>

                  <div className="bg-slate-50 border border-[#0D1B3E]/10 rounded-xl p-4 mb-4">
                    <span className="text-xs font-mono text-[#0D1B3E] font-bold block mb-2">
                      Compétences validées :
                    </span>
                    <ul className="text-xs text-[#0D1B3E] space-y-2">
                      {cert.skillsValidated.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] shrink-0" />
                          <span className="font-medium">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0D1B3E]/10 flex items-center justify-between text-xs font-mono text-[#0D1B3E] font-semibold">
                  <span>{cert.code}</span>
                  <span className="inline-flex items-center gap-1 text-[#FF8A00] font-bold">
                    <span className="material-symbols-outlined text-[15px]">workspace_premium</span>
                    <span>Validé Production</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LE CYCLE D'INGÉNIERIE & LIVE TELEMETRY CONSOLE */}
      <section className="w-full px-4 md:px-8 py-16 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF8A00] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              PIPELINE & MÉTHODOLOGIE INTÉGRÉE
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0D1B3E] tracking-tight">
              Le Cycle d'Ingénierie Aristide Kenfack
            </h2>
            <p className="text-sm text-[#1E3A8A] max-w-2xl mt-1 font-medium">
              Comment l'association de l'expertise Full Stack et de la rigueur DevOps garantit la mise en production sans surprise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#FF8A00] font-bold">
                  <span>PHASE 01</span>
                  <span className="material-symbols-outlined text-[20px] text-[#0D1B3E]">description</span>
                </div>
                <h3 className="font-bold text-[#0D1B3E] text-base mb-1">Spécification & Contrats</h3>
                <p className="text-xs text-[#1E3A8A] leading-relaxed mb-4 font-medium">
                  Définition des schémas d'API OpenAPI, typage partagé TypeScript, validation formelle des contraintes métiers.
                </p>
              </div>
              <div className="bg-slate-50 border border-[#0D1B3E]/10 p-2.5 rounded-lg text-xs font-mono text-[#0D1B3E] font-bold truncate">
                $ swagger validate schema.yaml
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#FF8A00] font-bold">
                  <span>PHASE 02</span>
                  <span className="material-symbols-outlined text-[20px] text-[#0D1B3E]">terminal</span>
                </div>
                <h3 className="font-bold text-[#0D1B3E] text-base mb-1">Code Typé & TDD</h3>
                <p className="text-xs text-[#1E3A8A] leading-relaxed mb-4 font-medium">
                  Implémentation en Clean Architecture, tests unitaires et intégration stricts exécutés à chaque validation locale.
                </p>
              </div>
              <div className="bg-slate-50 border border-[#0D1B3E]/10 p-2.5 rounded-lg text-xs font-mono text-[#0D1B3E] font-bold truncate">
                $ go test -race -cover ./...
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#FF8A00] font-bold">
                  <span>PHASE 03</span>
                  <span className="material-symbols-outlined text-[20px] text-[#0D1B3E]">inventory_2</span>
                </div>
                <h3 className="font-bold text-[#0D1B3E] text-base mb-1">Build & Scan Conteneur</h3>
                <p className="text-xs text-[#1E3A8A] leading-relaxed mb-4 font-medium">
                  Multi-stage build Docker réduisant le binaire à &lt; 35MB, audits statiques SAST et vérification des dépendances.
                </p>
              </div>
              <div className="bg-slate-50 border border-[#0D1B3E]/10 p-2.5 rounded-lg text-xs font-mono text-[#0D1B3E] font-bold truncate">
                $ trivy image --severity HIGH app
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#FF8A00] font-bold">
                  <span>PHASE 04</span>
                  <span className="material-symbols-outlined text-[20px] text-[#0D1B3E]">insights</span>
                </div>
                <h3 className="font-bold text-[#0D1B3E] text-base mb-1">Déploiement & Métriques</h3>
                <p className="text-xs text-[#1E3A8A] leading-relaxed mb-4 font-medium">
                  Livraison zéro coupure via Nginx, dashboards Grafana et alertes automatiques en cas d'anomalie de latence.
                </p>
              </div>
              <div className="bg-slate-50 border border-[#0D1B3E]/10 p-2.5 rounded-lg text-xs font-mono text-[#FF8A00] font-bold truncate">
                [PROD] 0 errors · p95: 18ms
              </div>
            </div>
          </div>

          {/* Live Telemetry Console */}
          <div className="rounded-2xl bg-white border-2 border-[#0D1B3E]/15 shadow-sm p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#0D1B3E]/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF8A00]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#0D1B3E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-[#0D1B3E] font-semibold ml-2">telemetry@aristide-infra:~# pipeline-status --active</span>
              </div>
              <span className="text-xs font-mono text-[#FF8A00] uppercase font-bold">Production En Ligne · Douala</span>
            </div>

            <div className="font-mono text-xs sm:text-[13px] space-y-1.5 text-[#0D1B3E] overflow-x-auto leading-relaxed py-1 font-medium">
              <div className="text-[#1E3A8A]"># État du cluster applicatif en direct :</div>
              <div>
                <span className="text-[#FF8A00] font-bold">[HEALTHCHECK]</span> <span className="font-bold">postgres-primary</span> <span className="text-[#FF8A00] font-bold">STATUS: OK</span> (Active connections: 42/200, WAL lag: 0s)
              </div>
              <div>
                <span className="text-[#FF8A00] font-bold">[HEALTHCHECK]</span> <span className="font-bold">redis-sentinel-cache</span> <span className="text-[#FF8A00] font-bold">STATUS: OK</span> (Memory: 148MB / 1GB, Hit ratio: 98.4%)
              </div>
              <div>
                <span className="text-[#FF8A00] font-bold">[HEALTHCHECK]</span> <span className="font-bold">typesense-cluster</span> <span className="text-[#FF8A00] font-bold">STATUS: OK</span> (Indexed docs: 1.4M, Search p99: 12ms)
              </div>
              <div>
                <span className="text-[#1E3A8A] font-bold">[INFRA]</span> <span className="font-bold">nginx-ssl-gateway</span> <span className="text-[#FF8A00] font-bold">HTTP/2 TLS 1.3</span> (Requests/sec: 840, 5xx rate: 0.00%)
              </div>
              <div className="text-[#0D1B3E] pt-1 font-bold">
                ✔ Tous les services critiques opèrent dans les seuils nominaux de disponibilité.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="w-full px-4 md:px-8 py-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#0D1B3E]/15 shadow-sm">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
                AUDIT & CONSEIL TECHNIQUE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B3E]">
                Un besoin spécifique ou une stack technique à auditer ?
              </h3>
              <p className="text-sm text-[#1E3A8A] max-w-xl font-medium">
                Disponible pour des missions d'ingénierie logicielle Full Stack, audit de performance des bases de données et industrialisation complète de vos pipelines DevOps.
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
                <span>Télécharger le CV technique</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
