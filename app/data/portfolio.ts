export type Language = 'ko' | 'en';

export const PORTFOLIO_DATA = {
  profile: {
    name: {
      ko: "이흥규",
      en: "Lee Heungkyu",
    },
    roles: {
      ko: ["AX 컨설턴트", "풀스택 개발자", "AI 에이전트 엔지니어"],
      en: ["AX Consultant", "Full Stack Developer", "AI Agent Engineer"],
    },
    bio: {
      ko: "비즈니스 문제를 정의하고, 기술로 끝까지 해결합니다.",
      en: "Redefining business problems and solving them with technology.",
    },
    contact: {
      email: "hklee@lifoli.co.kr",
      github: "https://github.com/heungkyulee",
      linkedin: "https://www.linkedin.com/in/heungkyu-lee-37b888264/",
    },
  },
  about: {
    intro: {
      ko: "현장의 복잡함을 데이터와 AI로 단순화합니다.",
      en: "Simplifying complexity with Data and AI.",
    },
    bento: [
      {
        type: "text",
        title: { ko: "풀스택 개발", en: "Full Stack" },
        content: {
          ko: "기획부터 배포까지, 혼자서 완주합니다.",
          en: "From planning to deployment, I handle it all.",
        },
        detailedContent: {
          ko: "Next.js, React, React Native, shadcn UI, PostgreSQL, Supabase 등을 활용해 기획 → 설계 → 개발 → 배포 → 운영까지 풀사이클을 혼자서 완주할 수 있는 개발자입니다.\n\n크라우드 펀딩 선물하기 앱 '티클', 외식업 점주용 CRM '단골쓰', 커머스 리뷰 분석 서비스 '코낼리', 장애인 길찾기 서비스 '우리 광주', ADHD 아동용 놀이 서비스 '파모 플레이 테라피', AI 일기 서비스 '위솜' 등은 모두 3~4개월 이내에 실제 서비스로 구현·런칭한 사례들입니다.\n\nB2C, B2B, 공공, 헬스케어까지 다양한 도메인에서 '실제 사용되는 서비스'를 만들어 왔습니다.",
          en: "Using Next.js, React, React Native, shadcn UI, PostgreSQL, Supabase, and more, I can complete the entire cycle from planning to deployment and operations independently.\n\nProjects like crowdfunding gifting app 'Tikkle', restaurant CRM 'Daangols', commerce review analysis 'Conaly', accessible navigation 'Our Gwangju', ADHD therapy 'Parmo Play Therapy', and AI diary 'Wesome' were all implemented and launched within 3-4 months.\n\nI've built 'actually used services' across diverse domains: B2C, B2B, public sector, and healthcare.",
        },
        tags: ["Next.js", "React Native", "Supabase"],
        colSpan: 2,
      },
      {
        type: "stat",
        title: { ko: "AI Top 100", en: "AI Top 100" },
        content: { ko: "Kakao 선정", en: "Selected by Kakao" },
        detailedContent: {
          ko: "카카오가 선정한 AI Top 100에 이름을 올린, 한국에서 AI 활용 역량을 공식적으로 인정받은 100명 중 한 명입니다.\n\n현재 성균관대학교 인공지능융합학과 학부생으로 재학 중이며, AI 이론과 실무를 결합한 프로젝트들을 진행하고 있습니다.\n\n단순히 AI를 '사용'하는 것을 넘어, 비즈니스 문제를 AI로 '해결'하는 데 집중합니다.",
          en: "Selected as one of the AI Top 100 by Kakao, officially recognized as one of the top 100 AI talents in Korea.\n\nCurrently an undergraduate student at Sungkyunkwan University's Department of AI Convergence, working on projects that combine AI theory with practical implementation.\n\nFocusing not just on 'using' AI, but on 'solving' business problems with AI.",
        },
        value: "Top 100",
        colSpan: 1,
      },
      {
        type: "text",
        title: { ko: "AI 에이전트", en: "AI Agent" },
        content: {
          ko: "단순 연동을 넘어, 업무를 대체하는 에이전트를 설계합니다.",
          en: "Designing agents that replace actual workflows.",
        },
        detailedContent: {
          ko: "단순히 LLM API를 연동하는 수준이 아니라, LangChain, LangGraph, n8n, OpenAI / Claude / Gemini 등의 모델을 조합해 실제로 업무 프로세스를 대체·보조하는 AI 에이전트를 설계합니다.\n\n운송 주선사를 위한 배차 오케스트레이팅 시스템 'Maestro TMS'와, 그 안에서 사람 대신 화물 배차 의사결정을 도와주는 AI 코파일럿 'OPUS AI'가 대표적인 예입니다.\n\nOPUS AI는 국내 주요 정보망 3사를 동시에 연동해 한 번의 요청으로 3개 네트워크에 배차를 생성·관리할 수 있고, AI Agent가 화주 메시지를 분석해 배차 생성/수정/취소 초안을 자동으로 생성합니다.",
          en: "Beyond simple LLM API integration, I design AI agents that replace and assist actual business processes by combining LangChain, LangGraph, n8n, and models like OpenAI, Claude, and Gemini.\n\nPrime examples are 'Maestro TMS', a dispatch orchestration system for freight forwarders, and 'OPUS AI', an AI copilot that assists with freight dispatch decision-making.\n\nOPUS AI integrates 3 major domestic freight networks simultaneously, enabling dispatch creation and management across all 3 networks with a single request. The AI agent analyzes shipper messages to automatically generate drafts for dispatch creation, modification, and cancellation.",
        },
        tags: ["LangChain", "n8n", "LLM Ops"],
        colSpan: 1,
      },
      {
        type: "text",
        title: { ko: "AX 컨설팅", en: "AX Consulting" },
        content: {
          ko: "돈이 새는 지점을 찾아 기술로 막습니다.",
          en: "Identifying and fixing revenue leaks with tech.",
        },
        detailedContent: {
          ko: "스스로를 '코드를 아는 컨설턴트'라고 생각합니다.\n\n단순히 화면을 만드는 것이 아니라, 고객의 현업 프로세스를 파고들어 '돈이 새는 지점'과 '사람이 가장 많이 소모되는 구간'을 먼저 정의합니다.\n\n그다음, 그 구간을 자동화·반자동화할 수 있는 구조를 제안하고, 직접 제품으로 구현합니다.\n\n현장의 복잡한 문제를 비즈니스 관점에서 재정의하고, 풀스택 개발과 AI를 섞어 실제로 돌아가는 제품으로 만드는 것이 저의 강점입니다.",
          en: "I consider myself a 'consultant who codes'.\n\nRather than simply building interfaces, I dive deep into client workflows to first identify 'revenue leak points' and 'high human-resource consumption zones'.\n\nThen, I propose structures for automation or semi-automation of those areas and implement them as actual products.\n\nMy strength lies in redefining complex field problems from a business perspective and turning them into working products using full-stack development and AI.",
        },
        tags: ["Optimization", "Automation", "Strategy"],
        colSpan: 2,
      },
      {
        type: "stat",
        title: { ko: "수상 이력", en: "Awards" },
        content: { ko: "장관상 및 국제대회", en: "Minister's Award & Global" },
        detailedContent: {
          ko: "• K-Startup Silicon Valley Dream Challenge 최종 선정 (2023)\n• Innovation Leaders Summit Tokyo 최종 선정 (2023)\n• U-300 창업 유망팀 300 - 교육부 장관 인증\n  - 2022 초기트랙 최종 선정\n  - 2024 도약트랙 최종 선정\n\n이 이력들은 '아이디어만 말하는 사람'이 아니라, 실제 시장에서 검증 가능한 수준까지 끌고 가는 사람이라는 것을 보여줍니다.",
          en: "• K-Startup Silicon Valley Dream Challenge Finalist (2023)\n• Innovation Leaders Summit Tokyo Finalist (2023)\n• U-300 Promising Startup Team 300 - Ministry of Education Certification\n  - 2022 Early Stage Track Finalist\n  - 2024 Growth Stage Track Finalist\n\nThese achievements demonstrate that I'm not just someone with ideas, but someone who takes them to market-validation level.",
        },
        value: "4+",
        colSpan: 1,
      },
      {
        type: "text",
        title: { ko: "네트워킹", en: "Networking" },
        content: {
          ko: "결과를 만드는 사람들과 깊게 교류합니다.",
          en: "Deep connections with result-oriented people.",
        },
        detailedContent: {
          ko: "예전에는 폭넓게 사람을 만나던 마당발형에 가까웠다면, 최근의 저는 확실히 소집자형에 가깝습니다.\n\n지금 가장 많이 교류하는 사람들은 40대 중반 물류·비즈니스 동업자 3명, 소프트웨어·AI 에이전트를 업으로 삼고 있는 20대 동료 3명 정도로, 서로의 일을 이해하고 깊이 피드백을 주고받는 코어 네트워크입니다.\n\n격주 단위로 만나 아이디어를 검증하고, 실제로 돌아가는 MVP를 계속 만들어내는 타입의 사람입니다.\n\n넓은 인맥이 아니라, '함께 일하면 진짜 결과가 나오는 사람들'과 깊게 엮이는 것을 중요하게 생각합니다.",
          en: "While I used to be more of a 'connector' meeting people broadly, I'm now definitely more of a 'convener'.\n\nMy closest network consists of about 3 logistics/business partners in their mid-40s and 3 software/AI agent professionals in their 20s—a core network that deeply understands each other's work and exchanges meaningful feedback.\n\nI meet with them bi-weekly to validate ideas and continuously build working MVPs.\n\nI value deep connections with 'people who produce real results when working together' over broad networks.",
        },
        tags: ["Co-founders", "Experts", "Builders"],
        colSpan: 2,
      },
    ],
  },
  process: [
    {
      step: "01",
      title: { ko: "Embed", en: "Embed" },
      description: {
        ko: "현장에 침투하여 진짜 문제를 발견합니다.\n책상이 아닌 현장에서 답을 찾습니다.",
        en: "We deploy to the field to discover the real problems.\nAnswers are found in the mud, not at the desk.",
      },
    },
    {
      step: "02",
      title: { ko: "Integrate", en: "Integrate" },
      description: {
        ko: "파편화된 데이터와 프로세스를\n하나의 진실된 뷰(Single Source of Truth)로 통합합니다.",
        en: "Unifying fragmented data and processes\ninto a Single Source of Truth.",
      },
    },
    {
      step: "03",
      title: { ko: "Augment", en: "Augment" },
      description: {
        ko: "AI와 자동화로 인간의 판단력을 증강시킵니다.\n대체가 아닌 공생을 지향합니다.",
        en: "Augmenting human judgment with AI.\nWe aim for symbiosis, not replacement.",
      },
    },
    {
      step: "04",
      title: { ko: "Operate", en: "Operate" },
      description: {
        ko: "실제 운영 환경에서 지속 가능한 임팩트를 만듭니다.\n끝까지 책임집니다.",
        en: "Creating sustainable impact in live operations.\nWe own the outcome.",
      },
    },
  ],
  insights: [
    {
      id: "inefficiency-not-data",
      title: { ko: "현장의 비효율은 데이터의 부재가 아니다", en: "Inefficiency is not a lack of data" },
      summary: {
        ko: "데이터는 이미 넘쳐납니다. 문제는 '연결'의 부재입니다. 사일로에 갇힌 데이터를 해방시킬 때 혁신이 시작됩니다.",
        en: "Data is abundant. The problem is the lack of connection. Innovation begins when we liberate data from silos.",
      },
      date: "2025.11.19",
      content: {
        ko: `
          <p>많은 기업들이 "데이터가 부족해서" 혁신을 못한다고 말합니다. 그래서 비싼 돈을 들여 데이터 레이크를 구축하고, 최신 대시보드 툴을 도입하죠. 하지만 현장에 가보면 어떤가요?</p>
          
          <p>현장 작업자들은 여전히 엑셀 파일을 서로 메일로 주고받고, 화이트보드에 매직으로 오늘의 할 일을 적고 있습니다. 데이터 레이크에 쌓인 그 방대한 데이터는 현장의 의사결정에 전혀 영향을 미치지 못하고 있는 겁니다.</p>

          <h3>실제 사례: 물류 회사의 데이터 패러독스</h3>
          
          <p>작년에 만난 한 물류 회사가 있었습니다. 하루 2만 건의 배송을 처리하는데, "배차 효율을 높이려면 더 많은 데이터가 필요하다"며 IoT 센서 도입을 검토 중이었죠.</p>

          <p>문제는, 이미 그 회사에는 엄청난 데이터가 있었다는 겁니다. 화물 정보망 3곳에서 실시간으로 차량 위치 데이터가 들어오고, ERP에는 과거 3년치 배송 기록이 쌓여 있었어요. 하지만 배차 담당자는 여전히 3개의 탭을 번갈아 보며 수기로 메모를 작성하고 있었습니다.</p>

          <p>왜일까요? 데이터가 부서 간, 시스템 간에 갇혀서 흐르지 않았기 때문입니다.</p>

          <h3>문제는 '양'이 아니라 '흐름'입니다</h3>
          
          <p>진정한 비효율은 데이터가 없어서가 아니라, <strong>필요한 데이터가 필요한 사람에게 제때 도달하지 못해서</strong> 발생합니다.</p>

          <p>물류 창고의 재고 데이터가 영업팀의 태블릿에 실시간으로 뜨지 않는다면, 영업팀은 재고가 없는 물건을 팔아버리는 실수를 하게 됩니다. 이건 데이터 저장 용량의 문제가 아닙니다. <strong>데이터 파이프라인과 인터페이스의 문제</strong>입니다.</p>

          <p>제가 진단한 대부분의 기업에서 발견한 공통점은 이겁니다:</p>
          <ul>
            <li>영업팀은 엑셀로 고객 관리</li>
            <li>물류팀은 화물 정보망 사이트를 직접 조회</li>
            <li>정산팀은 또 다른 ERP 시스템에서 수작업 대조</li>
          </ul>

          <p>같은 회사인데도 각 부서는 마치 다른 행성에 살고 있는 것처럼 단절되어 있었습니다.</p>

          <h3>사일로(Silo)를 부수는 것이 AX의 시작</h3>
          
          <p>제가 현장에 들어가서 가장 먼저 하는 일은 새로운 AI 모델을 돌리는 게 아닙니다. <strong>부서 간의 단절된 데이터 흐름을 잇는 것</strong>입니다.</p>

          <p>앞서 말한 물류 회사에서는 단순한 작업을 했습니다. 화물 정보망 3곳의 API를 연동해서, 배차 담당자가 하나의 화면에서 모든 차량 정보를 볼 수 있게 했죠. 그리고 그 데이터를 정산팀이 쓰는 시스템과 연결했습니다.</p>

          <p>결과? 배차 업무 시간이 50% 줄었습니다. 새로운 알고리즘을 개발한 것도, 고가의 BI 툴을 도입한 것도 아닙니다. 그저 <strong>이미 있던 데이터를 흐르게 만든 것</strong>뿐입니다.</p>

          <h3>AI는 그 다음입니다</h3>
          
          <p>데이터가 흐르기 시작하면, 그때부터 AI는 진짜 가치를 발휘합니다.</p>

          <p>사일로가 부서진 물류 회사에서는 이제 과거 배송 데이터와 실시간 차량 위치를 결합해서 "최적 배차 경로"를 AI가 추천할 수 있게 되었습니다. 고인 물 위에서는 어떤 배도 띄울 수 없지만, 데이터가 흐르는 순간 AI라는 배는 빠르게 움직일 수 있게 됩니다.</p>

          <h3>당신의 회사는 어떤가요?</h3>
          
          <p>혹시 지금 "데이터가 부족하다"고 느끼고 계신가요? 한번 점검해보세요:</p>
          <ul>
            <li>부서 간 데이터를 수작업으로 옮기고 있지는 않나요?</li>
            <li>같은 정보를 여러 시스템에 중복 입력하고 있지는 않나요?</li>
            <li>의사결정을 위해 "데이터를 찾는 시간"이 너무 길지는 않나요?</li>
          </ul>

          <p>만약 하나라도 해당된다면, 문제는 데이터의 양이 아닙니다. <strong>데이터의 흐름</strong>입니다.</p>

          <p>더 많은 데이터를 모으기 전에, 이미 있는 데이터부터 제대로 연결하세요. 혁신은 거기서 시작됩니다.</p>
        `,
        en: `
          <p>Many companies claim they can't innovate because they "lack data." So they spend fortunes building data lakes and adopting the latest dashboard tools. But what happens when you go to the actual field?</p>
          
          <p>Field workers are still emailing Excel files back and forth and writing today's tasks on whiteboards with markers. That massive amount of data sitting in the data lake is having absolutely no impact on field decision-making.</p>

          <h3>Real Case: A Logistics Company's Data Paradox</h3>
          
          <p>Last year, I met a logistics company processing 20,000 deliveries per day. They were considering IoT sensors, believing "We need more data to improve dispatch efficiency."</p>

          <p>The problem? They already had massive data. Real-time vehicle location data was streaming in from 3 freight networks, and their ERP held 3 years of delivery history. Yet dispatchers were still manually switching between 3 tabs, taking notes by hand.</p>

          <p>Why? Because the data was trapped—siloed between departments and systems with no flow.</p>

          <h3>The problem isn't 'Volume', it's 'Flow'</h3>
          
          <p>True inefficiency stems not from a lack of data, but from <strong>the failure of necessary data to reach the right person at the right time</strong>.</p>

          <p>If warehouse inventory data doesn't appear in real-time on the sales team's tablet, they'll sell out-of-stock items. This isn't a storage capacity issue—it's a <strong>data pipeline and interface issue</strong>.</p>

          <p>The common pattern I've found in most companies I've diagnosed:</p>
          <ul>
            <li>Sales team manages customers in Excel</li>
            <li>Logistics team manually checks freight network sites</li>
            <li>Finance team cross-references data in yet another ERP system</li>
          </ul>

          <p>Same company, but each department operates like they're on different planets.</p>

          <h3>Breaking Silos is the start of AX</h3>
          
          <p>The first thing I do when entering the field isn't running a new AI model. It's <strong>connecting the severed data flows between departments</strong>.</p>

          <p>For that logistics company, we did something simple: integrated APIs from 3 freight networks so dispatchers could see all vehicle info on one screen. Then connected that data to the finance team's system.</p>

          <p>Result? Dispatch time dropped 50%. We didn't develop new algorithms or buy expensive BI tools. We just <strong>made existing data flow</strong>.</p>

          <h3>AI comes next</h3>
          
          <p>Once data starts flowing, AI can deliver real value.</p>

          <p>With silos broken, the logistics company can now combine historical delivery data with real-time vehicle locations for AI-recommended optimal routes. You can't sail a ship on stagnant water, but once data flows, the AI ship moves fast.</p>

          <h3>How about your company?</h3>
          
          <p>Do you feel you "lack data"? Check this:</p>
          <ul>
            <li>Are you manually moving data between departments?</li>
            <li>Are you entering the same info into multiple systems?</li>
            <li>Does "finding data" for decisions take too long?</li>
          </ul>

          <p>If any apply, the problem isn't data quantity—it's <strong>data flow</strong>.</p>

          <p>Before collecting more data, properly connect what you already have. Innovation starts there.</p>
        `
      }
    },
    {
      id: "ai-agents-colleagues",
      title: { ko: "AI 에이전트: 도구를 넘어선 동료", en: "AI Agents: Beyond Tools, Towards Colleagues" },
      summary: {
        ko: "단순한 챗봇이 아닙니다. 스스로 계획하고, 도구를 사용하고, 결과를 보고하는 '디지털 동료'를 설계해야 합니다.",
        en: "Not just chatbots. We must design 'digital colleagues' that plan, use tools, and report results.",
      },
      date: "2025.11.19",
      content: {
        ko: `
          <p>우리는 지금까지 소프트웨어를 '도구(Tool)'로만 사용해왔습니다. 엑셀은 계산을 위한 도구이고, 슬랙은 대화를 위한 도구죠. 도구의 특징은 명확합니다. <strong>인간이 명령하지 않으면 아무것도 하지 않는다</strong>는 것입니다.</p>
          
          <p>하지만 LLM(거대언어모델)의 등장으로 소프트웨어의 정의가 바뀌고 있습니다. 이제 소프트웨어는 '에이전트(Agent)', 즉 대리인이 될 수 있습니다.</p>

          <h3>명령(Command)에서 위임(Delegation)으로</h3>
          
          <p>챗봇에게 "이 문장 번역해줘"라고 시키는 건 명령입니다. 즉각적이고, 단순하고, 일회성입니다.</p>

          <p>하지만 에이전트에게는 이렇게 말할 수 있습니다: <strong>"이번 주 해외 물류 동향 보고서 작성해서 월요일 아침까지 내 책상에 올려놔"</strong></p>

          <p>이 에이전트는 스스로:</p>
          <ul>
            <li><strong>Planning</strong>: 어떤 정보가 필요한지 계획을 세웁니다</li>
            <li><strong>Reasoning</strong>: 웹을 검색하고 주요 기사를 요약합니다</li>
            <li><strong>Tool Use</strong>: 번역 툴을 사용하고, 데이터를 시각화합니다</li>
            <li><strong>Action</strong>: 보고서 양식에 맞춰 문서를 생성합니다</li>
          </ul>

          <p>중간에 막히면? 인간에게 질문도 합니다. "2023년 EU 물류 규제 변경 사항 중 어떤 부분을 중점적으로 다룰까요?"</p>

          <h3>실제 사례: OPUS AI의 배차 자동화</h3>

          <p>제가 개발한 OPUS AI는 바로 이런 에이전트 개념을 물류 현장에 적용한 케이스입니다.</p>

          <p>기존에는 배차 담당자가 화주(화물을 보내는 사람)로부터 카카오톡 메시지를 받으면:</p>
          <ol>
            <li>메시지를 읽고 화물 정보를 파악</li>
            <li>화물 정보망에서 적합한 차량 검색</li>
            <li>차주(차량 소유자)에게 연락해서 가격 협상</li>
            <li>확정되면 배차 시스템에 수기 입력</li>
          </ol>

          <p>이 과정이 한 건당 평균 15분 걸렸습니다. 하루 100건이면 25시간 분량의 작업이죠.</p>

          <p>OPUS AI 에이전트는 이렇게 작동합니다:</p>

          <p><strong>1단계 - 메시지 분석:</strong> 카카오톡 메시지를 읽고 "출발지: 서울 강남, 도착지: 부산 해운대, 화물: 가전제품 5톤, 희망일: 내일"을 자동 추출</p>

          <p><strong>2단계 - 최적 차량 탐색:</strong> 화물 정보망 API를 호출해서 조건에 맞는 차량 10대를 찾고, 과거 배송 이력을 기반으로 신뢰도 순위 매김</p>

          <p><strong>3단계 - 배차 초안 생성:</strong> "부산행 가전 5톤, 내일 오전 픽업 가능한 차량 3대 후보입니다. 예상 운임: 50만원"이라는 요약을 만들어 담당자에게 제시</p>

          <p><strong>결과?</strong> 단순 문의 응대율 80% 자동화. 배차 담당자는 이제 복잡한 케이스에만 집중할 수 있습니다.</p>

          <h3>디지털 동료를 채용하는 시대</h3>
          
          <p>저는 이제 개발자가 아니라 <strong>'인사 담당자'</strong>가 된 기분으로 코딩을 합니다.</p>

          <p>OPUS AI를 설계할 때 고민한 것들:</p>
          <ul>
            <li><strong>성격</strong>: 이 에이전트는 보수적일까, 적극적일까? → 물류는 신뢰가 중요하니 "보수적이되 명확한" 톤으로 설정</li>
            <li><strong>권한</strong>: 어디까지 스스로 결정할 수 있을까? → 50만원 이하 배차는 자동 추천, 그 이상은 인간 승인 필요</li>
            <li><strong>피드백</strong>: 실수하면 어떻게 학습시킬까? → 담당자가 "이건 아니야"라고 하면 그 패턴을 기록하고 다음에 반영</li>
          </ul>

          <p>이건 마치 신입사원을 교육하는 과정과 똑같습니다. 차이점은 이 "신입사원"이 24시간 일하고, 피곤해하지 않고, 배운 것을 절대 잊어버리지 않는다는 것뿐입니다.</p>

          <h3>에이전트 시대의 핵심 질문</h3>

          <p>앞으로 기업의 경쟁력은 <strong>"얼마나 좋은 SaaS를 쓰느냐"</strong>가 아니라, <strong>"얼마나 유능한 디지털 동료들을 보유하고 있느냐"</strong>로 결정될 것입니다.</p>

          <p>생각해보세요:</p>
          <ul>
            <li>당신의 팀에서 반복적으로 하는 일이 무엇인가요?</li>
            <li>그 일을 "위임"할 수 있다면 어떻게 설명하시겠어요?</li>
            <li>에이전트가 그 일을 하려면 어떤 "권한"과 "도구"가 필요할까요?</li>
          </ul>

          <p>이 질문들에 답할 수 있다면, 당신은 이미 에이전트 시대의 준비를 시작한 겁니다.</p>

          <p><strong>당신의 팀에는 몇 명의 디지털 동료가 있나요?</strong></p>
        `,
        en: `
          <p>Until now, we have used software strictly as 'Tools'. Excel is a tool for calculation, Slack is a tool for communication. The characteristic of a tool is clear: <strong>it does nothing unless a human commands it</strong>.</p>
          
          <p>However, with the advent of LLMs (Large Language Models), the definition of software is changing. Software can now become an 'Agent'.</p>

          <h3>From Command to Delegation</h3>
          
          <p>Asking a chatbot to "translate this sentence" is a command. It's immediate, simple, one-off.</p>

          <p>But you can delegate to an agent: <strong>"Draft a report on global logistics trends for this week and have it on my desk by Monday morning."</strong></p>

          <p>This agent autonomously:</p>
          <ul>
            <li><strong>Planning</strong>: Determines what information is needed</li>
            <li><strong>Reasoning</strong>: Searches the web and summarizes key articles</li>
            <li><strong>Tool Use</strong>: Uses translation tools and visualizes data</li>
            <li><strong>Action</strong>: Generates a document in the report format</li>
          </ul>

          <p>Gets stuck? It asks humans questions. "Which aspects of the 2023 EU logistics regulatory changes should I focus on?"</p>

          <h3>Real Case: OPUS AI's Dispatch Automation</h3>

          <p>OPUS AI, which I developed, is a case study of applying this agent concept to logistics operations.</p>

          <p>Previously, when a dispatcher received a KakaoTalk message from a shipper, they had to:</p>
          <ol>
            <li>Read the message and understand freight details</li>
            <li>Search freight networks for suitable vehicles</li>
            <li>Contact vehicle owners for price negotiation</li>
            <li>Manually enter confirmed dispatch into the system</li>
          </ol>

          <p>This took an average of 15 minutes per case. 100 cases per day = 25 hours of work.</p>

          <p>OPUS AI agent works like this:</p>

          <p><strong>Step 1 - Message Analysis:</strong> Reads KakaoTalk messages and auto-extracts "Origin: Seoul Gangnam, Destination: Busan Haeundae, Cargo: Appliances 5 tons, Preferred date: Tomorrow"</p>

          <p><strong>Step 2 - Optimal Vehicle Search:</strong> Calls freight network APIs to find 10 matching vehicles, ranks them by reliability based on past delivery history</p>

          <p><strong>Step 3 - Draft Generation:</strong> Creates a summary: "3 vehicle candidates for 5-ton appliances to Busan, pickup available tomorrow morning. Estimated freight: 500,000 KRW" for the dispatcher</p>

          <p><strong>Result?</strong> 80% automation of simple inquiries. Dispatchers now focus only on complex cases.</p>

          <h3>The Era of Hiring Digital Colleagues</h3>
          
          <p>I now code feeling less like a developer and more like an <strong>'HR Manager'</strong>.</p>

          <p>Design considerations for OPUS AI:</p>
          <ul>
            <li><strong>Personality</strong>: Conservative or proactive? → Chose "conservative but clear" tone for trust-critical logistics</li>
            <li><strong>Authority</strong>: How much autonomy? → Auto-recommend for <500K KRW dispatches, require human approval above</li>
            <li><strong>Feedback</strong>: How to learn from mistakes? → Record when dispatcher says "not this" and apply pattern next time</li>
          </ul>

          <p>It's exactly like training a new employee. The difference? This "new hire" works 24/7, never gets tired, and never forgets what it learned.</p>

          <h3>Key Questions for the Agent Era</h3>

          <p>Future competitiveness won't be decided by <strong>"what SaaS you use"</strong>, but by <strong>"how many competent digital colleagues you possess"</strong>.</p>

          <p>Consider:</p>
          <ul>
            <li>What repetitive tasks does your team do?</li>
            <li>If you could "delegate" that work, how would you describe it?</li>
            <li>What "permissions" and "tools" would an agent need to do that work?</li>
          </ul>

          <p>If you can answer these, you've already started preparing for the agent era.</p>

          <p><strong>How many digital colleagues are on your team?</strong></p>
        `
      }
    },
    {
      id: "software-sovereignty",
      title: { ko: "소프트웨어 주권과 운영의 현실", en: "Software Sovereignty and Operational Reality" },
      summary: {
        ko: "가장 좋은 소프트웨어는 사용자가 주도권을 쥐는 소프트웨어입니다. 블랙박스가 되어서는 안 됩니다.",
        en: "The best software empowers the user to hold the reins. It must never be a black box.",
      },
      date: "2025.11.19",
      content: {
        ko: `
          <p>편리함에는 대가가 따릅니다. 많은 기업들이 운영의 효율을 위해 거대 SaaS 플랫폼에 자신의 비즈니스 프로세스를 맞춥니다. "업계 표준이니까", "다들 쓰니까"라는 이유로 말이죠.</p>
          <p>하지만 기업의 핵심 경쟁력은 남들과 '다른' 프로세스에서 나옵니다. 남들과 똑같은 ERP, 똑같은 CRM을 쓰면서 어떻게 차별화된 가치를 만들 수 있을까요?</p>
          <h3>블랙박스에 갇힌 비즈니스</h3>
          <p>더 큰 문제는 데이터 주권입니다. 플랫폼에 종속되는 순간, 내 고객의 데이터와 내 비즈니스의 로직은 블랙박스 안에 갇힙니다. 알고리즘이 왜 이런 결과를 냈는지 알 수 없고, 프로세스를 조금만 바꾸고 싶어도 "기능 지원이 안 됩니다"라는 답변만 돌아옵니다.</p>
          <h3>운영을 위한 소프트웨어, 소프트웨어를 위한 운영?</h3>
          <p>소프트웨어가 운영을 지원해야지, 운영이 소프트웨어에 맞춰져서는 안 됩니다. 제가 'Forward Deployed Engineer'로서 현장을 중시하는 이유가 여기에 있습니다.</p>
          <p>현장의 독특한 맥락, 그 기업만의 고유한 노하우를 소프트웨어에 녹여내야 합니다. 비록 투박하더라도, 우리만의 로직과 우리만의 데이터가 흐르는 '자주적인 소프트웨어'를 가져야 합니다. 그것이 진정한 디지털 전환의 완성입니다.</p>
        `,
        en: `
          <p>Convenience comes at a cost. Many companies align their business processes with massive SaaS platforms for the sake of operational efficiency. "It's the industry standard," or "Everyone uses it," they say.</p>
          <p>But a company's core competitiveness comes from processes that are 'different' from others. How can you create differentiated value while using the same ERP and CRM as everyone else?</p>
          <h3>Business Trapped in a Black Box</h3>
          <p>The bigger issue is data sovereignty. The moment you become dependent on a platform, your customer data and business logic are trapped inside a black box. You can't know why the algorithm produced a certain result, and if you want to tweak the process slightly, you're told, "That feature is not supported."</p>
          <h3>Software for Operations, or Operations for Software?</h3>
          <p>Software should support operations; operations should not be tailored to software. This is why I, as a 'Forward Deployed Engineer', prioritize the field.</p>
          <p>We must embed the unique context of the field and the company's proprietary know-how into the software. Even if it's rough around the edges, we must possess 'sovereign software' where our own logic and data flow. That is the completion of true digital transformation.</p>
        `
      }
    },
  ],
  testimonials: [
    {
      name: { ko: "이강훈", en: "Kanghoon Lee" },
      role: { ko: "운송 주선업 CEO", en: "CEO, Logistics Startup" },
      quote: {
        ko: "흥규님은 개발자가 아닙니다.\n비즈니스의 막힌 혈을 뚫어주는 파트너입니다.",
        en: "He is not just a developer. He is a partner who unblocks the critical arteries of our business.",
      },
    },
    {
      name: { ko: "송락현", en: "Rakhyun Song" },
      role: { ko: "시니어 PM", en: "Senior PM" },
      quote: {
        ko: "우리가 놓치고 있던 '현장의 디테일'을 가장 먼저 발견하고 해결책을 가져왔습니다.",
        en: "He was the first to discover the 'field details' we missed and brought the solution.",
      },
    },
  ],
  experience: [
    {
      period: "2025 - Present",
      role: { ko: "CTO", en: "CTO" },
      company: { ko: "주식회사 한국물류데이터", en: "Korean Logistics Data Corp." },
      description: {
        ko: "국내 물류 현장의 비효율을 줄이는 AX 솔루션 총괄. Maestro TMS 및 OPUS AI 개발 주도.",
        en: "Leading AX solutions to reduce inefficiencies in domestic logistics. Spearheaded Maestro TMS and OPUS AI development.",
      },
    },
    {
      period: "2025",
      role: { ko: "AI Top 100", en: "AI Top 100" },
      company: { ko: "Kakao", en: "Kakao" },
      description: {
        ko: "한국에서 AI 활용 역량을 공식적으로 인정받은 100인 선정.",
        en: "Selected as one of the top 100 AI talents in Korea by Kakao.",
      },
    },
    {
      period: "2022 - Present",
      role: { ko: "Founder", en: "Founder" },
      company: { ko: "주식회사 라이폴리", en: "LiFoli Corp." },
      description: {
        ko: "실무에 바로 적용 가능한 AX 솔루션 설계 및 구현. 다양한 B2B/B2C 서비스 런칭.",
        en: "Designing and implementing practical AX solutions. Launched various B2B/B2C services.",
      },
    },
    {
      period: "Education",
      role: { ko: "인공지능융합학과", en: "Dept. of AI Convergence" },
      company: { ko: "성균관대학교", en: "Sungkyunkwan University" },
      description: {
        ko: "학부 재학 중",
        en: "Undergraduate Student",
      },
    },
  ],
  techStack: {
    frontend: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Python", "PostgreSQL", "Supabase", "FastAPI"],
    ai: ["LangChain", "LangGraph", "OpenAI API", "Claude API", "n8n", "RAG"],
    tools: ["Git", "Docker", "Vercel", "Figma", "Notion"],
  },
  projects: [
    {
      id: "maestro-tms",
      title: { ko: "Maestro TMS", en: "Maestro TMS" },
      description: {
        ko: "운송 주선사를 위한 배차 오케스트레이팅 SaaS",
        en: "Dispatch orchestration SaaS for logistics brokers",
      },
      problem: {
        ko: "국내 화물 정보망이 화물맨, 운송365, 트럭온 등 3곳으로 분산되어 있어, 배차 직원이 3개 탭을 오가며 수기로 정보를 복사-붙여넣기 해야 했습니다. 하루 평균 100건의 배차를 처리하는데, 한 건당 15분씩 총 25시간 분량의 반복 작업이 발생했습니다. 게다가 수기 입력 과정에서 오타, 중복 입력, 누락 등의 휴먼 에러가 빈번하게 발생했고, 이는 고객 불만과 정산 오류로 이어졌습니다.",
        en: "Domestic freight networks were fragmented across three platforms (Hwamulman, Unsong365, Truckon). Dispatchers had to manually copy-paste information across 3 browser tabs. Processing an average of 100 dispatches per day at 15 minutes each meant 25 hours of repetitive work. Manual entry led to frequent human errors—typos, duplicate entries, omissions—resulting in customer complaints and settlement errors.",
      },
      solution: {
        ko: "주요 정보망 3사의 API를 직접 연동하여, 하나의 대시보드에서 모든 차량 정보를 실시간으로 조회할 수 있는 통합 SaaS를 구축했습니다. Next.js 기반의 반응형 웹앱으로 개발하여 PC와 태블릿 모두에서 사용 가능하도록 했고, Supabase를 활용해 실시간 데이터 동기화와 협업 기능을 구현했습니다. 배차 생성부터 운송 추적, 정산까지 전 과정을 하나의 플랫폼에서 처리할 수 있도록 엔드투엔드 워크플로우를 설계했습니다.",
        en: "Built a unified SaaS integrating APIs from all 3 major freight networks, enabling real-time vehicle info queries from a single dashboard. Developed as a Next.js responsive web app for use on both PC and tablets. Implemented real-time data sync and collaboration features using Supabase. Designed an end-to-end workflow from dispatch creation through shipment tracking to settlement—all on one platform.",
      },
      impact: {
        ko: "배차 업무 시간 50% 단축 (건당 15분 → 7분), 수기 입력 오류 제로화, 정산 프로세스 자동화로 월 120시간의 정산 업무 절감. 실시간 배차 현황 모니터링으로 고객 응대 속도 3배 향상. 현재 국내 5개 운송 주선사에서 사용 중이며, 월간 처리 배차 건수 15,000건 달성.",
        en: "Reduced dispatch time by 50% (15 min → 7 min per case). Eliminated manual entry errors. Automated settlement process, saving 120 hours monthly. Real-time dispatch monitoring improved customer response speed by 3x. Currently used by 5 domestic logistics brokers, processing 15,000 monthly dispatches.",
      },
      techStack: ["Next.js", "Supabase", "API Integration", "Real-time Sync"],
      category: "B2B SaaS",
    },
    {
      id: "opus-ai",
      title: { ko: "OPUS AI", en: "OPUS AI" },
      description: {
        ko: "배차 업무 자동화 AI 코파일럿",
        en: "AI Copilot for automated dispatching",
      },
      problem: {
        ko: "Maestro TMS가 해결한 '시스템 통합' 문제 이후에도, 화주와 차주 간의 단순 반복적인 커뮤니케이션이 업무의 60%를 차지하고 있었습니다. '어디 계세요?', '가격 얼마인가요?', '픽업 가능한가요?' 같은 질문에 일일이 답변하는 데 하루 3-4시간이 소요됐고, 담당자가 자리를 비우면 고객 응대가 지연되어 기회 손실이 발생했습니다. 특히 야간이나 주말에는 긴급 배차 요청에 대응하기 어려웠습니다.",
        en: "Even after Maestro TMS solved the 'system integration' problem, simple repetitive communication between shippers and carriers still consumed 60% of work time. Answering questions like 'Where are you?', 'What's the price?', 'Available for pickup?' took 3-4 hours daily. When dispatchers were away, delayed customer responses led to lost opportunities. Emergency dispatch requests during nights/weekends were especially difficult to handle.",
      },
      solution: {
        ko: "LangChain과 GPT-4를 활용한 AI 에이전트를 설계했습니다. 카카오톡 메시지를 실시간으로 분석하여 의도를 파악하고, Maestro TMS의 데이터베이스와 화물 정보망 API를 자동으로 조회합니다. 단순 문의(위치, 가격, 가능 여부)는 즉시 자동 응답하고, 복잡한 배차 요청은 초안을 생성하여 담당자에게 전달합니다. 에이전트는 과거 대화 히스토리를 학습하여 각 고객에게 맞춤형 응답을 제공하며, 담당자의 피드백을 통해 지속적으로 개선됩니다.",
        en: "Designed an AI agent using LangChain and GPT-4. Analyzes KakaoTalk messages in real-time to understand intent, then automatically queries Maestro TMS database and freight network APIs. Simple inquiries (location, price, availability) get instant auto-responses; complex dispatch requests generate drafts for dispatcher review. The agent learns from conversation history to provide personalized responses and continuously improves through dispatcher feedback.",
      },
      impact: {
        ko: "단순 문의 응대율 80% 자동화로 담당자의 일일 업무 시간 3시간 절감. 야간/주말 긴급 배차 응대율 100% 달성. 평균 응답 시간 30분 → 2분으로 단축. 고객 만족도 40% 상승. AI 에이전트의 자동 응답 정확도 95% 달성. 현재 일 평균 200건의 문의를 처리하며, 월 6,000건 이상의 대화를 자동화하고 있습니다.",
        en: "80% automation of simple inquiries saved dispatchers 3 hours daily. 100% response rate for emergency dispatches during nights/weekends. Average response time dropped from 30 min to 2 min. Customer satisfaction increased 40%. AI agent achieved 95% accuracy in auto-responses. Currently processes 200 daily inquiries, automating 6,000+ monthly conversations.",
      },
      techStack: ["LangChain", "GPT-4", "AI Agent", "NLP", "Auto-response"],
      category: "AI Agent",
    },
    {
      id: "tikkle",
      title: { ko: "tikkle", en: "tikkle" },
      description: {
        ko: "크라우드 펀딩 방식 선물하기 앱",
        en: "Crowdfunding-based gifting app",
      },
      problem: {
        ko: "비싼 선물을 주고 싶지만 혼자 부담하기엔 가격 장벽이 존재함.",
        en: "Price barriers made it difficult for individuals to give expensive gifts.",
      },
      solution: {
        ko: "여러 친구가 돈을 모아 선물할 수 있는 크라우드 펀딩 기능과 에스크로 결제 시스템 구현.",
        en: "Implemented crowdfunding features and escrow payments for group gifting.",
      },
      impact: {
        ko: "4개월 만에 안드로이드/iOS 앱 런칭.",
        en: "Launched Android/iOS apps within 4 months.",
      },
      techStack: ["React Native", "Payment", "Mobile"],
      category: "Mobile App",
    },
    {
      id: "daangols",
      title: { ko: "daangols", en: "daangols" },
      description: {
        ko: "외식업 점주용 CRM 솔루션",
        en: "CRM solution for restaurant owners",
      },
      problem: {
        ko: "소규모 식당은 체계적인 단골 관리와 마케팅 도구가 부재함.",
        en: "Small restaurants lacked systematic tools for regular customer management.",
      },
      solution: {
        ko: "방문 기록 기반 스탬프 적립 앱과 점주용 CRM 대시보드(알림톡 발송 등) 제공.",
        en: "Provided a stamp app for visits and a CRM dashboard for owners (AlimTalk integration).",
      },
      impact: {
        ko: "재방문 유도 캠페인 실행 용이성 증대.",
        en: "Simplified execution of revisit campaigns.",
      },
      techStack: ["Web App", "Dashboard", "B2B"],
      category: "B2B Solution",
    },
    {
      id: "conaly",
      title: { ko: "Conaly", en: "Conaly" },
      description: {
        ko: "커머스 리뷰 분석 AI 솔루션",
        en: "E-commerce review analysis AI",
      },
      problem: {
        ko: "수천 개의 리뷰를 일일이 읽고 분석하여 인사이트를 도출하기 어려움.",
        en: "Difficult to manually analyze thousands of reviews for insights.",
      },
      solution: {
        ko: "리뷰 데이터를 크롤링하고 NLP로 감정/키워드를 분석하여 시각화된 리포트 제공.",
        en: "Crawled review data and used NLP to analyze sentiment/keywords, providing visualized reports.",
      },
      impact: {
        ko: "마케팅 소구 포인트 발굴 시간 단축.",
        en: "Reduced time to identify marketing selling points.",
      },
      techStack: ["NLP", "Analytics", "React"],
      category: "Data Analytics",
    },
    {
      id: "wesome",
      title: { ko: "wesome", en: "wesome" },
      description: {
        ko: "AI 캐릭터 감정 케어 일기",
        en: "AI character emotional care diary",
      },
      problem: {
        ko: "기존 일기 앱은 단순 기록에 그쳐 정서적 교감이 부족함.",
        en: "Existing diary apps lacked emotional connection, serving only as records.",
      },
      solution: {
        ko: "일기 내용에 따라 AI 캐릭터가 위로와 공감의 답장을 써주는 힐링 서비스 구현.",
        en: "Implemented a healing service where AI characters reply with empathy based on diary entries.",
      },
      impact: {
        ko: "사용자 리텐션 및 감정 케어 효과 확인.",
        en: "Verified user retention and emotional care effects.",
      },
      techStack: ["GenAI", "Mobile Web", "Healing"],
      category: "AI Service",
    },
  ],
};
