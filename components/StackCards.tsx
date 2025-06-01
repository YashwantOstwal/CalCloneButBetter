interface StackCardsProps extends React.PropsWithChildren {
  top: string;
  shrinkBy: string;
  stackCount: number;
}

export default function StackCards({
  top,
  shrinkBy,
  stackCount,
  children,
}: StackCardsProps) {
  return (
    <>
      {Array.from({ length: stackCount }).map((_, index: number) => (
        <div
          key={"stack-card-" + index}
          style={{
            top: `calc(${index} * ${top})`,
            insetInline: `calc(${stackCount - 1 - index} * ${shrinkBy}/2)`,
          }}
          className="h-full absolute rounded-3xl border border-gray bg-white"
        >
          {index == stackCount - 1 && children}
        </div>
      ))}
    </>
  );
}
