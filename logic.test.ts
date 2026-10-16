import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatTime,
  calculateProgress,
  normalizeSearchQuery,
  textMatches,
  cleanSpeechText,
} from './logic.ts';

test('formatTime correctly formats minutes and seconds', () => {
  assert.equal(formatTime(0), '00:00');
  assert.equal(formatTime(65), '01:05');
  assert.equal(formatTime(180), '03:00');
  assert.equal(formatTime(300), '05:00');
});

test('calculateProgress calculates rounded percentage bounded between 0 and 100', () => {
  assert.equal(calculateProgress(0, 10), 0);
  assert.equal(calculateProgress(5, 10), 50);
  assert.equal(calculateProgress(3, 9), 33);
  assert.equal(calculateProgress(10, 10), 100);
  assert.equal(calculateProgress(15, 10), 100);
  assert.equal(calculateProgress(0, 0), 0);
});

test('normalizeSearchQuery strips diacritics and lowercases', () => {
  assert.equal(normalizeSearchQuery('¿Qué tal?'), 'que tal');
  assert.equal(normalizeSearchQuery('Español'), 'espanol');
  assert.equal(normalizeSearchQuery('Ինչպե՞ս'), 'ինչպես');
});

test('textMatches checks substring matching regardless of accents, punctuation and cases', () => {
  assert.equal(textMatches('¿Cómo estás hoy?', 'como'), true);
  assert.equal(textMatches('Ինչպե՞ս ես', 'ինչպես'), true);
  assert.equal(textMatches('No sé qué decir', 'xyz'), false);
});

test('cleanSpeechText strips prefixes and punctuation cleanly', () => {
  assert.equal(cleanSpeechText('A: Oye, ¿qué haces?'), 'Oye, qué haces');
  assert.equal(cleanSpeechText('Alumno: A ver...'), 'A ver...');
});
