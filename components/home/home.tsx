"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/i18n-provider";
import { PORTFOLIO_DATA, DIAGNOSIS_SUBJECT, MAIL_TEMPLATE, mailto, type L } from "@/app/data/portfolio";

// 홈은 한 화면에 한 장면씩: 사람, 무대, 숫자, 작업, 지금 만드는 것, 기록, 강의, 연락.

const { profile, projects, timeline, famoCase } = PORTFOLIO_DATA;
const AWARDS = timeline.flatMap((g) => g.items.filter((i) => i.award).map((i) => ({ ...i, year: g.year })));
const FEATURED = ["famo-play-factory", "ikhi", "tikkle"];
const OTHERS = projects.filter((p) => !FEATURED.includes(p.id));
const project = (id: string) => projects.find((p) => p.id === id)!;

function More({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  const cls = "link link--under t-body text-ink";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Hero() {
  const { t, language } = useI18n();
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-clip bg-studio text-bg md:h-[calc(100svh-var(--nav-h))] md:min-h-[640px]"
    >
      <div data-open className="relative aspect-square w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[min(62%,calc(100svh-var(--nav-h)))]">
        <Image
          src="/photos/portrait-studio.webp"
          alt={t({ ko: "밝은 회색 배경 앞에서 회색 니트를 입고 정면을 바라보는 이흥규", en: "Heungkyu Lee in a grey knit, facing the camera against a pale grey backdrop" })}
          fill
          preload
          sizes="(min-width: 768px) 62vw, 100vw"
          className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_70%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_30%)]"
        />
      </div>

      <div className="wrap relative pb-[var(--margin)] max-md:-mt-[18vw] md:absolute md:inset-x-0 md:bottom-0">
        <h1
          id="hero-title"
          className={`lines text-bg ${
            language === "ko"
              ? "text-[clamp(6rem,27vw,9rem)] font-bold leading-[1.05] tracking-[-0.06em] md:text-[min(21vw,32svh)]"
              : "t-wide whitespace-nowrap text-[11.5vw] leading-[0.95] md:text-[min(7.5vw,15svh)]"
          }`}
        >
          {(language === "ko" ? [t(profile.name)] : ["Heungkyu", "Lee"]).map((line, i) => (
            <span key={line} className="line">
              <span data-line style={{ ["--i" as string]: i }}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <div data-load className="mt-8 flex max-w-[30rem] flex-col gap-3">
          <p className="t-lead text-bg">{t(profile.line)}</p>
          <p className="t-small text-[#2b3038]">{t(profile.title)}</p>
        </div>
        <div data-load style={{ ["--d" as string]: "420ms" }} className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="btn bg-bg text-ink hover:bg-surface-2 focus-visible:outline-bg">
            {t({ ko: "연락하기", en: "Get in touch" })}
          </a>
          <a href="#work" className="btn bg-transparent text-bg ring-1 ring-bg/35 ring-inset hover:bg-bg/10 focus-visible:outline-bg">
            {t({ ko: "작업 보기", en: "See the work" })}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Stage() {
  const { t } = useI18n();
  return (
    <figure className="scroll-zoom relative m-0 h-[100svh] min-h-[560px] overflow-clip bg-surface" aria-labelledby="stage-title">
      <Image
        src="/photos/stage-plug-and-play-2023.webp"
        alt={t({ ko: "실리콘밸리 Plug and Play 무대에서 마이크를 들고 발표하는 이흥규와 객석의 청중", en: "Heungkyu Lee presenting on the Plug and Play stage in Silicon Valley, with the audience in front" })}
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover object-[80%_50%] [filter:brightness(0.7)_contrast(1.05)]"
      />
      {/* 글 아래 받침: 사진 위 글자를 읽히게 하는 중립 어둠 */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgb(11_11_12/0.9),rgb(11_11_12/0))]" /> {/* taste-skill-ignore: neutral scrim under text on a photo */}
      <figcaption className="wrap absolute inset-x-0 bottom-[var(--margin)] grid-12 items-end gap-y-4">
        <div className="col-span-12 md:col-span-9">
          <h2 id="stage-title" data-step="text" className="t-head text-ink">
            {t({ ko: "실리콘밸리와 도쿄의 무대에서.", en: "On stage in Silicon Valley and Tokyo." })}
          </h2>
          <p data-step="text" style={{ ["--i" as string]: 1 }} className="t-lead mt-5 max-w-[36ch] text-ink-soft">
            {t({
              ko: "2023년, 실리콘밸리 Plug and Play와 도쿄 Innovation Leaders Summit에서 티클을 발표했습니다.",
              en: "In 2023 I pitched tikkle at Plug and Play in Silicon Valley and at the Innovation Leaders Summit in Tokyo.",
            })}
          </p>
        </div>
        <p className="t-small col-span-12 text-muted md:col-span-3 md:text-right">{t({ ko: "Plug and Play 실리콘밸리, 2023년", en: "Plug and Play, Silicon Valley, 2023" })}</p>
      </figcaption>
    </figure>
  );
}

export function Numbers() {
  const { t } = useI18n();
  const figures: { n: number; label: L }[] = [
    { n: projects.length, label: { ko: "직접 만든 제품과 서비스", en: "products and services built" } },
    { n: AWARDS.length, label: { ko: "선정과 수상", en: "selections and awards" } },
    { n: 2, label: { ko: "해외 무대, 실리콘밸리와 도쿄", en: "stages abroad, Silicon Valley and Tokyo" } },
  ];
  return (
    <section className="wrap section" aria-labelledby="numbers-title">
      <h2 id="numbers-title" data-step="text" className="t-head text-ink-soft">
        {t({ ko: "2022년 창업한 뒤로.", en: "Since founding in 2022." })}
      </h2>
      <ul className="m-0 mt-[clamp(2.5rem,6vw,5rem)] grid list-none grid-cols-1 gap-x-[var(--gutter)] gap-y-12 p-0 md:grid-cols-3">
        {figures.map((f, i) => (
          <li key={f.label.en} data-item style={{ ["--i" as string]: i * 2 }}>
            <p className="t-display num text-ink">{f.n}</p>
            <p className="t-lead mt-4 max-w-[16ch] text-ink-soft">{t(f.label)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Work() {
  const { t, language } = useI18n();
  const famo = project("famo-play-factory");
  const ikhi = project("ikhi");
  const tikkle = project("tikkle");
  const big = language === "ko" ? "t-display" : "t-head";
  return (
    <section id="work" className="scroll-mt-8" aria-labelledby="work-title">
      <div className="wrap section pb-0">
        <h2 id="work-title" data-step="text" className="t-display text-ink">
          {t({ ko: "작업", en: "Work" })}
        </h2>
      </div>

      {/* Famo: 숫자 자체가 결과물 */}
      <article className="wrap section" aria-labelledby="famo-title">
        <h3 id="famo-title" data-step="text" className="t-head text-ink">
          {t(famo.title)}
        </h3>
        <div className="grid-12 mt-[clamp(2rem,5vw,4rem)] gap-y-2">
          <p data-item className={`${big} num col-span-12 whitespace-nowrap text-muted md:col-span-6`}>
            {t(famoCase.before)}
          </p>
          <p data-item style={{ ["--i" as string]: 3 }} className={`${big} num col-span-12 whitespace-nowrap text-ink md:col-span-6`}>
            {t(famoCase.after)}.
          </p>
        </div>
        <div className="grid-12 mt-10 gap-y-6">
          <p className="t-lead col-span-12 max-w-[38ch] text-ink-soft md:col-span-6">
            {t({
              ko: "아동 놀이 콘텐츠 40편을 만드는 데 6개월이 걸렸습니다. 지금은 한 편에 20분이 걸립니다. 마지막 승인은 사람이 합니다.",
              en: "Forty children's play pieces took six months. Now one takes 20 minutes. A person still gives the final approval.",
            })}
          </p>
          <div className="col-span-12 self-end md:col-span-6">
            <More href={`/projects/${famo.id}`}>{t({ ko: "자세히 보기", en: "Read more" })}</More>
          </div>
        </div>
      </article>

      {/* 익히: 공개된 실제 화면 */}
      <article className="wrap section grid-12 items-end gap-y-10" aria-labelledby="ikhi-title">
        <figure data-shutter className="relative col-span-12 m-0 aspect-[16/10] overflow-clip bg-surface lg:col-span-8">
          <Image
            src="/work/ikhi.jpg"
            alt={t({ ko: "익히 웹 서비스 첫 화면", en: "The ikhi web app home screen" })}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover object-top"
          />
        </figure>
        <div className="col-span-12 lg:col-span-4">
          <h3 id="ikhi-title" data-step="text" className="t-head text-ink">
            {t(ikhi.title)}
          </h3>
          <p data-step="text" style={{ ["--i" as string]: 1 }} className="t-lead mt-6 max-w-[24ch] text-ink-soft">
            {t(ikhi.description)}. {t(ikhi.impact)}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <More href={ikhi.link!}>ikhi.app</More>
            <More href={`/projects/${ikhi.id}`}>{t({ ko: "자세히 보기", en: "Read more" })}</More>
          </div>
        </div>
      </article>

      {/* 티클: 도쿄 ILS 연사 카드 */}
      <article className="wrap section grid-12 items-end gap-y-10" aria-labelledby="tikkle-title">
        <div className="order-2 col-span-12 md:order-1 md:col-span-5">
          <h3 id="tikkle-title" data-step="text" className="t-head text-ink">
            {t(tikkle.title)}
          </h3>
          <p data-step="text" style={{ ["--i" as string]: 1 }} className="t-lead mt-6 max-w-[26ch] text-ink-soft">
            {t({
              ko: "여럿이 함께 모아 주는 선물하기 앱. 4개월 만에 iOS·Android로 출시했고, 2023년 도쿄 ILS 스타트업 피치 무대에 올렸습니다.",
              en: "A gift app where friends chip in together. Shipped on iOS and Android in four months, and pitched at ILS Tokyo in 2023.",
            })}
          </p>
          <div className="mt-8">
            <More href={`/projects/${tikkle.id}`}>{t({ ko: "자세히 보기", en: "Read more" })}</More>
          </div>
        </div>
        <figure className="order-1 col-span-12 m-0 md:order-2 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
          <div data-shutter className="relative aspect-[973/1222] overflow-clip bg-surface">
            <Image
              src="/photos/ils-2023-speaker.jpg"
              alt={t({
                ko: "ILS 2023 스타트업 피치 연사 안내 카드. 이흥규, LiFoli Corp. CEO, 티클 발표, 2023년 12월 4일 도쿄 도라노몬 힐스",
                en: "ILS 2023 Startup Pitch speaker card: Heungkyu Lee, CEO of LiFoli Corp., presenting tikkle, 4 December 2023, Toranomon Hills, Tokyo",
              })}
              fill
              loading="eager"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
      </article>

      {/* 그 밖의 작업: 이름과 한 줄 */}
      <div className="wrap section pt-0" aria-label={t({ ko: "그 밖의 작업", en: "More work" })}>
        <ul className="m-0 grid list-none grid-cols-1 gap-x-[var(--gutter)] p-0 md:grid-cols-2">
          {OTHERS.map((p, i) => (
            <li key={p.id} data-item style={{ ["--i" as string]: i }}>
              <Link href={`/projects/${p.id}`} className="group flex flex-col gap-1 py-4">
                <span className="t-lead text-ink transition-colors group-hover:text-accent">{t(p.title)}</span>
                <span className="t-body text-muted">
                  {t(p.description)}
                  {p.year && <span className="num">, {p.year}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <More href="/projects">{t({ ko: "전체 작업 보기", en: "All work" })}</More>
        </div>
      </div>
    </section>
  );
}

export function Foli() {
  const { t } = useI18n();
  return (
    <section className="bg-surface" aria-labelledby="foli-title">
      <div className="wrap section">
        <h2 id="foli-title" data-step="text" className="t-head max-w-[12em] text-ink">
          {t({ ko: "지금 만들고 있는 것, Foli.", en: "Building now: Foli." })}
        </h2>
        <figure className="m-0 mt-[clamp(2.5rem,6vw,5rem)]">
          <div data-shutter className="relative aspect-[2040/1350] overflow-clip bg-bg">
            <Image
              src="/photos/foli-app.jpg"
              alt={t({
                ko: "Foli 데스크톱 앱 화면. 발주·정산 Bot이 발주 42건을 정리하고 기준을 넘는 세금계산서 1건의 승인을 요청한다",
                en: "The Foli desktop app: an orders and settlement Bot has sorted 42 orders and asks for approval on one invoice over the limit",
              })}
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="t-small mt-3 text-muted">{t({ ko: "출시를 준비 중인 Foli 데스크톱 앱", en: "The Foli desktop app, in preparation" })}</figcaption>
        </figure>
        <div className="grid-12 mt-10 gap-y-6">
          <p className="t-lead col-span-12 max-w-[34ch] text-ink-soft md:col-span-7">
            {t({
              ko: "진짜 일을 맡길 수 있는 AI 동료입니다. Bot은 맡은 일을 끝내고, 돈과 책임이 걸린 결정만 사람에게 묻습니다.",
              en: "An AI colleague you can actually hand work to. Each Bot finishes its job and asks a person only when money or responsibility is at stake.",
            })}
          </p>
          <div className="col-span-12 flex flex-wrap gap-x-8 gap-y-3 self-end md:col-span-5 md:justify-self-end">
            <More href="https://lifoli.co.kr/products/foli">{t({ ko: "Foli 보기", en: "See Foli" })}</More>
            <More href="/insights/ai-that-works">{t({ ko: "선언문 읽기", en: "Read the manifesto" })}</More>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Recognition() {
  const { t, language } = useI18n();
  return (
    <section className="wrap section" aria-labelledby="awards-title">
      <h2 id="awards-title" data-step="text" className={`${language === "ko" ? "t-display" : "t-head"} text-ink`}>
        AI TOP 100
      </h2>
      <p data-step="text" style={{ ["--i" as string]: 1 }} className="t-lead mt-6 max-w-[34ch] text-ink-soft">
        {t({
          ko: "2025년, 카카오임팩트와 브라이언임팩트가 주최한 AI TOP 100에서 본선 진출 100인에 선정되었습니다.",
          en: "In 2025 I was named one of the 100 finalists of AI TOP 100, hosted by Kakao Impact and Brian Impact.",
        })}
      </p>
      <figure data-shutter className="relative m-0 mt-[clamp(2.5rem,6vw,5rem)] aspect-[1085/387] overflow-clip bg-surface">
        <Image
          src="/photos/ai-top-100-group.jpg"
          alt={t({ ko: "AI TOP 100 무대 앞에 모인 본선 진출자들의 단체 사진", en: "Group photo of the AI TOP 100 finalists in front of the stage" })}
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
      </figure>

      <div className="grid-12 mt-[clamp(3rem,7vw,6rem)] gap-y-12">
        <ul className="col-span-12 m-0 list-none p-0 lg:col-span-8">
          {AWARDS.map((a, i) => (
            <li key={`${a.year}-${a.what.en}`} data-item style={{ ["--i" as string]: i }} className="grid-12 gap-y-1 py-4">
              <span className="t-body num col-span-12 text-muted md:col-span-2">{a.year}</span>
              <span className="t-lead col-span-12 text-ink md:col-span-5">{t(a.what)}</span>
              <span className="t-body col-span-12 text-ink-soft md:col-span-5">
                {t(a.kind)}, {t(a.where)}
              </span>
            </li>
          ))}
        </ul>
        <figure className="col-span-8 m-0 sm:col-span-5 lg:col-span-3 lg:col-start-10">
          <div data-shutter className="relative aspect-[1206/1751] overflow-clip bg-ink">
            <Image
              src="/photos/ai-top-100-certificate.jpg"
              alt={t({
                ko: "AI TOP 100 인증서. 이흥규가 본선 진출 100인에 선정되어 대회에 참여했음을 확인한다는 내용, 2025년 11월 22일",
                en: "AI TOP 100 certificate confirming Heungkyu Lee was selected as one of the 100 finalists, 22 November 2025",
              })}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <figcaption className="t-small mt-3 text-muted">{t({ ko: "AI TOP 100 인증서, 2025년", en: "AI TOP 100 certificate, 2025" })}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Teaching() {
  const { t } = useI18n();
  return (
    <section className="wrap section grid-12 items-end gap-y-10" aria-labelledby="teaching-title">
      <figure data-shutter className="relative col-span-12 m-0 aspect-[4/3] overflow-clip bg-surface lg:col-span-7">
        <Image
          src="/photos/lecture.webp"
          alt={t({ ko: "회의실에서 화면을 띄워 두고 노트북을 펼친 참석자들과 이야기하는 이흥규", en: "Heungkyu Lee talking with participants at laptops in a meeting room, a screen behind them" })}
          fill
          loading="eager"
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover"
        />
      </figure>
      <div className="col-span-12 lg:col-span-4 lg:col-start-9">
        <h2 id="teaching-title" data-step="text" className="t-head text-ink">
          {t({ ko: "강의와 컨설팅", en: "Teaching and consulting" })}
        </h2>
        <p data-step="text" style={{ ["--i" as string]: 1 }} className="t-lead mt-6 max-w-[26ch] text-ink-soft">
          {t({
            ko: "하나증권에서 AI 강의와 컨설팅을, 성균관대학교 창업지원단에서 업무 자동화 강의를 했습니다.",
            en: "AI lectures and consulting at Hana Securities, and a work automation course for the SKKU startup programme.",
          })}
        </p>
      </div>
    </section>
  );
}

const DOORS: { title: L; line: L; subject: string; body?: L }[] = [
  {
    title: { ko: "업무 자동화 진단", en: "Work automation diagnosis" },
    line: { ko: "30분 무료 진단으로 어디부터 바꿀지 함께 봅니다.", en: "A free 30-minute session to find where to start." },
    subject: DIAGNOSIS_SUBJECT,
    body: MAIL_TEMPLATE,
  },
  {
    title: { ko: "강의·교육", en: "Talks and training" },
    line: { ko: "AI와 업무 자동화 강의를 요청합니다.", en: "Book a talk or course on AI and work automation." },
    subject: "강의·교육 문의",
  },
  {
    title: { ko: "개발 의뢰", en: "Development" },
    line: { ko: "웹·모바일 제품과 AI 기능 개발을 맡깁니다.", en: "Web and mobile products, and AI features." },
    subject: "개발 의뢰",
  },
  {
    title: { ko: "투자·협업", en: "Investment and partnership" },
    line: { ko: "라이폴리와 Foli에 관해 이야기합니다.", en: "Talk about LiFoli and Foli." },
    subject: "투자·협업 문의",
  },
];

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="wrap section scroll-mt-8" aria-labelledby="contact-title">
      <h2 id="contact-title" data-step="text" className="t-display text-ink">
        {t({ ko: "연락하기", en: "Get in touch" })}
      </h2>
      <ul className="m-0 mt-[clamp(2.5rem,6vw,5rem)] flex list-none flex-col gap-2 p-0">
        {DOORS.map((d, i) => (
          <li key={d.subject} data-item style={{ ["--i" as string]: i }}>
            <a
              href={mailto(d.subject, d.body && t(d.body))}
              className="group grid-12 items-baseline gap-y-2 bg-surface px-[clamp(1.25rem,2.5vw,2.5rem)] py-[clamp(1.5rem,3vw,2.5rem)] transition-colors hover:bg-surface-2"
            >
              <span className="t-head col-span-12 text-ink transition-colors group-hover:text-accent md:col-span-6">{t(d.title)}</span>
              <span className="t-lead col-span-10 text-ink-soft md:col-span-5">{t(d.line)}</span>
              <span aria-hidden="true" className="t-head col-span-2 text-right text-muted transition-[color,transform] group-hover:translate-x-1 group-hover:text-accent md:col-span-1">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="t-lead mt-10 text-ink-soft">
        <a href={`mailto:${profile.contact.email}`} className="link link--under text-ink">
          {profile.contact.email}
        </a>
      </p>
    </section>
  );
}
