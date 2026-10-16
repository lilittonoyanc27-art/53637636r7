import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Search,
  BookOpen,
  MessageCircle,
  Clock,
  Sparkles,
  RotateCcw,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  GraduationCap,
  Award,
  Zap,
  ListRestart,
  Type
} from 'lucide-react';
import {
  part1Intro,
  part1SchoolQA,
  part1FriendsQA,
  part1OpinionsQA,
  part1PastFutureQA,
  part1Conversions,
  part1RealSituations,
  part1Dialogues,
  part1HelpfulPhrases,
  part1PracticeAdvice,
  part2Intro,
  part2LifeQA,
  part2Reactions,
  part2Completions,
  part2Dialogues,
  part2OralTranslations,
  part2LengthenFormula,
  part2PracticeModels,
  part2VerbSituations,
  part2ConversationGameCards,
  part2DailyWorkout,
  part2TeacherAdvice
} from './data';
import {
  speakSpanish,
  stopSpeech,
  setMutedState,
  getIsMuted,
  setSpeechRate
} from './speech';
import { formatTime, textMatches } from './logic';

export default function App() {
  // Global sound state
  const [isMuted, setIsMuted] = useState<boolean>(getIsMuted());
  const [speechSpeed, setSpeechSpeed] = useState<number>(0.9);
  const [activeSpeakingText, setActiveSpeakingText] = useState<string | null>(null);

  // Font size scale: 'normal' (100%), 'large' (115%), 'xlarge' (130%)
  const [fontSizeScale, setFontSizeScale] = useState<'normal' | 'large' | 'xlarge'>('large');

  // Active view: 'part1' | 'part2' | 'workout'
  const [activeTab, setActiveTab] = useState<'part1' | 'part2' | 'workout'>('part1');

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');

  // Translation visibility set: stores IDs of revealed Armenian translations
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());

  // Global override: reveal all Armenian translations
  const [autoRevealAll, setAutoRevealAll] = useState<boolean>(false);

  // Interactive Situation Game state (Part 2 - Section 8)
  const [gameCardIndex, setGameCardIndex] = useState<number>(0);
  const [gameCardRevealed, setGameCardRevealed] = useState<boolean>(false);

  // Situaciones Reales (Part 1 - Section 6) revealed count tracking
  const [realSitRevealed, setRealSitRevealed] = useState<Set<string>>(new Set());

  // Termina la conversación (Part 2 - Section 3) revealed
  const [completionsRevealed, setCompletionsRevealed] = useState<Set<string>>(new Set());

  // Oral translations (Part 2 - Section 5) revealed
  const [oralTranslationsRevealed, setOralTranslationsRevealed] = useState<Set<string>>(new Set());

  // Daily workout timer state
  const [activeWorkoutStep, setActiveWorkoutStep] = useState<number>(0);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(part2DailyWorkout[0].minutes * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Toggle sound
  const handleToggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    setMutedState(nextState);
    if (nextState) {
      stopSpeech();
      setActiveSpeakingText(null);
    }
  };

  const handleToggleSpeed = () => {
    const nextSpeed = speechSpeed === 0.9 ? 0.75 : 0.9;
    setSpeechSpeed(nextSpeed);
    setSpeechRate(nextSpeed);
  };

  const cycleFontSize = () => {
    if (fontSizeScale === 'normal') setFontSizeScale('large');
    else if (fontSizeScale === 'large') setFontSizeScale('xlarge');
    else setFontSizeScale('normal');
  };

  // Speak handler
  const handleSpeak = (text: string) => {
    if (isMuted) return;
    setActiveSpeakingText(text);
    speakSpanish(
      text,
      () => setActiveSpeakingText(text),
      () => setActiveSpeakingText(null)
    );
  };

  // Item click handler: Clicking Spanish speaks it AND reveals Armenian translation!
  const handleSpanishItemClick = (id: string, spanishText: string) => {
    handleSpeak(spanishText);
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (!next.has(id)) {
        next.add(id);
      }
      return next;
    });
  };

  const toggleTranslation = (id: string) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isRevealed = (id: string) => {
    if (autoRevealAll) return true;
    return revealedIds.has(id);
  };

  // Timer logic for 20-min daily workout
  useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        setTimerSecondsLeft((prev) => {
          if (prev <= 1) {
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRunning]);

  const selectWorkoutStep = (index: number) => {
    setActiveWorkoutStep(index);
    setTimerSecondsLeft(part2DailyWorkout[index].minutes * 60);
    setTimerRunning(false);
  };

  const toggleWorkoutTimer = () => {
    if (timerSecondsLeft === 0) {
      setTimerSecondsLeft(part2DailyWorkout[activeWorkoutStep].minutes * 60);
    }
    setTimerRunning(!timerRunning);
  };

  const resetWorkoutTimer = () => {
    setTimerRunning(false);
    setTimerSecondsLeft(part2DailyWorkout[activeWorkoutStep].minutes * 60);
  };

  // Filter helper
  const filterPass = (texts: (string | undefined)[]) => {
    if (!searchQuery.trim()) return true;
    return texts.some((t) => t && textMatches(t, searchQuery));
  };

  // Container font scale class
  const scaleClass =
    fontSizeScale === 'xlarge'
      ? 'text-[1.25rem]'
      : fontSizeScale === 'large'
      ? 'text-[1.1rem]'
      : 'text-[1rem]';

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col text-slate-800 ${scaleClass}`}>
      {/* ============================================================== */}
      {/* HEADER & CONTROLS TOOLBAR                                      */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-xs shrink-0">
              🇪🇸
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-black text-lg sm:text-xl tracking-tight text-slate-900 truncate">
                  Hablar sin miedo
                </h1>
                <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-amber-100 text-amber-800 shrink-0">
                  7-րդ դաս · A2–B1
                </span>
              </div>
              <p className="text-xs text-slate-500 truncate hidden sm:block">
                Խոսակցական իսպաներեն · Սեղմի՛ր իսպաներենին՝ թարգմանությունը տեսնելու և լսելու համար
              </p>
            </div>
          </div>

          {/* Action buttons: Sound Mute / Unmute, Font Size, Speed, Reveal all */}
          <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
            {/* Global Sound Button (Key User Requirement) */}
            <button
              onClick={handleToggleSound}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer ${
                isMuted
                  ? 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
              title={isMuted ? 'Միացնել ձայնը' : 'Անջատել ձայնը'}
              aria-label="Toggle sound mute"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-rose-600" />
                  <span className="hidden xs:inline">Ձայնն անջատված է</span>
                  <span className="xs:hidden">Լուռ</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span className="hidden xs:inline">Ձայնը միացված է</span>
                  <span className="xs:hidden">Ձայն</span>
                </>
              )}
            </button>

            {/* Font Size Toggle Button */}
            <button
              onClick={cycleFontSize}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 transition-all cursor-pointer shadow-2xs"
              title="Փոխել տառաչափը (Размер шрифта)"
            >
              <Type className="w-4 h-4 text-indigo-600" />
              <span>
                {fontSizeScale === 'normal'
                  ? 'Շրիֆտ: A'
                  : fontSizeScale === 'large'
                  ? 'Շրիֆտ: A+'
                  : 'Շրիֆտ: A++'}
              </span>
            </button>

            {/* Speech rate toggle */}
            <button
              onClick={handleToggleSpeed}
              disabled={isMuted}
              className={`px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                isMuted
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
              title="Արտասանության արագություն"
            >
              {speechSpeed === 0.9 ? '1.0x' : '0.8x'}
            </button>

            {/* Global reveal toggle */}
            <button
              onClick={() => setAutoRevealAll(!autoRevealAll)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer"
              title={autoRevealAll ? 'Թաքցնել թարգմանությունները' : 'Բացել բոլոր թարգմանությունները'}
            >
              {autoRevealAll ? (
                <>
                  <EyeOff className="w-4 h-4 text-amber-600" />
                  <span className="hidden sm:inline">Ծածկել</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline">Բացել բոլորը</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tab switcher + Search Bar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 pb-2 pt-1 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Main Navigation Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('part1')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'part1'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Մաս 1 · Հիմունքներ</span>
            </button>

            <button
              onClick={() => setActiveTab('part2')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'part2'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
              <span>Մաս 2 · Կենդանի խոսք</span>
            </button>

            <button
              onClick={() => setActiveTab('workout')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'workout'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>20-րոպե մարզում</span>
            </button>
          </div>

          {/* Quick search input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Որոնել (իսպաներեն / հայերեն)..."
              className="w-full pl-9 pr-7 py-1.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* MAIN CONTENT AREA                                              */}
      {/* ============================================================== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-5 space-y-8">
        {/* Banner with learner guide and click hint */}
        <div className="bg-gradient-to-r from-amber-500/10 via-red-500/10 to-indigo-500/10 border border-amber-200/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Սեղմի՛ր իսպաներեն նախադասության վրա (Հպվիր)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Իսպաներենի վրա սեղմելիս միանում է ձայնային արտասանությունը և բացվում է հայերեն թարգմանությունը։
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 bg-white/90 px-3.5 py-1.5 rounded-xl border border-slate-200 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Բացված է {revealedIds.size} արտահայտություն</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: PART 1                                                  */}
        {/* ============================================================== */}
        {activeTab === 'part1' && (
          <div className="space-y-8">
            {/* Header / Intro */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                  Մաս 1
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                  7-րդ դասարան — Խոսակցական իսպաներեն | Հարցեր և պատասխաններ
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {part1Intro.titleEs}
              </h2>
              <p className="text-sm sm:text-base font-bold text-amber-700 mt-1">
                {part1Intro.titleHy}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed border-l-4 border-amber-400 pl-3.5 bg-amber-50/50 py-2 rounded-r-lg">
                {part1Intro.description}
              </p>
            </div>

            {/* Section 1: En el colegio — Դպրոցում */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-amber-600" />
                  <span>1. Responde sin pensar demasiado — Պատասխանի՛ր առանց երկար մտածելու</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">En el colegio — Դպրոցում (Հարցեր 1–8)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {part1SchoolQA
                  .filter((q) =>
                    filterPass([
                      q.questionEs,
                      q.questionHy,
                      q.cortaEs,
                      q.cortaHy,
                      q.naturalEs,
                      q.naturalHy
                    ])
                  )
                  .map((item) => (
                    <QuestionCard
                      key={item.id}
                      item={item}
                      isRevealed={isRevealed(item.id)}
                      onToggle={() => toggleTranslation(item.id)}
                      onSpanishClick={(text) => handleSpanishItemClick(item.id, text)}
                      onSpeak={handleSpeak}
                      activeSpeakingText={activeSpeakingText}
                      isMuted={isMuted}
                    />
                  ))}
              </div>
            </section>

            {/* Section 2: Entre amigos — Ընկերների հետ բնական խոսակցություն */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-indigo-600" />
                  <span>2. Entre amigos — Ընկերների հետ բնական խոսակցություն</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Հարցեր 9–18</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {part1FriendsQA
                  .filter((q) =>
                    filterPass([
                      q.questionEs,
                      q.questionHy,
                      q.cortaEs,
                      q.cortaHy,
                      q.naturalEs,
                      q.naturalHy
                    ])
                  )
                  .map((item) => (
                    <QuestionCard
                      key={item.id}
                      item={item}
                      isRevealed={isRevealed(item.id)}
                      onToggle={() => toggleTranslation(item.id)}
                      onSpanishClick={(text) => handleSpanishItemClick(item.id, text)}
                      onSpeak={handleSpeak}
                      activeSpeakingText={activeSpeakingText}
                      isMuted={isMuted}
                    />
                  ))}
              </div>
            </section>

            {/* Section 3: Expresar opiniones y emociones */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-rose-600" />
                  <span>3. Expresar opiniones y emociones — Կարծիքներ և զգացմունքներ</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Հարցեր 19–24</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {part1OpinionsQA
                  .filter((q) =>
                    filterPass([
                      q.questionEs,
                      q.questionHy,
                      q.cortaEs,
                      q.cortaHy,
                      q.naturalEs,
                      q.naturalHy
                    ])
                  )
                  .map((item) => (
                    <QuestionCard
                      key={item.id}
                      item={item}
                      isRevealed={isRevealed(item.id)}
                      onToggle={() => toggleTranslation(item.id)}
                      onSpanishClick={(text) => handleSpanishItemClick(item.id, text)}
                      onSpeak={handleSpeak}
                      activeSpeakingText={activeSpeakingText}
                      isMuted={isMuted}
                    />
                  ))}
              </div>
            </section>

            {/* Section 4: Pasado y futuro — Անցյալ և ապառնի */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  <span>4. Pasado y futuro — Անցյալ և ապառնի</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Հարցեր 25–30</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {part1PastFutureQA
                  .filter((q) =>
                    filterPass([q.questionEs, q.questionHy, q.answerEs, q.answerHy])
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 font-semibold mb-2">
                          <span>Հարց #{item.number}</span>
                          <button
                            onClick={() => toggleTranslation(item.id)}
                            className="text-xs sm:text-sm text-emerald-600 hover:underline flex items-center gap-1 cursor-pointer font-bold"
                          >
                            {isRevealed(item.id) ? 'Թաքցնել թարգմանությունը' : 'Տեսնել հայերենը'}
                          </button>
                        </div>
                        <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {item.questionEs}
                        </p>
                        {isRevealed(item.id) && (
                          <p className="text-xs sm:text-sm text-slate-500 mt-1 italic font-medium">
                            {item.questionHy}
                          </p>
                        )}
                      </div>

                      {/* Answer box: Click to speak and reveal Armenian */}
                      <div
                        onClick={() => handleSpanishItemClick(item.id, item.answerEs)}
                        className={`mt-4 p-4 rounded-xl border transition-all cursor-pointer ${
                          activeSpeakingText === item.answerEs
                            ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-400/20'
                            : 'bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/70'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                            — {item.answerEs}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSpeak(item.answerEs);
                            }}
                            disabled={isMuted}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-white shrink-0"
                            title="Արտասանել"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                        </div>
                        {isRevealed(item.id) ? (
                          <p className="text-xs sm:text-sm font-medium text-emerald-800 mt-2 pt-2 border-t border-emerald-200/60 leading-relaxed">
                            — {item.answerHy}
                          </p>
                        ) : (
                          <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-slate-400" />
                            <span>Կտտացրո՛ւ հայերեն թարգմանությունը տեսնելու համար</span>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {/* Section 5: Ejercicio — Convierte una respuesta corta en una respuesta larga */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-600" />
                  <span>5. Ejercicio — Convierte una respuesta corta en una respuesta larga</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Սա ամենակարևոր վարժությունն է։ Աշակերտը պետք է սովորի ոչ միայն «Sí», «No», «Bien» ասել,
                  այլև շարունակել միտքը։
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3.5 w-1/3">Respuesta corta (Կարճ)</th>
                      <th className="p-3.5 w-2/3">Respuesta más natural (Ավելի բնական & լրիվ)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {part1Conversions
                      .filter((c) => filterPass([c.corta, c.cortaHy, c.natural, c.naturalHy]))
                      .map((row) => (
                        <tr key={row.id} className="hover:bg-amber-50/40 transition-colors">
                          <td
                            onClick={() => handleSpanishItemClick(row.id, row.corta)}
                            className="p-3.5 align-top font-bold text-slate-800 cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <span>{row.corta}</span>
                              <Volume2 className="w-4 h-4 text-slate-400 hover:text-amber-600 shrink-0" />
                            </div>
                            {isRevealed(row.id) && (
                              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                {row.cortaHy}
                              </div>
                            )}
                          </td>
                          <td
                            onClick={() => handleSpanishItemClick(row.id, row.natural)}
                            className="p-3.5 align-top text-slate-900 cursor-pointer"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-amber-950">{row.natural}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSpeak(row.natural);
                                }}
                                disabled={isMuted}
                                className="p-1 rounded-md text-slate-400 hover:text-amber-600 hover:bg-white shrink-0"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                            {isRevealed(row.id) ? (
                              <div className="text-xs sm:text-sm text-emerald-800 font-medium mt-1.5 leading-relaxed">
                                {row.naturalHy}
                              </div>
                            ) : (
                              <span className="text-xs text-slate-400 mt-1 inline-block">
                                Սեղմի՛ր թարգմանությունը տեսնելու համար
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Situaciones reales — Ինչպե՞ս արձագանքել */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <Award className="w-6 h-6 text-red-600" />
                    <span>6. Situaciones reales — Ինչպե՞ս արձագանքել</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">¿Qué dirías tú? (Ի՞նչ կասեիր դու)</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {realSitRevealed.size}/10 respuestas vistas
                  </span>
                  <button
                    onClick={() => setRealSitRevealed(new Set())}
                    className="flex items-center gap-1 text-xs sm:text-sm text-slate-500 hover:text-slate-800 hover:underline cursor-pointer font-medium"
                  >
                    <ListRestart className="w-4 h-4" />
                    <span>Repetir el ejercicio</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {part1RealSituations
                  .filter((s) =>
                    filterPass([s.promptEs, s.promptHy, s.answerEs, s.answerHy])
                  )
                  .map((sit) => {
                    const seen = realSitRevealed.has(sit.id);
                    return (
                      <div
                        key={sit.id}
                        className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 font-bold mb-1.5">
                            <span>Իրավիճակ #{sit.number}</span>
                          </div>
                          <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                            {sit.promptEs}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1 italic font-medium leading-relaxed">
                            {sit.promptHy}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200/80">
                          {seen ? (
                            <div
                              onClick={() => handleSpanishItemClick(sit.id, sit.answerEs)}
                              className="p-3.5 bg-white rounded-xl border border-emerald-200 cursor-pointer shadow-xs"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-sm sm:text-base font-bold text-emerald-950 leading-relaxed">
                                  {sit.answerEs}
                                </p>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSpeak(sit.answerEs);
                                  }}
                                  disabled={isMuted}
                                  className="text-slate-400 hover:text-emerald-700"
                                >
                                  <Volume2 className="w-5 h-5" />
                                </button>
                              </div>
                              <p className="text-xs sm:text-sm text-emerald-800 mt-1.5 font-medium leading-relaxed">
                                {sit.answerHy}
                              </p>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setRealSitRevealed((prev) => new Set(prev).add(sit.id));
                                handleSpeak(sit.answerEs);
                              }}
                              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                            >
                              <Eye className="w-4 h-4 text-amber-600" />
                              <span>Ver respuesta</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>

            {/* Section 7: Mini conversaciones — Շարունակի՛ր զրույցը */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-indigo-600" />
                  <span>7. Mini conversaciones — Շարունակի՛ր զրույցը</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Երկխոսություններ կենդանի խոսքի համար · Սեղմի՛ր յուրաքանչյուր տողի վրա
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {part1Dialogues.map((dialogue) => (
                  <div
                    key={dialogue.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-4 pb-2 border-b border-slate-100">
                        <h4 className="font-black text-slate-900 text-base">{dialogue.titleEs}</h4>
                        <p className="text-xs sm:text-sm text-indigo-600 font-semibold">{dialogue.titleHy}</p>
                      </div>

                      <div className="space-y-3">
                        {dialogue.lines.map((line, idx) => {
                          const lineId = `${dialogue.id}-${idx}`;
                          const isLineRevealed = isRevealed(lineId);
                          return (
                            <div
                              key={idx}
                              onClick={() => handleSpanishItemClick(lineId, line.es)}
                              className="p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/50 border border-slate-200/70 transition-all cursor-pointer"
                            >
                              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700 mb-1">
                                <span className="text-indigo-600">{line.speaker}:</span>
                                <Volume2 className="w-4 h-4 text-slate-400 hover:text-indigo-600" />
                              </div>
                              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                                {line.es}
                              </p>
                              {isLineRevealed ? (
                                <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1 leading-relaxed">
                                  {line.hy}
                                </p>
                              ) : (
                                <p className="text-xs text-slate-400 mt-0.5">
                                  Սեղմի՛ր թարգմանությունը տեսնելու համար
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Las frases que le ayudarán a no quedarse callado */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-500" />
                  <span>8. Las frases que le ayudarán a no quedarse callado</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Այս արտահայտությունները պետք է օգտագործել ամեն դասին, որպեսզի աշակերտը կարողանա
                  շարունակել խոսել, նույնիսկ եթե անմիջապես չգիտի պատասխանը։
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {part1HelpfulPhrases
                  .filter((p) => filterPass([p.es, p.hy]))
                  .map((phrase) => {
                    const rev = isRevealed(phrase.id);
                    return (
                      <div
                        key={phrase.id}
                        onClick={() => handleSpanishItemClick(phrase.id, phrase.es)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          rev
                            ? 'bg-amber-50/70 border-amber-300'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <p className="font-extrabold text-sm sm:text-base text-slate-900">{phrase.es}</p>
                        {rev ? (
                          <p className="text-xs sm:text-sm font-semibold text-amber-900 mt-1">{phrase.hy}</p>
                        ) : (
                          <p className="text-xs text-slate-400 mt-0.5">Սեղմի՛ր</p>
                        )}
                      </div>
                    );
                  })}
              </div>

              {/* Pedagogical Advice Box */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-base text-amber-950 font-medium leading-relaxed">
                💡 <span className="font-bold">{part1PracticeAdvice}</span>
              </div>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: PART 2                                                  */}
        {/* ============================================================== */}
        {activeTab === 'part2' && (
          <div className="space-y-8">
            {/* Header / Intro */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
                  Մաս 2
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                  7-րդ դասարան · A2–B1 · Իսպաներեն և հայերեն
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {part2Intro.titleEs}
              </h2>
              <p className="text-sm sm:text-base font-bold text-red-700 mt-1">{part2Intro.titleHy}</p>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed border-l-4 border-red-500 pl-3.5 bg-red-50/50 py-2 rounded-r-lg">
                {part2Intro.description}
              </p>
            </div>

            {/* Section 1: Responde como en la vida real — 30 նոր հարց և պատասխան */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                  <span>1. Responde como en la vida real — 30 նոր հարց և պատասխան</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Դպրոցում, Ընկերների հետ, Տանը, Անցյալ և Ապառնի
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {part2LifeQA
                  .filter((q) =>
                    filterPass([q.questionEs, q.questionHy, q.answerEs, q.answerHy, q.category])
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-red-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 font-semibold mb-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold text-xs">
                            {item.category} #{item.number}
                          </span>
                          <button
                            onClick={() => toggleTranslation(item.id)}
                            className="text-xs sm:text-sm text-red-600 hover:underline flex items-center gap-1 cursor-pointer font-bold"
                          >
                            {isRevealed(item.id) ? 'Թաքցնել' : 'Տեսնել հայերենը'}
                          </button>
                        </div>
                        <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {item.questionEs}
                        </p>
                        {isRevealed(item.id) && (
                          <p className="text-xs sm:text-sm text-slate-500 mt-1 italic font-medium leading-relaxed">
                            {item.questionHy}
                          </p>
                        )}
                      </div>

                      <div
                        onClick={() => handleSpanishItemClick(item.id, item.answerEs)}
                        className={`mt-4 p-4 rounded-xl border transition-all cursor-pointer ${
                          activeSpeakingText === item.answerEs
                            ? 'bg-red-50 border-red-300 ring-2 ring-red-400/20'
                            : 'bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/70'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                            — {item.answerEs}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSpeak(item.answerEs);
                            }}
                            disabled={isMuted}
                            className="p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-white shrink-0"
                            title="Արտասանել"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                        </div>
                        {isRevealed(item.id) ? (
                          <p className="text-xs sm:text-sm font-medium text-red-900 mt-2 pt-2 border-t border-red-200/60 leading-relaxed">
                            — {item.answerHy}
                          </p>
                        ) : (
                          <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-slate-400" />
                            <span>Կտտացրո՛ւ հայերեն թարգմանությունը տեսնելու համար</span>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {/* Section 2: Reacciona inmediatamente — 20 արագ արձագանք */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-500" />
                  <span>2. Reacciona inmediatamente — 20 արագ արձագանք</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Այս խաղում կարևոր է ոչ թե երկար նախադասություն կազմելը, այլ արագ և բնական արձագանքելը։
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {part2Reactions
                  .filter((r) => filterPass([r.saidEs, r.saidHy, r.replyEs, r.replyHy]))
                  .map((rx) => {
                    const rev = isRevealed(rx.id);
                    return (
                      <div
                        key={rx.id}
                        onClick={() => handleSpanishItemClick(rx.id, `${rx.saidEs}. ${rx.replyEs}`)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                          rev
                            ? 'bg-amber-50/60 border-amber-300'
                            : 'bg-slate-50/80 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div>
                          <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">
                            Alguien dice…
                          </div>
                          <p className="text-sm font-bold text-slate-800 leading-snug">{rx.saidEs}</p>
                          {rev && (
                            <p className="text-xs sm:text-sm text-slate-500 italic mt-0.5 leading-relaxed">
                              {rx.saidHy}
                            </p>
                          )}
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-200/60">
                          <div className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider mb-0.5">
                            Tu respuesta:
                          </div>
                          <p className="text-sm sm:text-base font-extrabold text-slate-900">{rx.replyEs}</p>
                          {rev ? (
                            <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1 leading-relaxed">
                              {rx.replyHy}
                            </p>
                          ) : (
                            <span className="text-xs text-slate-400">Կտտացրո՛ւ</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>

            {/* Section 3: Termina la conversación — Լրացրո՛ւ պատասխանը */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-indigo-600" />
                    <span>3. Termina la conversación — Լրացրո՛ւ պատասխանը</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Տրված է հարցը և պատասխանի սկիզբը (Empieza así)
                  </p>
                </div>
                <button
                  onClick={() => {
                    const allIds = new Set(part2Completions.map((c) => c.id));
                    setCompletionsRevealed(
                      completionsRevealed.size === allIds.size ? new Set() : allIds
                    );
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm font-bold text-slate-700 cursor-pointer"
                >
                  {completionsRevealed.size === part2Completions.length
                    ? 'Թաքցնել պատասխանները'
                    : 'Mostrar todas las respuestas'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {part2Completions
                  .filter((c) =>
                    filterPass([c.questionEs, c.questionHy, c.starterEs, c.answerEs, c.answerHy])
                  )
                  .map((comp) => {
                    const seen = completionsRevealed.has(comp.id);
                    return (
                      <div
                        key={comp.id}
                        className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs sm:text-sm text-slate-400 font-bold mb-1">
                            Հարց #{comp.number}
                          </div>
                          <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                            {comp.questionEs}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-500 italic mt-1 font-medium leading-relaxed">
                            {comp.questionHy}
                          </p>

                          <div className="mt-3 inline-block px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-xs sm:text-sm font-semibold text-indigo-800">
                            Empieza así: <span className="font-bold text-indigo-950">{comp.starterEs}</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-200">
                          {seen ? (
                            <div
                              onClick={() => handleSpanishItemClick(comp.id, comp.answerEs)}
                              className="p-3.5 bg-white rounded-xl border border-indigo-200 cursor-pointer"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                                  {comp.answerEs}
                                </p>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSpeak(comp.answerEs);
                                  }}
                                  disabled={isMuted}
                                  className="text-slate-400 hover:text-indigo-600"
                                >
                                  <Volume2 className="w-5 h-5" />
                                </button>
                              </div>
                              <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1.5 leading-relaxed">
                                {comp.answerHy}
                              </p>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setCompletionsRevealed((prev) => new Set(prev).add(comp.id));
                                handleSpeak(comp.answerEs);
                              }}
                              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                            >
                              <Eye className="w-4 h-4 text-indigo-600" />
                              <span>Ver respuesta</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>

            {/* Section 4: Escucha y contesta — Երկխոսություններ՝ կենդանի խոսքի համար */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                  <span>4. Escucha y contesta — Երկխոսություններ՝ կենդանի խոսքի համար</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Գրադարանում, Խաղից առաջ, Խանութում, Անսպասելի զրույց
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {part2Dialogues.map((dlg) => (
                  <div
                    key={dlg.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-4 pb-2 border-b border-slate-100">
                        <h4 className="font-black text-slate-900 text-base sm:text-lg">{dlg.titleEs}</h4>
                        <p className="text-xs sm:text-sm text-red-600 font-semibold">{dlg.titleHy}</p>
                      </div>

                      <div className="space-y-3">
                        {dlg.lines.map((ln, idx) => {
                          const lId = `${dlg.id}-${idx}`;
                          const rev = isRevealed(lId);
                          return (
                            <div
                              key={idx}
                              onClick={() => handleSpanishItemClick(lId, ln.es)}
                              className="p-3 rounded-xl bg-slate-50 hover:bg-red-50/40 border border-slate-200/70 transition-all cursor-pointer"
                            >
                              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700 mb-1">
                                <span className="text-red-700">{ln.speaker}:</span>
                                <Volume2 className="w-4 h-4 text-slate-400 hover:text-red-600" />
                              </div>
                              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">{ln.es}</p>
                              {rev ? (
                                <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1 leading-relaxed">
                                  {ln.hy}
                                </p>
                              ) : (
                                <p className="text-xs text-slate-400 mt-0.5">
                                  Սեղմի՛ր թարգմանությունը տեսնելու համար
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Traduce sin escribir — Արագ թարգմանի՛ր հայերենից իսպաներեն */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-emerald-600" />
                    <span>5. Traduce sin escribir — Արագ թարգմանի՛ր հայերենից իսպաներեն</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Աշակերտը պետք է բարձրաձայն ասի իսպաներեն տարբերակը, հետո ստուգի։
                  </p>
                </div>
                <button
                  onClick={() => {
                    const allIds = new Set(part2OralTranslations.map((t) => t.id));
                    setOralTranslationsRevealed(
                      oralTranslationsRevealed.size === allIds.size ? new Set() : allIds
                    );
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm font-bold text-slate-700 cursor-pointer"
                >
                  {oralTranslationsRevealed.size === part2OralTranslations.length
                    ? 'Թաքցնել բոլոր պատասխանները'
                    : 'Ցույց տալ բոլոր պատասխանները'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {part2OralTranslations
                  .filter((t) => filterPass([t.hy, t.es]))
                  .map((item) => {
                    const seen = oralTranslationsRevealed.has(item.id);
                    return (
                      <div
                        key={item.id}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs text-slate-400 font-bold mb-1">#{item.number}</div>
                          <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{item.hy}</p>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-slate-200">
                          {seen ? (
                            <div
                              onClick={() => handleSpanishItemClick(item.id, item.es)}
                              className="p-2.5 bg-white rounded-lg border border-emerald-300 cursor-pointer shadow-xs"
                            >
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-bold text-sm sm:text-base text-emerald-950">
                                  {item.es}
                                </span>
                                <Volume2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setOralTranslationsRevealed((prev) => new Set(prev).add(item.id));
                                handleSpeak(item.es);
                              }}
                              className="w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                            >
                              <Eye className="w-4 h-4 text-emerald-600" />
                              <span>Ստուգել (Ver)</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>

            {/* Section 6: Aprende a alargar la respuesta — Ինչպես երկարացնել պատասխանը */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-600" />
                  <span>6. Aprende a alargar la respuesta — Ինչպես երկարացնել պատասխանը</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Աշակերտը հաճախ պատասխանում է միայն մեկ բառով։ Սովորեցրու նրան այս պարզ բանաձևը՝
                </p>

                {/* The Golden Formula */}
                <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                  <div className="text-xs font-bold uppercase text-amber-800 tracking-wider">
                    Բանաձև / Fórmula:
                  </div>
                  <div className="text-base sm:text-lg font-black text-amber-950 mt-1">
                    {part2LengthenFormula.rule}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-amber-800 mt-0.5">
                    {part2LengthenFormula.ruleHy}
                  </div>
                </div>
              </div>

              {/* 4 Levels Example: ¿Te gusta el fútbol? */}
              <div className="space-y-3">
                <div className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2 flex-wrap">
                  <span>Օրինակ / Ejemplo:</span>
                  <span className="font-extrabold text-indigo-700 text-base sm:text-lg">
                    {part2LengthenFormula.exampleQuestionEs}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    ({part2LengthenFormula.exampleQuestionHy})
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {part2LengthenFormula.levels.map((lvl) => {
                    const lId = `lvl-${lvl.level}`;
                    const rev = isRevealed(lId);
                    return (
                      <div
                        key={lvl.level}
                        onClick={() => handleSpanishItemClick(lId, lvl.es)}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-amber-50/40 transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                            Nivel {lvl.level}
                          </span>
                          <p className="text-sm sm:text-base font-bold text-slate-900 mt-2.5 leading-snug">
                            {lvl.es}
                          </p>
                        </div>
                        <div className="mt-3 pt-2.5 border-t border-slate-200/60">
                          {rev ? (
                            <p className="text-xs sm:text-sm text-emerald-800 font-medium leading-relaxed">
                              {lvl.hy}
                            </p>
                          ) : (
                            <span className="text-xs text-slate-400">Կտտացրո՛ւ</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Practice Models Table */}
              <div className="space-y-2.5">
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  Ahora practica — Հիմա փորձի՛ր
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm sm:text-base">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3.5 w-2/5">Pregunta (Հարց)</th>
                        <th className="p-3.5 w-3/5">Respuesta modelo (Մոդելային պատասխան)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {part2PracticeModels
                        .filter((m) => filterPass([m.questionEs, m.questionHy, m.answerEs, m.answerHy]))
                        .map((pm) => (
                          <tr key={pm.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3.5 align-top">
                              <p className="font-bold text-slate-900">{pm.questionEs}</p>
                              <p className="text-xs sm:text-sm text-slate-500 italic mt-1 font-medium">
                                {pm.questionHy}
                              </p>
                            </td>
                            <td
                              onClick={() => handleSpanishItemClick(pm.id, pm.answerEs)}
                              className="p-3.5 align-top cursor-pointer"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span className="font-semibold text-slate-800 leading-relaxed">
                                  {pm.answerEs}
                                </span>
                                <Volume2 className="w-4 h-4 text-slate-400 hover:text-amber-600 shrink-0" />
                              </div>
                              {isRevealed(pm.id) ? (
                                <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1.5 leading-relaxed">
                                  {pm.answerHy}
                                </p>
                              ) : (
                                <span className="text-xs text-slate-400 mt-1 inline-block">
                                  Սեղմի՛ր թարգմանությունը տեսնելու համար
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 7: Juego especial — Cambia el tiempo verbal */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-indigo-600" />
                  <span>7. Juego especial — Cambia el tiempo verbal</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Սա շատ լավ վարժություն է, որպեսզի աշակերտը չմտածի միայն քերականության մասին, այլ
                  կարողանա արագ փոխել միտքը՝ ըստ իրավիճակի։
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {part2VerbSituations.map((sit) => (
                  <div
                    key={sit.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3"
                  >
                    <div className="border-b border-slate-200 pb-2">
                      <h4 className="font-black text-slate-900 text-base">{sit.titleEs}</h4>
                      <p className="text-xs sm:text-sm text-indigo-600 font-semibold">{sit.titleHy}</p>
                    </div>

                    <div className="space-y-2.5">
                      {sit.tenses.map((t, idx) => {
                        const tId = `${sit.id}-${idx}`;
                        const rev = isRevealed(tId);
                        return (
                          <div
                            key={idx}
                            onClick={() => handleSpanishItemClick(tId, t.es)}
                            className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-indigo-300 transition-all cursor-pointer"
                          >
                            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-indigo-700">
                              <span>
                                {t.tense} ({t.tenseHy}):
                              </span>
                              <Volume2 className="w-4 h-4 text-slate-400 hover:text-indigo-600" />
                            </div>
                            <p className="text-sm sm:text-base font-bold text-slate-900 mt-1 leading-snug">
                              {t.es}
                            </p>
                            {rev ? (
                              <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1 leading-relaxed">
                                {t.hy}
                              </p>
                            ) : (
                              <p className="text-xs text-slate-400 mt-0.5">
                                Սեղմի՛ր թարգմանության համար
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Juego de conversación — Elige una situación */}
            <section className="bg-gradient-to-tr from-amber-500/10 via-red-500/10 to-indigo-500/10 rounded-2xl border border-amber-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <Award className="w-6 h-6 text-amber-600" />
                    <span>8. Juego de conversación — Elige una situación</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Այս խաղում դու տալիս ես իրավիճակը, աշակերտը պատասխանում է իսպաներեն։
                  </p>
                </div>
                <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-white text-slate-800 shadow-xs border border-slate-200">
                  {gameCardIndex + 1}/{part2ConversationGameCards.length}
                </span>
              </div>

              {/* Interactive Card */}
              {(() => {
                const currentCard = part2ConversationGameCards[gameCardIndex];
                return (
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                    <div className="text-xs font-black uppercase text-amber-600 tracking-wider">
                      ¿Qué dirías tú?
                    </div>

                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-slate-900">
                        {currentCard.titleEs}
                      </h4>
                      <p className="text-sm sm:text-base font-bold text-indigo-700 mt-1">
                        {currentCard.titleHy}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1.5 italic">
                        {currentCard.instructionHy}
                      </p>
                    </div>

                    <div className="pt-1">
                      {gameCardRevealed ? (
                        <div
                          onClick={() => handleSpeak(currentCard.answerEs)}
                          className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-base sm:text-lg font-bold text-emerald-950 leading-relaxed">
                              {currentCard.answerEs}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSpeak(currentCard.answerEs);
                              }}
                              disabled={isMuted}
                              className="text-emerald-700 hover:text-emerald-900"
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                          </div>
                          <p className="text-xs sm:text-sm text-emerald-900 mt-2 font-medium leading-relaxed">
                            {currentCard.answerHy}
                          </p>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setGameCardRevealed(true);
                            handleSpeak(currentCard.answerEs);
                          }}
                          className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Eye className="w-5 h-5" />
                          <span>Ver respuesta (Տեսնել պատասխանը)</span>
                        </button>
                      )}
                    </div>

                    {/* Navigation Prev / Next */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setGameCardIndex((prev) => Math.max(0, prev - 1));
                          setGameCardRevealed(false);
                        }}
                        disabled={gameCardIndex === 0}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                          gameCardIndex === 0
                            ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Anterior (Նախորդ)</span>
                      </button>

                      <button
                        onClick={() => {
                          setGameCardIndex((prev) =>
                            Math.min(part2ConversationGameCards.length - 1, prev + 1)
                          );
                          setGameCardRevealed(false);
                        }}
                        disabled={gameCardIndex === part2ConversationGameCards.length - 1}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                          gameCardIndex === part2ConversationGameCards.length - 1
                            ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <span>Siguiente (Հաջորդ)</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: 20-MIN DAILY WORKOUT TIMER & GUIDES                      */}
        {/* ============================================================== */}
        {activeTab === 'workout' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  Մարզում
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                  Ամենօրյա 20-րոպեանոց պլան
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                9. Cómo practicar cada día — 20-րոպեանոց խոսակցական մարզում
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                Հետևիր այս 5 քայլերին ամեն օր՝ խոսքի արագությունը, բնականությունն ու վստահությունը
                զարգացնելու համար։
              </p>
            </div>

            {/* Interactive Timer HUD */}
            <div className="bg-gradient-to-tr from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
                    Քայլ {activeWorkoutStep + 1} / 5 · {part2DailyWorkout[activeWorkoutStep].minutes} րոպե
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mt-1">
                    {part2DailyWorkout[activeWorkoutStep].titleEs} —{' '}
                    {part2DailyWorkout[activeWorkoutStep].titleHy}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl leading-relaxed">
                    {part2DailyWorkout[activeWorkoutStep].descriptionHy}
                  </p>
                  <p className="text-xs sm:text-sm text-indigo-300 italic mt-1">
                    {part2DailyWorkout[activeWorkoutStep].descriptionEs}
                  </p>
                </div>

                <div className="flex flex-col items-center shrink-0">
                  <div className="font-mono text-5xl sm:text-6xl font-black tracking-wider text-amber-400 drop-shadow-sm">
                    {formatTime(timerSecondsLeft)}
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={toggleWorkoutTimer}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-black text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      {timerRunning ? (
                        <>
                          <Pause className="w-5 h-5" />
                          <span>Դադարեցնել</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5" />
                          <span>Սկսել վարժությունը</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={resetWorkoutTimer}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer"
                      title="Վերսկսել"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {part2DailyWorkout.map((step, idx) => {
                const isActive = idx === activeWorkoutStep;
                return (
                  <div
                    key={idx}
                    onClick={() => selectWorkoutStep(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-500/20 shadow-xs'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-2xl font-black text-slate-900">{step.minutes}</span>
                        <span className="text-xs font-bold text-slate-400 uppercase">րոպե</span>
                      </div>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-800 leading-snug">
                        {step.titleHy}
                      </h4>
                      <p className="text-xs text-indigo-700 font-bold mt-0.5">{step.titleEs}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {step.descriptionHy}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Teacher's Essential Advice */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-2">
              <h4 className="font-black text-amber-950 text-base sm:text-lg flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-amber-700" />
                <span>Ուսուցչի համար ամենակարևոր խորհուրդը</span>
              </h4>
              <p className="text-xs sm:text-base text-amber-900 leading-relaxed font-medium">
                {part2TeacherAdvice}
              </p>
            </div>
          </div>
        )}
      </main>

      {/* ============================================================== */}
      {/* FOOTER                                                         */}
      {/* ============================================================== */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
          <div>
            🇪🇸 <strong>Hablar sin miedo</strong> — 7-րդ դասարան իսպաներենի խոսակցական ինտերակտիվ դասընթաց
          </div>
          <div className="flex items-center gap-3">
            <span>A2–B1 Մակարդակ</span>
            <span>•</span>
            <span>Աուդիո աջակցություն Web Speech API-ով</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==============================================================
// MODULAR REUSABLE QUESTION CARD (Flat inside App.tsx)
// ==============================================================
function QuestionCard({
  item,
  isRevealed,
  onToggle,
  onSpanishClick,
  onSpeak,
  activeSpeakingText,
  isMuted
}: {
  item: {
    id: string;
    number: number;
    category?: string;
    questionEs: string;
    questionHy: string;
    cortaEs: string;
    cortaHy: string;
    naturalEs: string;
    naturalHy: string;
  };
  isRevealed: boolean;
  onToggle: () => void;
  onSpanishClick: (text: string) => void;
  onSpeak: (text: string) => void;
  activeSpeakingText: string | null;
  isMuted: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 font-semibold mb-2">
          <span>Հարց #{item.number}</span>
          <button
            onClick={onToggle}
            className="text-xs sm:text-sm text-amber-600 hover:underline flex items-center gap-1 cursor-pointer font-bold"
          >
            {isRevealed ? 'Թաքցնել թարգմանությունը' : 'Տեսնել հայերենը'}
          </button>
        </div>

        <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{item.questionEs}</p>
        {isRevealed && (
          <p className="text-xs sm:text-sm text-slate-500 mt-1 italic font-medium leading-relaxed">
            {item.questionHy}
          </p>
        )}
      </div>

      <div className="mt-4 space-y-2.5">
        {/* Short Answer (Corta) */}
        <div
          onClick={() => onSpanishClick(item.cortaEs)}
          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
            activeSpeakingText === item.cortaEs
              ? 'bg-amber-50 border-amber-300 ring-2 ring-amber-400/20'
              : 'bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/70'
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-700 block">
                Corta (Կարճ):
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-900 mt-0.5 leading-snug">
                {item.cortaEs}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSpeak(item.cortaEs);
              }}
              disabled={isMuted}
              className="p-1.5 rounded-md text-slate-400 hover:text-amber-600 hover:bg-white shrink-0"
              title="Արտասանել"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
          {isRevealed ? (
            <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1.5 pt-1.5 border-t border-slate-200/50 leading-relaxed">
              {item.cortaHy}
            </p>
          ) : (
            <p className="text-xs text-slate-400 mt-1">Սեղմի՛ր թարգմանության համար</p>
          )}
        </div>

        {/* More Natural Answer (Más natural) */}
        <div
          onClick={() => onSpanishClick(item.naturalEs)}
          className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
            activeSpeakingText === item.naturalEs
              ? 'bg-amber-50 border-amber-300 ring-2 ring-amber-400/20'
              : 'bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/70'
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                Más natural (Ավելի բնական):
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-900 mt-0.5 leading-relaxed">
                {item.naturalEs}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSpeak(item.naturalEs);
              }}
              disabled={isMuted}
              className="p-1.5 rounded-md text-slate-400 hover:text-emerald-600 hover:bg-white shrink-0"
              title="Արտասանել"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
          {isRevealed ? (
            <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-1.5 pt-1.5 border-t border-slate-200/50 leading-relaxed">
              {item.naturalHy}
            </p>
          ) : (
            <p className="text-xs text-slate-400 mt-1">Սեղմի՛ր թարգմանության համար</p>
          )}
        </div>
      </div>
    </div>
  );
}
