/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { NavScreen } from '../components/Navbar';

interface QuotidienViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenArticle: (slug: string) => void;
}

export const QuotidienView: React.FC<QuotidienViewProps> = ({ onNavigate, onOpenArticle }) => {
  const [filter, setFilter] = useState<string>('all');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [registeredName, setRegisteredName] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const filteredEpisodes = PORTFOLIO_DATA.episodes.filter((ep) => {
    if (filter === 'all') return true;
    return ep.category === filter;
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registeredEmail || !registeredName) return;
    setRegisterSuccess(true);
    setTimeout(() => {
      setRegisteredEmail('');
      setRegisteredName('');
    }, 4000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Le Quotidien de l'Ingénieur - Aristide Kenfack",
        text: "Découvrez Le Quotidien de l'Ingénieur par Aristide Kenfack (ENSPD Polytechnique de Douala). Masterclasses AWS, Linux et génie logiciel.",
        url: window.location.href,
      }).catch(() => {});
    } else {
      window.open(PORTFOLIO_DATA.profile.whatsappLink, '_blank');
    }
  };

  return (
    <div className="w-full flex flex-col pt-6 pb-20 bg-white">
      {/* 1. NOTIFICATION TICKER */}
      <div className="w-full bg-slate-50 border-b border-[#0D1B3E]/10 py-2.5 px-4 text-xs font-mono text-[#0D1B3E]">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
            <span className="font-bold uppercase tracking-wider text-[#FF8A00]">PROGRAMME OFFICIEL · ENSPD POLYTECH DOUALA</span>
            <span className="hidden sm:inline text-[#0D1B3E]/30">/</span>
            <span className="hidden sm:inline text-[#1E3A8A] font-medium">Série pédagogique & masterclasses cloud par Aristide Kenfack</span>
          </div>
          <a
            href="#prochaine-session"
            className="text-[#FF8A00] hover:underline flex items-center gap-1 font-bold"
          >
            <span>Prochain Meet en Direct</span>
            <span className="material-symbols-outlined text-[14px]">east</span>
          </a>
        </div>
      </div>

      {/* 2. HERO MANIFESTE & AFFICHE */}
      <section className="w-full px-4 md:px-8 py-12 md:py-20 bg-white border-b border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 border border-[#0D1B3E]/15 text-[#0D1B3E] text-xs font-mono self-start font-bold shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">school</span>
              <span>ÉMISSION & SÉRIE TECHNIQUE EXCLUSIVE · PAR ARISTIDE KENFACK</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[#FF8A00] uppercase tracking-widest font-bold">
                COMPRENDRE · APPRENDRE · CONSTRUIRE
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D1B3E] tracking-tight leading-none">
                LE QUOTIDIEN <br />
                <span className="text-[#FF8A00]">DE L'INGÉNIEUR</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#1E3A8A] mt-1">
                Le vrai visage de l'ingénierie logicielle, des systèmes cloud et des labs de production.
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-[#0D1B3E]/10 p-5 rounded-2xl flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-2 text-[#0D1B3E] font-bold text-sm">
                <span className="material-symbols-outlined text-[#FF8A00] text-[20px]">verified</span>
                <span>Élève-Ingénieur à l'ENSPD (École Nationale Supérieure Polytechnique de Douala)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1E3A8A] leading-relaxed font-medium">
                Démystifier les pratiques industrielles, partager des retours d'expérience sans concession et transmettre les standards DevOps de calibre international. Des sessions de code réelles, de l'administration Linux SSH jusqu'au provisionnement haute disponibilité sur AWS.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#prochaine-session"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white font-bold text-sm shadow-md hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">sensors</span>
                <span>Rejoindre la prochaine session en direct</span>
              </a>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] hover:bg-slate-50 transition-all cursor-pointer text-sm font-bold"
              >
                <span className="material-symbols-outlined text-[#FF8A00] text-[18px]">share</span>
                <span>Partager l'émission</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#0D1B3E]/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0D1B3E]">100%</div>
                <span className="text-xs font-mono text-[#1E3A8A] font-bold uppercase">Pratique & Labs</span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF8A00]">ENSPD</div>
                <span className="text-xs font-mono text-[#0D1B3E] font-bold uppercase">Douala, Cameroun</span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF8A00]">LIVE</div>
                <span className="text-xs font-mono text-[#1E3A8A] font-bold uppercase">Google Meet & Open</span>
              </div>
            </div>
          </div>

          {/* Right Column: Poster Feature */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px] rounded-2xl overflow-hidden bg-white border-2 border-[#0D1B3E]/15 p-3 shadow-lg group">
              <div className="rounded-xl overflow-hidden relative aspect-[4/5] bg-slate-50">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPGFEGdNoBk87o3rxZLAKZNIylRM-Glw6XcMUfkaDap3YgD4bdCpwTtDKeclrqKcLXMWu6uUEHBSbmc7qyYWc5xs3bJVROtdgCQuLnirqCvYTPyiW57V8D6yo1yBdWO5_ZGRjDRGCJkji205TR8DQIwNbRWSzNPTDibOvx9F-mqpvR9xNUvRZMY0hYi3U2nPdZ0rnKA2hcn-Q7VA_vl9JIqQDJj6lV9RMgVeS9VN5ezu97j4pG0nA63g"
                  alt="Affiche officielle Le Quotidien de l'Ingénieur par Aristide Kenfack"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 flex items-center justify-between text-xs font-mono text-[#0D1B3E] font-bold">
                <span className="text-[#FF8A00]">#LeQuotidienDeLIngenieur</span>
                <span>Hebdomadaire</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTER & MASTERCLASS CURRICULUM */}
      <section className="w-full px-4 md:px-8 py-6 bg-slate-50 border-b border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#0D1B3E] font-bold text-sm">
            <span className="material-symbols-outlined text-[#FF8A00] text-[20px]">filter_list</span>
            <span>Explorer les masterclasses :</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Toutes' },
              { id: 'aws', label: 'Cloud & AWS EC2' },
              { id: 'security', label: 'Sécurité & SSH' },
              { id: 'polytech', label: "Vie d'Ingénieur & ENSPD" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === btn.id
                    ? 'bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white shadow-md'
                    : 'bg-white text-[#0D1B3E] hover:text-[#FF8A00] hover:bg-slate-100 border border-[#0D1B3E]/15'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MASTERCLASS CATALOG */}
      <section className="w-full px-4 md:px-8 py-16 bg-white">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF8A00] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
              CURRICULUM TECHNIQUE & DIFFUSIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0D1B3E] tracking-tight">
              Masterclasses Récentes & Ateliers Pratiques
            </h2>
            <p className="text-sm text-[#1E3A8A] max-w-2xl mt-1 font-medium">
              Chaque session déconstruit un concept critique d'infrastructure, outille les apprenants avec des commandes reproductibles et répond aux exigences de production.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEpisodes.map((ep) => (
              <article
                key={ep.id}
                className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm hover:border-[#FF8A00]/50 transition-all group"
              >
                {/* Visual Banner */}
                <div className="relative aspect-[16/10] w-full bg-slate-50 overflow-hidden">
                  <img
                    src={ep.image}
                    alt={ep.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-white text-[#FF8A00] border border-[#0D1B3E]/15 shadow-md">
                      {ep.categoryBadge}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-white text-[#0D1B3E] border border-[#0D1B3E]/15 shadow-md">
                      {ep.readTime}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2">
                      {ep.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 text-[#0D1B3E] border border-[#0D1B3E]/15 font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-[#0D1B3E] group-hover:text-[#FF8A00] transition-colors">
                      {ep.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1E3A8A] leading-relaxed font-medium">
                      {ep.description}
                    </p>

                    {/* Interactive terminal preview snippet */}
                    {ep.terminalPreview && (
                      <div className="bg-slate-50 p-3 rounded-xl border border-[#0D1B3E]/10 font-mono text-xs text-[#0D1B3E] space-y-1">
                        <div className="flex items-center justify-between text-[#1E3A8A] text-[11px] pb-1 border-b border-[#0D1B3E]/10 font-semibold">
                          <span>{ep.terminalPreview.title}</span>
                          <span className="text-[#FF8A00] font-bold">Port 22</span>
                        </div>
                        <p className="text-[#0D1B3E] truncate pt-1 font-bold">
                          $ {ep.terminalPreview.command}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#0D1B3E]/10">
                    {ep.id === 'ep-ec2-ssh' ? (
                      <button
                        onClick={() => onOpenArticle(ep.slug)}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">terminal</span>
                        <span>Lire le tutoriel complet pas à pas</span>
                      </button>
                    ) : (
                      <a
                        href="#prochaine-session"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">play_circle</span>
                        <span>Participer au replay & session</span>
                      </a>
                    )}

                    <a
                      href={PORTFOLIO_DATA.profile.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-[#0D1B3E] hover:text-[#FF8A00] flex items-center gap-1 font-bold"
                    >
                      <span className="material-symbols-outlined text-[15px] text-[#FF8A00]">share</span>
                      <span>Partager WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT LIVE GOOGLE MEET & SUBSCRIPTION */}
      <section className="w-full px-4 md:px-8 py-16 bg-slate-50 border-t border-[#0D1B3E]/10" id="prochaine-session">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info box */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF8A00] uppercase font-bold">
              <span className="material-symbols-outlined text-[16px]">calendar_month</span>
              <span>CALENDRIER DES DIFFUSIONS EN DIRECT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D1B3E] tracking-tight">
              Ne manquez pas la prochaine session Google Meet
            </h2>

            <p className="text-sm sm:text-base text-[#1E3A8A] leading-relaxed font-medium">
              Rejoignez gratuitement la communauté des étudiants et ingénieurs passionnés. Posez vos questions en direct sur l'infrastructure cloud, l'automatisation Docker/Kubernetes et l'insertion en entreprise.
            </p>

            <div className="bg-white border-2 border-[#0D1B3E]/10 p-5 rounded-2xl flex flex-col gap-3 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#0D1B3E]/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#FF8A00] text-[28px]">event_available</span>
                  <div>
                    <span className="font-bold text-[#0D1B3E] block text-sm">Session Exclusive · En direct</span>
                    <span className="text-xs font-mono text-[#FF8A00] font-semibold">Dimanche 20h30 (Douala/Paris UTC+1)</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-orange-50 text-[#FF8A00] border border-orange-500/30">
                  EN LIGNE
                </span>
              </div>

              <div className="text-xs text-[#0D1B3E] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FF8A00] text-[16px]">check_circle</span>
                  <span className="font-medium">Démonstration en direct : Terraform & Infrastructure as Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FF8A00] text-[16px]">check_circle</span>
                  <span className="font-medium">Audit de sécurité : clés privées SSH et rôles IAM durcis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FF8A00] text-[16px]">check_circle</span>
                  <span className="font-medium">Questions & Réponses ouvertes avec Aristide Kenfack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right subscription card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#0D1B3E]/15 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF8A00] to-[#EA580C] text-white flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[22px]">notifications_active</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0D1B3E] text-base">
                    Recevoir le lien & l'invitation Google Meet
                  </h3>
                  <span className="text-xs font-mono text-[#1E3A8A]">
                    Sans spam · Uniquement les dates d'ateliers techniques
                  </span>
                </div>
              </div>

              <form onSubmit={handleRegister} className="flex flex-col gap-3 pt-2">
                <div>
                  <label className="text-xs font-mono text-[#0D1B3E] font-bold uppercase block mb-1">
                    Votre Prénom & Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={registeredName}
                    onChange={(e) => setRegisteredName(e.target.value)}
                    placeholder="Ex: Jean-Luc Mbarga"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#0D1B3E]/15 text-[#0D1B3E] placeholder:text-slate-400 text-sm focus:border-[#FF8A00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#0D1B3E] font-bold uppercase block mb-1">
                    Adresse Email Professionnelle ou Étudiante *
                  </label>
                  <input
                    type="email"
                    required
                    value={registeredEmail}
                    onChange={(e) => setRegisteredEmail(e.target.value)}
                    placeholder="Ex: jean.mbarga@enspd-udo.cm"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#0D1B3E]/15 text-[#0D1B3E] placeholder:text-slate-400 text-sm focus:border-[#FF8A00] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white font-bold text-sm shadow-md hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer mt-1 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>S'inscrire à la prochaine session en ligne</span>
                </button>

                {registerSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-500/40 text-emerald-800 text-xs font-mono text-center font-bold">
                    ✔ Inscription validée ! Vous recevrez le lien Google Meet dès fixation de la date.
                  </div>
                )}
              </form>

              <div className="pt-3 border-t border-[#0D1B3E]/10 flex flex-col gap-2 text-center">
                <span className="text-[11px] font-mono text-[#1E3A8A] uppercase font-bold">
                  OU DIRECTEMENT VIA LE CANAL WHATSAPP :
                </span>
                <a
                  href={PORTFOLIO_DATA.profile.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-slate-50 border border-[#0D1B3E]/15 text-[#0D1B3E] text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">chat</span>
                  <span>Rejoindre le canal WhatsApp #LeQuotidienDeLIngenieur</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ANCRAGE ACADÉMIQUE ENSPD POLYTECH DOUALA */}
      <section className="w-full px-4 md:px-8 py-16 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[18px]">account_balance</span>
              <span>ANCRAGE ACADÉMIQUE & FORMATION D'ÉLITE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B3E]">
              École Nationale Supérieure Polytechnique de Douala (ENSPD)
            </h3>
            <p className="text-sm text-[#1E3A8A] leading-relaxed font-medium">
              Le Quotidien de l'Ingénieur est une initiative fondée par Aristide Kenfack au cœur du cursus d'ingénieur de l'ENSPD. L'ambition est de créer un pont indéfectible entre l'excellence scientifique académique camerounaise et les standards mondiaux du Cloud Computing, du DevOps et du Software Engineering.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#0D1B3E] font-bold pt-2">
              <span>• Ingénierie des Systèmes</span>
              <span>• DevOps & Cloud Architecture</span>
              <span>• Transmission & Mentorat</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center p-8 bg-slate-50 border-2 border-[#0D1B3E]/10 rounded-2xl text-center shadow-sm">
            <span className="material-symbols-outlined text-[#FF8A00] text-[48px] mb-2">military_tech</span>
            <span className="font-bold text-[#0D1B3E] text-base">Ensemble vers l'Excellence</span>
            <span className="text-xs font-mono text-[#FF8A00] mt-1 font-bold">#LeQuotidienDeLIngénieur</span>
            <p className="text-xs text-[#1E3A8A] mt-2 font-medium">
              Douala · Cameroun · Afrique Tech
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
