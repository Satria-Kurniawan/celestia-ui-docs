import Keyboard from "./Keyboard";

export default function SearchInput({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative cursor-pointer group" onClick={onClick}>
      <input
        type="text"
        placeholder="Search..."
        className="py-1 px-4 rounded-lg bg-light pointer-events-none group-hover:bg-black/10 duration-300"
      />
      <Keyboard
        text="CtrlK"
        className="absolute top-1/2 right-2 -translate-y-1/2"
      />
    </div>
  );
}
