import * as React from "react";

type TextInputProps = {
  label?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({
  label,
  leftIcon,
  rightIcon,
  className,
  ...otherProps
}: TextInputProps) {
  // const [focus, setFocus] = React.useState<boolean>(false);

  return (
    <div className="relative w-full">
      {leftIcon && (
        <span className="absolute top-1/2 left-3 -translate-y-1/2">
          {leftIcon}
        </span>
      )}
      {rightIcon && (
        <span className="absolute top-1/2 right-3 -translate-y-1/2">
          {rightIcon}
        </span>
      )}
      <label className="mb-1 text-sm font-semibold block">{label}</label>
      <input
        // onFocus={() => setFocus(true)}
        // onBlur={() => setFocus(false)}
        className={`py-2 px-4 rounded-lg bg-light ${leftIcon ? "pl-10" : ""} ${
          rightIcon ? "pr-10" : ""
        } ${className}`}
        {...otherProps}
      />
    </div>
  );
}
