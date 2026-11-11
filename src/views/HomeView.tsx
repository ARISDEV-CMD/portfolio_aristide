/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { NavScreen } from '../components/Navbar';

interface HomeViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenCv: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenCv }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippet = `// Aristide Kenfack · Software Engineer & DevOps
// Douala, CM · Target: Production Cluster
interface EngineerProfile {
  name: "Aristide Kenfack",
  location: "Douala, CM",
  institution: "ENSPD Polytech",
  metrics: { uptime: "99.98%", latencyDrop: "-30%" }
};

const stack = {
  backend: "Laravel / Node.js / Spring / Go",
  frontend: "Next.js / Flutter / React",
  devops: "Docker / CI-CD / Nginx / K8s"
};

async function deployToProduction() {
  await containerRegistry.push(stack);
  return triggerPipeline({ zeroDowntime: true });
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-12 pb-20 md:pt-16 md:pb-28 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Badges: Status & Academic */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF8A00] text-xs font-mono font-bold shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A00] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A00]" />
                  </span>
                  <span>Ouvert aux opportunités · Douala, CM</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs font-mono font-bold">
                  <span className="material-symbols-outlined text-[15px]">school</span>
                  <span>ENSPD Polytechnique</span>
                </div>
              </div>

              {/* Title & Identity */}
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D1B3E] leading-[1.1]">
                  Aristide <span className="text-[#1E3A8A]">Kenfack</span>
                </h1>
                <p className="text-2xl sm:text-3xl font-bold text-[#0D1B3E]">
                  Full Stack & <span className="text-[#FF8A00]">DevOps</span>
                </p>
              </div>

              {/* Bio Statement */}
              <p className="text-base sm:text-lg text-[#1E3A8A] max-w-2xl leading-relaxed">
                {PORTFOLIO_DATA.profile.bio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('projets')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF8A00] text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#EA580C] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Voir mes projets</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>

                <button
                  onClick={onOpenCv}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm sm:text-base hover:border-[#FF8A00] hover:text-[#FF8A00] transition-all cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">download</span>
                  <span>Mon CV</span>
                </button>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href={PORTFOLIO_DATA.profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-[#0D1B3E]/15 flex items-center justify-center text-[#0D1B3E] hover:text-[#FF8A00] hover:border-[#FF8A00] transition-all cursor-pointer shadow-sm"
                    aria-label="GitHub Aristide Kenfack"
                  >
                    <span className="material-symbols-outlined text-[22px]">terminal</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-[#0D1B3E]/15 flex items-center justify-center text-[#0D1B3E] hover:text-[#FF8A00] hover:border-[#FF8A00] transition-all cursor-pointer shadow-sm"
                    aria-label="LinkedIn Aristide Kenfack"
                  >
                    <span className="material-symbols-outlined text-[22px]">badge</span>
                  </a>
                </div>
              </div>

              {/* Verified Accreditations Ribbon */}
              <div className="flex flex-wrap items-center gap-2.5 pt-3">
                <span className="text-xs font-mono text-[#1E3A8A] font-bold">Titres certifiés :</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0D1B3E]">
                  <span className="material-symbols-outlined text-[15px] text-[#FF8A00]">verified</span>
                  Docker Certified Associate
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-[#FF8A00]">
                  <span className="material-symbols-outlined text-[15px]">cloud_done</span>
                  AWS Certified Architect
                </span>
              </div>
            </div>

            {/* Right Column: Clean White Terminal */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-2xl bg-white border-2 border-[#0D1B3E]/15 shadow-xl overflow-hidden">
                {/* Window Header */}
                <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-[#0D1B3E]/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF8A00]" />
                      <span className="w-3 h-3 rounded-full bg-[#0D1B3E]" />
                      <span className="w-3 h-3 rounded-full bg-slate-300" />
                    </div>
                    <span className="text-xs font-mono text-[#0D1B3E] font-bold pl-2">deploy.prod.ts</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-50 text-[#FF8A00] border border-orange-200 font-bold">
                      LIVE SESSION
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="p-1 text-[#0D1B3E] hover:text-[#FF8A00] transition-colors cursor-pointer"
                      title="Copier le code"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {copiedCode ? 'check' : 'content_copy'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Code Content in Blue & Orange */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed flex flex-col gap-1 text-[#0D1B3E] bg-white overflow-x-auto">
                  <span className="text-[#1E3A8A] opacity-70">// Aristide Kenfack · Software Engineer & DevOps</span>
                  <span className="text-[#1E3A8A] opacity-70">// Douala, CM · Target: Production Cluster</span>
                  
                  <div className="pt-2">
                    <span className="text-[#FF8A00] font-bold">interface</span> <span className="text-[#0D1B3E] font-bold">EngineerProfile</span> {'{'}
                  </div>
                  <div className="pl-4">
                    name: <span className="text-[#1E3A8A] font-semibold">"Aristide Kenfack"</span>,
                  </div>
                  <div className="pl-4">
                    location: <span className="text-[#1E3A8A] font-semibold">"Douala, CM"</span>,
                  </div>
                  <div className="pl-4">
                    metrics: {'{'} uptime: <span className="text-[#FF8A00] font-bold">"99.98%"</span>, latencyDrop: <span className="text-[#FF8A00] font-bold">"-30%"</span> {'}'}
                  </div>
                  <div>{'};'}</div>

                  <div className="pt-2">
                    <span className="text-[#FF8A00] font-bold">const</span> stack = {'{'}
                  </div>
                  <div className="pl-4">
                    backend: <span className="text-[#1E3A8A] font-semibold">"Laravel / Node.js / Spring / Go"</span>,
                  </div>
                  <div className="pl-4">
                    frontend: <span className="text-[#1E3A8A] font-semibold">"Next.js / Flutter / React"</span>,
                  </div>
                  <div className="pl-4">
                    devops: <span className="text-[#1E3A8A] font-semibold">"Docker / CI-CD / Nginx / K8s"</span>
                  </div>
                  <div>{'};'}</div>

                  <div className="pt-2">
                    <span className="text-[#FF8A00] font-bold">async function</span> <span className="text-[#0D1B3E] font-bold">deployToProduction</span>() {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-[#FF8A00]">await</span> containerRegistry.<span className="text-[#1E3A8A]">push</span>(stack);
                  </div>
                  <div className="pl-4">
                    <span className="text-[#FF8A00]">return</span> triggerPipeline({'{'} zeroDowntime: <span className="text-[#FF8A00] font-bold">true</span> {'}'});
                  </div>
                  <div>{'}'}</div>

                  <div className="pt-3 flex items-center gap-2 text-[#0D1B3E]">
                    <span className="animate-pulse text-[#FF8A00] font-bold">&gt;</span>
                    <span className="text-[#1E3A8A]">status:</span>
                    <span className="text-[#FF8A00] font-bold">READY FOR DEPLOYMENT</span>
                  </div>
                </div>

                {/* Window Footer */}
                <div className="px-4 py-2 bg-slate-50 border-t border-[#0D1B3E]/10 flex items-center justify-between text-[11px] font-mono text-[#1E3A8A]">
                  <span>utf-8 · typescript · node:22</span>
                  <span className="text-[#FF8A00] font-bold">CI/CD: Passed (0 errors)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Bento Ribbon */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#0D1B3E]/10 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:border-[#FF8A00]/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between text-[#1E3A8A]">
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">
                    {stat.label}
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">
                    {idx === 0 ? 'schedule' : idx === 1 ? 'layers' : idx === 2 ? 'speed' : 'all_inclusive'}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0D1B3E] tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs text-[#1E3A8A] mt-1 font-medium">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS SHOWCASE */}
      <section className="w-full py-20 px-4 md:px-8 bg-slate-50/70 border-t border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF8A00] text-xs font-mono font-bold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                RÉALISATIONS MAJEURES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B3E] tracking-tight">
                Projets Récents & Systèmes en Production
              </h2>
              <p className="text-[#1E3A8A] text-sm sm:text-base mt-2 max-w-2xl">
                Sélection d'architectures logicielles complètes alliant performances mesurables, résilience sous charge et pipelines automatisés.
              </p>
            </div>

            <button
              onClick={() => onNavigate('projets')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF8A00] hover:text-[#0D1B3E] transition-colors cursor-pointer self-start md:self-end"
            >
              <span>Explorer les 4 projets en détail</span>
              <span className="material-symbols-outlined text-[18px]">east</span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.projects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="bg-white border border-[#0D1B3E]/10 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all shadow-sm hover:shadow-md hover:border-[#FF8A00]/40"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-white text-[#FF8A00] border border-orange-200 shadow-sm">
                    {proj.impactMetrics[0]?.value} {proj.impactMetrics[0]?.label}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4 bg-white">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-[#FF8A00] font-bold uppercase tracking-wider">
                      {proj.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-[#0D1B3E] group-hover:text-[#FF8A00] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1E3A8A] line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-50 text-[#0D1B3E] border border-blue-200 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onNavigate('projets')}
                      className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] hover:border-[#FF8A00] hover:text-[#FF8A00] font-bold text-xs transition-colors cursor-pointer"
                    >
                      <span>Examiner l'architecture</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THREE ENGINEERING PILLARS */}
      <section className="w-full py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
              MÉTHODOLOGIE ET STANDARDS DE LIVRAISON
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B3E] tracking-tight">
              Trois Piliers d'Excellence Industrielle
            </h2>
            <p className="text-sm sm:text-base text-[#1E3A8A]">
              Chaque système développé respecte une discipline stricte : découplage propre, validation par tests et observabilité en direct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#0D1B3E]/10 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#FF8A00]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-5 text-[#FF8A00] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">dns</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">
                  Architecture Web & API Scalable
                </h3>
                <p className="text-sm text-[#1E3A8A] leading-relaxed">
                  Conception d'APIs REST modulaires avec Laravel, Node.js et Go. Contrats OpenAPI typés de bout en bout, modélisation SQL optimisée et gestion de flux asynchrones via Redis Queues.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0D1B3E]/10 text-xs font-mono text-[#FF8A00] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Zéro dérive de schéma</span>
              </div>
            </div>

            <div className="bg-white border border-[#0D1B3E]/10 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#FF8A00]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5 text-[#1E3A8A] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">devices</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">
                  Expérience Mobile & Web Réactive
                </h3>
                <p className="text-sm text-[#1E3A8A] leading-relaxed">
                  Interfaces riches Next.js (App Router, RSC) et applications mobiles Flutter 60fps. Priorité accordée au mode Offline-First, synchronisation résiliente et temps de chargement éclair.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0D1B3E]/10 text-xs font-mono text-[#1E3A8A] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Score Core Web Vitals 95+</span>
              </div>
            </div>

            <div className="bg-white border border-[#0D1B3E]/10 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#FF8A00]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-5 text-[#FF8A00] shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">terminal</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">
                  Culture DevOps & Observabilité
                </h3>
                <p className="text-sm text-[#1E3A8A] leading-relaxed">
                  Conteneurisation Docker multi-stage épurée (&lt; 35MB). Pipelines GitHub Actions automatisés, reverse proxy Nginx HTTP/2 TLS 1.3 et surveillance Prometheus/Grafana 24/7.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#0D1B3E]/10 text-xs font-mono text-[#FF8A00] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Déploiements Zero-Downtime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHOWCASE: LE QUOTIDIEN DE L'INGÉNIEUR */}
      <section className="w-full py-20 px-4 md:px-8 bg-slate-50/70 border-t border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-white border border-[#0D1B3E]/15 rounded-3xl p-6 sm:p-10 shadow-md flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-[#1E3A8A] border border-blue-200 font-bold">
                  ÉMISSION & MASTERCLASSES EN DIRECT
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-50 text-[#FF8A00] border border-orange-200 font-bold">
                  ENSPD DOUALA
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] tracking-tight leading-tight">
                Le Quotidien de l'Ingénieur
              </h2>
              <p className="text-sm sm:text-base text-[#FF8A00] font-bold">
                Comprendre · Apprendre · Construire · Par Aristide Kenfack
              </p>
              <p className="text-sm sm:text-base text-[#1E3A8A] leading-relaxed">
                Le rendez-vous hebdomadaire d'ingénierie appliquée : découvrez nos ateliers pratiques sur le Cloud AWS, l'administration de machines virtuelles EC2 et la préparation aux certifications de référence.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('quotidien')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF8A00] text-white font-bold text-sm shadow-md hover:bg-[#EA580C] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">school</span>
                  <span>Voir toutes les masterclasses</span>
                </button>

                <button
                  onClick={() => onNavigate('article')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm hover:border-[#FF8A00] hover:text-[#FF8A00] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#FF8A00]">terminal</span>
                  <span>Lire l'atelier : EC2 AWS & SSH</span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[380px] shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#0D1B3E]/15 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPGFEGdNoBk87o3rxZLAKZNIylRM-Glw6XcMUfkaDap3YgD4bdCpwTtDKeclrqKcLXMWu6uUEHBSbmc7qyYWc5xs3bJVROtdgCQuLnirqCvYTPyiW57V8D6yo1yBdWO5_ZGRjDRGCJkji205TR8DQIwNbRWSzNPTDibOvx9F-mqpvR9xNUvRZMY0hYi3U2nPdZ0rnKA2hcn-Q7VA_vl9JIqQDJj6lV9RMgVeS9VN5ezu97j4pG0nA63g"
                  alt="Affiche Officielle Le Quotidien de l'Ingénieur - Aristide Kenfack"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / DIRECT CONTACT BAND */}
      <section className="w-full py-16 px-4 md:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-white border-2 border-[#0D1B3E]/15 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
                COLLABORATION & RECRUTEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B3E]">
                Un projet d'infrastructure ou une application à concevoir ?
              </h2>
              <p className="text-sm text-[#1E3A8A] max-w-xl">
                Disponible pour des missions d'ingénierie Full Stack, audit de bases de données et industrialisation DevOps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF8A00] text-white font-bold text-sm shadow-md hover:bg-[#EA580C] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Demander un devis technique</span>
              </button>
              <button
                onClick={onOpenCv}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-sm hover:border-[#FF8A00] hover:text-[#FF8A00] transition-all cursor-pointer"
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
