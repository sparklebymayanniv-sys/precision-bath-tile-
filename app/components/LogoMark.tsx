export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative block h-9 w-9 shrink-0 rounded-[4px] border border-[#d7bf86]/70 bg-[#0f1822] ${className}`}
    >
      <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-[2px] border-[#d7bf86]" />
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-[2px] border-[#d7bf86]" />
      <span className="absolute inset-0">
        <span className="absolute left-[3px] top-[3px] h-[2px] w-[10px] rotate-45 bg-[#d7bf86]" />
        <span className="absolute right-[3px] top-[3px] h-[2px] w-[10px] -rotate-45 bg-[#d7bf86]" />
        <span className="absolute bottom-[3px] left-[3px] h-[2px] w-[10px] -rotate-45 bg-[#d7bf86]" />
        <span className="absolute bottom-[3px] right-[3px] h-[2px] w-[10px] rotate-45 bg-[#d7bf86]" />
      </span>
    </span>
  );
}