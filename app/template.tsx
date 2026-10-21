// 페이지가 바뀔 때마다 어두운 막이 위로 걷히며 새 페이지가 드러납니다.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div aria-hidden="true" className="curtain pointer-events-none fixed inset-0 z-[70] bg-surface [clip-path:inset(0_0_100%_0)]" />
    </>
  );
}
