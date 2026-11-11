/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, TimelineItem } from '../data/portfolioData';

/**
 * Filter projects by category or return all if 'all'
 */
export function filterProjects(projects: Project[], category: string): Project[] {
  if (!category || category === 'all') {
    return projects;
  }
  return projects.filter(
    (p) => p.category === category || p.tags.some((t) => t.toLowerCase().includes(category.toLowerCase()))
  );
}

/**
 * Filter timeline items by type or return all if 'all'
 */
export function filterTimeline(items: TimelineItem[], category: string): TimelineItem[] {
  if (!category || category === 'all') {
    return items;
  }
  return items.filter((item) => item.type === category);
}

/**
 * Filter skills by category or return all if 'all'
 */
export function filterSkillCategories(categories: SkillCategory[], categoryId: string): SkillCategory[] {
  if (!categoryId || categoryId === 'all') {
    return categories;
  }
  return categories.filter((cat) => cat.id === categoryId);
}

/**
 * Convert Euros to FCFA estimate (1 EUR ~= 655.957 XAF)
 */
export function convertEurToFcfa(eur: number): number {
  return Math.round(eur * 655.957);
}

/**
 * Calculate security checklist score
 */
export function calculateChecklistScore(items: Record<string, boolean>): {
  completed: number;
  total: number;
  percentage: number;
  isReady: boolean;
} {
  const keys = Object.keys(items);
  if (keys.length === 0) return { completed: 0, total: 0, percentage: 0, isReady: false };
  const completed = keys.filter((k) => items[k]).length;
  const total = keys.length;
  const percentage = Math.round((completed / total) * 100);
  return {
    completed,
    total,
    percentage,
    isReady: percentage === 100
  };
}
