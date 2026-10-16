// Pure business logic functions for conversational learning

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export function calculateProgress(revealedCount: number, totalCount: number): number {
  if (totalCount <= 0) return 0;
  const ratio = (revealedCount / totalCount) * 100;
  return Math.min(100, Math.max(0, Math.round(ratio)));
}

export function normalizeSearchQuery(query: string): string {
  return query
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,:;՝՜՞«»]/g, '');
}

export function textMatches(text: string, query: string): boolean {
  if (!query) return true;
  const normText = normalizeSearchQuery(text);
  const normQuery = normalizeSearchQuery(query);
  return normText.includes(normQuery);
}

export function cleanSpeechText(text: string): string {
  return text
    .replace(/^(A|B|Profesor|Alumno):\s*/i, '')
    .replace(/^-\s*/, '')
    .replace(/[¿?¡!]/g, '')
    .trim();
}
