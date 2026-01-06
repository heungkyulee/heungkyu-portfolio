export const SITE_URL = "https://heungkyulee.dev";

// 기본 공유 이미지(OG/Twitter). 현재 프로젝트에 이미 존재하는 이미지를 사용합니다.
export const SITE_OG_IMAGE = `${SITE_URL}/hero-portrait.png`;

export function absoluteUrl(path: string) {
  if (!path) return SITE_URL;
  try {
    return new URL(path, SITE_URL).toString();
  } catch {
    return SITE_URL;
  }
}

/**
 * "YYYY.MM.DD" 또는 "YYYY-MM-DD" 같은 포맷을 Date로 변환합니다.
 * 파싱 실패 시 undefined를 반환합니다.
 */
export function parseLooseDate(input: string): Date | undefined {
  if (!input) return undefined;

  // YYYY.MM.DD
  const dot = input.match(/^(\d{4})\.(\d{2})\.(\d{2})$/);
  if (dot) {
    const [, y, m, d] = dot;
    const iso = `${y}-${m}-${d}T00:00:00.000Z`;
    const dt = new Date(iso);
    return Number.isNaN(dt.getTime()) ? undefined : dt;
  }

  // YYYY-MM-DD
  const dash = input.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dash) {
    const dt = new Date(`${input}T00:00:00.000Z`);
    return Number.isNaN(dt.getTime()) ? undefined : dt;
  }

  const dt = new Date(input);
  return Number.isNaN(dt.getTime()) ? undefined : dt;
}


