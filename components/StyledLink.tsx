import Link, { LinkProps } from "next/link";
import { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface StyledLinkProps extends LinkProps {
  children: string | ReactNode;
  variant?: "light" | "dark";
  className?: string;
  style?: CSSProperties;
}

const StyledLink = (props: StyledLinkProps) => {
  const { children, variant = "dark", className, ...rest } = props;

  const baseStyles =
    "font-matter text-center py-2 px-3 text-sm rounded-xl gap-1 font-medium flex justify-center hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 text-nowrap";

  const light =
    "flex-1 bg-[#F3F3F4] text-[#242424] border border-[#DADADD] shadow-sm";
  const dark =
    "bg-neutral-900 hover:bg-neutral-800 shadow-[0px_2px_0.4px_0px_rgba(255,_255,_255,_0.16)_inset] text-white bg-gradient-to-b from-[#2c2c30] to-[#1d1d20]";

  return (
    <Link
      className={cn(baseStyles, variant === "dark" ? dark : light, className)}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
