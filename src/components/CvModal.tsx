/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToContact: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onGoToContact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0D1B3E]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card in White Theme */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[#0D1B3E]/15 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-[#0D1B3E] animate-modal-in">
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#0D1B3E]/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#0D1B3E] p-0.5 shadow-sm">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-mono font-bold text-xl text-[#0D1B3E]">
                <span className="text-[#FF8A00]">A</span>K
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0D1B3E] tracking-tight">
                {PORTFOLIO_DATA.profile.name}
              </h3>
              <p className="text-sm font-mono text-[#FF8A00] uppercase tracking-wider font-bold">
                {PORTFOLIO_DATA.profile.headline}
              </p>
              <p className="text-xs text-[#1E3A8A] mt-0.5 font-medium">
                {PORTFOLIO_DATA.profile.institution}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-slate-100 border border-[#0D1B3E]/10 text-[#0D1B3E] hover:text-[#FF8A00] hover:bg-orange-50 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fermer le CV"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-6 py-6 text-sm">
          {/* Executive Summary */}
          <div className="bg-slate-50 border border-[#0D1B3E]/10 rounded-xl p-4">
            <span className="text-xs font-mono text-[#FF8A00] font-bold uppercase tracking-wider block mb-1">
              Profil Exécutif
            </span>
            <p className="text-[#0D1B3E] leading-relaxed">
              Ingénieur logiciel Full Stack & DevOps certifié (Docker DCA, AWS SAA). Double compétence en conception de systèmes web/mobiles haute disponibilité (Next.js, Laravel, Go, Flutter) et automatisation industrielle de déploiements sans interruption (Docker multi-stage, Kubernetes, GitHub Actions, Nginx SSL).
            </p>
          </div>

          {/* Certifications */}
          <div>
            <span className="text-xs font-mono text-[#1E3A8A] font-bold uppercase tracking-wider block mb-3">
              Certifications Officielles
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-50 border border-[#0D1B3E]/10 rounded-xl p-3.5 flex items-start gap-3"
                >
                  <span className="material-symbols-outlined text-[24px] text-[#FF8A00] shrink-0 mt-0.5">
                    {cert.icon}
                  </span>
                  <div>
                    <span className="font-bold text-[#0D1B3E] block text-sm leading-snug">
                      {cert.title}
                    </span>
                    <span className="text-xs font-mono text-[#FF8A00] font-semibold block mt-0.5">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-mono text-[#1E3A8A]">
                      {cert.code}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Stack */}
          <div>
            <span className="text-xs font-mono text-[#1E3A8A] font-bold uppercase tracking-wider block mb-3">
              Stack & Compétences Opérationnelles
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-50 border border-[#0D1B3E]/10 rounded-xl p-3.5">
                <span className="font-mono text-xs text-[#FF8A00] font-bold block mb-1">
                  DevOps & Cloud
                </span>
                <p className="text-xs text-[#0D1B3E] leading-relaxed">
                  Docker Multi-Stage, Kubernetes, CI/CD, Nginx TLS 1.3, Linux Bash, Prometheus, Grafana
                </p>
              </div>
              <div className="bg-slate-50 border border-[#0D1B3E]/10 rounded-xl p-3.5">
                <span className="font-mono text-xs text-[#FF8A00] font-bold block mb-1">
                  Backend & SGBD
                </span>
                <p className="text-xs text-[#0D1B3E] leading-relaxed">
                  Node.js, TypeScript, Laravel, Go, Typesense, PostgreSQL, PostGIS, Redis Cache & Queues
                </p>
              </div>
              <div className="bg-slate-50 border border-[#0D1B3E]/10 rounded-xl p-3.5">
                <span className="font-mono text-xs text-[#FF8A00] font-bold block mb-1">
                  Frontend & Mobile
                </span>
                <p className="text-xs text-[#0D1B3E] leading-relaxed">
                  React, Next.js (App Router), Flutter & Dart, React Native, Tailwind CSS, Motion
                </p>
              </div>
            </div>
          </div>

          {/* Education & Academic */}
          <div className="bg-slate-50 border border-[#0D1B3E]/10 rounded-xl p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-white border border-[#0D1B3E]/15 p-2 flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-[#0D1B3E]">school</span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-[#0D1B3E] text-base">
                  École Nationale Supérieure Polytechnique de Douala (ENSPD)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-[#1E3A8A] border border-blue-200">
                  Cursus Ingénieur
                </span>
              </div>
              <p className="text-xs font-mono text-[#FF8A00] font-semibold mt-0.5">
                Génie Informatique & Télécommunications · Douala, Cameroun
              </p>
              <p className="text-xs text-[#1E3A8A] mt-1 leading-relaxed">
                Formation d'élite axée sur les systèmes d'exploitation Unix, la modélisation mathématique appliquée, les protocoles réseaux et les architectures distribuées.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#0D1B3E]/10">
          <span className="text-xs font-mono text-[#1E3A8A]">
            Format PDF disponible pour recruteurs & CTOs
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onGoToContact();
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-100 border border-[#0D1B3E]/15 text-[#0D1B3E] hover:text-[#FF8A00] font-bold text-xs transition-colors cursor-pointer"
            >
              Proposer une mission
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#FF8A00] text-white font-bold text-xs shadow-md hover:bg-[#EA580C] active:scale-95 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Imprimer / Télécharger CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
