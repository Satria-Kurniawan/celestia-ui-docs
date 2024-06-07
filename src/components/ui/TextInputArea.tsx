import * as React from "react";

type TextInputAreaProps = {
  label?: string;
  className?: string;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export default function TextInputArea({
  label,
  className,
  ...otherProps
}: TextInputAreaProps) {
  return (
    <div>
      {label && (
        <div className="mb-1">
          <label className="mb-1 text-sm font-semibold">{label}</label>
        </div>
      )}
      <textarea
        className={`py-2 px-4 rounded-lg bg-light ${className}`}
        {...otherProps}
      ></textarea>
    </div>
  );
}
