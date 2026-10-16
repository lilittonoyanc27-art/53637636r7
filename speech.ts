// Speech synthesis utility for Spanish conversational practice

let isMutedGlobal = false;
let speechRate = 0.95; // slightly relaxed for clear pronunciation for 7th grade students

export const getIsMuted = (): boolean => isMutedGlobal;

export const setMutedState = (muted: boolean) => {
  isMutedGlobal = muted;
  if (muted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const getSpeechRate = (): number => speechRate;

export const setSpeechRate = (rate: number) => {
  speechRate = rate;
};

export const speakSpanish = (
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): boolean => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  if (isMutedGlobal) {
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Clean text: strip special bullet marks or dialogue tags like "A:", "Alumno:"
  const clean = text
    .replace(/^(A|B|Profesor|Alumno):\s*/i, '')
    .replace(/^-\s*/, '')
    .trim();

  if (!clean) return false;

  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = 'es-ES';
  utterance.rate = speechRate;
  utterance.pitch = 1.0;

  // Try to find a Spanish voice
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(
    (v) => v.lang.startsWith('es') || v.lang.includes('ES')
  );
  if (esVoice) {
    utterance.voice = esVoice;
  }

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = onEnd;
  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
  return true;
};

export const stopSpeech = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
