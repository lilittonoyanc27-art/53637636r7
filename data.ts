import {
  ShortAndNaturalQA,
  DirectQA,
  ConversionPair,
  RealSituation,
  Dialogue,
  PhraseItem,
  QuickReaction,
  SentenceCompletion,
  OralTranslation,
  VerbSituation,
  LevelModel,
  PracticeModelQA,
  WorkoutStep,
} from './types';

// ==========================================
// PART 1 DATA
// ==========================================

export const part1Intro = {
  titleEs: "🇪🇸 Hablar sin miedo — Aprende a responder en español",
  titleHy: "7-րդ դասարան — Խոսակցական իսպաներեն | Հարցեր և պատասխաններ",
  description: "Սա հատուկ պրակտիկա է այն աշակերտի համար, ով հասկանում է իսպաներենը, բայց դժվարանում է պատասխանել։ Նպատակը՝ սովորել արագ արձագանքել, չվախենալ սխալվելուց և բնական խոսել։ Յուրաքանչյուր հարցի համար ունենք երկու պատասխան՝ կարճ և ավելի ամբողջական։ Սկզբում թող աշակերտը սովորի կարճ պատասխանը, հետո փորձի ավելացնել երկրորդ միտքը։"
};

export const part1SchoolQA: ShortAndNaturalQA[] = [
  {
    id: "p1-q1",
    number: 1,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Qué tal estás hoy?",
    questionHy: "Ինչպե՞ս ես այսօր։",
    cortaEs: "Bien, gracias.",
    cortaHy: "Լավ եմ, շնորհակալություն։",
    naturalEs: "Bastante bien, aunque tengo un poco de sueño.",
    naturalHy: "Բավականին լավ, չնայած մի քիչ քնկոտ եմ։"
  },
  {
    id: "p1-q2",
    number: 2,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Qué tal te ha ido el día?",
    questionHy: "Ինչպե՞ս է անցել օրդ։",
    cortaEs: "Muy bien.",
    cortaHy: "Շատ լավ։",
    naturalEs: "Bien, pero he tenido muchas clases y estoy cansado.",
    naturalHy: "Լավ, բայց շատ դասեր եմ ունեցել և հոգնած եմ։"
  },
  {
    id: "p1-q3",
    number: 3,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Por qué estás tan callado?",
    questionHy: "Ինչո՞ւ ես այդքան լուռ։",
    cortaEs: "No sé qué decir.",
    cortaHy: "Չգիտեմ՝ ինչ ասել։",
    naturalEs: "Entiendo lo que dices, pero no sé cómo responder.",
    naturalHy: "Հասկանում եմ՝ ինչ ես ասում, բայց չգիտեմ՝ ինչպես պատասխանել։"
  },
  {
    id: "p1-q4",
    number: 4,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Has entendido lo que he dicho?",
    questionHy: "Հասկացե՞լ ես՝ ինչ ասացի։",
    cortaEs: "Sí, más o menos.",
    cortaHy: "Այո՛, քիչ թե շատ։",
    naturalEs: "Sí, lo he entendido, pero necesito pensar un poco.",
    naturalHy: "Այո՛, հասկացել եմ, բայց պետք է մի քիչ մտածեմ։"
  },
  {
    id: "p1-q5",
    number: 5,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Has terminado los deberes?",
    questionHy: "Ավարտե՞լ ես տնային աշխատանքները։",
    cortaEs: "Todavía no.",
    cortaHy: "Դեռ ոչ։",
    naturalEs: "Todavía no, me queda un ejercicio.",
    naturalHy: "Դեռ ոչ, մի վարժություն է մնացել։"
  },
  {
    id: "p1-q6",
    number: 6,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Por qué has llegado tarde?",
    questionHy: "Ինչո՞ւ ես ուշացել։",
    cortaEs: "He perdido el autobús.",
    cortaHy: "Բաց եմ թողել ավտոբուսը։",
    naturalEs: "He salido tarde de casa y he perdido el autobús.",
    naturalHy: "Տնից ուշ եմ դուրս եկել և բաց եմ թողել ավտոբուսը։"
  },
  {
    id: "p1-q7",
    number: 7,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Qué asignatura te cuesta más?",
    questionHy: "Ո՞ր առարկան է քեզ համար ավելի դժվար։",
    cortaEs: "La lengua.",
    cortaHy: "Լեզվի դասը։",
    naturalEs: "Me cuesta la lengua porque hay muchas cosas que memorizar.",
    naturalHy: "Լեզվի դասը դժվար է ինձ համար, որովհետև շատ բաներ կան անգիր սովորելու։"
  },
  {
    id: "p1-q8",
    number: 8,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Quieres que te ayude?",
    questionHy: "Ուզո՞ւմ ես, որ քեզ օգնեմ։",
    cortaEs: "Sí, por favor.",
    cortaHy: "Այո՛, խնդրում եմ։",
    naturalEs: "Sí, por favor. No entiendo muy bien este ejercicio.",
    naturalHy: "Այո՛, խնդրում եմ։ Այս վարժությունը այնքան էլ լավ չեմ հասկանում։"
  }
];

export const part1FriendsQA: ShortAndNaturalQA[] = [
  {
    id: "p1-q9",
    number: 9,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "Oye, ¿qué haces?",
    questionHy: "Լսի՛ր, ի՞նչ ես անում։",
    cortaEs: "Nada especial.",
    cortaHy: "Առանձնապես ոչինչ։",
    naturalEs: "Nada especial, estoy esperando a un amigo.",
    naturalHy: "Առանձնապես ոչինչ, ընկերոջս եմ սպասում։"
  },
  {
    id: "p1-q10",
    number: 10,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "¿Te vienes con nosotros?",
    questionHy: "Մեզ հետ գալո՞ւ ես։",
    cortaEs: "Vale, voy.",
    cortaHy: "Լավ, գալիս եմ։",
    naturalEs: "Sí, claro. Esperadme un momento.",
    naturalHy: "Այո՛, իհարկե։ Մի պահ սպասե՛ք ինձ։"
  },
  {
    id: "p1-q11",
    number: 11,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "¿Por qué no has venido ayer?",
    questionHy: "Ինչո՞ւ երեկ չես եկել։",
    cortaEs: "No podía.",
    cortaHy: "Չէի կարող։",
    naturalEs: "No pude ir porque tenía que estudiar para un examen.",
    naturalHy: "Չկարողացա գալ, որովհետև պետք է քննության համար սովորեի։"
  },
  {
    id: "p1-q12",
    number: 12,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "¿Te pasa algo?",
    questionHy: "Քեզ ինչ-որ բա՞ն է պատահել։",
    cortaEs: "No, estoy bien.",
    cortaHy: "Ո՛չ, լավ եմ։",
    naturalEs: "No es nada grave. Solo estoy un poco preocupado.",
    naturalHy: "Ոչ մի լուրջ բան։ Պարզապես մի քիչ անհանգիստ եմ։"
  },
  {
    id: "p1-q13",
    number: 13,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "¿Te has enfadado conmigo?",
    questionHy: "Ինձնից նեղացե՞լ ես։",
    cortaEs: "No, tranquilo.",
    cortaHy: "Ո՛չ, հանգիստ եղիր։",
    naturalEs: "No estoy enfadado contigo, solo necesito estar un rato solo.",
    naturalHy: "Քեզնից նեղացած չեմ, պարզապես ուզում եմ մի քիչ մենակ մնալ։"
  },
  {
    id: "p1-q14",
    number: 14,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "¿Por qué te ríes?",
    questionHy: "Ինչո՞ւ ես ծիծաղում։",
    cortaEs: "Por nada.",
    cortaHy: "Ոչ մի բանի։",
    naturalEs: "Porque me he acordado de algo muy gracioso.",
    naturalHy: "Որովհետև շատ զվարճալի մի բան եմ հիշել։"
  },
  {
    id: "p1-q15",
    number: 15,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "¿Me puedes hacer un favor?",
    questionHy: "Կարո՞ղ ես ինձ մի լավություն անել։",
    cortaEs: "Claro, dime.",
    cortaHy: "Իհարկե, ասա՛։",
    naturalEs: "Claro, ¿qué necesitas?",
    naturalHy: "Իհարկե, ի՞նչ է քեզ պետք։"
  },
  {
    id: "p1-q16",
    number: 16,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "¿Te importa si me siento aquí?",
    questionHy: "Դեմ չե՞ս, եթե այստեղ նստեմ։",
    cortaEs: "No, siéntate.",
    cortaHy: "Ո՛չ, նստի՛ր։",
    naturalEs: "No, para nada. Este sitio está libre.",
    naturalHy: "Ո՛չ, բոլորովին։ Այս տեղն ազատ է։"
  },
  {
    id: "p1-q17",
    number: 17,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "¿Te apetece salir esta tarde?",
    questionHy: "Կուզե՞ս այսօր կեսօրից հետո դուրս գալ։",
    cortaEs: "Sí, me apetece.",
    cortaHy: "Այո՛, կուզեմ։",
    naturalEs: "Me encantaría, pero primero tengo que hacer los deberes.",
    naturalHy: "Մեծ հաճույքով, բայց նախ պետք է կատարեմ տնայիններս։"
  },
  {
    id: "p1-q18",
    number: 18,
    category: "Entre amigos — Ընկերների հետ բնական խոսակցություն",
    questionEs: "¿Qué hacemos ahora?",
    questionHy: "Հիմա ի՞նչ ենք անում։",
    cortaEs: "No sé, tú decides.",
    cortaHy: "Չգիտեմ, դու որոշի՛ր։",
    naturalEs: "Podemos dar una vuelta o ir a jugar al parque.",
    naturalHy: "Կարող ենք մի քիչ զբոսնել կամ գնալ այգի խաղալու։"
  }
];

export const part1OpinionsQA: ShortAndNaturalQA[] = [
  {
    id: "p1-q19",
    number: 19,
    category: "Expresar opiniones y emociones — Կարծիքներ և զգացմունքներ",
    questionEs: "¿Qué opinas de esta idea?",
    questionHy: "Ի՞նչ կարծիք ունես այս գաղափարի մասին։",
    cortaEs: "Me parece bien.",
    cortaHy: "Ինձ լավ է թվում։",
    naturalEs: "Me parece buena idea, pero creo que podemos hacerlo de otra manera.",
    naturalHy: "Լավ գաղափար է թվում, բայց կարծում եմ՝ կարող ենք այլ կերպ անել։"
  },
  {
    id: "p1-q20",
    number: 20,
    category: "Expresar opiniones y emociones — Կարծիքներ և զգացմունքներ",
    questionEs: "¿Estás de acuerdo conmigo?",
    questionHy: "Համաձա՞յն ես ինձ հետ։",
    cortaEs: "No del todo.",
    cortaHy: "Ոչ ամբողջությամբ։",
    naturalEs: "Entiendo lo que dices, pero yo pienso de otra manera.",
    naturalHy: "Հասկանում եմ՝ ինչ ես ասում, բայց ես այլ կերպ եմ մտածում։"
  },
  {
    id: "p1-q21",
    number: 21,
    category: "Expresar opiniones y emociones — Կարծիքներ և զգացմունքներ",
    questionEs: "¿Por qué no quieres participar?",
    questionHy: "Ինչո՞ւ չես ուզում մասնակցել։",
    cortaEs: "Me da vergüenza.",
    cortaHy: "Ամաչում եմ։",
    naturalEs: "Me gustaría participar, pero me da miedo equivocarme.",
    naturalHy: "Կուզեի մասնակցել, բայց վախենում եմ սխալվելուց։"
  },
  {
    id: "p1-q22",
    number: 22,
    category: "Expresar opiniones y emociones — Կարծիքներ և զգացմունքներ",
    questionEs: "¿Qué haces cuando estás nervioso?",
    questionHy: "Ի՞նչ ես անում, երբ լարված ես։",
    cortaEs: "Intento calmarme.",
    cortaHy: "Փորձում եմ հանգստանալ։",
    naturalEs: "Respiro hondo y pienso que todo va a salir bien.",
    naturalHy: "Խորը շունչ եմ քաշում և մտածում, որ ամեն ինչ լավ է լինելու։"
  },
  {
    id: "p1-q23",
    number: 23,
    category: "Expresar opiniones y emociones — Կարծիքներ և զգացմունքներ",
    questionEs: "¿Te importa lo que piensen los demás?",
    questionHy: "Քեզ համար կարևո՞ր է, թե ուրիշներն ինչ են մտածում։",
    cortaEs: "A veces sí.",
    cortaHy: "Երբեմն՝ այո՛։",
    naturalEs: "A veces sí, pero intento no preocuparme demasiado.",
    naturalHy: "Երբեմն՝ այո՛, բայց փորձում եմ շատ չանհանգստանալ։"
  },
  {
    id: "p1-q24",
    number: 24,
    category: "Expresar opiniones y emociones — Կարծիքներ և զգացմունքներ",
    questionEs: "¿Qué haces si alguien te habla mal?",
    questionHy: "Ի՞նչ ես անում, եթե ինչ-որ մեկը քեզ վատ է խոսում։",
    cortaEs: "Intento no enfadarme.",
    cortaHy: "Փորձում եմ չբարկանալ։",
    naturalEs: "Le digo que no me gusta que me hable así.",
    naturalHy: "Ասում եմ նրան, որ ինձ դուր չի գալիս, երբ ինձ հետ այդպես է խոսում։"
  }
];

export const part1PastFutureQA: DirectQA[] = [
  {
    id: "p1-q25",
    number: 25,
    category: "Pasado y futuro — Անցյալ և ապառնի",
    questionEs: "¿Qué hiciste ayer por la tarde?",
    questionHy: "Ի՞նչ արեցիր երեկ կեսօրից հետո։",
    answerEs: "Fui a casa, descansé un poco y después salí con mis amigos.",
    answerHy: "Գնացի տուն, մի քիչ հանգստացա, հետո դուրս եկա ընկերներիս հետ։"
  },
  {
    id: "p1-q26",
    number: 26,
    category: "Pasado y futuro — Անցյալ և ապառնի",
    questionEs: "¿Qué estabas haciendo cuando te llamé?",
    questionHy: "Ի՞նչ էիր անում, երբ քեզ զանգահարեցի։",
    answerEs: "Estaba jugando y no escuché el teléfono.",
    answerHy: "Խաղում էի և հեռախոսը չլսեցի։"
  },
  {
    id: "p1-q27",
    number: 27,
    category: "Pasado y futuro — Անցյալ և ապառնի",
    questionEs: "¿Has probado alguna comida nueva últimamente?",
    questionHy: "Վերջերս որևէ նոր ուտելիք փորձե՞լ ես։",
    answerEs: "Sí, he probado sushi. Al principio no me gustó mucho, pero después sí.",
    answerHy: "Այո՛, սուշի եմ փորձել։ Սկզբում այնքան էլ դուր չեկավ, բայց հետո՝ այո։"
  },
  {
    id: "p1-q28",
    number: 28,
    category: "Pasado y futuro — Անցյալ և ապառնի",
    questionEs: "¿Qué harás si mañana no hay clases?",
    questionHy: "Ի՞նչ կանես, եթե վաղը դասեր չլինեն։",
    answerEs: "Dormiré un poco más y quedaré con mis amigos.",
    answerHy: "Մի քիչ ավելի երկար կքնեմ և կհանդիպեմ ընկերներիս։"
  },
  {
    id: "p1-q29",
    number: 29,
    category: "Pasado y futuro — Անցյալ և ապառնի",
    questionEs: "¿Qué harías si tuvieras un día libre?",
    questionHy: "Ի՞նչ կանեիր, եթե ազատ օր ունենայիր։",
    answerEs: "Iría a algún sitio divertido y pasaría tiempo con mi familia.",
    answerHy: "Կգնայի որևէ հետաքրքիր տեղ և ժամանակ կանցկացնեի ընտանիքիս հետ։"
  },
  {
    id: "p1-q30",
    number: 30,
    category: "Pasado y futuro — Անցյալ և ապառնի",
    questionEs: "¿Qué esperas que pase la semana que viene?",
    questionHy: "Ի՞նչ ես հույս ունենում, որ տեղի կունենա հաջորդ շաբաթ։",
    answerEs: "Espero que tengamos menos deberes y más tiempo libre.",
    answerHy: "Հուսով եմ՝ ավելի քիչ տնային աշխատանք կունենանք և ավելի շատ ազատ ժամանակ։"
  }
];

export const part1Conversions: ConversionPair[] = [
  { id: "c1", corta: "Sí.", cortaHy: "Այո՛։", natural: "Sí, claro, ¿por qué no?", naturalHy: "Այո՛, իհարկե, ինչո՞ւ ոչ։" },
  { id: "c2", corta: "No.", cortaHy: "Ո՛չ։", natural: "Pues no, la verdad es que no me apetece.", naturalHy: "Դե ոչ, ճիշտն ասած՝ սիրտս չի ուզում։" },
  { id: "c3", corta: "Bien.", cortaHy: "Լավ։", natural: "Bastante bien, aunque estoy algo cansado.", naturalHy: "Բավականին լավ, չնայած մի քիչ հոգնած եմ։" },
  { id: "c4", corta: "No sé.", cortaHy: "Չգիտեմ։", natural: "No estoy muy seguro, déjame pensar.", naturalHy: "Շատ վստահ չեմ, թող միտք անեմ։" },
  { id: "c5", corta: "Porque sí.", cortaHy: "Ուղղակի այդպես։", natural: "Porque me parece divertido e interesante.", naturalHy: "Որովհետև ինձ հետաքրքիր և զվարճալի է թվում։" },
  { id: "c6", corta: "Me gusta.", cortaHy: "Ինձ դուր է գալիս։", natural: "Me gusta bastante porque aprendo cosas nuevas.", naturalHy: "Ինձ շատ է դուր գալիս, որովհետև նոր բաներ եմ սովորում։" },
  { id: "c7", corta: "No me gusta.", cortaHy: "Ինձ դուր չի գալիս։", natural: "No me gusta mucho porque me parece aburrido.", naturalHy: "Այնքան էլ դուր չի գալիս, որովհետև ձանձրալի է թվում։" },
  { id: "c8", corta: "No puedo.", cortaHy: "Չեմ կարող։", natural: "Lo siento, ahora no puedo, pero más tarde sí.", naturalHy: "Ցավում եմ, հիմա չեմ կարող, բայց ավելի ուշ՝ այո։" },
  { id: "c9", corta: "Quizás.", cortaHy: "Գուցե։", natural: "Puede ser, todavía no lo he decidido.", naturalHy: "Հնարավոր է, դեռ չեմ որոշել։" },
  { id: "c10", corta: "Nada.", cortaHy: "Ոչինչ։", natural: "Nada especial, he estado en casa descansando.", naturalHy: "Առանձնահատուկ ոչինչ, տանն էի՝ հանգստանում էի։" }
];

export const part1RealSituations: RealSituation[] = [
  {
    id: "rs-1",
    number: 1,
    promptEs: "Un amigo te pregunta algo, pero no sabes la respuesta.",
    promptHy: "Ընկերդ հարց է տալիս, բայց չգիտես պատասխանը։",
    answerEs: "Pues no lo sé exactamente, pero si quieres lo buscamos juntos.",
    answerHy: "Դե ստույգ չգիտեմ, բայց եթե ուզում ես՝ միասին փնտրենք։"
  },
  {
    id: "rs-2",
    number: 2,
    promptEs: "El profesor habla demasiado rápido.",
    promptHy: "Ուսուցիչը չափազանց արագ է խոսում։",
    answerEs: "Perdón, profesor, ¿puede hablar un poco más despacio, por favor?",
    answerHy: "Ներեցեք, ուսուցիչ, կարո՞ղ եք մի քիչ ավելի դանդաղ խոսել, խնդրում եմ։"
  },
  {
    id: "rs-3",
    number: 3,
    promptEs: "No has oído bien lo que ha dicho tu compañero.",
    promptHy: "Լավ չես լսել, թե ինչ է ասել դասընկերդ։",
    answerEs: "Perdona, ¿puedes repetirlo? No te he oído bien.",
    answerHy: "Ների՛ր, կարո՞ղ ես կրկնել։ Քեզ լավ չլսեցի։"
  },
  {
    id: "rs-4",
    number: 4,
    promptEs: "Tu amigo te invita a salir, pero estás ocupado.",
    promptHy: "Ընկերդ հրավիրում է դուրս գալու, բայց զբաղված ես։",
    answerEs: "Me encantaría, pero hoy tengo que hacer los deberes. ¿Quedamos mañana?",
    answerHy: "Մեծ հաճույքով, բայց այսօր պետք է դասերս անեմ։ Վա՞ղը հանդիպենք։"
  },
  {
    id: "rs-5",
    number: 5,
    promptEs: "Alguien dice algo con lo que no estás de acuerdo.",
    promptHy: "Ինչ-որ մեկն ասում է մի բան, որի հետ համաձայն չես։",
    answerEs: "Entiendo lo que dices, pero yo pienso de otra forma.",
    answerHy: "Հասկանում եմ՝ ինչ ես ասում, բայց ես այլ կերպ եմ մտածում։"
  },
  {
    id: "rs-6",
    number: 6,
    promptEs: "Has cometido un error al hablar español.",
    promptHy: "Իսպաներեն խոսելիս սխալ ես թույլ տվել։",
    answerEs: "Perdón, me he equivocado. Quería decir otra cosa...",
    answerHy: "Ներեցեք, սխալվեցի։ Ուզում էի ուրիշ բան ասել..."
  },
  {
    id: "rs-7",
    number: 7,
    promptEs: "No recuerdas una palabra en español.",
    promptHy: "Իսպաներեն մի բառ չես հիշում։",
    answerEs: "¿Cómo se dice...? Se me ha olvidado la palabra.",
    answerHy: "Ինչպե՞ս է ասվում... Մոռացել եմ այդ բառը։"
  },
  {
    id: "rs-8",
    number: 8,
    promptEs: "Un amigo está preocupado por un examen.",
    promptHy: "Ընկերդ անհանգստանում է քննության համար։",
    answerEs: "Tranquilo, has estudiado mucho y seguro que te sale genial.",
    answerHy: "Հանգիստ եղիր, դու շատ ես պարապել և հաստատ հիանալի կստացվի։"
  },
  {
    id: "rs-9",
    number: 9,
    promptEs: "Un amigo te cuenta una noticia sorprendente.",
    promptHy: "Ընկերդ զարմանալի նորություն է պատմում։",
    answerEs: "¡En serio! ¡No me lo puedo creer! ¡Cuéntame más!",
    answerHy: "Լո՞ւրջ։ Չեմ կարող հավատալ։ Պատմի՛ր ավելին։"
  },
  {
    id: "rs-10",
    number: 10,
    promptEs: "Te preguntan qué prefieres hacer el sábado.",
    promptHy: "Քեզ հարցնում են, թե ինչ ես նախընտրում անել շաբաթ օրը։",
    answerEs: "Prefiero descansar un poco por la mañana y salir por la tarde.",
    answerHy: "Նախընտրում եմ առավոտյան մի քիչ հանգստանալ, իսկ կեսօրից հետո դուրս գալ։"
  }
];

export const part1Dialogues: Dialogue[] = [
  {
    id: "d1",
    titleEs: "Diálogo 1 — Después de clase",
    titleHy: "Երկխոսություն 1 — Դասից հետո",
    lines: [
      { speaker: "A", es: "Oye, ¿qué haces esta tarde?", hy: "Լսի՛ր, ի՞նչ ես անում այսօր կեսօրից հետո։" },
      { speaker: "B", es: "Pues no lo sé todavía. ¿Por qué?", hy: "Դե դեռ չգիտեմ։ Ինչո՞ւ։" },
      { speaker: "A", es: "¿Te apetece ir al parque?", hy: "Կուզե՞ս այգի գնալ։" },
      { speaker: "B", es: "Sí, pero tengo que terminar los deberes.", hy: "Այո՛, բայց պետք է ավարտեմ տնային աշխատանքներս։" },
      { speaker: "A", es: "Vale. ¿A qué hora quedamos?", hy: "Լավ։ Ժամը քանիսի՞ն ենք հանդիպում։" },
      { speaker: "B", es: "A las cinco me viene bien.", hy: "Ժամը հինգին ինձ հարմար է։" }
    ]
  },
  {
    id: "d2",
    titleEs: "Diálogo 2 — No entiendo la pregunta",
    titleHy: "Երկխոսություն 2 — Չեմ հասկանում հարցը",
    lines: [
      { speaker: "Profesor", es: "¿Puedes explicar lo que pasó ayer?", hy: "Կարո՞ղ ես բացատրել, թե երեկ ինչ պատահեց։" },
      { speaker: "Alumno", es: "A ver... no sé cómo explicarlo.", hy: "Դե՜... չգիտեմ՝ ինչպես բացատրեմ։" },
      { speaker: "Profesor", es: "No pasa nada. Empieza por el principio.", hy: "Ոչինչ։ Սկսի՛ր սկզբից։" },
      { speaker: "Alumno", es: "Bueno, primero estábamos jugando y después discutimos.", hy: "Դե, սկզբում խաղում էինք, հետո վիճեցինք։" },
      { speaker: "Profesor", es: "¿Y cómo terminó todo?", hy: "Իսկ ինչպե՞ս ամեն ինչ ավարտվեց։" },
      { speaker: "Alumno", es: "Al final hablamos y nos perdonamos.", hy: "Վերջում խոսեցինք և ներեցինք միմյանց։" }
    ]
  },
  {
    id: "d3",
    titleEs: "Diálogo 3 — Dar tu opinión",
    titleHy: "Երկխոսություն 3 — Արտահայտել կարծիքդ",
    lines: [
      { speaker: "A", es: "¿Te parece buena idea hacer los deberes en grupo?", hy: "Քեզ լա՞վ գաղափար է թվում խմբով տնային աշխատանք կատարելը։" },
      { speaker: "B", es: "Sí, creo que es más divertido.", hy: "Այո՛, կարծում եմ՝ ավելի հետաքրքիր է։" },
      { speaker: "A", es: "¿Y no crees que os distraeréis?", hy: "Իսկ չե՞ս կարծում, որ կշեղվեք։" },
      { speaker: "B", es: "Puede ser, pero si nos organizamos bien, terminaremos antes.", hy: "Հնարավոր է, բայց եթե լավ կազմակերպվենք, ավելի շուտ կավարտենք։" },
      { speaker: "A", es: "Tienes razón. ¿Cuándo empezamos?", hy: "Դու ճիշտ ես։ Ե՞րբ ենք սկսում։" },
      { speaker: "B", es: "Cuando quieras. Yo ya estoy listo.", hy: "Երբ ուզես։ Ես արդեն պատրաստ եմ։" }
    ]
  }
];

export const part1HelpfulPhrases: PhraseItem[] = [
  { id: "hf-1", es: "Pues...", hy: "Դե՜..." },
  { id: "hf-2", es: "A ver...", hy: "Տեսնենք..." },
  { id: "hf-3", es: "Déjame pensar.", hy: "Թող մտածեմ։" },
  { id: "hf-4", es: "Es que...", hy: "Բանն այն է, որ..." },
  { id: "hf-5", es: "Lo que pasa es que...", hy: "Բանն այն է, որ..." },
  { id: "hf-6", es: "La verdad es que...", hy: "Ճիշտն ասած..." },
  { id: "hf-7", es: "No sé cómo explicarlo.", hy: "Չգիտեմ՝ ինչպես բացատրեմ։" },
  { id: "hf-8", es: "No encuentro la palabra.", hy: "Չեմ կարողանում բառը հիշել։" },
  { id: "hf-9", es: "Quiero decir que...", hy: "Ուզում եմ ասել, որ..." },
  { id: "hf-10", es: "Por ejemplo...", hy: "Օրինակ..." },
  { id: "hf-11", es: "Por eso...", hy: "Դրա համար..." },
  { id: "hf-12", es: "Además...", hy: "Բացի այդ..." },
  { id: "hf-13", es: "Aunque...", hy: "Չնայած..." },
  { id: "hf-14", es: "Depende de...", hy: "Կախված է..." },
  { id: "hf-15", es: "Nunca lo había pensado.", hy: "Երբեք դրա մասին չէի մտածել։" }
];

export const part1PracticeAdvice = "Ինչպես պարապել. Առաջին անգամ հարցը տուր դանդաղ՝ թող պատասխանի թեկուզ 2–3 բառով։ Երկրորդ անգամ նույն հարցին թող պատասխանի ամբողջ նախադասությամբ։ Երրորդ անգամ հարցրու «¿Por qué?» կամ «¿Y tú qué harías?»։ Այս մեթոդով նա աստիճանաբար կսովորի ինքնուրույն ձևակերպել պատասխաններ, ոչ թե միայն հասկանալ լսածը։";

// ==========================================
// PART 2 DATA
// ==========================================

export const part2Intro = {
  titleEs: "🇪🇸 ¡Habla español sin miedo! — Práctica de conversación",
  titleHy: "7-րդ դասարան · A2–B1 · Իսպաներեն և հայերեն",
  description: "Այս դասը նախատեսված է այն աշակերտի համար, ով հասկանում է իսպաներենը, բայց դժվարանում է անմիջապես պատասխանել։ Կլինեն նոր հարցեր, պատրաստի պատասխաններ, անսպասելի իրավիճակներ, երկխոսություններ, արագ արձագանքելու խաղեր և տարբեր ժամանակներ։ Գլխավոր կանոնը՝ նախ պատասխանի՛ր առանց նայելու, հետո համեմատի՛ր պատրաստի պատասխանի հետ։"
};

export const part2LifeQA: DirectQA[] = [
  // En el colegio — Դպրոցում
  {
    id: "p2-q1",
    number: 1,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Qué dices cuando no has escuchado bien al profesor?",
    questionHy: "Ի՞նչ ես ասում, երբ ուսուցչին լավ չես լսել։",
    answerEs: "Perdón, no te he oído bien. ¿Puedes repetirlo?",
    answerHy: "Ների՛ր, լավ չլսեցի։ Կարո՞ղ ես կրկնել։"
  },
  {
    id: "p2-q2",
    number: 2,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Qué haces si no encuentras tu cuaderno?",
    questionHy: "Ի՞նչ ես անում, եթե չես գտնում տետրդ։",
    answerEs: "Primero lo busco en la mochila y después pregunto a mis compañeros.",
    answerHy: "Սկզբում փնտրում եմ պայուսակիս մեջ, հետո հարցնում եմ դասընկերներիս։"
  },
  {
    id: "p2-q3",
    number: 3,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Qué respondes si alguien te pregunta si estás preparado?",
    questionHy: "Ի՞նչ ես պատասխանում, եթե ինչ-որ մեկը հարցնում է՝ պատրա՞ստ ես։",
    answerEs: "Más o menos. He estudiado, pero todavía estoy un poco nervioso.",
    answerHy: "Քիչ թե շատ։ Սովորել եմ, բայց դեռ մի քիչ լարված եմ։"
  },
  {
    id: "p2-q4",
    number: 4,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Qué haces si te equivocas delante de todos?",
    questionHy: "Ի՞նչ ես անում, եթե բոլորի առաջ սխալվում ես։",
    answerEs: "Intento corregir mi error y seguir hablando.",
    answerHy: "Փորձում եմ ուղղել սխալս և շարունակել խոսել։"
  },
  {
    id: "p2-q5",
    number: 5,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Qué le dices al profesor si necesitas salir un momento?",
    questionHy: "Ի՞նչ ես ասում ուսուցչին, եթե պետք է մի պահ դուրս գաս։",
    answerEs: "Perdona, ¿puedo salir un momento, por favor?",
    answerHy: "Ներեցե՛ք, կարո՞ղ եմ մի պահ դուրս գալ։"
  },
  {
    id: "p2-q6",
    number: 6,
    category: "En el colegio — Դպրոցում",
    questionEs: "¿Cómo reaccionas si recibes una nota mejor de lo que esperabas?",
    questionHy: "Ինչպե՞ս ես արձագանքում, եթե սպասածիցդ ավելի լավ գնահատական ես ստանում։",
    answerEs: "Me pongo muy contento y se lo cuento a mi familia.",
    answerHy: "Շատ եմ ուրախանում և պատմում եմ ընտանիքիս։"
  },
  // Con los amigos — Ընկերների հետ
  {
    id: "p2-q7",
    number: 7,
    category: "Con los amigos — Ընկերների հետ",
    questionEs: "¿Qué dices si tu amigo te invita a su cumpleaños?",
    questionHy: "Ի՞նչ ես ասում, եթե ընկերդ հրավիրում է ծննդյան տարեդարձին։",
    answerEs: "¡Qué bien! Muchas gracias por invitarme. ¡Allí estaré!",
    answerHy: "Ի՜նչ լավ է։ Շատ շնորհակալ եմ հրավիրելու համար։ Անպայման կգամ։"
  },
  {
    id: "p2-q8",
    number: 8,
    category: "Con los amigos — Ընկերների հետ",
    questionEs: "¿Qué haces si tu amigo no contesta a tus mensajes?",
    questionHy: "Ի՞նչ ես անում, եթե ընկերդ չի պատասխանում հաղորդագրություններիդ։",
    answerEs: "Espero un poco. Quizás esté ocupado.",
    answerHy: "Մի քիչ սպասում եմ։ Գուցե զբաղված է։"
  },
  {
    id: "p2-q9",
    number: 9,
    category: "Con los amigos — Ընկերների հետ",
    questionEs: "¿Qué dices si un amigo te interrumpe mientras hablas?",
    questionHy: "Ի՞նչ ես ասում, եթե ընկերդ ընդհատում է քեզ խոսելիս։",
    answerEs: "Espera, por favor. Déjame terminar lo que estaba diciendo.",
    answerHy: "Սպասի՛ր, խնդրում եմ։ Թող ավարտեմ այն, ինչ ասում էի։"
  },
  {
    id: "p2-q10",
    number: 10,
    category: "Con los amigos — Ընկերների հետ",
    questionEs: "¿Cómo le explicas a un amigo que no tienes ganas de salir?",
    questionHy: "Ինչպե՞ս ես բացատրում ընկերոջդ, որ դուրս գալու ցանկություն չունես։",
    answerEs: "Hoy prefiero quedarme en casa. Estoy bastante cansado.",
    answerHy: "Այսօր նախընտրում եմ տանը մնալ։ Բավականին հոգնած եմ։"
  },
  {
    id: "p2-q11",
    number: 11,
    category: "Con los amigos — Ընկերների հետ",
    questionEs: "¿Qué haces si dos amigos tuyos discuten?",
    questionHy: "Ի՞նչ ես անում, եթե քո երկու ընկերները վիճում են։",
    answerEs: "Intento calmarlos y les digo que hablen tranquilamente.",
    answerHy: "Փորձում եմ հանգստացնել նրանց և ասում եմ, որ հանգիստ խոսեն։"
  },
  {
    id: "p2-q12",
    number: 12,
    category: "Con los amigos — Ընկերների հետ",
    questionEs: "¿Qué le dirías a un amigo que siempre llega tarde?",
    questionHy: "Ի՞նչ կասեիր ընկերոջդ, որը միշտ ուշանում է։",
    answerEs: "Le diría que intentara salir antes de casa.",
    answerHy: "Կասեի, որ փորձի տնից ավելի շուտ դուրս գալ։"
  },
  // En casa y en la calle — Տանը և փողոցում
  {
    id: "p2-q13",
    number: 13,
    category: "En casa y en la calle — Տանը և փողոցում",
    questionEs: "¿Qué respondes si tu madre te pregunta por qué no has ordenado tu habitación?",
    questionHy: "Ի՞նչ ես պատասխանում, եթե մայրդ հարցնում է, թե ինչու չես հավաքել սենյակդ։",
    answerEs: "Porque he estado ocupado, pero ahora mismo la ordeno.",
    answerHy: "Որովհետև զբաղված եմ եղել, բայց հենց հիմա կհավաքեմ։"
  },
  {
    id: "p2-q14",
    number: 14,
    category: "En casa y en la calle — Տանը և փողոցում",
    questionEs: "¿Qué dices si alguien te ofrece comida y no tienes hambre?",
    questionHy: "Ի՞նչ ես ասում, եթե քեզ ուտելիք են առաջարկում, բայց սոված չես։",
    answerEs: "No, gracias. Acabo de comer.",
    answerHy: "Ո՛չ, շնորհակալություն։ Հենց նոր եմ կերել։"
  },
  {
    id: "p2-q15",
    number: 15,
    category: "En casa y en la calle — Տանը և փողոցում",
    questionEs: "¿Qué preguntas si no sabes cómo llegar a una tienda?",
    questionHy: "Ի՞նչ ես հարցնում, եթե չգիտես՝ ինչպես հասնել խանութ։",
    answerEs: "Perdona, ¿sabes dónde está la tienda de deportes?",
    answerHy: "Ների՛ր, գիտե՞ս՝ որտեղ է սպորտային խանութը։"
  },
  {
    id: "p2-q16",
    number: 16,
    category: "En casa y en la calle — Տանը և փողոցում",
    questionEs: "¿Qué haces si pierdes el autobús?",
    questionHy: "Ի՞նչ ես անում, եթե բաց ես թողնում ավտոբուսը։",
    answerEs: "Miro cuándo viene el siguiente y aviso de que llegaré tarde.",
    answerHy: "Նայում եմ՝ երբ է գալիս հաջորդը, և հայտնում եմ, որ կուշանամ։"
  },
  {
    id: "p2-q17",
    number: 17,
    category: "En casa y en la calle — Տանը և փողոցում",
    questionEs: "¿Qué dirías si recibieras un regalo que no esperabas?",
    questionHy: "Ի՞նչ կասեիր, եթե անսպասելի նվեր ստանայիր։",
    answerEs: "¡Muchísimas gracias! ¡No me lo esperaba!",
    answerHy: "Շա՜տ շնորհակալ եմ։ Բոլորովին չէի սպասում։"
  },
  {
    id: "p2-q18",
    number: 18,
    category: "En casa y en la calle — Տանը և փողոցում",
    questionEs: "¿Cómo pides algo en una cafetería?",
    questionHy: "Ինչպե՞ս ես ինչ-որ բան պատվիրում սրճարանում։",
    answerEs: "Hola, ¿me pones un bocadillo y un zumo de naranja, por favor?",
    answerHy: "Բարև, ինձ մի սենդվիչ և նարնջի հյութ կտա՞ս, խնդրում եմ։"
  },
  // Pasado y experiencias — Անցյալ և փորձառություններ
  {
    id: "p2-q19",
    number: 19,
    category: "Pasado y experiencias — Անցյալ և փորձառություններ",
    questionEs: "¿Qué estabas haciendo cuando empezó a llover?",
    questionHy: "Ի՞նչ էիր անում, երբ սկսեց անձրև գալ։",
    answerEs: "Estaba caminando por la calle y tuve que buscar un lugar donde refugiarme.",
    answerHy: "Քայլում էի փողոցով և ստիպված էի ապաստանելու տեղ գտնել։"
  },
  {
    id: "p2-q20",
    number: 20,
    category: "Pasado y experiencias — Անցյալ և փորձառություններ",
    questionEs: "¿Qué fue lo más interesante que aprendiste el mes pasado?",
    questionHy: "Ո՞րն էր ամենահետաքրքիր բանը, որ սովորեցիր անցած ամիս։",
    answerEs: "Aprendí a expresar mejor mis opiniones en español.",
    answerHy: "Սովորեցի ավելի լավ արտահայտել կարծիքներս իսպաներեն։"
  },
  {
    id: "p2-q21",
    number: 21,
    category: "Pasado y experiencias — Անցյալ և փորձառություններ",
    questionEs: "¿Alguna vez has ayudado a alguien que no conocías?",
    questionHy: "Երբևէ օգնե՞լ ես անծանոթ մարդու։",
    answerEs: "Sí, una vez ayudé a una señora a encontrar una dirección.",
    answerHy: "Այո՛, մի անգամ օգնեցի մի կնոջ գտնել հասցեն։"
  },
  {
    id: "p2-q22",
    number: 22,
    category: "Pasado y experiencias — Անցյալ և փորձառություններ",
    questionEs: "¿Qué hiciste la última vez que estuviste enfermo?",
    questionHy: "Ի՞նչ արեցիր, երբ վերջին անգամ հիվանդ էիր։",
    answerEs: "Me quedé en casa, descansé y bebí mucha agua.",
    answerHy: "Մնացի տանը, հանգստացա և շատ ջուր խմեցի։"
  },
  {
    id: "p2-q23",
    number: 23,
    category: "Pasado y experiencias — Անցյալ և փորձառություններ",
    questionEs: "¿Qué hacías antes que ahora ya no haces?",
    questionHy: "Ի՞նչ էիր անում նախկինում, որը հիմա այլևս չես անում։",
    answerEs: "Antes veía muchos dibujos animados, pero ahora prefiero las películas.",
    answerHy: "Նախկինում շատ մուլտֆիլմեր էի դիտում, բայց հիմա նախընտրում եմ ֆիլմերը։"
  },
  {
    id: "p2-q24",
    number: 24,
    category: "Pasado y experiencias — Անցյալ և փորձառություններ",
    questionEs: "¿Has cambiado de opinión sobre algo recientemente?",
    questionHy: "Վերջերս ինչ-որ բանի մասին կարծիքդ փոխե՞լ ես։",
    answerEs: "Sí, antes no me gustaba leer, pero ahora he descubierto libros interesantes.",
    answerHy: "Այո՛, նախկինում չէի սիրում կարդալ, բայց հիմա հետաքրքիր գրքեր եմ բացահայտել։"
  },
  // Futuro, Condicional y Subjuntivo — Ապագա, պայմանական և ստորադասական եղանակ
  {
    id: "p2-q25",
    number: 25,
    category: "Futuro, Condicional y Subjuntivo — Ապագա, պայմանական և ստորադասական եղանակ",
    questionEs: "¿Qué harás si un día tienes demasiado trabajo?",
    questionHy: "Ի՞նչ կանես, եթե մի օր չափազանց շատ աշխատանք ունենաս։",
    answerEs: "Organizaré mi tiempo y empezaré por lo más importante.",
    answerHy: "Կկազմակերպեմ ժամանակս և կսկսեմ ամենակարևորից։"
  },
  {
    id: "p2-q26",
    number: 26,
    category: "Futuro, Condicional y Subjuntivo — Ապագա, պայմանական և ստորադասական եղանակ",
    questionEs: "¿Qué harías si tu mejor amigo se mudara a otro país?",
    questionHy: "Ի՞նչ կանեիր, եթե լավագույն ընկերդ տեղափոխվեր ուրիշ երկիր։",
    answerEs: "Lo echaría de menos, pero seguiríamos hablando por teléfono.",
    answerHy: "Կկարոտեի նրան, բայց կշարունակեինք հեռախոսով խոսել։"
  },
  {
    id: "p2-q27",
    number: 27,
    category: "Futuro, Condicional y Subjuntivo — Ապագա, պայմանական և ստորադասական եղանակ",
    questionEs: "¿Qué deseas que cambie este año?",
    questionHy: "Ի՞նչ ես ցանկանում, որ փոխվի այս տարի։",
    answerEs: "Quiero que mejore mi español y que tenga más confianza al hablar.",
    answerHy: "Ուզում եմ, որ իսպաներենս բարելավվի, և խոսելիս ավելի վստահ լինեմ։"
  },
  {
    id: "p2-q28",
    number: 28,
    category: "Futuro, Condicional y Subjuntivo — Ապագա, պայմանական և ստորադասական եղանակ",
    questionEs: "¿Qué harías si no entendieras nada en una conversación?",
    questionHy: "Ի՞նչ կանեիր, եթե զրույցի ընթացքում ոչինչ չհասկանայիր։",
    answerEs: "Pediría que hablaran más despacio y que utilizaran palabras más sencillas.",
    answerHy: "Կխնդրեի, որ ավելի դանդաղ խոսեն և ավելի պարզ բառեր օգտագործեն։"
  },
  {
    id: "p2-q29",
    number: 29,
    category: "Futuro, Condicional y Subjuntivo — Ապագա, պայմանական և ստորադասական եղանակ",
    questionEs: "¿Qué esperas haber conseguido dentro de cinco años?",
    questionHy: "Ի՞նչ ես հույս ունենում ձեռք բերած լինել հինգ տարի անց։",
    answerEs: "Espero haber aprendido varios idiomas y haber conocido nuevos lugares.",
    answerHy: "Հուսով եմ՝ մի քանի լեզու սովորած կլինեմ և նոր վայրեր տեսած կլինեմ։"
  },
  {
    id: "p2-q30",
    number: 30,
    category: "Futuro, Condicional y Subjuntivo — Ապագա, պայմանական և ստորադասական եղանակ",
    questionEs: "¿Qué consejo le darías a alguien que quiere aprender español?",
    questionHy: "Ի՞նչ խորհուրդ կտայիր մեկին, ով ուզում է իսպաներեն սովորել։",
    answerEs: "Le recomendaría que hablara todos los días, aunque cometiera errores.",
    answerHy: "Խորհուրդ կտայի, որ ամեն օր խոսի, նույնիսկ եթե սխալներ թույլ տար։"
  }
];

export const part2Reactions: QuickReaction[] = [
  { id: "r1", saidEs: "¡He aprobado el examen!", saidHy: "Քննությունը հանձնել եմ։", replyEs: "¡Enhorabuena!", replyHy: "Շնորհավորում եմ։" },
  { id: "r2", saidEs: "¡Se me ha roto el móvil!", saidHy: "Հեռախոսս կոտրվել է։", replyEs: "¡Qué mala suerte!", replyHy: "Ի՜նչ անհաջողություն։" },
  { id: "r3", saidEs: "No me encuentro bien.", saidHy: "Լավ չեմ զգում։", replyEs: "¿Qué te pasa?", replyHy: "Ի՞նչ է պատահել։" },
  { id: "r4", saidEs: "¡Tengo una buena noticia!", saidHy: "Լավ նորություն ունեմ։", replyEs: "¡Cuenta, cuenta!", replyHy: "Պատմի՛ր, պատմի՛ր։" },
  { id: "r5", saidEs: "¿Me prestas tu bolígrafo?", saidHy: "Գրիչդ կտա՞ս մի քիչ։", replyEs: "Sí, toma.", replyHy: "Այո՛, վերցրո՛ւ։" },
  { id: "r6", saidEs: "No estoy de acuerdo.", saidHy: "Համաձայն չեմ։", replyEs: "¿Por qué no?", replyHy: "Ինչո՞ւ ոչ։" },
  { id: "r7", saidEs: "Me he equivocado.", saidHy: "Սխալվել եմ։", replyEs: "No pasa nada.", replyHy: "Ոչինչ։" },
  { id: "r8", saidEs: "¡Tengo muchísima hambre!", saidHy: "Շատ սոված եմ։", replyEs: "¿Comemos algo?", replyHy: "Մի բան ուտե՞նք։" },
  { id: "r9", saidEs: "¡Date prisa!", saidHy: "Շտապի՛ր։", replyEs: "¡Ya voy!", replyHy: "Արդեն գալիս եմ։" },
  { id: "r10", saidEs: "¡No me lo puedo creer!", saidHy: "Չեմ կարող հավատալ։", replyEs: "¡Pues es verdad!", replyHy: "Բայց դա ճիշտ է։" },
  { id: "r11", saidEs: "¿Te lo cuento?", saidHy: "Պատմե՞մ քեզ։", replyEs: "¡Claro, te escucho!", replyHy: "Իհարկե, լսում եմ։" },
  { id: "r12", saidEs: "Me voy a casa.", saidHy: "Գնում եմ տուն։", replyEs: "¡Hasta mañana!", replyHy: "Մինչև վաղը։" },
  { id: "r13", saidEs: "Estoy aburrido.", saidHy: "Ձանձրացել եմ։", replyEs: "¿Hacemos algo divertido?", replyHy: "Մի հետաքրքիր բան անե՞նք։" },
  { id: "r14", saidEs: "¿Puedo preguntarte algo?", saidHy: "Կարո՞ղ եմ մի բան հարցնել։", replyEs: "Sí, dime.", replyHy: "Այո՛, ասա՛։" },
  { id: "r15", saidEs: "¡Qué vergüenza!", saidHy: "Ի՜նչ ամոթ։", replyEs: "Tranquilo, no pasa nada.", replyHy: "Հանգի՛ստ, ոչինչ։" },
  { id: "r16", saidEs: "¡Lo he conseguido!", saidHy: "Ես կարողացա։", replyEs: "¡Bien hecho!", replyHy: "Ապրե՛ս։" },
  { id: "r17", saidEs: "Creo que me he perdido.", saidHy: "Կարծես մոլորվել եմ։", replyEs: "¿Dónde estás?", replyHy: "Որտե՞ղ ես։" },
  { id: "r18", saidEs: "Hoy no puedo quedar.", saidHy: "Այսօր չեմ կարող հանդիպել։", replyEs: "Vale, ¿y mañana?", replyHy: "Լավ, իսկ վա՞ղը։" },
  { id: "r19", saidEs: "No sé qué elegir.", saidHy: "Չգիտեմ՝ ինչ ընտրել։", replyEs: "Yo que tú, elegiría este.", replyHy: "Ես քո փոխարեն սա կընտրեի։" },
  { id: "r20", saidEs: "¡Mañana no tenemos clase!", saidHy: "Վաղը դաս չունենք։", replyEs: "¡Qué bien! ¡Por fin!", replyHy: "Ի՜նչ լավ է։ Վերջապե՜ս։" }
];

export const part2Completions: SentenceCompletion[] = [
  {
    id: "comp-1",
    number: 1,
    questionEs: "¿Por qué no has venido al entrenamiento?",
    questionHy: "Ինչո՞ւ չես եկել մարզման։",
    starterEs: "Porque...",
    answerEs: "Porque me dolía un poco la pierna y preferí descansar en casa.",
    answerHy: "Որովհետև ոտքս մի քիչ ցավում էր և նախընտրեցի տանը հանգստանալ։"
  },
  {
    id: "comp-2",
    number: 2,
    questionEs: "¿Qué haces si alguien no entiende español?",
    questionHy: "Ի՞նչ ես անում, եթե ինչ-որ մեկը իսպաներեն չի հասկանում։",
    starterEs: "Intento...",
    answerEs: "Intento hablar más despacio y usar palabras más sencillas o gestos.",
    answerHy: "Փորձում եմ ավելի դանդաղ խոսել և ավելի պարզ բառեր կամ ժեստեր օգտագործել։"
  },
  {
    id: "comp-3",
    number: 3,
    questionEs: "¿Qué te gustaría cambiar de tu habitación?",
    questionHy: "Ի՞նչ կուզեիր փոխել քո սենյակում։",
    starterEs: "Me gustaría...",
    answerEs: "Me gustaría pintar las paredes de otro color y tener un escritorio más grande.",
    answerHy: "Կուզեի պատերը այլ գույն ներկել և ավելի մեծ գրասեղան ունենալ։"
  },
  {
    id: "comp-4",
    number: 4,
    questionEs: "¿Por qué estabas tan contento ayer?",
    questionHy: "Ինչո՞ւ էիր երեկ այդքան ուրախ։",
    starterEs: "Porque...",
    answerEs: "Porque saqué muy buena nota en el examen y salí con mis amigos.",
    answerHy: "Որովհետև քննությունից շատ լավ գնահատական ստացա և դուրս եկա ընկերներիս հետ։"
  },
  {
    id: "comp-5",
    number: 5,
    questionEs: "¿Quieres que te espere?",
    questionHy: "Ուզո՞ւմ ես քեզ սպասեմ։",
    starterEs: "Sí, por favor...",
    answerEs: "Sí, por favor, solo tardo dos minutos en guardar los libros en la mochila.",
    answerHy: "Այո՛, խնդրում եմ, ընդամենը երկու րոպե կտևի գրքերս պայուսակում դնելը։"
  },
  {
    id: "comp-6",
    number: 6,
    questionEs: "¿Qué opinas de los deberes?",
    questionHy: "Ի՞նչ կարծիք ունես տնային աշխատանքների մասին։",
    starterEs: "Creo que...",
    answerEs: "Creo que son importantes para practicar, pero a veces tenemos demasiados.",
    answerHy: "Կարծում եմ՝ դրանք կարևոր են պարապելու համար, բայց երբեմն չափազանց շատ են լինում։"
  },
  {
    id: "comp-7",
    number: 7,
    questionEs: "¿Qué harías si ganaras un premio?",
    questionHy: "Ի՞նչ կանեիր, եթե մրցանակ շահեիր։",
    starterEs: "Primero...",
    answerEs: "Primero se lo contaría a mi familia y después haría un viaje especial.",
    answerHy: "Սկզբում կպատմեի ընտանիքիս, իսկ հետո մի հատուկ ճամփորդություն կանեի։"
  },
  {
    id: "comp-8",
    number: 8,
    questionEs: "¿Qué le dirías a un compañero nuevo?",
    questionHy: "Ի՞նչ կասեիր նոր դասընկերոջդ։",
    starterEs: "Le diría...",
    answerEs: "Le diría que bienvenido y que si necesita cualquier cosa, aquí estoy para ayudarle.",
    answerHy: "Կասեի, որ բարի գալուստ, և եթե որևէ բանի կարիք ունենա, այստեղ եմ օգնելու համար։"
  },
  {
    id: "comp-9",
    number: 9,
    questionEs: "¿Qué esperas que haga el profesor?",
    questionHy: "Ի՞նչ ես հույս ունենում, որ ուսուցիչը կանի։",
    starterEs: "Espero que...",
    answerEs: "Espero que nos explique el tema con más calma y nos ponga ejemplos.",
    answerHy: "Հուսով եմ՝ նա ավելի հանգիստ կբացատրի թեման և օրինակներ կբերի։"
  },
  {
    id: "comp-10",
    number: 10,
    questionEs: "¿Qué has hecho para mejorar tu español?",
    questionHy: "Ի՞նչ ես արել իսպաներենս բարելավելու համար։",
    starterEs: "He...",
    answerEs: "He escuchado música en español y he intentado hablar en voz alta todos los días.",
    answerHy: "Իսպաներեն երաժշտություն եմ լսել և փորձել եմ ամեն օր բարձրաձայն խոսել։"
  }
];

export const part2Dialogues: Dialogue[] = [
  {
    id: "d2-1",
    titleEs: "Diálogo 1. En la biblioteca",
    titleHy: "Երկխոսություն 1. Գրադարանում",
    lines: [
      { speaker: "A", es: "Oye, ¿has visto mi libro?", hy: "Լսի՛ր, տեսե՞լ ես գիրքս։" },
      { speaker: "B", es: "Creo que lo has dejado encima de la mesa.", hy: "Կարծում եմ՝ սեղանի վրա ես թողել։" },
      { speaker: "A", es: "¿Estás seguro? No lo encuentro.", hy: "Վստա՞հ ես։ Չեմ գտնում։" },
      { speaker: "B", es: "Espera, voy a ayudarte a buscarlo.", hy: "Սպասի՛ր, կօգնեմ փնտրել։" },
      { speaker: "A", es: "¡Ah, aquí está! ¡Muchas gracias!", hy: "Ա՜հ, ահա այն։ Շատ շնորհակալ եմ։" },
      { speaker: "B", es: "¡De nada! La próxima vez ten más cuidado.", hy: "Խնդրեմ։ Հաջորդ անգամ ավելի ուշադիր եղիր։" }
    ]
  },
  {
    id: "d2-2",
    titleEs: "Diálogo 2. Antes de un partido",
    titleHy: "Երկխոսություն 2. Խաղից առաջ",
    lines: [
      { speaker: "A", es: "¿Estás preparado para el partido?", hy: "Պատրա՞ստ ես խաղին։" },
      { speaker: "B", es: "Sí, pero estoy un poco nervioso.", hy: "Այո՛, բայց մի քիչ լարված եմ։" },
      { speaker: "A", es: "No te preocupes. Hemos entrenado mucho.", hy: "Մի՛ անհանգստացիր։ Մենք շատ ենք մարզվել։" },
      { speaker: "B", es: "Espero que juguemos bien.", hy: "Հուսով եմ՝ լավ կխաղանք։" },
      { speaker: "A", es: "Seguro que sí. ¡Vamos a ganar!", hy: "Վստահ եմ՝ այո՛։ Մենք կհաղթենք։" },
      { speaker: "B", es: "¡Venga, vamos!", hy: "Դե՛, առա՛ջ։" }
    ]
  },
  {
    id: "d2-3",
    titleEs: "Diálogo 3. En una tienda",
    titleHy: "Երկխոսություն 3. Խանութում",
    lines: [
      { speaker: "A", es: "Perdona, ¿me puedes ayudar?", hy: "Ների՛ր, կարո՞ղ ես օգնել։" },
      { speaker: "B", es: "Claro. ¿Qué necesitas?", hy: "Իհարկե։ Ի՞նչ է պետք։" },
      { speaker: "A", es: "Estoy buscando unas zapatillas deportivas.", hy: "Սպորտային կոշիկներ եմ փնտրում։" },
      { speaker: "B", es: "¿Qué número calzas?", hy: "Ի՞նչ չափսի կոշիկ ես հագնում։" },
      { speaker: "A", es: "El treinta y ocho. ¿Puedo probarme estas?", hy: "38։ Կարո՞ղ եմ սրանք փորձել։" },
      { speaker: "B", es: "Sí, por supuesto.", hy: "Այո՛, իհարկե։" }
    ]
  },
  {
    id: "d2-4",
    titleEs: "Diálogo 4. Una conversación inesperada",
    titleHy: "Երկխոսություն 4. Անսպասելի զրույց",
    lines: [
      { speaker: "A", es: "¡No sabes lo que me pasó ayer!", hy: "Դու չգիտես՝ երեկ ինձ ինչ պատահեց։" },
      { speaker: "B", es: "¿Qué pasó? ¡Cuéntame!", hy: "Ի՞նչ պատահեց։ Պատմի՛ր։" },
      { speaker: "A", es: "Iba por la calle cuando me encontré con un antiguo compañero.", hy: "Քայլում էի փողոցով, երբ հանդիպեցի նախկին դասընկերոջս։" },
      { speaker: "B", es: "¿En serio? ¿Hacía mucho que no lo veías?", hy: "Լո՞ւրջ։ Վաղո՞ւց չէիր տեսել նրան։" },
      { speaker: "A", es: "Sí, hacía casi tres años.", hy: "Այո՛, գրեթե երեք տարի էր։" },
      { speaker: "B", es: "¡Qué casualidad! ¿Y hablasteis?", hy: "Ի՜նչ պատահականություն։ Իսկ խոսեցի՞ք։" },
      { speaker: "A", es: "Sí, estuvimos hablando un buen rato.", hy: "Այո՛, բավական երկար զրուցեցինք։" }
    ]
  }
];

export const part2OralTranslations: OralTranslation[] = [
  { id: "ot-1", number: 1, hy: "Մի պահ սպասի՛ր, չեմ հասցնում։", es: "Espera un momento, no me da tiempo." },
  { id: "ot-2", number: 2, hy: "Ես քեզ չեմ լսում, ավելի բարձր խոսի՛ր։", es: "No te oigo, habla más alto por favor." },
  { id: "ot-3", number: 3, hy: "Չգիտեմ՝ դա ինչպես բացատրեմ։", es: "No sé cómo explicarlo." },
  { id: "ot-4", number: 4, hy: "Ես հենց նոր տուն հասա։", es: "Acabo de llegar a casa." },
  { id: "ot-5", number: 5, hy: "Ինձ միևնույն է, դու ընտրի՛ր։", es: "Me da igual, elige tú." },
  { id: "ot-6", number: 6, hy: "Երեկ ուզում էի քեզ զանգահարել։", es: "Ayer quería llamarte." },
  { id: "ot-7", number: 7, hy: "Մոռացել եմ, թե ինչ էի ուզում ասել։", es: "Se me ha olvidado lo que quería decir." },
  { id: "ot-8", number: 8, hy: "Եթե կարողանամ, քեզ կօգնեմ։", es: "Si puedo, te ayudo." },
  { id: "ot-9", number: 9, hy: "Կարծում եմ՝ դու ճիշտ ես։", es: "Creo que tienes razón." },
  { id: "ot-10", number: 10, hy: "Չեմ կարծում, որ նա զայրացած է։", es: "No creo que esté enfadado." },
  { id: "ot-11", number: 11, hy: "Երանի վաղը լավ եղանակ լինի։", es: "Ojalá mañana haga buen tiempo." },
  { id: "ot-12", number: 12, hy: "Ես քո փոխարեն չէի անհանգստանա։", es: "Yo que tú, no me preocuparía." },
  { id: "ot-13", number: 13, hy: "Կարո՞ղ ես մեկ անգամ էլ կրկնել։", es: "¿Puedes repetirlo una vez más?" },
  { id: "ot-14", number: 14, hy: "Ավելի լավ է՝ վաղը հանդիպենք։", es: "Es mejor que quedemos mañana." },
  { id: "ot-15", number: 15, hy: "Այսօր չեմ կարող, բայց վաղը ազատ կլինեմ։", es: "Hoy no puedo, pero mañana estaré libre." }
];

export const part2LengthenFormula = {
  rule: "Respuesta + porque + detalle + pregunta de vuelta.",
  ruleHy: "Պատասխան + որովհետև (պատճառ) + մանրամասն + հարց ի պատասխան",
  exampleQuestionEs: "¿Te gusta el fútbol?",
  exampleQuestionHy: "Սիրո՞ւմ ես ֆուտբոլ։",
  levels: [
    { level: 1, es: "Sí.", hy: "Այո՛։" },
    { level: 2, es: "Sí, me gusta mucho.", hy: "Այո՛, շատ եմ սիրում։" },
    { level: 3, es: "Sí, me gusta mucho porque es divertido y puedo jugar con mis amigos.", hy: "Այո՛, շատ եմ սիրում, որովհետև հետաքրքիր է, և կարող եմ ընկերներիս հետ խաղալ։" },
    { level: 4, es: "Sí, me encanta. Juego dos veces por semana con mis amigos. ¿Y a ti, te gusta?", hy: "Այո՛, շատ եմ սիրում։ Շաբաթական երկու անգամ խաղում եմ ընկերներիս հետ։ Իսկ դու սիրո՞ւմ ես։" }
  ]
};

export const part2PracticeModels: PracticeModelQA[] = [
  {
    id: "pm-1",
    questionEs: "¿Te gusta leer?",
    questionHy: "Սիրո՞ւմ ես կարդալ։",
    answerEs: "Sí, sobre todo los libros de aventuras, porque son emocionantes.",
    answerHy: "Այո՛, հատկապես արկածային գրքերը, որովհետև հետաքրքիր են։"
  },
  {
    id: "pm-2",
    questionEs: "¿Prefieres el verano o el invierno?",
    questionHy: "Նախընտրում ես ամա՞ռը, թե՞ ձմեռը։",
    answerEs: "Prefiero el verano porque tengo vacaciones y puedo salir más.",
    answerHy: "Նախընտրում եմ ամառը, որովհետև արձակուրդ ունեմ և կարող եմ ավելի շատ դուրս գալ։"
  },
  {
    id: "pm-3",
    questionEs: "¿Te gustan los idiomas?",
    questionHy: "Սիրո՞ւմ ես լեզուները։",
    answerEs: "Sí, porque puedo conocer a gente de otros países.",
    answerHy: "Այո՛, որովհետև կարող եմ ծանոթանալ այլ երկրների մարդկանց հետ։"
  },
  {
    id: "pm-4",
    questionEs: "¿Qué haces en tu tiempo libre?",
    questionHy: "Ի՞նչ ես անում ազատ ժամանակդ։",
    answerEs: "Normalmente escucho música, juego un poco y quedo con mis amigos.",
    answerHy: "Սովորաբար երաժշտություն եմ լսում, մի քիչ խաղում և հանդիպում ընկերներիս։"
  },
  {
    id: "pm-5",
    questionEs: "¿Qué piensas de los videojuegos?",
    questionHy: "Ի՞նչ կարծիք ունես տեսախաղերի մասին։",
    answerEs: "Me parecen divertidos, pero creo que no es bueno jugar demasiadas horas.",
    answerHy: "Ինձ հետաքրքիր են թվում, բայց կարծում եմ՝ լավ չէ շատ ժամեր խաղալ։"
  }
];

export const part2VerbSituations: VerbSituation[] = [
  {
    id: "vs-1",
    titleEs: "Situación 1 — Jugar al fútbol",
    titleHy: "Իրավիճակ 1 — Ֆուտբոլ խաղալ",
    tenses: [
      { tense: "Hoy", tenseHy: "Այսօր", es: "Juego al fútbol con mis amigos.", hy: "Այսօր ֆուտբոլ եմ խաղում ընկերներիս հետ։" },
      { tense: "Ayer", tenseHy: "Երեկ", es: "Jugué al fútbol con mis amigos.", hy: "Երեկ ֆուտբոլ խաղացի ընկերներիս հետ։" },
      { tense: "Esta semana", tenseHy: "Այս շաբաթ", es: "He jugado al fútbol dos veces.", hy: "Այս շաբաթ երկու անգամ ֆուտբոլ եմ խաղացել։" },
      { tense: "Antes", tenseHy: "Նախկինում", es: "Jugaba al fútbol todos los días.", hy: "Նախկինում ամեն օր ֆուտբոլ էի խաղում։" },
      { tense: "Mañana", tenseHy: "Վաղը", es: "Jugaré al fútbol con mis amigos.", hy: "Վաղը ֆուտբոլ կխաղամ ընկերներիս հետ։" },
      { tense: "Si pudiera", tenseHy: "Եթե կարողանայի", es: "Jugaría al fútbol todos los días.", hy: "Եթե կարողանայի, ամեն օր ֆուտբոլ կխաղայի։" }
    ]
  },
  {
    id: "vs-2",
    titleEs: "Situación 2 — Estudiar español",
    titleHy: "Իրավիճակ 2 — Իսպաներեն սովորել",
    tenses: [
      { tense: "Hoy", tenseHy: "Այսօր", es: "Estudio español en casa.", hy: "Այսօր տանը իսպաներեն եմ սովորում։" },
      { tense: "Ayer", tenseHy: "Երեկ", es: "Estudié español durante una hora.", hy: "Երեկ մեկ ժամ իսպաներեն սովորեցի։" },
      { tense: "Esta semana", tenseHy: "Այս շաբաթ", es: "He aprendido muchas palabras.", hy: "Այս շաբաթ շատ բառեր եմ սովորել։" },
      { tense: "Antes", tenseHy: "Նախկինում", es: "Me costaba hablar español.", hy: "Նախկինում դժվարանում էի իսպաներեն խոսել։" },
      { tense: "Mañana", tenseHy: "Վաղը", es: "Practicaré con mi profesor.", hy: "Վաղը կպարապեմ ուսուցչիս հետ։" },
      { tense: "Deseo", tenseHy: "Ցանկություն", es: "Quiero que mi español mejore.", hy: "Ուզում եմ, որ իսպաներենս բարելավվի։" }
    ]
  }
];

export const part2ConversationGameCards = [
  {
    index: 1,
    titleEs: "Un amigo te llama durante los deberes",
    titleHy: "Ընկերդ զանգում է, երբ տնայիններդ ես կատարում։",
    instructionHy: "Պատասխանի՛ր բարձրաձայն, հետո սեղմի՛ր՝ պատասխանդ ստուգելու համար։",
    answerEs: "Oye, ahora estoy haciendo los deberes. ¿Te puedo llamar en media hora cuando termine?",
    answerHy: "Լսի՛ր, հիմա տնայիններս եմ անում։ Կարո՞ղ եմ կես ժամից զանգել քեզ, երբ ավարտեմ։"
  },
  {
    index: 2,
    titleEs: "No encuentras tus llaves antes de salir",
    titleHy: "Դուրս գալուց առաջ բանալիներդ չես գտնում։",
    instructionHy: "Պատասխանի՛ր բարձրաձայն, հետո սեղմի՛ր՝ պատասխանդ ստուգելու համար։",
    answerEs: "¿Has visto mis llaves? Las tenía hace un momento y ahora no aparecen por ningún lado.",
    answerHy: "Տեսե՞լ ես բանալիներս։ Մի պահ առաջ ձեռքիս էին, իսկ հիմա ոչ մի տեղ չկան։"
  },
  {
    index: 3,
    titleEs: "Tu amigo te propone una película que ya has visto",
    titleHy: "Ընկերդ առաջարկում է մի ֆիլմ, որն արդեն տեսել ես։",
    instructionHy: "Պատասխանի՛ր բարձրաձայն, հետո սեղմի՛ր՝ պատասխանդ ստուգելու համար։",
    answerEs: "Ya la he visto, pero si a ti te apetece mucho, no me importa volver a verla con vosotros.",
    answerHy: "Արդեն տեսել եմ, բայց եթե դու շատ ես ցանկանում, դեմ չեմ ձեզ հետ նորից նայել։"
  },
  {
    index: 4,
    titleEs: "Estás en una cafetería y te traen algo equivocado",
    titleHy: "Սրճարանում ես և սխալ պատվեր են բերել։",
    instructionHy: "Պատասխանի՛ր բարձրաձայն, հետո սեղմի՛ր՝ պատասխանդ ստուգելու համար։",
    answerEs: "Perdona, creo que ha habido una confusión. Yo había pedido un zumo de naranja, no de manzana.",
    answerHy: "Ներեցեք, կարծես թյուրիմացություն է եղել։ Ես նարնջի հյութ էի պատվիրել, ոչ թե խնձորի։"
  },
  {
    index: 5,
    titleEs: "Un amigo parece triste y le preguntas qué le pasa",
    titleHy: "Ընկերդ տխուր է թվում և հարցնում ես, թե ինչ է պատահել։",
    instructionHy: "Պատասխանի՛ր բարձրաձայն, հետո սեղմի՛ր՝ պատասխանդ ստուգելու համար։",
    answerEs: "Te veo un poco apagado hoy. ¿Te pasa algo? Si necesitas hablar con alguien, aquí estoy.",
    answerHy: "Այսօր մի քիչ մռայլ ես թվում։ Ինչ-որ բա՞ն է պատահել։ Եթե խոսելու կարիք ունես, ես այստեղ եմ։"
  },
  {
    index: 6,
    titleEs: "Tienes que cancelar un plan a última hora",
    titleHy: "Ստիպված ես վերջին պահին չեղարկել պլանները։",
    instructionHy: "Պատասխանի՛ր բարձրաձայն, հետո սեղմի՛ր՝ պատասխանդ ստուգելու համար։",
    answerEs: "Oye, de verdad lo siento muchísimo, pero me ha surgido un imprevisto familiar y no podré ir. ¿Lo dejamos para el sábado?",
    answerHy: "Լսի՛ր, իսկապես շատ եմ ցավում, բայց ընտանեկան անսպասելի գործ առաջացավ և չեմ կարողանա գալ։ Շաբաթ օրվա՞ն հետաձգենք։"
  }
];

export const part2DailyWorkout: WorkoutStep[] = [
  {
    minutes: 3,
    titleEs: "Responde rápido",
    titleHy: "Արագ պատասխան",
    descriptionEs: "Haz 10 preguntas muy sencillas. Que responda de inmediato. Al principio una respuesta de una sola palabra está bien.",
    descriptionHy: "Տուր 10 շատ պարզ հարց։ Թող անմիջապես պատասխանի։ Սկզբում մեկ բառով պատասխանն էլ ընդունելի է։"
  },
  {
    minutes: 5,
    titleEs: "Respuestas completas",
    titleHy: "Ամբողջական պատասխաններ",
    descriptionEs: "Que responda a las mismas preguntas con una frase completa añadiendo porque, pero, además.",
    descriptionHy: "Նույն հարցերին թող պատասխանի ամբողջ նախադասությամբ՝ ավելացնելով porque, pero, además։"
  },
  {
    minutes: 5,
    titleEs: "Situaciones inesperadas",
    titleHy: "Անսպասելի իրավիճակներ",
    descriptionEs: "Plantea 5 situaciones inesperadas. Que responda como en la vida real.",
    descriptionHy: "Տուր 5 անսպասելի իրավիճակ։ Թող պատասխանի այնպես, ինչպես իրական կյանքում։"
  },
  {
    minutes: 5,
    titleEs: "Conversación libre",
    titleHy: "Ազատ զրույց",
    descriptionEs: "Hablad sobre un tema: colegio, amigos, deporte o rutina diaria. Tras cada respuesta haz una pregunta extra: ¿Por qué? ¿Y después? ¿Cómo?",
    descriptionHy: "Խոսեք մեկ թեմայով՝ դպրոց, ընկերներ, սպորտ կամ առօրյա։ Յուրաքանչյուր պատասխանից հետո տուր լրացուցիչ հարց՝ ¿Por qué? ¿Y después? ¿Cómo?"
  },
  {
    minutes: 2,
    titleEs: "Repite con confianza",
    titleHy: "Կրկնիր վստահությամբ",
    descriptionEs: "Repetid 3–5 frases que le costaron usar. Que forme su propia frase con cada expresión.",
    descriptionHy: "Կրկնեք 3–5 արտահայտություն, որոնք դժվարացել է օգտագործել։ Թող յուրաքանչյուր արտահայտությամբ սեփական նախադասություն կազմի։"
  }
];

export const part2TeacherAdvice = "Ուսուցչի համար ամենակարևոր խորհուրդը. Եթե աշակերտը հասկանում է հարցը, բայց լռում է, մի՛ շտապիր տալ ամբողջ պատասխանը։ Սկզբում տուր առաջին 2–3 բառը, օրինակ՝ «Creo que…», «Porque…», «Ayer fui…», «Me gustaría…»։ Թող ինքնուրույն շարունակի։ Եթե սխալվի, թող նախ ավարտի իր միտքը, հետո ուղղիր ամենակարևոր սխալը։ Այսպես նա աստիճանաբար կանցնի հասկանալուց → պատասխանելուն → ինքնուրույն զրույց վարելուն։";
