export type Language = "ko" | "en";
export type L = { ko: string; en: string };

export type ArticleBlock =
  | { type: "p"; text: L }
  | { type: "h2"; text: L }
  | { type: "h3"; text: L }
  | { type: "list"; items: L[] }
  | { type: "quote"; text: L }
  | { type: "pairs"; items: { title: L; text: L }[] }
  | { type: "report"; title: L; text: L };

export type Cover = { src: string; alt: L; caption: L };

export type Project = {
  id: string;
  title: L;
  year: string;
  owner: "own" | "client";
  description: L;
  problem: L;
  solution: L;
  impact: L;
  techStack: string[];
  category: string;
  link?: string;
};

export type Insight = {
  id: string;
  title: L;
  summary: L;
  date: string;
  cover: Cover;
  body: ArticleBlock[];
};

export type Service = {
  slug: string;
  title: L;
  summary: L;
  lead: L;
  points: L[];
  stack?: string[];
  related: { href: string; title: L }[];
  faq: { q: L; a: L }[];
  keywords: string[];
  cover: Cover;
};

const EMAIL = "hklee@lifoli.co.kr";

export const DIAGNOSIS_SUBJECT = "30분 업무 자동화 진단 요청";

export const MAIL_TEMPLATE = {
  ko: "안녕하세요, 30분 업무 자동화 진단을 요청합니다.\n\n회사와 하는 일:\n지금 상황:\n막히는 지점:\n원하는 결과:\n",
  en: "Hello, I'd like to request the 30-minute work automation diagnosis.\n\nCompany and what we do:\nWhere things stand:\nWhere it gets stuck:\nWhat we want:\n",
};

export function diagnosisMailto(body?: string) {
  return mailto(DIAGNOSIS_SUBJECT, body);
}

export function mailto(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${EMAIL}?${params.toString().replace(/\+/g, "%20")}`;
}

// 사진·영상 출처 (public/archive/credits.json과 같은 내용)
export const CREDITS = [
  {
    title: { ko: "벨 시스템 교환대", en: "Bell System switchboard" },
    by: "The U.S. National Archives",
    license: { ko: "알려진 저작권 제한 없음", en: "No known copyright restrictions" },
    href: "https://commons.wikimedia.org/wiki/File:Photograph_of_Women_Working_at_a_Bell_System_Telephone_Switchboard_(3660047829).jpg",
  },
  {
    title: { ko: "인구조사 카드 천공, 1940년", en: "Census card punch, 1940" },
    by: "U.S. National Archives",
    license: { ko: "퍼블릭 도메인", en: "Public domain" },
    href: "https://commons.wikimedia.org/wiki/File:Card_puncher_-_NARA_-_513295.jpg",
  },
  {
    title: { ko: "타자수 사무실, 1918년", en: "Typing pool, 1918" },
    by: "Naval History and Heritage Command",
    license: { ko: "퍼블릭 도메인", en: "Public domain" },
    href: "https://commons.wikimedia.org/wiki/File:NH_52909_-_typing_pool,_Navy_Department,_Washington_DC.jpg",
  },
  {
    title: { ko: "카드 목록 서랍", en: "Card catalogue drawers" },
    by: "Carolina Prysyazhnyuk",
    license: { ko: "CC BY-SA 2.0", en: "CC BY-SA 2.0" },
    href: "https://commons.wikimedia.org/wiki/File:Card_catalogue_drawers.jpg",
  },
  {
    title: { ko: "타자기 자판, 1921년", en: "Typewriter keys, 1921" },
    by: "Ralph Steiner, Library of Congress",
    license: { ko: "퍼블릭 도메인", en: "Public domain" },
    href: "https://commons.wikimedia.org/wiki/File:Typewriter_keys_LCCN2004666344.jpg",
  },
  {
    title: { ko: "저금 통장 기록면, 1912–1916년", en: "Savings book entries, 1912–1916" },
    by: "Money Museum, Wikimedia Commons",
    license: { ko: "퍼블릭 도메인", en: "Public domain" },
    href: "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%BD%D0%B8%D0%B6%D0%BA%D0%B0_%D1%81%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BF%D0%BE%D1%87%D1%82%D0%BE%D0%B2%D0%BE-%D1%82%D0%B5%D0%BB%D0%B5%D0%B3%D1%80%D0%B0%D1%84%D0%BD%D0%BE%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D1%81%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D0%BA%D0%B0%D1%81%D1%81%D1%8B._%D0%A1._2%E2%80%933--moneymuseum-by.jpg",
  },
  {
    title: { ko: "교환원 교육 영화, 1949년", en: "Operator training film, 1949" },
    by: "Prelinger Archives",
    license: { ko: "퍼블릭 도메인", en: "Public domain" },
    href: "https://archive.org/details/Operator1949_4",
  },
];

// 직함이 마침표로 끝나면(Corp.) 마침표를 겹쳐 쓰지 않습니다.
export function introLine(title: string, line: string) {
  return `${title}${title.endsWith(".") ? "" : "."} ${line}`;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: { ko: "이흥규", en: "Heungkyu Lee" },
    title: {
      ko: "주식회사 라이폴리 공동창업자·대표",
      en: "Co-founder & CEO, LiFoli Corp.",
    },
    line: {
      ko: "AI 에이전트와 업무 자동화를 기획하고 직접 만듭니다.",
      en: "I plan AI agents and work automation, and build them myself.",
    },
    contact: {
      email: EMAIL,
      github: "https://github.com/heungkyulee",
      linkedin: "https://www.linkedin.com/in/heungkyu-lee-37b888264/",
      company: "https://lifoli.co.kr/",
    },
  },

  // 홈과 AX 컨설팅 페이지가 함께 쓰는 진행 방식
  process: [
    {
      title: { ko: "현장에 들어갑니다", en: "Embed" },
      description: {
        ko: "현장에 침투하여 진짜 문제를 발견합니다. 책상이 아닌 현장에서 답을 찾습니다.",
        en: "I go to where the work happens to find the real problem. The answer is in the field, not at the desk.",
      },
    },
    {
      title: { ko: "흐름을 잇습니다", en: "Integrate" },
      description: {
        ko: "파편화된 데이터와 프로세스를 하나의 기준으로 통합합니다.",
        en: "I join fragmented data and processes into one source of truth.",
      },
    },
    {
      title: { ko: "판단을 돕습니다", en: "Augment" },
      description: {
        ko: "AI와 자동화로 사람의 판단력을 증강시킵니다. 대체가 아닌 공생을 지향합니다.",
        en: "AI and automation strengthen human judgement. The aim is working together, not replacement.",
      },
    },
    {
      title: { ko: "운영까지 책임집니다", en: "Operate" },
      description: {
        ko: "실제 운영 환경에서 지속 가능한 임팩트를 만듭니다. 끝까지 책임집니다.",
        en: "I make it last in live operations, and I own the outcome.",
      },
    },
  ],

  famoCase: {
    before: { ko: "6개월", en: "6 months" },
    beforeNote: { ko: "콘텐츠 40편을 기획·디자인·개발", en: "to plan, design and build 40 pieces" },
    after: { ko: "20분", en: "20 minutes" },
    afterNote: { ko: "지금 한 편을 만드는 데 드는 시간", en: "to make one piece now" },
    stages: [
      { ko: "SEL·CBT 근거 조사", en: "SEL and CBT evidence research" },
      { ko: "놀이 기획", en: "Play planning" },
      { ko: "페이지별 JSON·이미지 생성", en: "JSON and images, page by page" },
      { ko: "구조·중복·시각 정합성 검증", en: "Structure, duplicate and visual checks" },
      { ko: "사람의 승인", en: "Human approval" },
      { ko: "내보내기", en: "Export" },
    ],
  },

  projects: [
    {
      id: "famo-play-factory",
      title: { ko: "Famo Play Factory", en: "Famo Play Factory" },
      year: "2026",
      owner: "client",
      description: {
        ko: "아동 놀이 콘텐츠 제작·검토 도구",
        en: "Production and review tool for children's play content",
      },
      problem: {
        ko: "아동 놀이 콘텐츠 40편을 기획·디자인·개발하는 데 6개월이 걸렸습니다. 근거 조사부터 페이지별 이미지까지 전부 사람의 손을 거쳤습니다.",
        en: "Forty children's play pieces took six months to plan, design and build. Every step, from evidence research to page images, went through people's hands.",
      },
      solution: {
        ko: "SEL·CBT 근거 조사, 놀이 기획, 페이지별 JSON·이미지 생성, 구조·중복·시각 정합성 검증을 하나의 흐름으로 잇고, 사람이 승인한 뒤 내보내도록 만들었습니다. 초대제 대시보드와 Hermes 기반 실행 구조입니다.",
        en: "I joined SEL and CBT evidence research, play planning, page-by-page JSON and image generation, and structure, duplicate and visual checks into one flow that exports only after a person approves. Invitation-only dashboard, running on Hermes.",
      },
      impact: {
        ko: "지금은 콘텐츠 한 편을 만드는 데 20분이 걸립니다. 마지막 승인은 사람이 합니다.",
        en: "One piece now takes 20 minutes. A person still gives the final approval.",
      },
      techStack: ["AI Agent", "Hermes", "Image Generation", "Review Workflow"],
      category: "AI Workflow",
    },
    {
      id: "Famo-therapy",
      title: { ko: "Famo Play Therapy", en: "Famo Play Therapy" },
      year: "2024–",
      owner: "client",
      description: {
        ko: "ADHD 아동을 위한 놀이 치료 서비스",
        en: "Play therapy service for children with ADHD",
      },
      problem: {
        ko: "ADHD 아동의 놀이를 돕는 디지털 도구가 필요했습니다.",
        en: "The client needed digital tools to support play for children with ADHD.",
      },
      solution: {
        ko: "치료 목적에 맞춘 웹 기반 놀이 10가지를 개발하고, 아동의 놀이 데이터를 보고서로 정리해 제공했습니다.",
        en: "Built ten web-based plays designed around therapy goals, with reports that summarise each child's play data.",
      },
      impact: {
        ko: "초기 4개월 동안 놀이 10가지를 만들었고, 지금도 운영과 콘텐츠 고도화를 맡고 있습니다.",
        en: "Ten plays in the first four months; I still run and extend the content today.",
      },
      techStack: ["React", "Gamification", "Data Analysis"],
      category: "Digital Health",
    },
    {
      id: "ikhi",
      title: { ko: "익히", en: "ikhi" },
      year: "2026",
      owner: "own",
      description: {
        ko: "강의 기록에서 시험 연습까지 잇는 학습 서비스",
        en: "A study service from lecture notes to exam practice",
      },
      problem: {
        ko: "강의 녹화, 자료, 시험 준비가 서로 다른 곳에 흩어져 있어 복습이 이어지지 않았습니다.",
        en: "Lecture recordings, materials and exam prep lived in different places, so revision never connected.",
      },
      solution: {
        ko: "강의 녹화와 자료를 올리면 영상·대본을 잇고, AI 요약과 퀴즈를 만들고, 틀린 문제를 다시 풀게 합니다. 에브리타임 시간표도 가져옵니다.",
        en: "Upload a recording and materials; it links video and transcript, writes AI summaries and quizzes, and brings wrong answers back for review. It also imports an Everytime timetable.",
      },
      impact: {
        ko: "ikhi.app에서 웹 서비스로 공개했습니다.",
        en: "Live as a web service at ikhi.app.",
      },
      techStack: ["Next.js", "LLM API", "Chrome Extension", "Mobile"],
      category: "Learning",
      link: "https://ikhi.app/",
    },
    {
      id: "tikkle",
      title: { ko: "티클", en: "tikkle" },
      year: "2023",
      owner: "own",
      description: {
        ko: "여럿이 함께 모아 주는 선물하기 앱",
        en: "Crowdfunded gifting app",
      },
      problem: {
        ko: "비싼 선물을 주고 싶어도 혼자 부담하기엔 가격 장벽이 있었습니다.",
        en: "Expensive gifts were out of reach for one person alone.",
      },
      solution: {
        ko: "여러 친구가 돈을 모아 선물하는 펀딩 기능과 에스크로 결제를 만들고, 카카오톡·연락처로 친구를 쉽게 초대하게 했습니다.",
        en: "Pooled funding with escrow payments, and easy invitations through KakaoTalk and contacts.",
      },
      impact: {
        ko: "4개월 만에 iOS·Android 앱을 출시했습니다.",
        en: "Shipped on iOS and Android in four months.",
      },
      techStack: ["React Native", "Payment", "Mobile"],
      category: "Mobile App",
    },
    {
      id: "daangols",
      title: { ko: "단골쓰", en: "daangols" },
      year: "2024",
      owner: "own",
      description: {
        ko: "외식업 점주를 위한 단골 관리 서비스",
        en: "Regular-customer CRM for restaurant owners",
      },
      problem: {
        ko: "작은 식당에는 단골을 체계적으로 관리하고 다시 부를 도구가 없었습니다.",
        en: "Small restaurants had no tool to keep track of regulars and bring them back.",
      },
      solution: {
        ko: "방문 기록으로 쌓는 스탬프 앱과 점주용 대시보드를 만들고, 카카오 알림톡으로 재방문 캠페인을 보낼 수 있게 했습니다.",
        en: "A visit-based stamp app, an owner dashboard, and revisit campaigns sent by Kakao AlimTalk.",
      },
      impact: {
        ko: "기획부터 개발까지 3개월 걸렸습니다.",
        en: "Planned and built in three months.",
      },
      techStack: ["Web App", "Dashboard", "AlimTalk"],
      category: "B2B Solution",
    },
    {
      id: "conaly",
      title: { ko: "코낼리", en: "Conaly" },
      year: "2024",
      owner: "own",
      description: {
        ko: "커머스 리뷰 분석 서비스",
        en: "Commerce review analysis",
      },
      problem: {
        ko: "수천 개의 리뷰를 일일이 읽어서는 마케팅에 쓸 인사이트를 뽑기 어려웠습니다.",
        en: "Reading thousands of reviews by hand never turned into usable marketing insight.",
      },
      solution: {
        ko: "여러 쇼핑몰의 리뷰를 모아 감정과 키워드를 분석하고, 긍정·부정 평가와 소구 포인트를 한눈에 보이게 했습니다.",
        en: "Collected reviews across stores, analysed sentiment and keywords, and visualised praise, complaints and selling points.",
      },
      impact: {
        ko: "개발 기간은 4개월이었습니다.",
        en: "Built in four months.",
      },
      techStack: ["NLP", "Crawling", "React", "Analytics"],
      category: "Data Analytics",
    },
    {
      id: "Chno-ai",
      title: { ko: "크노AI", en: "Chno AI" },
      year: "2024",
      owner: "own",
      description: {
        ko: "개발 대화를 기술 블로그로 바꾸는 도구",
        en: "Turns development conversations into tech blog posts",
      },
      problem: {
        ko: "개발하며 얻은 지식을 블로그로 남기고 싶어도 글쓰기에 시간이 너무 많이 들었습니다.",
        en: "Developers want to write up what they learn, but writing takes too long.",
      },
      solution: {
        ko: "ChatGPT 공유 링크에서 개발 환경, 스택, 요구사항을 읽어 기술 블로그를 쓰고, 노션 페이지로 바로 발행합니다.",
        en: "Reads a ChatGPT share link for environment, stack and requirements, writes the post and publishes it straight to Notion.",
      },
      impact: {
        ko: "기획부터 개발까지 2개월 걸렸습니다.",
        en: "Planned and built in two months.",
      },
      techStack: ["OpenAI API", "React", "Supabase", "Notion API"],
      category: "AI Tool",
    },
    {
      id: "our-gwangju",
      title: { ko: "우리광주", en: "wooriGwangju" },
      year: "2024",
      owner: "own",
      description: {
        ko: "교통약자를 위한 무장애 길찾기",
        en: "Barrier-free routes for people with limited mobility",
      },
      problem: {
        ko: "휠체어 이용자 같은 교통약자에게 필요한 이동 경로와 편의시설 정보가 부족했습니다.",
        en: "Wheelchair users and others lacked route and facility information made for them.",
      },
      solution: {
        ko: "휠체어 이동 경로와 음성 안내, 장애인 화장실 같은 편의시설 위치를 공공데이터와 TMAP API로 제공했습니다.",
        en: "Wheelchair routes, voice guidance and accessible facility locations from public data and the TMAP API.",
      },
      impact: {
        ko: "개발 기간은 3개월이었습니다.",
        en: "Built in three months.",
      },
      techStack: ["React Native", "TMAP API", "Accessibility"],
      category: "Public Service",
    },
    {
      id: "wesome",
      title: { ko: "위솜", en: "wesome" },
      year: "2024–2025",
      owner: "own",
      description: {
        ko: "AI 캐릭터가 답장하는 일기",
        en: "A diary that an AI character answers",
      },
      problem: {
        ko: "기존 일기 앱은 기록에서 끝나 마음을 나누는 경험이 없었습니다.",
        en: "Diary apps stopped at recording; nothing answered back.",
      },
      solution: {
        ko: "일기 내용에 맞춰 AI 캐릭터가 공감하는 답장을 씁니다. 따뜻한 말투를 프롬프트 설계로 만들었습니다.",
        en: "An AI character writes an empathetic reply to each entry, with its warm voice shaped by prompt design.",
      },
      impact: {
        ko: "개발 기간은 4개월이었습니다.",
        en: "Built in four months.",
      },
      techStack: ["GenAI", "Mobile Web"],
      category: "AI Service",
    },
    {
      id: "Eterners-chat",
      title: { ko: "이터너스 챗", en: "Eterners Chat" },
      year: "2024",
      owner: "own",
      description: {
        ko: "움직이는 이모티콘 채팅 (MVP)",
        en: "Interactive emoticon chat (MVP)",
      },
      problem: {
        ko: "멈춰 있는 이모티콘으로는 감정을 표현하는 데 한계가 있었습니다.",
        en: "Static emoticons limit what people can express.",
      },
      solution: {
        ko: "사용자가 만지면 모양과 상태가 바뀌는 이모티콘 채팅을 만들고, 웹소켓으로 실시간 동시 조작을 지원했습니다.",
        en: "Emoticons that change shape and state as people touch them, with real-time shared control over WebSockets.",
      },
      impact: {
        ko: "2주 만에 MVP를 완성하고 트래픽 처리 구조를 검증했습니다.",
        en: "MVP finished in two weeks, with the traffic design tested.",
      },
      techStack: ["React", "WebSocket", "Interactive UI"],
      category: "MVP",
    },
    {
      id: "interior-rec",
      title: { ko: "인테리어 매칭", en: "Interior Rec System" },
      year: "",
      owner: "own",
      description: {
        ko: "고객과 인테리어 업체를 잇는 추천 시스템",
        en: "Matches customers with interior firms",
      },
      problem: {
        ko: "고객은 수많은 업체 중 자신에게 맞는 곳을 찾기 어렵고, 업체는 맞는 고객을 만나기 어려웠습니다.",
        en: "Customers struggled to find the right firm, and firms the right customers.",
      },
      solution: {
        ko: "고객의 요구사항과 업체 정보를 매칭 알고리즘으로 분석해 맞는 업체를 추천합니다.",
        en: "A matching algorithm reads customer requirements against firm data and recommends a fit.",
      },
      impact: {
        ko: "요구사항과 업체 조건을 한 번에 비교하게 했습니다.",
        en: "Requirements and firm conditions are compared in one pass.",
      },
      techStack: ["Recommendation", "Matching", "Web"],
      category: "Recommendation",
    },
  ] satisfies Project[],

  // 연도별 기록 (홈·소개 페이지의 기록표)
  timeline: [
    {
      year: "2026",
      items: [
        { what: { ko: "Famo Play Factory", en: "Famo Play Factory" }, kind: { ko: "고객 프로젝트", en: "Client project" }, where: { ko: "콘텐츠 제작·검토 도구", en: "Content production tool" }, when: "2026", href: "/projects/famo-play-factory" },
        { what: { ko: "익히", en: "ikhi" }, kind: { ko: "직접 만든 서비스", en: "Own product" }, where: { ko: "ikhi.app 공개", en: "Live at ikhi.app" }, when: "2026", href: "/projects/ikhi" },
      ],
    },
    {
      year: "2025",
      items: [
        { what: { ko: "AI TOP 100", en: "AI TOP 100" }, kind: { ko: "본선 진출 100인 선정", en: "One of 100 finalists" }, where: { ko: "카카오임팩트·브라이언임팩트", en: "Kakao Impact, Brian Impact" }, when: "2025", award: true },
        { what: { ko: "한국물류데이터", en: "Korea Logistics Data" }, kind: { ko: "공동창업자·CTO", en: "Co-founder & CTO" }, where: { ko: "경력", en: "Career" }, when: "2025.04 – 2026.07" },
      ],
    },
    {
      year: "2024",
      items: [
        { what: { ko: "학생창업유망팀 300", en: "Student Startup Team 300" }, kind: { ko: "최종 선정", en: "Final selection" }, where: { ko: "도약트랙, 교육부장관 인증서", en: "Leap track, Minister of Education certificate" }, when: "2024", award: true },
        { what: { ko: "한국일보 인터뷰", en: "Hankook Ilbo interview" }, kind: { ko: "인용", en: "Quoted" }, where: { ko: "커머스 리뷰 분석 스타트업 운영자로 소개", en: "As operator of a review analysis startup" }, when: "2024.07.13", href: "https://www.hankookilbo.com/News/Read/A2024071009470001701" },
        { what: { ko: "단골쓰, 코낼리, 크노AI, 우리광주", en: "daangols, Conaly, Chno AI, wooriGwangju" }, kind: { ko: "출시", en: "Launched" }, where: { ko: "직접 만든 서비스", en: "Own products" }, when: "2024" },
        { what: { ko: "Famo Play Therapy", en: "Famo Play Therapy" }, kind: { ko: "고객 프로젝트", en: "Client project" }, where: { ko: "개발·운영", en: "Build and operation" }, when: "2024 –", href: "/projects/Famo-therapy" },
      ],
    },
    {
      year: "2023",
      items: [
        { what: { ko: "주식회사 라이폴리", en: "LiFoli Corp." }, kind: { ko: "법인 설립·대표이사", en: "Incorporated, CEO" }, where: { ko: "공동창업", en: "Co-founded" }, when: "2023.09.26" },
        { what: { ko: "티클", en: "tikkle" }, kind: { ko: "출시", en: "Launched" }, where: { ko: "iOS, Android", en: "iOS, Android" }, when: "2023", href: "/projects/tikkle" },
        { what: { ko: "K-Startup Silicon Valley Dream Challenge", en: "K-Startup Silicon Valley Dream Challenge" }, kind: { ko: "최종 선정", en: "Final selection" }, where: { ko: "실리콘밸리 데모데이", en: "Silicon Valley demo day" }, when: "2023", award: true },
        { what: { ko: "Innovation Leaders Summit Tokyo", en: "Innovation Leaders Summit Tokyo" }, kind: { ko: "선정", en: "Selected" }, where: { ko: "도쿄 스타트업 피치", en: "Tokyo startup pitch" }, when: "2023", award: true },
        { what: { ko: "성균관대학교 창업중심대학", en: "SKKU Startup-Centred University" }, kind: { ko: "선정", en: "Selected" }, where: { ko: "사업화 지원금 5,200만 원", en: "KRW 52M commercialisation grant" }, when: "2023", award: true },
      ],
    },
    {
      year: "2022",
      items: [
        { what: { ko: "라이폴리 창업팀", en: "LiFoli founding team" }, kind: { ko: "시작", en: "Started" }, where: { ko: "공동창업", en: "Co-founded" }, when: "2022.09" },
        { what: { ko: "학생창업유망팀 300", en: "Student Startup Team 300" }, kind: { ko: "최종 선정", en: "Final selection" }, where: { ko: "초기트랙, 교육부장관 인증서", en: "Early track, Minister of Education certificate" }, when: "2022", award: true },
        { what: { ko: "U300 모의투자대회", en: "U300 mock investment contest" }, kind: { ko: "전국 3위", en: "3rd nationally" }, where: { ko: "경기·인천 권역 1위", en: "1st in Gyeonggi and Incheon" }, when: "2022", award: true },
      ],
    },
    {
      year: "2019",
      items: [
        { what: { ko: "성균관대학교", en: "Sungkyunkwan University" }, kind: { ko: "입학", en: "Entered" }, where: { ko: "융합생명공학·인공지능융합 복수전공", en: "Double major, Biotechnology and AI" }, when: "2019 – 2027.08" },
      ],
    },
    {
      year: "강의",
      yearEn: "Teaching",
      items: [
        { what: { ko: "하나증권", en: "Hana Securities" }, kind: { ko: "AI 강의·컨설팅", en: "AI lectures, consulting" }, where: { ko: "강사", en: "Lecturer" }, when: "" },
        { what: { ko: "성균관대학교 창업지원단", en: "SKKU Startup Support Foundation" }, kind: { ko: "업무 자동화 강의", en: "Work automation lecture" }, where: { ko: "강사", en: "Lecturer" }, when: "" },
      ],
    },
  ] as { year: string; yearEn?: string; items: { what: L; kind: L; where: L; when: string; href?: string; award?: boolean }[] }[],

  experience: [
    {
      period: "2023.09 –",
      role: { ko: "공동창업자·대표이사", en: "Co-founder & CEO" },
      company: { ko: "주식회사 라이폴리", en: "LiFoli Corp." },
      description: {
        ko: "2022년 9월 창업팀으로 시작해 2023년 9월 26일 법인을 세웠습니다. AI 에이전트와 업무 자동화 제품을 기획하고 직접 만듭니다.",
        en: "Started as a founding team in September 2022 and incorporated on 26 September 2023. I plan and build AI agent and work automation products.",
      },
    },
    {
      period: "2025.04 – 2026.07",
      role: { ko: "공동창업자·CTO", en: "Co-founder & CTO" },
      company: { ko: "한국물류데이터", en: "Korea Logistics Data" },
      description: {
        ko: "공동창업자이자 CTO로 일했습니다.",
        en: "Worked as co-founder and CTO.",
      },
    },
    {
      period: "2019 – 2027.08",
      role: { ko: "융합생명공학·인공지능융합 복수전공", en: "Double major, Biotechnology and AI" },
      company: { ko: "성균관대학교", en: "Sungkyunkwan University" },
      description: {
        ko: "2027년 8월 졸업 예정입니다.",
        en: "Graduating in August 2027.",
      },
    },
  ],

  techStack: {
    product: ["TypeScript", "React", "Next.js", "Node.js", "Expo", "React Native", "Tauri"],
    data: ["Supabase", "PostgreSQL", "SQLite", "FastAPI", "Python"],
    ai: ["LangChain", "LangGraph", "n8n", "RAG", "LLM API", "MCP", "Playwright"],
    tools: ["Claude Code", "Codex", "Vercel", "Cloudflare", "Docker"],
  },

  services: [
    {
      slug: "ax-consulting",
    cover: {
      src: "/archive/nh-52909-typing-pool-navy-department-washington.jpg",
      alt: { ko: "1918년 워싱턴의 한 사무실에서 타자기 앞에 줄지어 앉아 일하는 직원들", en: "Clerks working in rows at typewriters in a Washington office, 1918" },
      caption: { ko: "타자수들의 사무실, 1918년", en: "A typing pool, 1918" },
    },
      title: { ko: "AX 컨설팅", en: "AX consulting" },
      summary: {
        ko: "AI 도입이 아니라 운영 체제 전환. 데이터 흐름과 책임 구조, 자동화를 함께 설계합니다.",
        en: "Not adopting AI, changing how the company runs: data flow, responsibility and automation, designed together.",
      },
      lead: {
        ko: "모델을 고르기 전에 데이터 흐름과 책임 구조를 먼저 설계해, 현장에서 실제로 돌아가는 시스템을 만듭니다.",
        en: "Before any model is chosen, I design the data flow and who is responsible, so the system actually runs on the floor.",
      },
      points: [
        { ko: "진단: 돈과 시간이 새는 병목을 정의하고 자동화할 지점을 찾습니다.", en: "Diagnose: name the bottlenecks that leak time and money, and find what can be automated." },
        { ko: "설계: 데이터 흐름과 권한·책임을 정리해 운영 가능한 구조로 만듭니다.", en: "Design: map data flow, permissions and responsibility into a structure people can run." },
        { ko: "구현: 필요하면 직접 MVP까지 개발하고 운영과 모니터링을 붙입니다.", en: "Build: where needed I develop the MVP myself and add operations and monitoring." },
      ],
      related: [
        { href: "/insights/ax-reality", title: { ko: "AX는 AI 도입이 아니라 운영 체제 전환이다", en: "AX is an operating system transition" } },
        { href: "/projects/famo-play-factory", title: { ko: "Famo Play Factory", en: "Famo Play Factory" } },
      ],
      faq: [
        {
          q: { ko: "AX 컨설팅은 AI 도입 컨설팅과 무엇이 다른가요?", en: "How is AX consulting different from AI adoption consulting?" },
          a: {
            ko: "도구나 모델을 고르기 전에 데이터가 흘러야 하고 책임 구조가 정해져야 합니다. AX는 운영 체계를 바꾸는 일이라 현장 프로세스, 데이터 파이프라인, 권한과 책임을 함께 설계합니다.",
            en: "Before choosing a tool or model, data has to flow and responsibility has to be clear. AX changes how the company runs, so process, data pipeline, permissions and responsibility are designed together.",
          },
        },
        {
          q: { ko: "어디부터 시작하나요?", en: "Where does it start?" },
          a: {
            ko: "반복 업무, 대기, 오류, 정산 같은 현장 병목을 먼저 정의하고, 데이터를 연결한 뒤 자동화와 에이전트를 적용할 범위를 정합니다. 30분 진단으로 시작해, 2주 진단과 4~8주 실행으로 설계합니다.",
            en: "First the bottlenecks on the floor: repeated tasks, waiting, errors, settlement. Then the data is connected, and only then is the scope for automation and agents set. It begins with a 30-minute diagnosis and is planned as a two-week diagnosis and four to eight weeks of work.",
          },
        },
        {
          q: { ko: "결과물은 어떤 형태인가요?", en: "What do I get?" },
          a: {
            ko: "업무 흐름과 역할 정리, 데이터 사전과 파이프라인 설계, 화면·워크플로우 프로토타입, KPI와 모니터링 지표, 필요하면 실제 제품(MVP)까지 포함합니다.",
            en: "A map of the work and roles, a data dictionary and pipeline design, screen and workflow prototypes, KPIs and monitoring, and a working MVP where it is needed.",
          },
        },
      ],
      keywords: ["AX 컨설팅", "AI 전환", "업무 전환", "프로세스 설계", "데이터 흐름"],
    },
    {
      slug: "ai-agents",
    cover: {
      src: "/archive/photograph-of-women-working-at-a-bell.jpg",
      alt: { ko: "전화 교환대 앞에 줄지어 앉아 회선을 연결하는 교환원들", en: "Operators in a row connecting lines at a telephone switchboard" },
      caption: { ko: "벨 시스템 국제 전화 교환대", en: "A Bell System international switchboard" },
    },
      title: { ko: "AI 에이전트·업무 자동화", en: "AI agents and work automation" },
      summary: {
        ko: "계획하고 실행하는 디지털 동료를 만듭니다. 조회·분류·요약·초안 작성부터 승인 흐름까지 운영 가능한 형태로 설계합니다.",
        en: "Digital colleagues that plan and act: lookup, sorting, summaries and drafts, up to the approval flow, designed to be run.",
      },
      lead: {
        ko: "단순 챗봇이 아니라 계획하고 실행하는 디지털 동료를 만듭니다. 사람의 승인이 들어갈 자리와 로그를 먼저 정합니다.",
        en: "Not a chatbot: a digital colleague that plans and acts. Where a person approves, and what gets logged, is decided first.",
      },
      points: [
        { ko: "문의와 메시지에서 핵심 정보를 뽑고, 시스템을 조회해 답장 초안을 씁니다.", en: "Pull the key facts from an enquiry, look them up in your systems and draft the reply." },
        { ko: "문서와 회의록을 요약해 할 일을 만들고 담당자에게 알립니다.", en: "Summarise documents and minutes into tasks and notify the owner." },
        { ko: "주간·월간 운영 리포트를 쓰고 KPI 이상을 알립니다.", en: "Write weekly and monthly reports and flag KPI anomalies." },
        { ko: "정산과 검증을 돕습니다. 대조하고, 불일치를 찾고, 근거 링크를 붙입니다.", en: "Help with settlement and checks: reconcile, find mismatches, link the evidence." },
      ],
      stack: ["LangChain", "LangGraph", "n8n", "RAG", "MCP", "Claude Code", "Codex"],
      related: [
        { href: "/projects/famo-play-factory", title: { ko: "Famo Play Factory", en: "Famo Play Factory" } },
        { href: "/insights/software-sovereignty", title: { ko: "소프트웨어 주권과 운영의 현실", en: "Software sovereignty and operational reality" } },
      ],
      faq: [
        {
          q: { ko: "AI 에이전트와 기존 자동화(RPA·매크로)는 무엇이 다른가요?", en: "How is an AI agent different from RPA or macros?" },
          a: {
            ko: "정해진 화면과 규칙만 따라가지 않고, 목표를 받아 계획을 세우고 API·DB·문서 같은 도구를 호출해 결과를 만듭니다. 그래서 운영 안전을 위한 권한, 승인, 로그 설계가 핵심입니다.",
            en: "It does not just follow fixed screens and rules: it takes a goal, plans, and calls tools such as APIs, databases and documents. That is why permissions, approvals and logs are the core of the design.",
          },
        },
        {
          q: { ko: "어디까지 자동화할 수 있나요?", en: "How far can it go?" },
          a: {
            ko: "초안 작성, 정보 조회, 분류, 요약, 알림부터 시작해 승인 흐름을 붙여 단계적으로 넓히는 방식이 가장 안전합니다.",
            en: "The safest path starts with drafts, lookups, sorting, summaries and alerts, then widens step by step with an approval flow attached.",
          },
        },
        {
          q: { ko: "LLM 비용과 품질은 어떻게 관리하나요?", en: "How are LLM cost and quality managed?" },
          a: {
            ko: "프롬프트와 도구 호출 구조를 고정하고, 캐시·라우팅·재시도·가드레일(금칙어·개인정보·정책)을 둬서 비용과 품질을 함께 관리합니다.",
            en: "Fixed prompt and tool-call structure, plus caching, routing, retries and guardrails for banned terms, personal data and policy.",
          },
        },
      ],
      keywords: ["AI 에이전트", "업무 자동화", "LangChain", "LangGraph", "n8n"],
    },
    {
      slug: "fullstack-development",
    cover: {
      src: "/archive/a-woman-with-a-hollerith-pantograph-punch.jpg",
      alt: { ko: "천공기 앞에서 인구조사 카드에 구멍을 뚫는 사람", en: "A woman punching census cards at a pantograph punch" },
      caption: { ko: "인구조사 카드 천공, 1940년", en: "Punching census cards, 1940" },
    },
      title: { ko: "풀스택 개발", en: "Full-stack development" },
      summary: {
        ko: "아이디어를 쓸 수 있는 제품으로 바꿉니다. 기획부터 배포와 운영까지 혼자 완주합니다.",
        en: "From an idea to a product people can use: planning to deployment and operation, done end to end.",
      },
      lead: {
        ko: "아이디어를 사용 가능한 제품으로 바꾸는 속도와 운영 품질에 집중합니다. 빠르게 출시하고 실제 사용 데이터로 고칩니다.",
        en: "Speed from idea to usable product, and quality once it runs. Ship early, then improve from real usage.",
      },
      points: [
        { ko: "B2B SaaS, 내부 운영 도구, 데이터 파이프라인과 대시보드", en: "B2B SaaS, internal tools, data pipelines and dashboards" },
        { ko: "웹 MVP와 제품, React Native·Expo 모바일 앱", en: "Web MVPs and products, React Native and Expo apps" },
        { ko: "배포, 모니터링, 에러 수집을 기본으로 포함", en: "Deployment, monitoring and error tracking included by default" },
      ],
      stack: ["TypeScript", "Next.js", "React", "Supabase", "PostgreSQL", "Expo", "Vercel"],
      related: [
        { href: "/projects/tikkle", title: { ko: "티클", en: "tikkle" } },
        { href: "/projects/ikhi", title: { ko: "익히", en: "ikhi" } },
      ],
      faq: [
        {
          q: { ko: "어떤 프로젝트를 맡을 수 있나요?", en: "What kind of project can you take on?" },
          a: {
            ko: "B2B SaaS, 내부 운영 도구, 데이터 파이프라인과 대시보드, 웹 MVP와 제품, React Native 모바일 앱까지 가능합니다.",
            en: "B2B SaaS, internal tools, data pipelines and dashboards, web MVPs and products, and React Native apps.",
          },
        },
        {
          q: { ko: "기간은 얼마나 걸리나요?", en: "How long does it take?" },
          a: {
            ko: "범위에 따라 다릅니다. 지금까지 만든 서비스는 MVP 2주부터 출시까지 2~4개월이 걸렸습니다. 이후 운영과 개선은 스프린트로 이어갑니다.",
            en: "It depends on scope. Past products took from a two-week MVP to two to four months to launch. After that, improvements run in sprints.",
          },
        },
        {
          q: { ko: "품질은 어떻게 지키나요?", en: "How is quality kept?" },
          a: {
            ko: "지표, 로그, 에러 모니터링을 먼저 깔고, 요구사항을 좁게 정의한 뒤 빠르게 배포해 실제 사용 데이터로 고칩니다.",
            en: "Metrics, logs and error monitoring go in first; requirements are kept narrow, shipped fast and corrected from real usage.",
          },
        },
      ],
      keywords: ["풀스택 개발자", "Next.js 개발", "React 개발", "Supabase", "MVP"],
    },
  ] satisfies Service[],

  insights: [
    {
      id: "ai-that-works",
      title: {
        ko: "이제는 실제로 일할 수 있어야 한다",
        en: "Now AI has to do the work",
      },
      summary: {
        ko: "AI는 이미 충분히 똑똑하다. AI가 무언가를 잘하는 것과 AI에게 실제 업무를 맡길 수 있다는 것은 다르다. 기업의 AI 전환을 완성하는 실행 인프라, Foli를 만드는 이유.",
        en: "AI is already smart enough. Being good at something is different from being able to hand it real work. Why we are building Foli, the execution infrastructure that completes AX.",
      },
      date: "2026.10.20",
      cover: {
        src: "/archive/photograph-of-women-working-at-a-bell.jpg",
        alt: { ko: "전화 교환대 앞에 줄지어 앉아 회선을 연결하는 교환원들", en: "Operators in a row connecting lines at a telephone switchboard" },
        caption: { ko: "벨 시스템 국제 전화 교환대", en: "A Bell System international switchboard" },
      },
      body: [
        { type: "quote", text: { ko: "AI는 이미 충분히 똑똑하다. 이제는 실제로 일할 수 있어야 한다. 우리는 기업의 AI 전환(AX)을 완성하는 실행 인프라 플랫폼, Foli를 만든다.", en: "AI is already smart enough. Now it has to be able to do the work. We are building Foli, the execution infrastructure platform that completes a company's AI transition (AX)." } },
        { type: "h2", text: { ko: "AI가 코드를 작성하는 것과, 개발자의 일을 대신하는 것은 다르다", en: "Writing code is not the same as doing a developer's work" } },
        { type: "p", text: { ko: "2년 전에도 ChatGPT는 코드를 제법 잘 작성했다. 하지만 당시 개발자들은 지금처럼 자신의 일자리를 진지하게 걱정하지 않았다. 불과 2년 만에 무엇이 달라졌을까?", en: "Two years ago ChatGPT already wrote decent code. Yet developers were not seriously worried about their jobs the way they are now. What changed in just two years?" } },
        { type: "p", text: { ko: "물론 AI 모델 자체도 훨씬 똑똑해졌다. 하지만 본질적인 변화는 다른 곳에 있다. AI가 무언가를 잘하는 것과, AI에게 실제 업무를 맡길 수 있다는 것은 전혀 다른 차원의 이야기다.", en: "The models did get much smarter. But the essential change lies elsewhere. AI being good at something and being able to hand AI real work are entirely different things." } },
        { type: "p", text: { ko: "과거에는 AI가 작성한 코드를 개발자가 직접 복사해 옮기고, 테스트하고, 배포해야 했다. 반면 지금은 Claude Code나 Codex에 원하는 결과를 말하면, 에이전트가 직접 로컬 파일을 수정하고, 터미널을 실행해 테스트를 돌리고, 발생한 오류를 스스로 고치며, 필요한 도구를 호출해 작업을 끝낸다.", en: "Back then, developers copied the code AI wrote, moved it, tested it and deployed it themselves. Now you tell Claude Code or Codex the result you want, and the agent edits local files, runs the tests in a terminal, fixes the errors it hits and calls whatever tools it needs to finish the job." } },
        { type: "p", text: { ko: "달라진 것은 모델의 지능만이 아니다. 개발자의 업무 환경인 IDE, 터미널, Git, CI/CD 파이프라인이 AI와 직접 연결되었다. 여기에 자연어로 업무를 지시하고 결과만 확인하는 직관적인 UX가 결합되었다.", en: "What changed is not only the model's intelligence. The developer's working environment, the IDE, the terminal, Git and the CI/CD pipeline, was connected directly to AI, and joined with an intuitive experience: give the instruction in plain language and check the result." } },
        { type: "p", text: { ko: "이제 개발자는 \"AI가 유용하다\"는 설명을 듣는 데 그치지 않는다. AI에게 일을 맡겼더니 실제로 그 일이 끝나 있는 경험을 한다. 우리는 이것을 AI의 '유효경험'이라고 부른다. 그리고 이 유효경험이 임계점을 넘었을 때, 사람들은 비로소 일하는 방식을 근본적으로 바꾸기 시작한다.", en: "Developers no longer just hear that AI is useful. They hand AI a task and find the task actually done. We call this AI's effective experience. When effective experience crosses a threshold, people finally begin to change how they work." } },
        { type: "h2", text: { ko: "왜 대부분의 기업에서는 아직 같은 일이 일어나지 않는가?", en: "Why the same thing has not happened in most companies" } },
        { type: "p", text: { ko: "개발, 디자인, 영상 편집, 문서 작성까지 디지털 네이티브 영역에서 AI 에이전트의 영토는 폭발적으로 넓어지고 있다. 하지만 공장, 물류센터, 운송주선사, 콜센터는 어떨까? 이 현장에서 일하는 사람들도 개발자처럼 AI에게 업무를 맡기고 완성된 결과를 받아볼 수 있을까?", en: "In digital-native work, development, design, video editing and writing, the territory of AI agents is expanding explosively. But what about factories, warehouses, freight brokers and call centres? Can the people working there hand AI their work and get a finished result back, the way developers do?" } },
        { type: "p", text: { ko: "현실은 전혀 그렇지 않다. 우리가 현장에서 가장 먼저 마주했던 한 물류 기업의 일상을 보자.", en: "Not at all. Look at an ordinary day at a logistics company, one of the first places we met in the field." } },
        { type: "p", text: { ko: "고객이 카카오톡으로 화물 운송을 요청한다. 배차 담당자는 메시지를 읽고, 사내 레거시 ERP에서 거래처 정보와 단가를 확인한 뒤, 외부 배차 플랫폼을 열어 적합한 차량을 찾는다. 이후 운송기사에게 직접 전화를 걸어 상하차 일정을 조율하고, 확정된 결과를 다시 고객에게 카카오톡으로 안내한다.", en: "A customer asks for a shipment over KakaoTalk. The dispatcher reads the message, checks the account and rate in the company's legacy ERP, then opens an external dispatch platform to find a suitable truck. Next they phone the driver to arrange loading and unloading, and send the confirmed result back to the customer on KakaoTalk." } },
        { type: "p", text: { ko: "만약 아주 똑똑한 AI가 이 운송 요청을 완벽하게 이해하고 최적의 배차 계획까지 세웠다고 가정해 보자. 그런데 이 AI가 사내 ERP에 접근할 수 없고, 외부 배차 플랫폼 화면을 조작할 수 없으며, 기사에게 전화를 걸 수도 없다면 어떻게 될까? 결국 나머지 모든 실행은 여전히 사람이 직접 손으로 해야 한다.", en: "Suppose a very smart AI understood this request perfectly and drew up the best dispatch plan. If it cannot reach the ERP, cannot operate the dispatch platform's screens and cannot call the driver, every remaining step still has to be done by hand." } },
        { type: "p", text: { ko: "개발자의 업무 환경은 API와 CLI를 통해 빠르게 AI와 연결되고 있지만, 현실 경제를 움직이는 수많은 기업의 업무 환경은 철저히 단절되어 있다.", en: "The developer's environment is being connected to AI quickly through APIs and CLIs. The working environments of the countless companies that run the real economy remain thoroughly disconnected." } },
        { type: "p", text: { ko: "공식 API조차 없는 오래된 ERP, 직원의 업무용 스마트폰, 카카오톡과 문자 메시지, 전화와 팩스, 고객사 전용 웹 포털, 나아가 공장의 설비와 연구실의 실험 장비까지. 기업의 실제 업무는 파편화된 소프트웨어와 물리적 장비를 쉴 새 없이 넘나들며 이루어진다. 지금 이 순간에도 수많은 직원들이 시스템과 시스템 사이에서 정보를 옮기는 '인간 라우터' 역할을 하고 있다.", en: "Old ERPs with no official API, staff work phones, KakaoTalk and text messages, phone and fax, customer-only web portals, even factory equipment and laboratory instruments. Real work moves constantly across fragmented software and physical machines. Right now, countless employees are acting as human routers, carrying information from one system to the next." } },
        { type: "p", text: { ko: "그렇다고 AI를 도입하자고 수십 년간 써온 인프라를 하루아침에 전부 교체할 수는 없다. 당장 내일부터 거래처에 카카오톡 대신 Slack으로 연락해 달라고 요구할 수도 없는 노릇이다.", en: "Nor can a company replace decades of infrastructure overnight to adopt AI. It cannot ask its partners to switch from KakaoTalk to Slack starting tomorrow." } },
        { type: "p", text: { ko: "우리는 바로 이 단절에서 가장 거대한 기회를 발견했다. AI를 쓰기 위해 기업이 일하는 방식을 억지로 바꾸는 것이 아니라, AI가 기업의 기존 환경 속으로 직접 들어가 일할 수 있어야 한다.", en: "We found the largest opportunity in exactly this disconnection. Companies should not have to force a new way of working to use AI. AI should go into the environment they already have and work there." } },
        { type: "h2", text: { ko: "Foli가 만드는 '유효경험': 시작부터 끝까지 완결되는 업무", en: "The effective experience Foli makes: work completed from start to finish" } },
        { type: "p", text: { ko: "Foli가 연결되면 같은 현장은 완전히 다르게 작동한다.", en: "With Foli connected, the same floor works completely differently." } },
        { type: "p", text: { ko: "어느 날 고객이 평소처럼 카카오톡으로 운송을 요청한다. Foli의 에이전트는 즉시 메시지를 감지하고 주문에 필요한 핵심 정보를 추출한다. 이어서 사내 ERP를 조회해 기존 거래 조건을 확인하고, 외부 배차 플랫폼을 직접 조작해 조건에 맞는 차량을 확보한다.", en: "A customer requests a shipment on KakaoTalk as usual. Foli's agent picks up the message at once and extracts what the order needs. It checks the existing terms in the ERP, then operates the external dispatch platform itself to secure a truck that fits." } },
        { type: "p", text: { ko: "에이전트는 운송기사에게 연락해 일정을 조율한 뒤, 확정된 배차 결과를 고객에게 전달한다. 마지막으로 사내 ERP의 배차 상태와 정산 문서를 갱신하는 것까지 스스로 마무리한다. 단가 조율이나 긴급 변경처럼 사람의 판단이 꼭 필요한 예외적인 순간에만 담당자에게 개입을 요청한다.", en: "The agent contacts the driver to settle the schedule and sends the confirmed dispatch to the customer. Finally it updates the dispatch status and settlement documents in the ERP on its own. It asks a person to step in only at the exceptional moments that need human judgement, such as negotiating a rate or an urgent change." } },
        { type: "p", text: { ko: "모든 처리가 끝나면 담당자는 Foli에서 단 하나의 결과 보고를 확인한다.", en: "When everything is done, the person in charge sees a single report in Foli." } },
        { type: "report", title: { ko: "배차가 완료되었습니다", en: "Dispatch complete" }, text: { ko: "고객의 운송 요청을 접수하고, 차량 배정과 기사 확인을 마쳤습니다. 고객에게 배차 정보를 안내했으며, ERP에도 정상 반영했습니다.", en: "The customer's request was received, a truck assigned and the driver confirmed. The customer has the dispatch details, and the ERP is updated." } },
        { type: "p", text: { ko: "이것이 Foli가 현실 기업에 만들어 주려는 '유효경험'이다. 직원이 서너 개의 화면과 전화기를 오가며 직접 처리하던 파편화된 노동이, 에이전트에게 위임하는 '하나의 완결된 업무'로 바뀐다.", en: "This is the effective experience Foli sets out to give real companies. Fragmented labour, done by an employee moving between three or four screens and a phone, becomes one finished task delegated to an agent." } },
        { type: "p", text: { ko: "그리고 이 경험은 물류업에만 머물지 않는다.", en: "And the experience does not stop at logistics." } },
        { type: "list", items: [
          { ko: "제조 현장에서는 생산관리 에이전트가 설비 상태와 PLC 데이터를 실시간으로 감시하고, 이상 징후가 포착되면 담당자에게 보고하거나 사전 승인된 제어 조치를 즉각 실행한다.", en: "On the factory floor, a production agent watches equipment status and PLC data in real time, and when it spots an anomaly it reports to the person in charge or runs a pre-approved control action at once." },
          { ko: "콜센터에서는 상담 에이전트가 전화를 받고, 고객 정보를 조회하며, 내부 업무 시스템을 직접 조작해 요청을 처리한다. 사람의 공감이 필요한 순간에만 그동안의 맥락을 요약해 상담원에게 매끄럽게 인계한다.", en: "In a call centre, a service agent answers the phone, looks up the customer and operates internal systems to handle the request. Only when human empathy is needed does it summarise the context and hand over smoothly to a person." },
          { ko: "일반 백오피스에서는 정산 에이전트가 이메일과 첨부 문서를 확인하고, 거래 내역을 대조한 뒤, ERP에 전표를 입력하고 담당자의 최종 승인을 받아 마감 업무를 끝낸다.", en: "In the back office, a settlement agent reads emails and attachments, reconciles transactions, enters vouchers in the ERP and closes the books after the person in charge gives final approval." },
        ] },
        { type: "p", text: { ko: "기존의 업무 방식을 파괴하거나 쓰던 소프트웨어를 통째로 갈아엎는 것이 아니다. 기업이 이미 사용하고 있는 인프라 위에서 AI가 곧바로 실무를 수행하게 만드는 것이다.", en: "It does not tear up the way a company works or throw out the software it uses. It lets AI do the actual work right away, on the infrastructure the company already has." } },
        { type: "h2", text: { ko: "Foli는 무엇을 만드는가?", en: "What Foli is building" } },
        { type: "p", text: { ko: "단절된 기업 환경에서 AI가 실제로 일하게 만들기 위해, Foli는 세 가지 핵심 계층을 만들고 있다.", en: "To make AI actually work in a disconnected company, Foli is building three core layers." } },
        { type: "h3", text: { ko: "파편화된 업무 환경을 하나로 묶는 실행 인프라 (Foli Edge Gateway)", en: "Execution infrastructure that ties fragmented work together (Foli Edge Gateway)" } },
        { type: "p", text: { ko: "기업의 업무는 단일 소프트웨어 안에서 끝나지 않는다. Foli는 표준 API와 MCP(Model Context Protocol)는 물론, 화면을 직접 보고 제어하는 컴퓨터 조작(Computer Use), 전화(VoIP) 시스템, 비즈니스 메신저, 산업용 하드웨어 장비까지 다양한 실행 수단을 에이전트와 직접 연결한다. 공식 연동 수단이 있는 서비스는 직접 연결하고, 레거시 시스템이나 폐쇄망 장비는 Foli Edge Gateway를 통해 물리적·소프트웨어적 경계를 넘어 연동한다. 기업은 기존 시스템을 단 하나도 교체하지 않고 AI가 일할 수 있는 실행 환경을 갖추게 된다.", en: "Company work never ends inside one piece of software. Foli connects agents directly to many ways of acting: standard APIs and MCP (Model Context Protocol), computer use that sees and controls screens, phone (VoIP) systems, business messengers, even industrial hardware. Services with official integrations are connected directly; legacy systems and closed-network equipment are reached across physical and software boundaries through the Foli Edge Gateway. The company gets an environment where AI can work without replacing a single existing system." } },
        { type: "h3", text: { ko: "기업의 조직과 프로세스가 그대로 투영된 맞춤형 에이전트", en: "Agents shaped to the company's own organisation and processes" } },
        { type: "p", text: { ko: "기업마다 핵심 KPI도, 업무 절차도, 사용하는 시스템도 모두 다르다. Foli는 기업의 기존 업무 프로세스와 역할, 권한 구조를 그대로 에이전트 시스템에 매핑한다. 배차 에이전트, 정산 에이전트, 고객 응대 에이전트가 각자의 직무 범위 안에서 독립적으로 업무를 수행하고, 필요할 때는 서로 데이터를 주고받으며 협력한다. 현업 직원은 복잡한 자동화 워크플로를 직접 설계하거나 프롬프트를 공부할 필요가 없다. 자연어로 업무를 지시하고 결과만 확인하면 된다. AI를 잘 아는 사람이 아니라, 자신의 본업을 가장 잘 아는 사람이 가장 강력한 무기로 쓸 수 있는 제품이 바로 Foli다.", en: "Every company has its own KPIs, procedures and systems. Foli maps the company's existing processes, roles and permissions straight onto its agents. A dispatch agent, a settlement agent and a customer agent each work within their own remit and exchange data when they need to. Staff do not have to design automation workflows or study prompts: they give instructions in plain language and check the results. Foli is meant to be the strongest tool not for the person who knows AI best, but for the person who knows their own job best." } },
        { type: "h3", text: { ko: "기업이 안심하고 권한을 위임할 수 있는 신뢰 환경 (Enterprise Governance)", en: "An environment of trust where a company can delegate (Enterprise Governance)" } },
        { type: "p", text: { ko: "아무리 편리한 AI라도 보안과 통제가 담보되지 않으면 기업은 핵심 데이터와 실행 권한을 내어줄 수 없다. Foli는 조직 및 직급별 접근 권한 제어(RBAC), 중요 작업에 대한 사전 승인 절차(Human-in-the-Loop), 모든 행동의 감사 기록(Audit Log), 그리고 격리된 안전 실행 환경을 기본으로 갖춘다. 기업의 보안 정책에 따라 클라우드 모델과 온프레미스 모델을 선택해 연결할 수 있으며, 여러 에이전트가 협력하더라도 각자의 권한과 책임 경계는 엄격하게 통제된다. 기업이 진짜 원하는 것은 통제 불능의 완전 자동화가 아니라, 언제든 믿고 맡길 수 있는 업무 자동화이기 때문이다.", en: "However convenient, no company will hand over core data and the power to act without security and control. Foli is built with role-based access control by team and rank (RBAC), approval before important actions (human in the loop), an audit log of every action and an isolated, safe execution environment. Cloud or on-premise models can be chosen to fit the company's security policy, and even when agents work together each one's permissions and responsibilities stay strictly bounded. What companies really want is not automation out of control, but automation they can trust with the work at any time." } },
        { type: "h2", text: { ko: "우리가 파는 것은 소프트웨어가 아니라 '끝난 일'이다", en: "What we sell is not software but finished work" } },
        { type: "p", text: { ko: "우리가 기업에 판매하는 것은 최신 AI 모델도, 대화형 챗봇도, 복잡한 워크플로 빌더도 아니다. 기업 입장에서 중요한 질문은 훨씬 본질적이고 단순하다.", en: "We do not sell companies the latest model, a chatbot or a complicated workflow builder. The questions that matter to a company are far simpler and more fundamental." } },
        { type: "list", items: [
          { ko: "직원이 여러 시스템을 오가며 소모하던 시간이 실제로 사라지는가?", en: "Does the time staff lose moving between systems actually disappear?" },
          { ko: "반복적인 실무를 사람보다 더 빠르고 정확하게 완수하는가?", en: "Is repetitive work finished faster and more accurately than by people?" },
          { ko: "핵심 인력이 단순 작업에서 벗어나 더 부가가치가 높은 일에 집중할 수 있는가?", en: "Can key people leave routine tasks and focus on higher-value work?" },
          { ko: "궁극적으로 이 변화가 즉각적인 비용 절감과 매출 증대라는 측정 가능한 ROI로 증명되는가?", en: "In the end, is the change proven by a measurable ROI in immediate savings and growth?" },
        ] },
        { type: "p", text: { ko: "AI의 도입 자체는 기업의 목적이 될 수 없다. 물류회사는 여전히 화물을 정확하게 옮겨야 돈을 벌고, 제조업체는 불량 없이 좋은 제품을 만들어야 생존한다. AI가 등장했다고 해서 기업이 가치를 창출하는 본질까지 바뀐 것은 아니다.", en: "Adopting AI cannot be a company's goal in itself. A logistics company still earns its money by moving freight accurately; a manufacturer survives by making good products without defects. AI arriving has not changed how a company creates value." } },
        { type: "p", text: { ko: "우리에게 AX(AI 전환)란 회사에 그럴듯한 AI 툴 하나를 새로 구독하는 일이 아니다. 기업이 원래 해오던 본업을, AI와 함께 더 적은 자원으로 압도적으로 잘 해내게 만드는 것이다.", en: "To us, AX is not subscribing to one more impressive AI tool. It is making a company do its own work overwhelmingly well, with fewer resources, together with AI." } },
        { type: "h2", text: { ko: "세상에는 그런 현장이 수없이 많다", en: "There are countless places like this" } },
        { type: "p", text: { ko: "이미 잘 정비된 클라우드 인프라 위에서 일하며, 기존의 SaaS형 AI 제품만으로도 충분한 효용을 누리는 테크 기업들이 있다. 하지만 세상의 대다수 기업은 그렇지 않다.", en: "Some tech companies work on well-kept cloud infrastructure and get plenty from existing SaaS AI products. Most companies in the world do not." } },
        { type: "p", text: { ko: "아직 디지털 전환(DX)조차 완전히 끝나지 않은 기업들, 수십 년간 누적된 레거시 시스템과 엑셀·전화·메신저 위에서 돌아가는 기업들, 그리고 매일 수백 번씩 시스템과 사람 사이를 메우며 일하는 수많은 현업 직원들이 있다.", en: "There are companies that have not even finished digital transformation, companies running on decades of legacy systems, spreadsheets, phones and messengers, and countless staff who fill the gaps between systems and people hundreds of times a day." } },
        { type: "p", text: { ko: "그들이 지금까지 AI를 도입하지 못한 이유는 기술의 가치를 몰라서가 아니다. 그들의 거칠고 복잡한 현장 속에서 실제로 일을 끝내줄 수 있는 AI를 아직 만나지 못했기 때문이다.", en: "They have not adopted AI not because they miss its value, but because they have not yet met an AI that can actually finish the work in their rough, complicated reality." } },
        { type: "p", text: { ko: "우리는 이 시장이 소외된 변방이나 단순한 롱테일(Long-tail)이라고 생각하지 않는다. 오히려 실물 경제의 가장 거대한 몸통이자, 앞으로 AI가 가장 폭발적인 재무적 가치를 만들어낼 본류(Mainstream)라고 확신한다.", en: "We do not see this market as a neglected fringe or a long tail. We are convinced it is the largest body of the real economy, and the mainstream where AI will create the most explosive financial value." } },
        { type: "p", text: { ko: "AI의 두뇌는 이미 충분히 똑똑해졌다. 이제 승부는 그 지능이 현실 세계의 거친 업무 환경에 얼마나 깊이, 그리고 안전하게 연결될 수 있느냐에서 갈린다.", en: "AI's brain is already smart enough. The contest now is how deeply, and how safely, that intelligence can be connected to the rough working environments of the real world." } },
        { type: "quote", text: { ko: "Foli는 그 연결의 표준을 만든다. 우리는 AI를 더 똑똑하게 만드는 경쟁을 하지 않는다. 이미 똑똑해진 AI가 모든 기업의 현장에서 실제로 일할 수 있는 세상을 만든다.", en: "Foli sets the standard for that connection. We are not competing to make AI smarter. We are making a world where AI, already smart, can actually work on the floor of every company." } },
      ],
    },
    {
      id: "ax-reality",
      cover: {
        src: "/archive/savings-book-entries-1912.jpg",
        alt: { ko: "손으로 적고 도장을 찍은 오래된 저금 통장의 거래 기록면", en: "Handwritten, stamped entries in an old savings book" },
        caption: { ko: "손으로 적던 통장 기록, 1912–1916년", en: "Savings book entries kept by hand, 1912–1916" },
      },
      title: {
        ko: "AX는 AI 도입이 아니라 운영 체제 전환이다",
        en: "AX is an operating system transition, not AI adoption",
      },
      summary: {
        ko: "AI 모델보다 먼저, 데이터 흐름과 책임 구조를 설계해야 합니다. 실무 도입 실패의 원인은 대부분 운영 체계의 부재에 있습니다.",
        en: "Design data flow and responsibility before models. Most failures in practice come from having no operating system for the work.",
      },
      date: "2026.01.06",
      body: [
        {
          type: "p",
          text: {
            ko: "물류, 금융, 가구 컨설팅 현장을 오가며 확인한 한 가지 사실이 있습니다. 업종은 달라도 운영은 놀랍도록 비슷하게 굴러갑니다.",
            en: "After visiting logistics, finance, and consulting fields, I confirmed one thing. Different industries, but operations run surprisingly similarly.",
          },
        },
        {
          type: "p",
          text: {
            ko: "핵심 업무가 시스템이 아니라 사람의 손과 기억, 그리고 엑셀·메일함·메신저에 기대어 돌아가고 있었습니다.",
            en: "Core tasks rely on human hands, memory, Excel, emails, and messengers, not systems.",
          },
        },
        { type: "h2", text: { ko: "AI 도입 전의 현실", en: "The reality before AI" } },
        {
          type: "pairs",
          items: [
            { title: { ko: "물류", en: "Logistics" }, text: { ko: "모니터 3개, 엑셀, 전화로 오더 확인. 누락 시 개인 책임.", en: "3 monitors, Excel, phone calls. Errors are personal liability." } },
            { title: { ko: "금융 HR", en: "Finance HR" }, text: { ko: "대상자 수기 식별, 메일 발송, 회신 추적, 누락 재확인.", en: "Manual identification, emailing, tracking, and re-checking." } },
            { title: { ko: "컨설팅", en: "Consulting" }, text: { ko: "흩어진 조건들을 머릿속에서 매칭. 담당자 바뀌면 맥락 단절.", en: "Mental matching of scattered conditions. Context lost when staff changes." } },
          ],
        },
        {
          type: "quote",
          text: {
            ko: "AI를 붙이기 전에, 이미 조직 내부에는 비효율과 책임 공백이 프로세스로 고착되어 있습니다.",
            en: "Before applying AI, inefficiency and responsibility gaps are already cemented into the process.",
          },
        },
        { type: "h2", text: { ko: "AI 시장의 3가지 층위와 실패하는 지점", en: "Three layers of the AI market, and where it fails" } },
        {
          type: "p",
          text: {
            ko: "AI 도입을 이야기하기 전에 시장을 세 층위로 나눠봅시다. 인프라, 모델, 그리고 운영입니다.",
            en: "Let's divide the AI market into three layers: Infrastructure, Model, and Operations.",
          },
        },
        {
          type: "pairs",
          items: [
            { title: { ko: "인프라", en: "Infrastructure" }, text: { ko: "컴퓨팅, 전력, 데이터센터. 투자가 몰리는 층입니다.", en: "Computing, power, data centres. Where the investment goes." } },
            { title: { ko: "파운데이션 모델", en: "Foundation model" }, text: { ko: "LLM, sLLM, 멀티모달. 경쟁이 가장 치열한 층입니다.", en: "LLM, sLLM, multimodal. Where the competition is fiercest." } },
            { title: { ko: "운영과 실무", en: "Operations" }, text: { ko: "기업이 실제 성과를 만들어내는 영역. 문제가 생기는 지점입니다.", en: "Where companies create actual value, and where it fails." } },
          ],
        },
        {
          type: "p",
          text: {
            ko: "대부분의 실패는 모델 성능이 아니라, 전사 운영관리 체계의 부재에서 옵니다. KPI, 데이터 정의, 책임 소재, 로그 체계가 없으면 AI는 혼란을 가중시키는 '짐'이 될 뿐입니다.",
            en: "Most failures come not from model performance, but from the lack of operational systems. Without KPIs, data definitions, and clear responsibilities, AI becomes just another burden.",
          },
        },
        { type: "h2", text: { ko: "현장에서 목격한 3가지 실패 패턴", en: "Three failure patterns from the field" } },
        {
          type: "pairs",
          items: [
            {
              title: { ko: "데이터가 흐르지 않는 조직", en: "Organizations where data doesn't flow" },
              text: {
                ko: "부서마다 데이터 기준이 다르고 엑셀로 관리됩니다. 이 상황에서 AI를 도입하면 '입력할 것만 늘어난 시스템' 취급을 받습니다. 모델보다 먼저 파이프라인과 단일 기준(Single Source of Truth)을 만들어야 합니다.",
                en: "Data standards vary by department and are managed in Excel. AI becomes 'just more data entry'. Build pipelines and a Single Source of Truth before models.",
              },
            },
            {
              title: { ko: "워크플로우와 통제 체계의 부재", en: "Lack of workflow and control systems" },
              text: {
                ko: "현장은 예외가 기본입니다. 100% 자동화는 불가능합니다. 사람이 개입해야 하는 승인/반려 경계와 감사(Audit) 로그를 먼저 설계해야 조직이 AI를 신뢰하고 받아들입니다.",
                en: "Exceptions are the norm. 100% automation is impossible. Design approval boundaries and audit logs first so the organization can trust and accept AI.",
              },
            },
            {
              title: { ko: "핵심 로직의 외주화", en: "Outsourcing core logic" },
              text: {
                ko: "외부 솔루션에 의존하면 운영 노하우가 내재화되지 않습니다. AI 시대의 경쟁력은 자사 도메인 데이터와 의사결정 로직의 축적에서 나옵니다. 핵심은 내부에서 통제 가능해야 합니다.",
                en: "Relying on external solutions prevents internalizing know-how. Competitiveness comes from accumulating domain data and decision logic. Core logic must be controllable internally.",
              },
            },
          ],
        },
        { type: "h2", text: { ko: "AX는 운영 체제 전환 프로젝트다", en: "AX is an operating system transition" } },
        {
          type: "p",
          text: {
            ko: "AX(AI Transformation)는 단순한 AI 도입 프로젝트가 아닙니다. 기업의 운영 체제(OS)를 업그레이드하는 프로젝트라고 부르는 게 더 적절합니다.",
            en: "AX (AI Transformation) is not just an AI adoption project. It's more appropriate to call it a corporate Operating System (OS) upgrade.",
          },
        },
        { type: "p", text: { ko: "모델을 고르기 전에 다음 질문들에 먼저 답해야 합니다:", en: "Before choosing a model, answer these questions first:" } },
        {
          type: "list",
          items: [
            { ko: "데이터가 어떤 기준으로 생성·변경·소멸되는가?", en: "How is data created, modified, and deleted?" },
            { ko: "업무 승인 권한과 예외 처리는 어디서 일어나는가?", en: "Where do approvals and exception handling occur?" },
            { ko: "실패 시 복구 루틴(Fallback)은 무엇인가?", en: "What is the fallback routine for failures?" },
          ],
        },
        {
          type: "quote",
          text: {
            ko: "이 순서를 지키면, 모델 성능이 완벽하지 않아도 운영은 굴러가고 성과는 누적됩니다.",
            en: "Follow this order, and operations will run and value will accumulate, even if the model isn't perfect.",
          },
        },
        {
          type: "p",
          text: {
            ko: "앞으로 이 블로그에서는 모델 성능보다, 실제 기업 현장에서 AI가 굴러가게 만드는 '조건'들을 다루려 합니다. 데이터 기준, 승인과 책임, 로그와 품질 관측 같은 진짜 운영 이야기들입니다.",
            en: "In this blog, I will focus on the 'conditions' that make AI work in the field, rather than model performance. Real operational stories about data standards, approvals, responsibility, and logging.",
          },
        },
      ],
    },
    {
      id: "software-sovereignty",
      cover: {
        src: "/archive/typewriter-keys-1921.jpg",
        alt: { ko: "오래된 타자기 자판을 가까이서 찍은 흑백 사진", en: "Close-up of old typewriter keys in black and white" },
        caption: { ko: "타자기 자판, 1921년", en: "Typewriter keys, 1921" },
      },
      title: { ko: "소프트웨어 주권과 운영의 현실", en: "Software sovereignty and operational reality" },
      summary: {
        ko: "가장 좋은 소프트웨어는 사용자가 주도권을 쥐는 소프트웨어입니다. 블랙박스가 되어서는 안 됩니다.",
        en: "The best software lets the user hold the reins. It must never be a black box.",
      },
      date: "2025.11.19",
      body: [
        {
          type: "p",
          text: {
            ko: "편리함에는 대가가 따릅니다. 많은 기업들이 운영의 효율을 위해 거대 SaaS 플랫폼에 자신의 비즈니스 프로세스를 맞춥니다. \"업계 표준이니까\", \"다들 쓰니까\"라는 이유로 말이죠.",
            en: "Convenience comes at a cost. Many companies align their business processes with massive SaaS platforms for operational efficiency. \"It's the industry standard,\" \"Everyone uses it.\"",
          },
        },
        { type: "h3", text: { ko: "차별화의 역설", en: "The paradox of differentiation" } },
        {
          type: "p",
          text: {
            ko: "남들과 똑같은 ERP, 똑같은 CRM을 쓰면서 어떻게 차별화된 가치를 만들 수 있을까요? 기업의 핵심 경쟁력은 남들과 '다른' 프로세스에서 나옵니다.",
            en: "How can you create differentiated value while using the same ERP and CRM as everyone else? Core competitiveness comes from processes that are 'different'.",
          },
        },
        { type: "h2", text: { ko: "블랙박스에 갇힌 비즈니스", en: "Business trapped in a black box" } },
        { type: "h3", text: { ko: "데이터 주권의 상실", en: "Loss of data sovereignty" } },
        {
          type: "list",
          items: [
            { ko: "내 고객 데이터가 플랫폼 안에 갇힘", en: "Customer data trapped in the platform" },
            { ko: "알고리즘의 결과를 설명할 수 없음", en: "Cannot explain algorithm results" },
            { ko: "'기능 지원 불가'라는 답변만 돌아옴", en: "Feature requests rejected" },
          ],
        },
        { type: "h2", text: { ko: "소프트웨어를 위한 운영인가, 운영을 위한 소프트웨어인가?", en: "Software for operations, or operations for software?" } },
        {
          type: "p",
          text: {
            ko: "소프트웨어가 운영을 지원해야지, 운영이 소프트웨어에 맞춰져서는 안 됩니다. 제가 'Forward Deployed Engineer'로서 현장을 중시하는 이유가 여기에 있습니다.",
            en: "Software should support operations; operations should not be tailored to software. This is why I, as a 'Forward Deployed Engineer', prioritize the field.",
          },
        },
        { type: "h3", text: { ko: "소프트웨어 주권", en: "Software sovereignty" } },
        {
          type: "p",
          text: {
            ko: "현장의 독특한 맥락, 그 기업만의 고유한 노하우를 소프트웨어에 녹여내야 합니다. 비록 투박하더라도, 우리만의 로직과 우리만의 데이터가 흐르는 '자주적인 소프트웨어'를 가져야 합니다.",
            en: "We must embed the unique context of the field and the company's proprietary know-how into the software. We must possess 'sovereign software' where our own logic and data flow.",
          },
        },
        {
          type: "list",
          items: [
            { ko: "투명한 로직", en: "Transparent logic" },
            { ko: "데이터 소유권", en: "Data ownership" },
            { ko: "맞춤 워크플로우", en: "Custom workflow" },
          ],
        },
        { type: "h2", text: { ko: "진정한 디지털 전환", en: "True digital transformation" } },
        {
          type: "p",
          text: {
            ko: "가장 좋은 소프트웨어는 사용자가 주도권을 쥐는 소프트웨어입니다. 블랙박스가 되어서는 안 됩니다. 당신의 비즈니스 로직을 소프트웨어에 직접 구현하세요.",
            en: "The best software lets the user hold the reins. It must never be a black box. Implement your business logic directly into the software.",
          },
        },
      ],
    },
  ] satisfies Insight[],
};
