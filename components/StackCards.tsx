import React from "react";

function StackCards({
  top,
  shrinkBy,
  stackCount,
  children,
}: {
  top: string;
  shrinkBy: string;
  stackCount: number;
  children: React.ReactNode;
}) {
  return (
    <>
      {Array.from({ length: stackCount }).map((_, i: number) => (
        <div
          key={"stack-card-" + i}
          style={{
            top: `calc(${i} * ${top})`,
            insetInline: `calc(${stackCount - 1 - i} * ${shrinkBy}/2)`,
          }}
          className="h-full absolute rounded-3xl border border-gray bg-white"
        >
          {i == stackCount - 1 && children}
        </div>
      ))}
    </>
  );
}

export default StackCards;
