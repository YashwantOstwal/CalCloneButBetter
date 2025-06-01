import { cn } from "@/utils/cn";
import { LinkProps } from "next/link";
import { CSSProperties, ReactNode } from "react";
import StyledLink from "./StyledLink";

interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
}

interface LabelProps {
  Icon?: ReactNode;
  children: string;
  className?: string;
}

interface TitleProps {
  children: string;
  className?: string;
}

interface DescriptionProps {
  children: string;
  className?: string;
}
interface StyledLink extends LinkProps {
  children: string | ReactNode;
  variant?: "light" | "dark";
  className?: string;
  style?: CSSProperties;
}

const SectionHeader = ({ children, className }: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "font-matter space-y-4 pb-3.5 flex flex-col items-center justify-center text-center",
        className
      )}
    >
      {children}
    </div>
  );
};

SectionHeader.Label = function Label({
  Icon,
  children,
  className,
}: LabelProps) {
  return (
    <span
      className={cn(
        "text-xs text-[#242424] flex gap-1.5 px-3.5 py-1 bg-white items-center shadow-md border border-gray rounded-full w-fit [&>svg]:size-4",
        className
      )}
    >
      {Icon}
      {children}
    </span>
  );
};

SectionHeader.Title = function Title({ children, className }: TitleProps) {
  return (
    <div
      className={cn(
        "text-[32px] lg:text-[48px] text-[#141414] font-cal text-balance leading-tight",
        className
      )}
    >
      {children}
    </div>
  );
};

SectionHeader.Description = function Description({
  children,
  className,
}: DescriptionProps) {
  return (
    <p
      className={cn("text-base lg:text-lg text-[#898989] max-w-2xl", className)}
    >
      {children}
    </p>
  );
};

SectionHeader.StyledLink = function StyledLinkComponent(props: StyledLink) {
  return <StyledLink {...props} />;
};

export default SectionHeader;
