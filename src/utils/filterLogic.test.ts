import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, filterTimeline, convertEurToFcfa, calculateChecklistScore } from './filterLogic';
import { PORTFOLIO_DATA } from '../data/portfolioData';

test('filterProjects returns all projects when category is all', () => {
  const result = filterProjects(PORTFOLIO_DATA.projects, 'all');
  assert.equal(result.length, PORTFOLIO_DATA.projects.length);
});

test('filterProjects filters correctly by fintech category', () => {
  const result = filterProjects(PORTFOLIO_DATA.projects, 'fintech');
  assert.ok(result.length > 0);
  assert.equal(result[0].id, 'afripay');
});

test('filterTimeline filters by experience correctly', () => {
  const result = filterTimeline(PORTFOLIO_DATA.timeline, 'exp');
  assert.ok(result.length > 0);
  assert.ok(result.every((item) => item.type === 'exp'));
});

test('convertEurToFcfa produces accurate conversion values', () => {
  const result = convertEurToFcfa(1000);
  assert.equal(result, 655957);
});

test('calculateChecklistScore calculates correct completion percentages', () => {
  const initial = { item1: true, item2: false, item3: true, item4: false };
  const score = calculateChecklistScore(initial);
  assert.equal(score.completed, 2);
  assert.equal(score.total, 4);
  assert.equal(score.percentage, 50);
  assert.equal(score.isReady, false);

  const full = { item1: true, item2: true };
  const fullScore = calculateChecklistScore(full);
  assert.equal(fullScore.percentage, 100);
  assert.equal(fullScore.isReady, true);
});
