export type Language = 'ko' | 'en';

export const PORTFOLIO_DATA = {
  profile: {
    name: {
      ko: "LEE HEUNGKYU",
      en: "LEE HEUNGKYU",
    },
    roles: {
      ko: ["AX Consultant", "Full Stack Developer", "AI Agent Engineer"],
      en: ["AX Consultant", "Full Stack Developer", "AI Agent Engineer"],
    },
    bio: {
      ko: "비즈니스 문제를 정의하고,\n기술로 끝까지 해결합니다.",
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
          ko: "기획부터 배포까지,\n혼자서 완주합니다.",
          en: "From planning to deployment,\nI handle it all.",
        },
        detailedContent: {
          ko: "• **Full Cycle**: 기획 → 디자인 → 개발 → 배포 → 운영 1인 수행\n• **Speed**: 평균 3~4개월 내 서비스 런칭 (티클, 단골쓰 등)\n• **Tech**: Next.js, RN, Supabase 기반 B2C/B2B 서비스 다수 구현",
          en: "• **Full Cycle**: Solo Planning → Design → Dev → Deploy → Ops\n• **Speed**: Launch within 3-4 months (Tikkle, Daangols)\n• **Tech**: Built B2C/B2B services with Next.js, RN, Supabase",
        },
        tags: ["Next.js", "React Native", "Supabase"],
        colSpan: 2,
      },
      {
        type: "stat",
        title: { ko: "AI Top 100", en: "AI Top 100" },
        content: { ko: "Kakao 선정 AI 활용 역량 Top 100", en: "Selected by Kakao AI Top 100" },
        detailedContent: {
          ko: "**카카오 선정 한국 AI 활용 역량 Top 100**\n\n단순 AI 사용을 넘어, **비즈니스 문제를 AI로 해결**하는 실질적 응용 역량 보유.",
          en: "**Kakao's Top 100 AI Talents in Korea**\n\nProven capability to **solve business problems with AI**, beyond simple usage.",
        },
        value: "Top 100",
        colSpan: 1,
      },
      {
        type: "text",
        title: { ko: "AI 에이전트", en: "AI Agent" },
        content: {
          ko: "단순 연동을 넘어,\n업무를 대체하는\n에이전트를 설계합니다.",
          en: "Designing agents\nthat replace actual workflows\nby synthesizing business logic with AI technology.",
        },
        detailedContent: {
          ko: "• **Workflow**: API 연동을 넘어 업무 프로세스 전체 자동화\n• **Case**: 화주 메시지 분석 → 3개망 배차 → 초안 생성 (OPUS AI)\n• **Stack**: LangChain, LangGraph, n8n 기반 자율 에이전트",
          en: "• **Workflow**: Full process automation beyond API calls\n• **Case**: Message Analysis → Dispatch across 3 networks (OPUS AI)\n• **Stack**: Autonomous agents via LangChain, LangGraph, n8n",
        },
        tags: ["LangChain", "n8n", "LLM Ops"],
        colSpan: 1,
      },
      {
        type: "text",
        title: { ko: "AX 컨설팅", en: "AX Consulting" },
        content: {
          ko: "돈이 새는 지점을 찾아\n기술로 막습니다.",
          en: "Identifying and fixing revenue leaks\nwith tech.",
        },
        detailedContent: {
          ko: "**\"코드를 아는 컨설턴트\"**\n\n1. **진단**: 현업의 '돈과 시간이 새는 구간' 발견\n2. **설계**: 자동화 가능한 최적 구조 제안\n3. **구현**: 직접 풀스택 개발로 솔루션 완성",
          en: "**\"Consultant who Codes\"**\n\n1. **Diagnose**: Find revenue/time leaks\n2. **Design**: Propose automation structures\n3. **Implement**: Build solutions via full-stack dev",
        },
        tags: ["Optimization", "Automation", "Strategy"],
        colSpan: 2,
      },
      {
        type: "stat",
        title: { ko: "수상 이력", en: "Awards" },
        content: { ko: "장관상 및 국제대회", en: "Minister's Award & Global" },
        detailedContent: {
          ko: "• **Global**: K-Startup Silicon Valley / ILS Tokyo 선정\n• **Gov**: 교육부 장관 인증 U-300 유망팀 (22', 24')\n\n아이디어를 넘어 **시장 검증**까지 완료함.",
          en: "• **Global**: K-Startup Silicon Valley / ILS Tokyo Finalist\n• **Gov**: Minister Certified U-300 Team (22', 24')\n\nProof of **market validation**.",
        },
        value: "4+",
        colSpan: 1,
      },
      {
        type: "text",
        title: { ko: "네트워킹", en: "Networking" },
        content: {
          ko: "결과를 만드는 사람들과\n깊게 교류합니다.",
          en: "Deep connections with\nresult-orientedpeople.",
        },
        detailedContent: {
          ko: "• **Type**: 넓은 인맥보다 깊은 관계 지향 **'소집자형'**\n• **Core**: 40대 비즈니스 파트너 & 20대 AI 엔지니어 그룹\n• **Action**: 격주 단위 아이디어 검증 및 MVP 실행",
          en: "• **Type**: **'Convener'** focusing on deep relationships\n• **Core**: Biz Partners (40s) & AI Engineers (20s)\n• **Action**: Bi-weekly idea validation & MVP execution",
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
        ko: "파편화된 데이터와 프로세스를\n하나의 온톨로지로 통합합니다.",
        en: "Unifying fragmented data and processes\ninto a Ontology.",
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
          <p>The bigger issue is data sovereignty. The moment you become dependent on a platform, your customer data and business logic are trapped inside a black box. You can't Chnow why the algorithm produced a certain result, and if you want to tweak the process slightly, you're told, "That feature is not supported."</p>
          <h3>Software for Operations, or Operations for Software?</h3>
          <p>Software should support operations; operations should not be tailored to software. This is why I, as a 'Forward Deployed Engineer', prioritize the field.</p>
          <p>We must embed the unique context of the field and the company's proprietary Chnow-how into the software. Even if it's rough around the edges, we must possess 'sovereign software' where our own logic and data flow. That is the completion of true digital transformation.</p>
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
        ko: "국내 화물 정보망이 화물맨, 운송365, 트럭온 등 3곳으로 분산되어 있어, 배차 직원이 3개 탭을 오가며 수기로 정보를 복사-붙여넣기 해야 했습니다. 하루 평균 100건의 배차를 처리하는데, 한 건당 15분씩 총 25시간 분량의 반복 작업이 발생했습니다.",
        en: "Domestic freight networks were fragmented across three platforms. Dispatchers had to manually copy-paste information across 3 browser tabs. Processing 100 dispatches/day meant 25 hours of repetitive work.",
      },
      solution: {
        ko: "주요 정보망 3사의 API를 직접 연동하여, 하나의 대시보드에서 모든 차량 정보를 실시간으로 조회할 수 있는 통합 SaaS를 구축했습니다. Next.js 기반의 반응형 웹앱으로 개발하여 PC와 태블릿 모두에서 사용 가능하도록 했고, Supabase를 활용해 실시간 데이터 동기화를 구현했습니다.",
        en: "Built a unified SaaS integrating APIs from all 3 major freight networks. Developed as a Next.js responsive web app for use on both PC and tablets. Implemented real-time data sync using Supabase.",
      },
      impact: {
        ko: "배차 업무 시간 50% 단축 (건당 15분 → 7분). 수기 입력 오류 제로화. 현재 국내 5개 운송 주선사에서 사용 중이며, 월간 처리 배차 건수 15,000건 달성.",
        en: "Reduced dispatch time by 50% (15 min → 7 min). Eliminated manual entry errors. Currently used by 5 domestic logistics brokers, processing 15,000 monthly dispatches.",
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
        ko: "화주와 차주 간의 단순 반복적인 커뮤니케이션('어디 계세요?', '가격 얼마인가요?')이 업무의 60%를 차지. 담당자가 자리를 비우면 기회 손실 발생.",
        en: "Repetitive communication ('Where are you?', 'Price?') consumed 60% of work time. Delayed responses led to lost opportunities.",
      },
      solution: {
        ko: "LangChain과 Claude Agent SDK를 활용한 AI 에이전트 설계. 카카오톡 메시지를 분석해 Maestro TMS 데이터베이스와 화물 정보망 API를 자동 조회. 단순 문의 즉시 응답 및 배차 초안 생성.",
        en: "Designed AI agent using LangChain and Claude Agent SDK. Analyzes KakaoTalk messages to query Maestro TMS DB and freight APIs. Auto-responds to inquiries and drafts dispatches.",
      },
      impact: {
        ko: "단순 문의 응대율 80% 자동화로 일일 3시간 절감. 야간/주말 긴급 배차 응대율 100% 달성. 월 6,000건 이상의 대화 자동화.",
        en: "80% automation of simple inquiries saved 3 hours daily. 100% response for emergency dispatches. Automates 6,000+ monthly conversations.",
      },
      techStack: ["LangChain", "Claude Agent SDK", "AI Agent", "NLP"],
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
        ko: "여러 친구가 돈을 모아 선물할 수 있는 크라우드 펀딩 기능과 에스크로 결제 시스템 구현. 카카오톡/연락처 연동으로 쉬운 친구 초대.",
        en: "Implemented crowdfunding features and escrow payments. Easy friend invitation via KakaoTalk/Contacts integration.",
      },
      impact: {
        ko: "4개월 만에 안드로이드/iOS 크로스플랫폼 앱 런칭.",
        en: "Launched Android/iOS cross-platform apps within 4 months.",
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
        ko: "방문 기록 기반 스탬프 적립 앱(모바일)과 점주용 CRM 대시보드(데스크톱) 제공. 카카오 알림톡을 통한 마케팅 실행.",
        en: "Provided stamp app (mobile) and CRM dashboard (desktop). Enabled marketing via Kakao AlimTalk.",
      },
      impact: {
        ko: "재방문 유도 캠페인 실행 용이성 증대. 기획 및 개발 3개월 소요.",
        en: "Simplified execution of revisit campaigns. Developed in 3 months.",
      },
      techStack: ["Web App", "Dashboard", "B2B"],
      category: "B2B Solution",
    },
    {
      id: "Chno-ai",
      title: { ko: "Chno AI", en: "Chno AI" },
      description: {
        ko: "개발자를 위한 AI 블로그 작성 솔루션",
        en: "AI blog writing solution for developers",
      },
      problem: {
        ko: "개발 과정에서 얻은 지식을 블로그로 정리하고 싶지만, 글쓰기에 많은 시간이 소요됨.",
        en: "Developers want to document Chnowledge but blog writing consumes too much time.",
      },
      solution: {
        ko: "ChatGPT 공유 링크를 분석해 개발 환경, 스택, 요구사항을 파악하고 기술 블로그를 자동 생성. 노션 페이지로 즉시 발행.",
        en: "Analyzes ChatGPT shared links to identify tech stack and requirements, auto-generating tech blogs. Publishes directly to Notion.",
      },
      impact: {
        ko: "개발 지식 공유 장벽 낮춤. 기획 및 개발 2개월 소요.",
        en: "Lowered barrier to sharing dev Chnowledge. Developed in 2 months.",
      },
      techStack: ["OpenAI API", "React", "Supabase", "Notion API"],
      category: "AI Tool",
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
        ko: "다양한 쇼핑몰 리뷰를 크롤링하고 NLP로 감정/키워드를 분석. 긍/부정 평가 및 소구 포인트를 시각화하여 제공.",
        en: "Crawls reviews and uses NLP for sentiment/keyword analysis. Visualizes positive/negative feedback and selling points.",
      },
      impact: {
        ko: "마케팅 소구 포인트 발굴 시간 단축. 개발 기간 4개월.",
        en: "Reduced time to identify marketing selling points. Developed in 4 months.",
      },
      techStack: ["NLP", "Crawling", "React", "Analytics"],
      category: "Data Analytics",
    },
    {
      id: "our-gwangju",
      title: { ko: "wooriGwangju", en: "wooriGwangju" },
      description: {
        ko: "장애인을 위한 무장애 길찾기 서비스",
        en: "Barrier-free navigation for the disabled",
      },
      problem: {
        ko: "휠체어 이용자 등 교통약자를 위한 이동 정보와 편의시설 위치 정보가 부족함.",
        en: "Lack of navigation and facility information for wheelchair users and the mobility impaired.",
      },
      solution: {
        ko: "휠체어 이동 경로 안내, 음성 인식/안내, 장애인 전용 화장실 및 편의시설 위치 제공. 공공데이터 및 TMAP API 활용.",
        en: "Provides wheelchair routes, voice guidance, and accessible facility locations. Used Public Data & TMAP APIs.",
      },
      impact: {
        ko: "교통약자의 이동권 증진에 기여. 개발 기간 3개월.",
        en: "Contributed to mobility rights for the disabled. Developed in 3 months.",
      },
      techStack: ["React Native", "TMAP API", "Accessibility"],
      category: "Public Service",
    },
    {
      id: "Eterners-chat",
      title: { ko: "Eterners Chat", en: "Eterners Chat" },
      description: {
        ko: "인터랙티브 이모티콘 채팅 앱 (MVP)",
        en: "Interactive emoticon chat app (MVP)",
      },
      problem: {
        ko: "정적인 이모티콘으로는 감정 표현에 한계가 있으며, 새로운 채팅 경험이 필요함.",
        en: "Static emoticons limit emotional expression; needed a novel chat experience.",
      },
      solution: {
        ko: "사용자 조작에 따라 모양과 상태가 변하는 인터랙티브 이모티콘 채팅 구현. 웹소켓을 이용한 실시간 통신 및 동시 조작 지원.",
        en: "Implemented interactive emoticons that change state via user input. Real-time communication & concurrent control using WebSockets.",
      },
      impact: {
        ko: "2주 만에 MVP 개발 완료 및 트래픽 처리 구조 검증.",
        en: "Completed MVP in 2 weeks and verified traffic handling structure.",
      },
      techStack: ["React", "WebSocket", "Interactive UI"],
      category: "MVP",
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
        ko: "일기 내용에 따라 귀여운 AI 캐릭터가 위로와 공감의 답장을 써주는 힐링 서비스. 프롬프트 엔지니어링으로 따뜻한 페르소나 구현.",
        en: "Healing service where cute AI characters reply with empathy based on diary entries. Warm persona via prompt engineering.",
      },
      impact: {
        ko: "사용자 감정 케어 효과 확인. 개발 기간 4개월.",
        en: "Verified emotional care effects. Developed in 4 months.",
      },
      techStack: ["GenAI", "Mobile Web", "Healing"],
      category: "AI Service",
    },
    {
      id: "Famo-therapy",
      title: { ko: "Famo Play Therapy", en: "Famo Play Therapy" },
      description: {
        ko: "ADHD 아동을 위한 놀이 치료 서비스",
        en: "Play therapy service for children with ADHD",
      },
      problem: {
        ko: "ADHD 아동을 위한 디지털 치료 보조 수단이 필요함.",
        en: "Need for digital therapeutic aids for children with ADHD.",
      },
      solution: {
        ko: "증상 완화를 위한 10가지 치료 목적의 웹 기반 놀이 개발. 아동 놀이 데이터 분석 보고서 제공.",
        en: "Developed 10 web-based therapeutic games. Provides analysis reports on children's play data.",
      },
      impact: {
        ko: "디지털 치료제 가능성 탐색. 개발 기간 4개월.",
        en: "Explored potential as digital therapeutics. Developed in 4 months.",
      },
      techStack: ["React", "Gamification", "Data Analysis"],
      category: "Digital Health",
    },
    {
      id: "interior-rec",
      title: { ko: "Interior Rec System", en: "Interior Rec System" },
      description: {
        ko: "고객-인테리어 업체 매칭 추천 시스템",
        en: "Customer-Interior Firm matching system",
      },
      problem: {
        ko: "고객은 수많은 업체 중 자신에게 맞는 곳을 찾기 어렵고, 업체는 적합한 고객을 만나기 어려움.",
        en: "Hard for customers to find the right firm, and for firms to find suitable customers.",
      },
      solution: {
        ko: "고객 요구사항과 업체 정보를 매칭 알고리즘으로 분석하여 최적의 파트너 추천.",
        en: "Analyzes customer requirements and firm data via matching algorithm to recommend optimal partners.",
      },
      impact: {
        ko: "매칭 효율성 증대 및 계약 성사율 향상 기대.",
        en: "Expected to increase matching efficiency and contract success rate.",
      },
      techStack: ["Recommendation Algo", "Matching", "Web"],
      category: "Recommendation",
    },
  ],
};
