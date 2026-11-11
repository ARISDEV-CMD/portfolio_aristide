/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { calculateChecklistScore } from '../utils/filterLogic';
import { NavScreen } from '../components/Navbar';

interface ArticleViewProps {
  onNavigate: (screen: NavScreen) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ onNavigate }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSnippet1, setCopiedSnippet1] = useState(false);
  const [copiedSnippet2, setCopiedSnippet2] = useState(false);
  const [copiedUserData, setCopiedUserData] = useState(false);

  // Interactive Checklist
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    ami: true,
    sg: true,
    perms: true,
    updates: false,
    termination: false,
  });

  const checklistScore = calculateChecklistScore(checklist);

  const toggleCheck = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const copyToClipboard = (text: string, setFn: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setFn(true);
    setTimeout(() => setFn(false), 2000);
  };

  const snippet1 = `mv ~/Downloads/polytech-lab-key.pem ~/.ssh/
chmod 400 ~/.ssh/polytech-lab-key.pem`;

  const snippet2 = `ssh -i ~/.ssh/polytech-lab-key.pem ec2-user@35.180.42.115`;

  const userDataScript = `#!/bin/bash
dnf update -y
dnf install -y git docker htop tmux
systemctl enable --now docker
usermod -aG docker ec2-user
echo "Instance initialisée par Aristide Kenfack (ENSPD)" > /etc/motd`;

  return (
    <div className="w-full flex flex-col pt-6 pb-20 bg-white">
      {/* 1. BREADCRUMBS & TOP BAR */}
      <div className="w-full px-4 md:px-8 py-4 bg-slate-50 border-b border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#0D1B3E] font-medium">
            <button
              onClick={() => onNavigate('accueil')}
              className="hover:text-[#FF8A00] transition-colors cursor-pointer font-bold"
            >
              Accueil
            </button>
            <span className="text-[#FF8A00]">/</span>
            <button
              onClick={() => onNavigate('quotidien')}
              className="hover:text-[#FF8A00] transition-colors cursor-pointer font-bold"
            >
              Le Quotidien de l'Ingénieur
            </button>
            <span className="text-[#FF8A00]">/</span>
            <span className="text-[#0D1B3E] truncate font-bold">
              Créer une instance EC2 AWS & SSH
            </span>
          </div>

          <button
            onClick={() => onNavigate('quotidien')}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0D1B3E] hover:text-[#FF8A00] transition-colors cursor-pointer self-start md:self-auto font-bold"
          >
            <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">arrow_back</span>
            <span>Retour au Quotidien de l'Ingénieur</span>
          </button>
        </div>
      </div>

      {/* 2. ARTICLE HERO & EXECUTIVE SUMMARY */}
      <section className="w-full px-4 md:px-8 py-10 md:py-16 bg-white border-b border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-50 text-[#0D1B3E] border border-[#0D1B3E]/15 font-bold">
                ATELIER TECHNIQUE DE PRODUCTION #04
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-orange-50 text-[#FF8A00] font-bold border border-orange-500/30">
                ENSPD DOUALA
              </span>
              <span className="text-xs font-mono text-[#1E3A8A] font-semibold">8 min de lecture</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B3E] tracking-tight leading-tight">
              Créer une instance <span className="text-[#FF8A00]">EC2 AWS</span> et se connecter en SSH à distance
            </h1>

            <p className="text-sm sm:text-base text-[#1E3A8A] leading-relaxed font-medium">
              Le protocole opérationnel complet de l'ingénieur polytechnicien : du provisionnement de l'AMI Amazon Linux 2023 à l'analyse fine des Security Groups, jusqu'à la sécurisation cryptographique des clés privées RSA/ED25519 (.pem).
            </p>

            {/* Quick Goals Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-50 border-2 border-[#0D1B3E]/10 p-4 rounded-xl flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF8A00] font-bold">
                  <span className="material-symbols-outlined text-[18px]">target</span>
                  <span>Objectifs du Lab</span>
                </div>
                <ul className="text-xs text-[#0D1B3E] space-y-1 font-medium">
                  <li>• Déployer une instance EC2 Free Tier (t2.micro / t3.micro).</li>
                  <li>• Filtrage strict Security Group (Port 22 IP unique).</li>
                  <li>• Tunnel SSH sécurisé sans faille de permission.</li>
                </ul>
              </div>

              <div className="bg-slate-50 border-2 border-[#0D1B3E]/10 p-4 rounded-xl flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#0D1B3E] font-bold">
                  <span className="material-symbols-outlined text-[18px] text-[#FF8A00]">terminal</span>
                  <span>Prérequis Système</span>
                </div>
                <ul className="text-xs text-[#0D1B3E] space-y-1 font-medium">
                  <li>• Compte AWS actif dans une région cible.</li>
                  <li>• Terminal UNIX fonctionnel (Bash, Zsh) ou PowerShell 7+.</li>
                  <li>• Suite OpenSSH native installée.</li>
                </ul>
              </div>
            </div>

            {/* Author Badge & Share buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#0D1B3E]/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D1B3E] flex items-center justify-center font-mono font-bold text-sm text-[#FF8A00]">
                  AK
                </div>
                <div>
                  <span className="font-bold text-[#0D1B3E] text-sm block">Aristide Kenfack</span>
                  <span className="text-xs font-mono text-[#FF8A00] font-bold">Élève-Ingénieur ENSPD · Douala</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(window.location.href, setCopiedLink)}
                  className="px-3.5 py-2 rounded-xl bg-white border-2 border-[#0D1B3E] text-xs font-mono text-[#0D1B3E] hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer font-bold"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#FF8A00]">
                    {copiedLink ? 'check' : 'link'}
                  </span>
                  <span>{copiedLink ? 'Lien copié' : 'Partager'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Poster */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px] rounded-2xl overflow-hidden bg-white border-2 border-[#0D1B3E]/15 p-3 shadow-lg">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkc0y1fWwrbo2yXtTIA-zhUes3c4RDDq0xoRR1DGcd2BzDqMtDLW8-hPdeJsf2qbovS0X4p_12Bx7GECttCcON8oDbMxU8cy04OBYRrBErAUM_qL78WySX-JDpLFP9cmJVSZLy_8Sag8py8bfi5p-L37cssA8kgfH-MipMo6nfJLXg8NxoiWh-ev8YehroH2-6jMtOsHIgFQoQE5c4goFYZfH-9QFd-IO_my9eAr8QRKNty0eecsnXxg"
                alt="Affiche atelier pratique AWS EC2 SSH Aristide Kenfack"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono text-[#0D1B3E] font-bold">
                <span className="text-[#FF8A00]">Support Atelier Officiel</span>
                <span>Édition 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP ARTICLE BODY */}
      <section className="w-full px-4 md:px-8 py-12 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sticky Sidebar Sommaire */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 self-start space-y-4">
            <div className="bg-white rounded-2xl p-5 border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-[#0D1B3E] text-sm pb-3 border-b border-[#0D1B3E]/10">
                <span className="material-symbols-outlined text-[#FF8A00] text-[18px]">list_alt</span>
                <span>Sommaire du Lab</span>
              </div>
              <nav className="flex flex-col gap-2 text-xs font-semibold text-[#0D1B3E] pt-3">
                <a href="#sec-01" className="hover:text-[#FF8A00] transition-colors py-1 flex items-center justify-between">
                  <span>01. Contexte & Architecture Enterprise</span>
                  <span className="font-mono text-[#FF8A00]">01</span>
                </a>
                <a href="#sec-02" className="hover:text-[#FF8A00] transition-colors py-1 flex items-center justify-between">
                  <span>02. Sélection AMI & Dimensionnement</span>
                  <span className="font-mono text-[#FF8A00]">02</span>
                </a>
                <a href="#sec-03" className="hover:text-[#FF8A00] transition-colors py-1 flex items-center justify-between">
                  <span>03. Configuration Security Group (Port 22)</span>
                  <span className="font-mono text-[#FF8A00]">03</span>
                </a>
                <a href="#sec-04" className="hover:text-[#FF8A00] transition-colors py-1 flex items-center justify-between">
                  <span>04. Gestion et Permissions Clés PEM</span>
                  <span className="font-mono text-[#FF8A00]">04</span>
                </a>
                <a href="#sec-05" className="hover:text-[#FF8A00] transition-colors py-1 flex items-center justify-between">
                  <span>05. Connexion SSH Pas à Pas</span>
                  <span className="font-mono text-[#FF8A00]">05</span>
                </a>
                <a href="#sec-06" className="hover:text-[#FF8A00] transition-colors py-1 flex items-center justify-between">
                  <span>06. Checklist de Durcissement Prod</span>
                  <span className="font-mono text-[#FF8A00]">06</span>
                </a>
              </nav>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border-2 border-[#0D1B3E]/10 shadow-sm flex flex-col gap-2 text-xs">
              <span className="font-mono text-[#FF8A00] uppercase font-bold">Spécifications du Lab</span>
              <div className="space-y-1.5 text-[#0D1B3E] font-medium">
                <p><strong className="text-[#0D1B3E]">OS Cible :</strong> Amazon Linux 2023 (AL2023)</p>
                <p><strong className="text-[#0D1B3E]">Instance :</strong> t2.micro / t3.micro</p>
                <p><strong className="text-[#0D1B3E]">Protocole :</strong> SSHv2 (Port 22)</p>
                <p><strong className="text-[#0D1B3E]">Authentification :</strong> Clé Asymétrique RSA</p>
              </div>
            </div>
          </aside>

          {/* Main Article Content */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Section 01 */}
            <div id="sec-01" className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#FF8A00] font-bold">SECTION 01</span>
                <span className="text-[#0D1B3E]/30">/</span>
                <span className="text-[#0D1B3E] font-bold">ARCHITECTURE ENTERPRISE</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0D1B3E] tracking-tight">
                Introduction & Cas d'usage en environnement d'entreprise
              </h2>
              <p className="text-sm text-[#1E3A8A] leading-relaxed font-medium">
                En tant qu'ingénieur, le provisionnement d'instances de calcul n'est pas un acte anodin. Dans l'écosystème AWS, Amazon Elastic Compute Cloud (Amazon EC2) fournit une capacité de calcul redimensionnable dans le cloud. Comprendre son cycle de vie est la fondation indispensable sur laquelle reposent les clusters Kubernetes, les runners CI/CD et les serveurs d'applications conteneurisées.
              </p>
              <p className="text-sm text-[#1E3A8A] leading-relaxed font-medium">
                Pour des infrastructures soumises à de strictes réglementations industrielles, une instance mal configurée représente une passerelle de compromission directe. Cet atelier détaille la méthode appliquée à l'ENSPD garantissant isolation, traçabilité et conformité dès la première seconde d'exécution.
              </p>
            </div>

            {/* Section 02 */}
            <div id="sec-02" className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#FF8A00] font-bold">SECTION 02</span>
                <span className="text-[#0D1B3E]/30">/</span>
                <span className="text-[#0D1B3E] font-bold">PROVISIONNEMENT</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0D1B3E] tracking-tight">
                Choix de l'AMI & Dimensionnement optimisé
              </h2>
              <p className="text-sm text-[#1E3A8A] leading-relaxed font-medium">
                Privilégiez l'Amazon Linux 2023 AMI. Contrairement aux anciennes distributions CentOS ou Ubuntu non optimisées, AL2023 intègre par défaut le client AWS CLI v2, une stack OpenSSL 3 durcie et un noyau Linux 6.1 LTS configuré pour le virtualiseur AWS Nitro.
              </p>

              {/* Specs Comparison Table */}
              <div className="bg-white rounded-xl p-4 overflow-x-auto border-2 border-[#0D1B3E]/10 shadow-sm">
                <table className="w-full text-left text-xs text-[#0D1B3E] font-mono">
                  <thead>
                    <tr className="border-b border-[#0D1B3E]/10 text-[#FF8A00] font-bold">
                      <th className="py-2">Gabarit</th>
                      <th className="py-2">vCPU</th>
                      <th className="py-2">Mémoire</th>
                      <th className="py-2">Hyperviseur</th>
                      <th className="py-2">Réseau</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#0D1B3E]/10">
                    <tr>
                      <td className="py-2.5 font-bold text-[#0D1B3E]">t2.micro</td>
                      <td className="py-2.5">1</td>
                      <td className="py-2.5">1.0 GiB</td>
                      <td className="py-2.5">Xen Legacy</td>
                      <td className="py-2.5">Faible à Modéré</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-[#0D1B3E]">t3.micro</td>
                      <td className="py-2.5">2</td>
                      <td className="py-2.5">1.0 GiB</td>
                      <td className="py-2.5">AWS Nitro</td>
                      <td className="py-2.5">Jusqu'à 5 Gbps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 03 */}
            <div id="sec-03" className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#FF8A00] font-bold">SECTION 03</span>
                <span className="text-[#0D1B3E]/30">/</span>
                <span className="text-[#0D1B3E] font-bold">NETWORK SECURITY</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0D1B3E] tracking-tight">
                Configuration réseau & Règles de Security Groups
              </h2>
              <p className="text-sm text-[#1E3A8A] leading-relaxed font-medium">
                Le Security Group agit comme un pare-feu d'état virtuel. Lors de l'initialisation de l'instance dans votre VPC public, l'erreur la plus commune consiste à autoriser le port 22 pour le CIDR global <code className="text-[#FF8A00] font-mono bg-slate-100 px-1.5 py-0.5 rounded font-bold">0.0.0.0/0</code>.
              </p>

              {/* Security Alert Callout */}
              <div className="p-4 rounded-xl bg-orange-50 border-2 border-[#FF8A00]/40 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#FF8A00] text-[24px] shrink-0 mt-0.5">
                  warning
                </span>
                <div className="flex flex-col gap-1 text-xs sm:text-sm">
                  <span className="font-bold text-[#0D1B3E]">Avertissement de Durcissement : Exposition SSH</span>
                  <p className="text-[#1E3A8A] leading-relaxed font-medium">
                    N'ouvrez jamais le port 22 sur Internet libre (<code className="text-[#FF8A00] font-bold">0.0.0.0/0</code>). Les scanners de vulnérabilités et botnets analysent en continu les plages IP AWS. Sélectionnez systématiquement l'option <strong className="text-[#FF8A00]">"My IP" (Mon adresse IP)</strong> dans la console AWS pour restreindre l'entrée à votre routeur actuel.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 04 */}
            <div id="sec-04" className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#FF8A00] font-bold">SECTION 04</span>
                <span className="text-[#0D1B3E]/30">/</span>
                <span className="text-[#0D1B3E] font-bold">PERMISSIONS CRYPTO</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0D1B3E] tracking-tight">
                Gestion et durcissement des clés SSH (.pem)
              </h2>
              <p className="text-sm text-[#1E3A8A] leading-relaxed font-medium">
                Après le téléchargement du Key Pair généré par AWS (ex. <code className="text-[#FF8A00] font-mono font-bold">polytech-lab-key.pem</code>), le client SSH UNIX refusera d'utiliser cette clé si les permissions d'accès au fichier sont trop permissives (erreur classique <code className="text-red-600 font-mono font-bold">UNPROTECTED PRIVATE KEY FILE!</code>).
              </p>

              {/* Terminal Code Snippet 1 */}
              <div className="rounded-xl bg-white border-2 border-[#0D1B3E]/15 shadow-sm overflow-hidden">
                <div className="bg-slate-50 px-4 py-2.5 flex items-center justify-between border-b border-[#0D1B3E]/10">
                  <span className="text-xs font-mono text-[#0D1B3E] font-bold">bash — terminal</span>
                  <button
                    onClick={() => copyToClipboard(snippet1, setCopiedSnippet1)}
                    className="text-xs font-mono text-[#0D1B3E] hover:text-[#FF8A00] flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <span className="material-symbols-outlined text-[15px] text-[#FF8A00]">
                      {copiedSnippet1 ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedSnippet1 ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
                <div className="p-4 font-mono text-xs sm:text-[13px] text-[#0D1B3E] space-y-1.5 leading-relaxed font-medium">
                  <p className="text-[#1E3A8A]"># 1. Déplacer la clé dans le répertoire sécurisé SSH</p>
                  <p><span className="text-[#FF8A00] font-bold">mv</span> ~/Downloads/polytech-lab-key.pem ~/.ssh/</p>
                  <p className="text-[#1E3A8A]"># 2. Restreindre les permissions en lecture seule au propriétaire</p>
                  <p><span className="text-[#FF8A00] font-bold">chmod</span> <span className="text-[#0D1B3E] font-bold">400</span> ~/.ssh/polytech-lab-key.pem</p>
                </div>
              </div>
            </div>

            {/* Section 05 */}
            <div id="sec-05" className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#FF8A00] font-bold">SECTION 05</span>
                <span className="text-[#0D1B3E]/30">/</span>
                <span className="text-[#0D1B3E] font-bold">EXÉCUTION</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0D1B3E] tracking-tight">
                Connexion pas à pas depuis le terminal local
              </h2>
              <p className="text-sm text-[#1E3A8A] leading-relaxed font-medium">
                Récupérez l'Adresse IPv4 publique attribuée à votre instance EC2 dans le tableau de bord de la console de gestion AWS. Le compte par défaut configuré sur Amazon Linux 2023 est <code className="text-[#FF8A00] font-mono bg-slate-100 px-1.5 py-0.5 rounded font-bold">ec2-user</code>.
              </p>

              {/* Terminal Code Snippet 2 */}
              <div className="rounded-xl bg-white border-2 border-[#0D1B3E]/15 shadow-sm overflow-hidden">
                <div className="bg-slate-50 px-4 py-2.5 flex items-center justify-between border-b border-[#0D1B3E]/10">
                  <span className="text-xs font-mono text-[#0D1B3E] font-bold">Session SSH Interactive</span>
                  <button
                    onClick={() => copyToClipboard(snippet2, setCopiedSnippet2)}
                    className="text-xs font-mono text-[#0D1B3E] hover:text-[#FF8A00] flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <span className="material-symbols-outlined text-[15px] text-[#FF8A00]">
                      {copiedSnippet2 ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedSnippet2 ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
                <div className="p-4 font-mono text-xs sm:text-[13px] text-[#0D1B3E] space-y-2 leading-relaxed font-medium">
                  <p><span className="text-[#FF8A00] font-bold">ssh</span> -i ~/.ssh/polytech-lab-key.pem <span className="text-[#0D1B3E] font-bold">ec2-user</span>@35.180.42.115</p>
                  <div className="text-[#1E3A8A] text-xs">
                    The authenticity of host '35.180.42.115' can't be established.<br />
                    ED25519 key fingerprint is SHA256:8s+j92Xl...<br />
                    Are you sure you want to continue connecting (yes/no)? <span className="text-[#FF8A00] font-bold">yes</span>
                  </div>
                  <div className="text-[#0D1B3E] pt-1 text-xs font-bold">
                    , #_ Amazon Linux 2023<br />
                    ~~\_ ###~ https://aws.amazon.com/linux/amazon-linux-2023<br />
                    ~~ \#\#- AL2023 Kernel 6.1<br />
                    [ec2-user@ip-172-31-38-236 ~]$ <span className="inline-block w-2 h-4 bg-[#FF8A00] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 06: Interactive Checklist */}
            <div id="sec-06" className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#FF8A00] font-bold">SECTION 06</span>
                <span className="text-[#0D1B3E]/30">/</span>
                <span className="text-[#0D1B3E] font-bold">VALIDATION</span>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-2xl font-bold text-[#0D1B3E] tracking-tight">
                  Checklist de Durcissement & Validation en Production
                </h2>
                <div className="px-3 py-1 rounded-full bg-slate-50 border border-[#0D1B3E]/15 text-xs font-mono text-[#0D1B3E] font-bold">
                  Score : <strong className="text-[#FF8A00]">{checklistScore.percentage}%</strong> ({checklistScore.completed}/{checklistScore.total})
                </div>
              </div>
              <p className="text-sm text-[#1E3A8A] font-medium">
                Cochez les critères ci-dessous pour valider la conformité de votre instance avant d'y déployer le moindre service applicatif :
              </p>

              <div className="bg-white rounded-xl p-5 flex flex-col gap-3 border-2 border-[#0D1B3E]/10 shadow-sm">
                {[
                  { key: 'ami', label: "AMI Officielle Vérifiée", desc: "L'instance utilise une AMI signée officielle Amazon Web Services." },
                  { key: 'sg', label: "Port SSH Restreint", desc: "Le port 22 n'est pas ouvert à 0.0.0.0/0 (restreint à l'IP du développeur)." },
                  { key: 'perms', label: "Permissions Clé .pem", desc: "Le fichier local de clé est strictement en chmod 400." },
                  { key: 'updates', label: "Mise à jour Packages", desc: "Exécution de 'sudo dnf update -y' dès la première connexion." },
                  { key: 'termination', label: "Termination Protection", desc: "Option activée dans la console pour éviter la destruction accidentelle." },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-[#0D1B3E]/10 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      onChange={() => toggleCheck(item.key)}
                      className="mt-1 w-4 h-4 rounded accent-[#FF8A00] cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-[#0D1B3E] text-sm">{item.label}</span>
                      <span className="text-xs text-[#1E3A8A] font-medium">{item.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Bootstrap User Data Script */}
            <div className="bg-white rounded-xl p-5 flex flex-col gap-3 border-2 border-[#0D1B3E]/10 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-[#0D1B3E]/10">
                <span className="text-xs font-mono text-[#0D1B3E] uppercase font-bold">
                  Script de Bootstrap Automatisé (User-Data)
                </span>
                <button
                  onClick={() => copyToClipboard(userDataScript, setCopiedUserData)}
                  className="text-xs font-mono text-[#FF8A00] hover:underline flex items-center gap-1 cursor-pointer font-bold"
                >
                  <span className="material-symbols-outlined text-[15px]">
                    {copiedUserData ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedUserData ? 'Copié' : 'Copier le script'}</span>
                </button>
              </div>
              <pre className="p-3 rounded-lg bg-slate-50 border border-[#0D1B3E]/10 font-mono text-xs text-[#0D1B3E] overflow-x-auto leading-relaxed font-semibold">
                {userDataScript}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NAVIGATION TO OTHER EPISODES */}
      <section className="w-full px-4 md:px-8 py-12 bg-slate-50 border-t border-[#0D1B3E]/10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#0D1B3E] uppercase font-bold">
              Poursuivre la lecture · Le Quotidien de l'Ingénieur
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => onNavigate('quotidien')}
              className="bg-white rounded-xl p-5 text-left flex flex-col justify-between group cursor-pointer border-2 border-[#0D1B3E]/10 hover:border-[#FF8A00]/50 shadow-sm transition-all"
            >
              <div>
                <span className="text-xs font-mono text-[#1E3A8A] font-bold uppercase flex items-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-[15px] text-[#FF8A00]">arrow_back</span>
                  <span>Chronique Académique</span>
                </span>
                <h4 className="text-base font-bold text-[#0D1B3E] group-hover:text-[#FF8A00] transition-colors">
                  De l'IUT à l'ENSPD : Élever ses standards d'ingénierie
                </h4>
                <p className="text-xs text-[#1E3A8A] mt-1 font-medium line-clamp-2">
                  Le retour d'expérience d'Aristide Kenfack sur la transition vers Polytechnique Douala.
                </p>
              </div>
              <span className="text-xs font-mono text-[#FF8A00] mt-3 font-bold">Lire la chronique →</span>
            </button>

            <button
              onClick={() => onNavigate('quotidien')}
              className="bg-white rounded-xl p-5 text-left flex flex-col justify-between group cursor-pointer border-2 border-[#0D1B3E]/10 hover:border-[#FF8A00]/50 shadow-sm transition-all"
            >
              <div>
                <span className="text-xs font-mono text-[#1E3A8A] font-bold uppercase flex items-center gap-1 mb-1">
                  <span>Masterclass Suivante</span>
                  <span className="material-symbols-outlined text-[15px] text-[#FF8A00]">arrow_forward</span>
                </span>
                <h4 className="text-base font-bold text-[#0D1B3E] group-hover:text-[#FF8A00] transition-colors">
                  Certification AWS en ligne : Sécurité, Réseau et Coûts
                </h4>
                <p className="text-xs text-[#1E3A8A] mt-1 font-medium line-clamp-2">
                  Stratégie pour valider les examens AWS Cloud Practitioner & Solutions Architect.
                </p>
              </div>
              <span className="text-xs font-mono text-[#FF8A00] mt-3 font-bold">Découvrir l'atelier →</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
