import * as React from "react";

export default function ListCollumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ul className="flex flex-col gap-y-2">
      <p className="mb-2">{title}</p>
      {children}
    </ul>
  );
}
