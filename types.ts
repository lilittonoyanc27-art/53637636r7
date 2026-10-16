export interface ShortAndNaturalQA {
  id: string;
  number: number;
  questionEs: string;
  questionHy: string;
  cortaEs: string;
  cortaHy: string;
  naturalEs: string;
  naturalHy: string;
  category?: string;
}

export interface DirectQA {
  id: string;
  number: number;
  questionEs: string;
  questionHy: string;
  answerEs: string;
  answerHy: string;
  category?: string;
}

export interface ConversionPair {
  id: string;
  corta: string;
  cortaHy?: string;
  natural: string;
  naturalHy?: string;
}

export interface RealSituation {
  id: string;
  number: number;
  promptEs: string;
  promptHy: string;
  answerEs: string;
  answerHy: string;
}

export interface DialogueLine {
  speaker: string;
  es: string;
  hy: string;
}

export interface Dialogue {
  id: string;
  titleEs: string;
  titleHy: string;
  lines: DialogueLine[];
}

export interface PhraseItem {
  id: string;
  es: string;
  hy: string;
}

export interface QuickReaction {
  id: string;
  saidEs: string;
  saidHy: string;
  replyEs: string;
  replyHy: string;
}

export interface SentenceCompletion {
  id: string;
  number: number;
  questionEs: string;
  questionHy: string;
  starterEs: string;
  answerEs: string;
  answerHy: string;
}

export interface OralTranslation {
  id: string;
  number: number;
  hy: string;
  es: string;
}

export interface VerbTensePractice {
  tense: string;
  tenseHy: string;
  es: string;
  hy: string;
}

export interface VerbSituation {
  id: string;
  titleEs: string;
  titleHy: string;
  tenses: VerbTensePractice[];
}

export interface LevelModel {
  questionEs: string;
  questionHy: string;
  levels: {
    level: number;
    es: string;
    hy: string;
  }[];
}

export interface PracticeModelQA {
  id: string;
  questionEs: string;
  questionHy: string;
  answerEs: string;
  answerHy: string;
}

export interface WorkoutStep {
  minutes: number;
  titleEs: string;
  titleHy: string;
  descriptionEs: string;
  descriptionHy: string;
}
