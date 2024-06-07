import * as React from "react";

type ButtonProps = {
  text: string;
  variant: "MAIN" | "SECONDARY";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  text,
  variant,
  className,
  ...otherProps
}: ButtonProps) {
  let style: string = "";

  switch (variant) {
    case "MAIN":
      style += "bg-main text-white hover:bg-main/80";
      break;
    case "SECONDARY":
      style += "text-black hover:bg-black/5";
      break;
    default:
      break;
  }
  return (
    <button
      className={`py-1 px-3 rounded-lg border font-semibold duration-300 ${style} ${className}`}
      {...otherProps}
    >
      {text}
    </button>
  );
}
