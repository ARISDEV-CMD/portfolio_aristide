/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactViewProps {
  onOpenCv: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenCv }) => {
  // Quote form state
  const [serviceType, setServiceType] = useState('fullstack');
  const [budgetRange, setBudgetRange] = useState('b2');
  const [timeline, setTimeline] = useState('asap');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Visio Meeting Widget state
  const [selectedDay, setSelectedDay] = useState('lun24');
  const [selectedSlot, setSelectedSlot] = useState('11:00');
  const [selectedPlatform, setSelectedPlatform] = useState('meet');
  const [meetingConfirmed, setMeetingConfirmed] = useState(false);

  const days = [
    { id: 'lun24', day: 'Lun', num: '24', month: 'Oct' },
    { id: 'mar25', day: 'Mar', num: '25', month: 'Oct' },
    { id: 'mer26', day: 'Mer', num: '26', month: 'Oct' },
    { id: 'jeu27', day: 'Jeu', num: '27', month: 'Oct' },
    { id: 'ven28', day: 'Ven', num: '28', month: 'Oct' },
  ];

  const timeSlots = ['09:30', '11:00', '14:15', '16:00', '17:30', '18:15'];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setDescription('');
    }, 4000);
  };

  const handleMeetingConfirm = () => {
    setMeetingConfirmed(true);
  };

  return (
    <div className="w-full flex flex-col pt-6 pb-20 bg-white">
      {/* 1. HERO SECTION */}
      <section className="w-full px-4 md:px-8 py-12 md:py-16 bg-white border-b border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-[#0D1B3E]/15 text-[#0D1B3E] text-xs font-mono self-start font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
              CANAUX DIRECTS & ESTIMATION DE MISSION
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0D1B3E] tracking-tight leading-tight">
              Amorcer une Collaboration & <span className="text-[#FF8A00]">Demande de Devis</span>
            </h1>

            <p className="text-sm sm:text-base text-[#1E3A8A] leading-relaxed font-medium">
              Vous avez un projet d'ingénierie logicielle, une infrastructure cloud à industrialiser ou un audit de performance à mener ? Échangeons sous 24h avec une estimation claire et des engagements contractuels stricts.
            </p>
          </div>

          {/* 4 SLA KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">SLA Réponse</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">bolt</span>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0D1B3E]">&lt; 24 heures</div>
                <p className="text-xs text-[#0D1B3E] font-medium mt-1">Délai moyen garanti en jours ouvrés</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Capacité Opérationnelle</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">event_available</span>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF8A00]">Disponible</div>
                <p className="text-xs text-[#0D1B3E] font-medium mt-1">Missions ponctuelles & long terme</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Ancrage & Fuseau</span>
                <span className="material-symbols-outlined text-[20px] text-[#0D1B3E]">public</span>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0D1B3E]">Douala (GMT+1)</div>
                <p className="text-xs text-[#0D1B3E] font-medium mt-1">Présence Cameroun & distanciel mondial</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex flex-col justify-between border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between text-[#0D1B3E]">
                <span className="text-xs font-mono uppercase font-bold text-[#1E3A8A]">Cadre Légal</span>
                <span className="material-symbols-outlined text-[20px] text-[#FF8A00]">verified_user</span>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FF8A00]">NDA & Contrat</div>
                <p className="text-xs text-[#0D1B3E] font-medium mt-1">Devis formalisé et jalons contractuels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORMULAIRE DE CADRAGE + COORDONNÉES & VISIO */}
      <section className="w-full px-4 md:px-8 py-16 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formulaire de Cadrage Technique */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#0D1B3E]/15 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#0D1B3E]/10">
              <div>
                <span className="text-xs font-mono text-[#FF8A00] uppercase font-bold">
                  Formulaire de Cadrage
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0D1B3E] mt-1">
                  Spécifications du besoin
                </h2>
              </div>
              <span className="px-3 py-1 rounded text-xs font-mono bg-slate-50 text-[#0D1B3E] border border-[#0D1B3E]/15 font-bold">
                Étape 01/02
              </span>
            </div>

            <form onSubmit={handleQuoteSubmit} className="flex flex-col gap-6">
              {/* Type de mission */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[#0D1B3E] uppercase font-bold">
                  Type de mission ou périmètre visé *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'fullstack', title: 'Ingénierie Full Stack & SaaS', desc: 'Architecture Next.js, Go, NestJS' },
                    { id: 'devops', title: 'DevOps, CI/CD & Cloud', desc: 'Kubernetes, Docker, AWS/GCP' },
                    { id: 'audit', title: 'Audit & Performance SGBD', desc: 'PostgreSQL, scaling, requêtes' },
                    { id: 'mobile', title: 'Refonte Mobile Flutter', desc: 'Architecture Offline-First' },
                  ].map((srv) => (
                    <label
                      key={srv.id}
                      className={`p-3.5 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                        serviceType === srv.id
                          ? 'bg-orange-50/50 border-[#FF8A00] shadow-sm'
                          : 'bg-white border-[#0D1B3E]/10 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service_type"
                        value={srv.id}
                        checked={serviceType === srv.id}
                        onChange={() => setServiceType(srv.id)}
                        className="mt-1 accent-[#FF8A00]"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#0D1B3E] leading-tight">{srv.title}</span>
                        <span className="text-xs text-[#1E3A8A] font-medium mt-0.5">{srv.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fourchette budgétaire */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[#0D1B3E] uppercase font-bold">
                  Fourchette d'enveloppe budgétaire indicative *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'b1', eur: '< 1 500 €', xaf: 'Moins de 1 000 000 FCFA' },
                    { id: 'b2', eur: '1 500 € – 4 000 €', xaf: '1M FCFA – 2.5M FCFA' },
                    { id: 'b3', eur: '4 000 € – 10 000 €', xaf: '2.5M FCFA – 6.5M FCFA' },
                    { id: 'b4', eur: "Projet d'envergure", xaf: 'Régie longue durée / Retainer' },
                  ].map((bgt) => (
                    <label
                      key={bgt.id}
                      className={`p-3 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                        budgetRange === bgt.id
                          ? 'bg-orange-50/50 border-[#FF8A00] shadow-sm'
                          : 'bg-white border-[#0D1B3E]/10 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget_range"
                        value={bgt.id}
                        checked={budgetRange === bgt.id}
                        onChange={() => setBudgetRange(bgt.id)}
                        className="accent-[#FF8A00]"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#0D1B3E]">{bgt.eur}</span>
                        <span className="text-xs text-[#1E3A8A] font-medium">{bgt.xaf}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[#0D1B3E] font-bold uppercase">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Jean Dupont"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#0D1B3E]/15 text-[#0D1B3E] placeholder:text-slate-400 text-sm focus:border-[#FF8A00] focus:outline-none font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[#0D1B3E] font-bold uppercase">
                    Entreprise ou Structure
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex: FinTech Analytics SAS"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#0D1B3E]/15 text-[#0D1B3E] placeholder:text-slate-400 text-sm focus:border-[#FF8A00] focus:outline-none font-medium"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[#0D1B3E] font-bold uppercase">
                    Email Professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nom@entreprise.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#0D1B3E]/15 text-[#0D1B3E] placeholder:text-slate-400 text-sm focus:border-[#FF8A00] focus:outline-none font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[#0D1B3E] font-bold uppercase">
                    Téléphone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+237 6... ou +33 6..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border-2 border-[#0D1B3E]/15 text-[#0D1B3E] placeholder:text-slate-400 text-sm focus:border-[#FF8A00] focus:outline-none font-medium"
                  />
                </div>
              </div>

              {/* Timeline selector */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[#0D1B3E] font-bold uppercase">
                  Délai d'amorçage envisagé
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'asap', label: 'Immédiat (< 2 sem.)' },
                    { id: '1month', label: 'Sous 1 mois' },
                    { id: '3months', label: 'Trimestre prochain' },
                  ].map((t) => (
                    <label
                      key={t.id}
                      className={`p-2.5 rounded-xl border-2 flex items-center justify-center gap-2 text-center text-xs font-bold cursor-pointer transition-all ${
                        timeline === t.id
                          ? 'bg-orange-50 border-[#FF8A00] text-[#0D1B3E]'
                          : 'bg-white border-[#0D1B3E]/10 text-[#0D1B3E] hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={t.id}
                        checked={timeline === t.id}
                        onChange={() => setTimeline(t.id)}
                        className="accent-[#FF8A00] hidden"
                      />
                      <span>{t.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-[#0D1B3E] font-bold uppercase">
                  Description du besoin ou Cahier des charges *
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Décrivez les objectifs techniques, stack souhaitée, contraintes de scalabilité ou challenges de production rencontrés..."
                  className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#0D1B3E]/15 text-[#0D1B3E] placeholder:text-slate-400 text-sm focus:border-[#FF8A00] focus:outline-none resize-none leading-relaxed font-medium"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A00] via-[#FF9419] to-[#EA580C] text-white font-bold text-sm sm:text-base shadow-md hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>Envoyer la demande de devis technique</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#1E3A8A] text-center font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">lock</span>
                  <span>Réponse garantie sous 24h ouvrées. Vos données restent strictement confidentielles.</span>
                </div>

                {formSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-500/40 text-emerald-800 text-xs sm:text-sm font-mono flex items-center gap-3 font-bold">
                    <span className="material-symbols-outlined text-[24px]">task_alt</span>
                    <span>
                      Votre requête technique a été enregistrée avec succès. Une notification a été expédiée à Aristide Kenfack. Réponse sous 24h.
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Direct Coordinates & Visio Scheduling Widget */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Coordinates Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#0D1B3E]/15 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#0D1B3E]/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FF8A00] text-[20px]">contact_page</span>
                  <h3 className="font-bold text-[#0D1B3E] text-base">Coordonnées Directes</h3>
                </div>
                <span className="text-[10px] font-mono text-[#FF8A00] uppercase font-bold">Actif</span>
              </div>

              <div className="flex flex-col gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-50 border border-[#0D1B3E]/10 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#FF8A00] text-[20px] mt-0.5">alternate_email</span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-mono text-[#0D1B3E] uppercase font-bold">Courriels Directs</span>
                    <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="font-bold text-[#0D1B3E] hover:text-[#FF8A00] truncate">
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                    <a href={`mailto:${PORTFOLIO_DATA.profile.emailAlt}`} className="text-[#1E3A8A] hover:text-[#FF8A00] truncate text-xs font-medium">
                      {PORTFOLIO_DATA.profile.emailAlt}
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-[#0D1B3E]/10 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#FF8A00] text-[20px] mt-0.5">chat</span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-mono text-[#0D1B3E] uppercase font-bold">Téléphone & Messagerie</span>
                    <span className="font-bold text-[#0D1B3E]">{PORTFOLIO_DATA.profile.phone}</span>
                    <span className="text-[#1E3A8A] text-xs font-medium">WhatsApp Business & Signal disponibles</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-[#0D1B3E]/10 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#0D1B3E] text-[20px] mt-0.5">terminal</span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-mono text-[#0D1B3E] uppercase font-bold">Réseaux Professionnels</span>
                    <div className="flex flex-wrap gap-2 mt-1 font-mono text-xs">
                      <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noreferrer" className="text-[#0D1B3E] font-bold hover:text-[#FF8A00] underline">
                        github.com/aristidekenfack
                      </a>
                      <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noreferrer" className="text-[#0D1B3E] font-bold hover:text-[#FF8A00] underline">
                        linkedin.com/in/aristidekenfack
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenCv}
                className="w-full py-2.5 rounded-xl bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#FF8A00]">download</span>
                <span>Télécharger le CV Technique (Format PDF)</span>
              </button>
            </div>

            {/* Interactive 20-min Visio Cadrage Widget */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#0D1B3E]/15 shadow-sm flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#FF8A00] uppercase font-bold">Échange Synchrone</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-50 text-[#0D1B3E] uppercase font-bold">En direct</span>
                  </div>
                  <h3 className="font-bold text-[#0D1B3E] text-base mt-1">Session Visio de Cadrage (20 min)</h3>
                  <span className="text-xs font-mono text-[#1E3A8A] block font-medium">Fuseau : GMT+1 (Douala / Paris)</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 text-[#FF8A00]">
                  <span className="material-symbols-outlined text-[24px]">videocam</span>
                </div>
              </div>

              <p className="text-xs text-[#1E3A8A] font-medium">
                Sélectionnez un créneau disponible sans formalité lourde pour valider l'architecture et la faisabilité de votre stack.
              </p>

              {/* Step 1: Day selector */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-[#0D1B3E] font-bold uppercase">1. Choisir le jour</span>
                <div className="grid grid-cols-5 gap-1.5">
                  {days.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDay(d.id)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        selectedDay === d.id
                          ? 'bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white font-bold shadow-md'
                          : 'bg-slate-50 text-[#0D1B3E] hover:bg-slate-100 border border-[#0D1B3E]/10'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-semibold">{d.day}</span>
                      <span className="text-sm font-bold">{d.num}</span>
                      <span className="text-[9px] uppercase font-semibold">{d.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Time slots */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-[#0D1B3E]">
                  <span className="uppercase font-bold">2. Créneaux disponibles (20 min)</span>
                  <span className="text-[#FF8A00] font-bold">6 créneaux libres</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 px-2 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        selectedSlot === slot
                          ? 'bg-[#0D1B3E] text-white font-bold shadow-md'
                          : 'bg-slate-50 text-[#0D1B3E] hover:bg-slate-100 border border-[#0D1B3E]/10 font-medium'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Platform */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-[#0D1B3E] font-bold uppercase">3. Plateforme préférée</span>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  <label
                    className={`p-2.5 rounded-xl border-2 flex items-center gap-2 cursor-pointer transition-all ${
                      selectedPlatform === 'meet'
                        ? 'bg-orange-50 border-[#FF8A00] text-[#0D1B3E] font-bold'
                        : 'bg-white border-[#0D1B3E]/10 text-[#0D1B3E]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="call_platform"
                      value="meet"
                      checked={selectedPlatform === 'meet'}
                      onChange={() => setSelectedPlatform('meet')}
                      className="accent-[#FF8A00]"
                    />
                    <span>Google Meet</span>
                  </label>

                  <label
                    className={`p-2.5 rounded-xl border-2 flex items-center gap-2 cursor-pointer transition-all ${
                      selectedPlatform === 'zoom'
                        ? 'bg-orange-50 border-[#FF8A00] text-[#0D1B3E] font-bold'
                        : 'bg-white border-[#0D1B3E]/10 text-[#0D1B3E]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="call_platform"
                      value="zoom"
                      checked={selectedPlatform === 'zoom'}
                      onChange={() => setSelectedPlatform('zoom')}
                      className="accent-[#FF8A00]"
                    />
                    <span>Zoom / Teams</span>
                  </label>
                </div>
              </div>

              {/* Confirm Meeting Button */}
              <button
                type="button"
                onClick={handleMeetingConfirm}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Confirmer le créneau ({selectedSlot} · {selectedDay.toUpperCase()})</span>
              </button>

              {meetingConfirmed && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-500/40 text-emerald-800 text-xs font-mono text-center font-bold">
                  ✔ Créneau validé à {selectedSlot} ! Invitation envoyée avec lien {selectedPlatform === 'meet' ? 'Google Meet' : 'Zoom'}.
                </div>
              )}
            </div>

            {/* Methodology step recap */}
            <div className="bg-slate-50 rounded-2xl p-6 border-2 border-[#0D1B3E]/10 shadow-sm flex flex-col gap-4">
              <span className="text-xs font-mono text-[#FF8A00] uppercase font-bold">Méthodologie</span>
              <h3 className="font-bold text-[#0D1B3E] text-base">Ce qui se passe après votre message</h3>

              <div className="flex flex-col gap-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0D1B3E] text-[#FF8A00] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D1B3E] text-xs sm:text-sm">Analyse & Spécifications</h4>
                    <p className="text-xs text-[#1E3A8A] font-medium">
                      Étude minutieuse de vos contraintes techniques, scalabilité et faisabilité sous 24h.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0D1B3E] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D1B3E] text-xs sm:text-sm">Cadrage Technique de 20 min</h4>
                    <p className="text-xs text-[#1E3A8A] font-medium">
                      Point synchrone pour lever les ambiguïtés, calibrer la gouvernance et formaliser la stack cible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0D1B3E] text-[#FF8A00] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D1B3E] text-xs sm:text-sm">Proposition de Devis Formalisée</h4>
                    <p className="text-xs text-[#1E3A8A] font-medium">
                      Envoi d'un chiffrage jalonné avec livrables datés, clauses contractuelles et grille tarifaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GUARANTEES & DEONTOLOGY */}
      <section className="w-full px-4 md:px-8 py-12 bg-slate-50 border-t border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#0D1B3E]/15 shadow-sm">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF8A00] uppercase font-bold">
                <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                <span>Garanties d'Ingénierie & Déontologie</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B3E]">
                Exécution Rigoureuse & Transfert Intégral de Propriété
              </h3>
              <p className="text-xs sm:text-sm text-[#1E3A8A] leading-relaxed font-medium">
                Code 100% typé et couvert par tests automatisés • Zéro downtime garanti sur les migrations cloud • Propriété intellectuelle et code source intégralement cédés dès livraison finale • Spécifications OpenAPI et guides d'exploitation CI/CD systématiquement documentés.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="bg-slate-50 border-2 border-[#0D1B3E]/10 p-4 rounded-xl text-center flex flex-col">
                <span className="text-2xl font-bold text-[#FF8A00]">100%</span>
                <span className="text-[10px] font-mono text-[#0D1B3E] uppercase font-bold">Propriété Cédée</span>
              </div>
              <div className="bg-slate-50 border-2 border-[#0D1B3E]/10 p-4 rounded-xl text-center flex flex-col">
                <span className="text-2xl font-bold text-[#0D1B3E]">99.9%</span>
                <span className="text-[10px] font-mono text-[#1E3A8A] uppercase font-bold">Uptime Cible</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
