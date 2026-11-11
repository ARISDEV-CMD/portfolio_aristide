/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'devops' | 'mobile' | 'fintech';
  categoryLabel: string;
  badge: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  terminalLogs?: string[];
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
  architectureDetails: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  accent: 'electric-orange' | 'institutional-gold' | 'violet';
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
  footerTag: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'exp' | 'infra' | 'edu';
  typeLabel: string;
  statusBadge: string;
  highlights: string[];
  kpis?: { label: string; value: string; desc: string }[];
  tags: string[];
  institutionLogo?: string;
}

export interface MasterclassEpisode {
  id: string;
  slug: string;
  title: string;
  category: 'aws' | 'security' | 'polytech';
  categoryBadge: string;
  badgeAccent: string;
  readTime: string;
  description: string;
  image: string;
  tags: string[];
  terminalPreview?: {
    title: string;
    command: string;
  };
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  icon: string;
  code: string;
  accent: string;
  skillsValidated: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Aristide Kenfack",
    title: "Full Stack & DevOps",
    headline: "Ingénieur Full Stack & DevOps",
    institution: "Élève-Ingénieur à l'ENSPD (École Nationale Supérieure Polytechnique de Douala)",
    location: "Douala, Cameroun",
    timezone: "GMT+1 (WAT)",
    bio: "Je conçois des architectures web et mobiles hautement scalables, avec une rigueur DevOps intégrée : conteneurisation Docker multi-stage, pipelines CI/CD résilients et monitoring proactif 24/7.",
    email: "contact@aristidekenfack.dev",
    emailAlt: "aristide.kenfack@devops.cm",
    phone: "+237 6XX XX XX XX",
    github: "https://github.com/aristidekenfack",
    linkedin: "https://linkedin.com/in/aristidekenfack",
    twitter: "https://twitter.com/aristidekenfack",
    whatsappLink: "https://wa.me/?text=Bonjour%20Aristide%20Kenfack%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20projet%20technique"
  },
  stats: [
    { label: "Ans d'expérience", value: "2+", desc: "Développement web & architecture cloud" },
    { label: "Projets critiques livrés", value: "5+", desc: "Applications en production 24/7" },
    { label: "Gain latence recherche", value: "−30%", desc: "Typesense vs Requêtes SQL brutes" },
    { label: "Uptime cible & CI/CD", value: "99.98%", desc: "Disponibilité continue & automatisation" }
  ],
  certifications: [
    {
      id: "dca",
      title: "Docker Certified Associate (DCA)",
      issuer: "Docker Inc. / Mirantis",
      icon: "inventory_2",
      code: "ID: CERT-DCA-894102-AK",
      accent: "institutional-gold",
      skillsValidated: [
        "Multi-stage builds & durcissement d'images minimales (Alpine/Scratch)",
        "Orchestration de conteneurs légers & résilience opérationnelle",
        "Gestion avancée des volumes, overlays réseaux & haute disponibilité"
      ]
    },
    {
      id: "aws",
      title: "AWS Certified Solutions Architect & Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      icon: "cloud",
      code: "ID: AWS-SAA-742915-AK",
      accent: "electric-orange",
      skillsValidated: [
        "Conception d'architectures Cloud souveraines & VPCs multi-AZ",
        "Services managés EC2, ECS, EKS, S3 & politiques IAM étanches",
        "Haute disponibilité, Disaster Recovery & gouvernance FinOps"
      ]
    }
  ] as Certification[],
  projects: [
    {
      id: "afripay",
      title: "AfriPay · Core Engine & Passerelle de Micropaiements",
      subtitle: "FinTech & Architecture Haute Fréquence",
      category: "fintech",
      categoryLabel: "FinTech & Paiements",
      badge: "Production Ready",
      description: "Conception et déploiement du moteur de paiement central agréant Orange Money, MTN MoMo et cartes bancaires. Résolution des coupures réseau par mécanismes de reprise idempotente et files de messages Redis asynchrones.",
      impactMetrics: [
        { label: "Débit soutenu", value: "2 000 tx/s" },
        { label: "Réconciliation", value: "0 incident" },
        { label: "Cache Redis", value: "< 25ms" }
      ],
      tags: ["Go (Golang)", "TypeScript", "Redis Cluster", "Docker", "PostgreSQL", "Prometheus"],
      terminalLogs: [
        "[PROMETHEUS ENGINE] Ingestion rate: 2,140 req/s",
        "▸ POST /v1/settlements/mobile-money [200 OK] (18ms)",
        "▸ redis.cluster: HSET payload:tx:984712 status=reconciled",
        "▸ queue.rabbitmq: partition_0 acks 1,500/s buffer_health=100%",
        "▸ zero-loss auto-reconciler: 0 unhandled mismatch in 48h"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqLcWNZnrnP9H-6zfeds8cOuWmNLrKMd_cXIZd2Tu_Ub2mlJu0t0oIjjVVUoIOH11pjvYAvuwr37KTf_Cpg9xc-tWbFbIHv3Fsw1BwWkxu8GTj9MTFqi3nWS8eU-CIeijpc1M0L1hwUEOXiSRKZnp4J37hwMz_eKQpDpMb71dyEoqckAVFWTDniWMRt24qEEL6o4oweOb0guanpJgNFGeuVjmYiHOrVNl05cuqSuUa",
      architectureDetails: [
        "API Gateway découplée avec équilibrage de charge et rate-limiting Nginx.",
        "Moteur de transaction idempotent en Go avec verrou distribué Redlock.",
        "Synchronisation continue des états de comptes et audits transactionnels conformes."
      ]
    },
    {
      id: "cloudscale",
      title: "CloudScale · Orchestrateur CI/CD Multi-Cloud & GitOps",
      subtitle: "DevOps & Observabilité Cloud",
      category: "devops",
      categoryLabel: "DevOps & Cloud Infra",
      badge: "GitOps Zero-Downtime",
      description: "Industrialisation complète des pipelines de livraison continue pour environnements hybrides. Gestion d'images multi-stage compactes, reverse proxy Nginx HTTP/2 et TLS 1.3, et rollbacks d'urgence automatisés sur détection d'erreurs 5xx.",
      impactMetrics: [
        { label: "Cycle release", value: "−45%" },
        { label: "Rollback auto", value: "< 15s" },
        { label: "Grafana Alerts", value: "24/7 Live" }
      ],
      tags: ["Kubernetes", "Docker Multi-Stage", "GitHub Actions", "Nginx SSL Hardening", "Grafana", "Linux Bash"],
      terminalLogs: [
        "Stage 1: Lint & Security Scan (24s) -> passed",
        "Stage 2: Multi-Platform Docker Build (58s) -> passed",
        "Stage 3: Blue-Green Staging Sync (32s) -> verified",
        "Stage 4: Automated Smoke & Healthcheck (11s) -> 100% OK"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZD4Pqgdy-TqjBrSFhCP7ftPxlh2_JZ9hUl7pA1AsENi_ljo4Q9Rtrf3ISYNjdU8p9GHRGpeAlwuXu2FKXE-h3facRYB9QCAuHeU2eV-ZrBZqUt6YY3NqSCM8HW6bhLmvYL7emrY8FMr26dAUiStaHhwUBG2MdH75rYpAvtghFyWt3unfGji6fBKq4FFNx5DaNCE5T3RGHwnaaz-gRfXB7XiGzxkQPvxPUvqzqt_2t",
      architectureDetails: [
        "Images conteneurs allégées (< 35MB) à base de Scratch et Alpine Linux.",
        "Stratégie de déploiement Blue/Green garantissant zéro interruption de service.",
        "Collecte métriques Prometheus avec tableaux de bord Grafana temps réel."
      ]
    },
    {
      id: "typesense-engine",
      title: "Plateforme Transactionnelle & Moteur Typesense",
      subtitle: "Backend & Indexation Haute Volumétrie",
      category: "fullstack",
      categoryLabel: "Full Stack & Web",
      badge: "Haute Volumétrie",
      description: "Refonte intégrale de la recherche textuelle et de l'indexation de catalogues sur plus de 150 000 références. Remplacement des requêtes relationnelles lourdes par un cluster Typesense couplé à une réplication événementielle.",
      impactMetrics: [
        { label: "Latence globale", value: "−30%" },
        { label: "Temps réponse p95", value: "< 40ms" },
        { label: "Documents indexés", value: "150k+" }
      ],
      tags: ["Node.js", "Laravel", "Typesense", "PostgreSQL CDC", "Redis", "Jest Testing"],
      terminalLogs: [
        "SQL Query brute (Ancien système): 410 ms",
        "Typesense optimisé (Aristide Kenfack): 28 ms (-30% pipe total)",
        "CDC Delta Sync: 100% In-Sync (0 desync detectee sur 150k docs)"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHjoTDoS-dhmU-FIoEyNcqwa1ZMuHnBn43Xp37va0T4f8yEI_FL_7jjgwYgzkQXB8iueiUkiw31DwaVvN8O7XLiIF4BQMCnrOnUp0WAZBPebjscWTL7SdQ7xvrHaQyxDjeN9uCGLmmxJ4EgTP1pCKJV6x_S45sbqytb3ezR4XxHwQN9MdjCL-V_te9wFXzPl8qDETT5VmWlrg8snICohKKb7NUSXlWtAOSq3hAAEkl",
      architectureDetails: [
        "Indexation typo-tolérante avec filtres facettés instantanés.",
        "Worker background traitant les mises à jour en quasi temps réel via Redis.",
        "API OpenAPI documentée et typage partagé TypeScript."
      ]
    },
    {
      id: "urbantrack",
      title: "UrbanTrack · Suivi de Flotte & Logistique Urbaine",
      subtitle: "Mobile Flutter & Cartographie Temps Réel",
      category: "mobile",
      categoryLabel: "Applications Mobiles",
      badge: "Télémétrie Douala",
      description: "Solution applicative pour transporteurs et livreurs en Afrique Centrale. Mode déconnecté robuste avec persistance SQLite locale et synchronisation par paquets géographiques différentiels via WebSockets.",
      impactMetrics: [
        { label: "Synchro offline", value: "100%" },
        { label: "Rafraîchissement", value: "1s" },
        { label: "Conso batterie", value: "−38%" }
      ],
      tags: ["Flutter", "Dart", "FastAPI (Python)", "PostGIS", "WebSockets", "SQLite Chiffrée"],
      terminalLogs: [
        "Active Ping : Akwa -> Bonanjo (1,840 noeuds suivis en temps reel)",
        "PostGIS ST_DWithin query: latency 12ms ACK",
        "Battery power profile: -38% vs legacy polling"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZdxMeJxRWVPjtbzO2SrUTE8RYPIMNKxoHOfhCFlGC7JrqXMBF60nXFCwtmPdvawwrZzMCXz6BwhpSjIoptWc868pTcGK9F6cs6MbxdhCFjjzj7nUvVgERB1bHVtG7y0Ty-8r_PeDAtaEMq_xnk58KadX-EYtN5HROXul-jUvbYYWiv959yMJ6zN1geCIqdGSHPNGYJSQq3VbseaJP0vLAH43Nsje5iXU7pi2M7YSx",
      architectureDetails: [
        "Architecture déconnectée Offline-First avec gestion de file d'attente locale.",
        "Calculs géodésiques et requêtes spatiales PostGIS ultra-rapides.",
        "Consommation réseau allégée grâce au protocole binaire compressé."
      ]
    }
  ] as Project[],
  skillCategories: [
    {
      id: "devops",
      name: "DevOps, Cloud & CI/CD",
      icon: "terminal",
      tagline: "Pipelines immuables, conteneurisation légère et haute résilience opérationnelle.",
      accent: "electric-orange",
      skills: [
        { name: "Docker & Conteneurisation", level: "Expert", description: "Multi-stage builds, images minimales Alpine/Scratch, Docker Compose." },
        { name: "CI/CD Automation", level: "Production", description: "GitHub Actions & GitLab CI : tests, scans SAST et livraisons continues." },
        { name: "Nginx & Reverse Proxy", level: "Avancé", description: "Routage TLS 1.3 optimisé, HTTP/2, mitigation DoS et rate-limiting." },
        { name: "Linux & Bash Scripting", level: "Core", description: "Administration Debian/Ubuntu, services systemd et durcissement OS." },
        { name: "Monitoring & Observabilité", level: "Actif", description: "Prometheus, Grafana, alerting Slack/Telegram temps réel." }
      ],
      footerTag: "K8s & GitOps Déclaratif"
    },
    {
      id: "backend",
      name: "Backend & Ingénierie d'APIs",
      icon: "dns",
      tagline: "Architectures modulaires, microservices concurrents et protocoles REST résilients.",
      accent: "institutional-gold",
      skills: [
        { name: "Node.js & TypeScript", level: "Expert", description: "Validation Zod, flux asynchrones haute charge sans blocage d'event loop." },
        { name: "Laravel & PHP 8.x", level: "Avancé", description: "Clean Architecture, Eloquent optimisé, files d'attente Redis managées." },
        { name: "Go (Golang)", level: "Spécialisé", description: "Microservices à latence critique, parallélisme goroutines & channels." },
        { name: "Typesense & Recherche", level: "p95 < 30ms", description: "Moteurs de recherche instantanés typo-tolérants avec indexation temps réel." },
        { name: "Spring Boot (Java)", level: "Enterprise", description: "Injection de dépendances, JPA/Hibernate et architecture robuste." }
      ],
      footerTag: "Specs OpenAPI / Swagger First"
    },
    {
      id: "frontend",
      name: "Frontend & Expérience Web",
      icon: "web",
      tagline: "Applications riches, Server-Side Rendering et interfaces ergonomiques au pixel près.",
      accent: "violet",
      skills: [
        { name: "React & Next.js", level: "Expert", description: "App Router, Server Components (RSC), stratégies de cache, SEO et SSG." },
        { name: "TypeScript Strict", level: "Standard", description: "Typage structurel complet, exclusion du any, contrats d'API partagés." },
        { name: "Tailwind CSS & Systems", level: "Maîtrisé", description: "Conception de design systems utilitaires et animations fluides." },
        { name: "Performances & WCAG AA", level: "Audit 95+", description: "Optimisation Core Web Vitals (LCP, CLS, INP) et balisage sémantique." }
      ],
      footerTag: "Zustand · TanStack Query · Motion"
    },
    {
      id: "mobile",
      name: "Mobile Multiplateforme",
      icon: "smartphone",
      tagline: "Applications conçues pour les contraintes réseau et synchronisation fiable.",
      accent: "electric-orange",
      skills: [
        { name: "Flutter & Dart", level: "Spécialiste", description: "Expérience 60fps sur Android & iOS, architecture BLoC/Provider." },
        { name: "Architecture Déconnectée", level: "Critique", description: "Base locale SQLite chiffrée, files d'attente d'actions différées." },
        { name: "Géolocalisation & GPS", level: "Télématique", description: "Suivi de flottes en direct, calculs locaux, consommation batterie optimisée." }
      ],
      footerTag: "Android NDK & iOS Bridge"
    },
    {
      id: "data",
      name: "Bases de Données & Caches",
      icon: "database",
      tagline: "Persistance intègre, indexations expertes et niveaux de cache sub-milliseconde.",
      accent: "institutional-gold",
      skills: [
        { name: "PostgreSQL & PostGIS", level: "Expert", description: "Modélisation relationnelle, partitionnement volumineux, géo-spatial." },
        { name: "Redis Cache & Pub/Sub", level: "Sub-ms", description: "Stratégies LRU/LFU, Redlock distribué, queues persistantes." },
        { name: "MySQL & Percona", level: "Production", description: "Plans d'exécution EXPLAIN, tuning InnoDB et réplication." }
      ],
      footerTag: "Transactions ACID · Zero-Downtime Migrations"
    },
    {
      id: "security",
      name: "Sécurité, Qualité & Méthode",
      icon: "shield",
      tagline: "Protection préventive, découplage architectural et disciplines logicielles.",
      accent: "violet",
      skills: [
        { name: "Tests & TDD Rigoureux", level: "Couverture > 85%", description: "Jest, Vitest, PHPUnit, mocks d'infrastructure, barrières pré-commit." },
        { name: "Sécurité OWASP & Secrets", level: "Durci", description: "Mitigation CSRF/XSS/SQLi, gestion étanche des env vars, SSL auto-renew." },
        { name: "Clean Architecture & DDD", level: "Standard", description: "Séparation stricte domaine/infrastructure, architecture hexagonale." }
      ],
      footerTag: "Principes SOLID · Revue de Code Exigeante"
    }
  ] as SkillCategory[],
  timeline: [
    {
      id: "t1",
      period: "2024 — Aujourd'hui",
      role: "Ingénieur Full Stack & DevOps Indépendant",
      organization: "Startups FinTech & PME en Afrique Centrale & Distribué",
      type: "exp",
      typeLabel: "Expérience & Rôles",
      statusBadge: "En cours d'exécution",
      kpis: [
        { label: "-45% Release Time", value: "-45%", desc: "Pipeline automatisé sans rollback" },
        { label: "Microservices Docker", value: "Docker", desc: "Conteneurs isolés & orchestrés" },
        { label: "Observabilité 24/7", value: "Live", desc: "Prometheus, Grafana & Nginx" }
      ],
      highlights: [
        "Conception et mise en production d'architectures microservices conteneurisées avec Docker.",
        "Mise en place de pipelines CI/CD résilients réduisant le cycle de livraison de 45% sans interruption.",
        "Accompagnement technique sur les standards DevOps, monitoring proactif et reverse proxy Nginx."
      ],
      tags: ["TypeScript", "Next.js", "Laravel", "Docker", "Kubernetes", "CI/CD", "Nginx"]
    },
    {
      id: "t2",
      period: "2023 — 2024",
      role: "Développeur Backend & Intégration Search Engine",
      organization: "SaaS & E-Commerce Haute Volumétrie",
      type: "infra",
      typeLabel: "Réalisations d'Infrastructure",
      statusBadge: "Backend Engine",
      kpis: [
        { label: "Latence Recherche", value: "-30%", desc: "Typesense synchronisé en temps réel" }
      ],
      highlights: [
        "Optimisation drastique des temps d'accès aux données : refonte de l'indexation avec Typesense.",
        "Développement d'APIs REST modulaires sous Node.js & Laravel avec couverture de tests Jest.",
        "Intégration de passerelles de paiement locales et files d'attente asynchrones (Redis Queues)."
      ],
      tags: ["Node.js", "Laravel", "Typesense", "Redis", "Jest", "PostgreSQL"]
    },
    {
      id: "t3",
      period: "2022 — 2023",
      role: "Développeur Web & Mobile Full Stack",
      organization: "UrbanTrack & Solutions Temps Réel",
      type: "exp",
      typeLabel: "Produits Clés",
      statusBadge: "Produits Clés",
      highlights: [
        "Développement d'applications mobiles Flutter et React avec synchronisation hors-ligne résiliente.",
        "Conception de consoles d'administration en direct animées par WebSockets et géolocalisation PostGIS."
      ],
      tags: ["Flutter", "React", "FastAPI", "PostGIS", "WebSockets"]
    },
    {
      id: "t4",
      period: "2021 — 2024",
      role: "Élève-Ingénieur en Génie Informatique & Télécommunications",
      organization: "École Nationale Supérieure Polytechnique de Douala (ENSPD)",
      type: "edu",
      typeLabel: "Formations & Fondations",
      statusBadge: "Cursus Diplômant",
      institutionLogo: "/assets/aistudio/8_23377b22.png",
      highlights: [
        "Immersion poussée dans les environnements Unix/Linux, architecture TCP/IP, gestion des processus et scripting Bash.",
        "Pratique intensive de la programmation orientée objet avancée (PHP, Java, TypeScript, C/C++) et modélisation SQL relationnelle."
      ],
      tags: ["ENSPD", "Linux Bash", "C / PHP", "SQL", "Git & GitHub", "Merise / UML"]
    }
  ] as TimelineItem[],
  episodes: [
    {
      id: "ep-ec2-ssh",
      slug: "creer-instance-ec2-aws-ssh-distance",
      title: "Créer une instance EC2 AWS et se connecter en SSH à distance",
      category: "aws",
      categoryBadge: "Lab Pas à Pas",
      badgeAccent: "electric-orange",
      readTime: "8 min de lecture",
      description: "Apprends à provisionner une machine virtuelle EC2 sous Amazon Linux 2023, configurer les Security Groups, gérer les clés privées PEM et administrer ton serveur distant en toute sécurité via ton terminal standard.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkc0y1fWwrbo2yXtTIA-zhUes3c4RDDq0xoRR1DGcd2BzDqMtDLW8-hPdeJsf2qbovS0X4p_12Bx7GECttCcON8oDbMxU8cy04OBYRrBErAUM_qL78WySX-JDpLFP9cmJVSZLy_8Sag8py8bfi5p-L37cssA8kgfH-MipMo6nfJLXg8NxoiWh-ev8YehroH2-6jMtOsHIgFQoQE5c4goFYZfH-9QFd-IO_my9eAr8QRKNty0eecsnXxg",
      tags: ["#AWSCloud", "#EC2", "#SSH", "#DevOps"],
      terminalPreview: {
        title: "bash — terminal",
        command: "chmod 400 ~/.ssh/my-aws-key.pem && ssh -i ~/.ssh/my-aws-key.pem ec2-user@35.180.x.x"
      },
      highlights: ["Amazon Linux 2023", "Règles Port 22 IP Stricte", "Free Tier Éligible"]
    },
    {
      id: "ep-aws-certif",
      slug: "certification-aws-securite-reseau-couts",
      title: "Obtenez la certification AWS en ligne : Sécurité, Réseau et Coûts",
      category: "security",
      categoryBadge: "Meet En Ligne",
      badgeAccent: "institutional-gold",
      readTime: "Dimanche 20h30 UTC+1",
      description: "Masterclass intensive focalisée sur les piliers architecturaux AWS Well-Architected : gouvernance des accès IAM, topologie réseau VPC multi-AZ et optimisation des budgets de calcul pour réussir son examen avec distinction.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1tWG36lWO3EkpfxTOD625k5PlDwRi5S52NjHKLYbVtnbGAeTVbhZjKuwHiCKmKkufIouLI-6OLwtsuTwSPbQG76nMYxxMInVsFGlOcoKjnyCCZNhOboHLQ87nK1e5MxCwNA3QnGKsYmW25edftXXTsLNtOm4W80BpvviJJEqfFUqux5dxxlBP5z33YyHJIb3d8FryQfz2-LFNDChEBSxQaEQw25ZUR-0R9HmE1IlFF0fGRUOUDVvHWg",
      tags: ["#CertificationAWS", "#FinOps", "#VPC", "#Sécurité"],
      highlights: ["Sécurité IAM", "Réseau VPC Multi-AZ", "Maîtrise FinOps"]
    },
    {
      id: "ep-polytech-standards",
      slug: "de-l-iut-a-l-enspd-elever-ses-standards",
      title: "De l'IUT à l'ENSPD Polytechnique : Élever ses standards",
      category: "polytech",
      categoryBadge: "Chronique #03",
      badgeAccent: "violet",
      readTime: "6 min de lecture",
      description: "« Entrer à Polytechnique de Douala n'est pas seulement une consécration académique, c'est une refonte radicale de sa manière de modéliser le réel. La transition impose une rigueur d'esprit où la théorie mathématique doit immédiatement se traduire par des architectures logicielles fiables. »",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPGFEGdNoBk87o3rxZLAKZNIylRM-Glw6XcMUfkaDap3YgD4bdCpwTtDKeclrqKcLXMWu6uUEHBSbmc7qyYWc5xs3bJVROtdgCQuLnirqCvYTPyiW57V8D6yo1yBdWO5_ZGRjDRGCJkji205TR8DQIwNbRWSzNPTDibOvx9F-mqpvR9xNUvRZMY0hYi3U2nPdZ0rnKA2hcn-Q7VA_vl9JIqQDJj6lV9RMgVeS9VN5ezu97j4pG0nA63g",
      tags: ["#ENSPDDouala", "#PolytechniqueCameroon", "#Ingénierie"]
    }
  ] as MasterclassEpisode[]
};
