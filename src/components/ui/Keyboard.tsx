export default function Keyboard({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`py-0.5 px-2 h-fit bg-white rounded-lg border text-xs font-semibold ${className}`}
    >
      {text}
    </span>
  );
}
