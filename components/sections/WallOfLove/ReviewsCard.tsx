import Image from "next/image";
import Link from "next/link";
import XLogo from "@/public/WallOfLove/XLogo.png";
import G2Logo from "@/public/WallOfLove/G2Logo.png";
import ProductHuntLogo from "@/public/WallOfLove/ProductHuntLogo.png";
import TrustPilotLogo from "@/public/WallOfLove/TrustPilotLogo.png";
import { motion } from "motion/react";
import { easeInOut } from "motion";

interface SocialIntegration {
  product_hunt?: {
    username: string;
  };
  twitter?: {
    username: string;
  };
}

interface Reviewer {
  id: string;
  name: string;
  avatar: string;
  tagline: string | null;
  integrations: SocialIntegration;
  url: string | null;
}

interface ReviewProps {
  customer: Reviewer;
  integration: string | undefined;
  url: string | undefined;
  html: string;
}

const ReviewCard = ({ review }: { review: ReviewProps }) => {
  return (
    <motion.div
      initial={{ scale: 0.75, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: easeInOut, duration: 0.175 }}
      className="p-4 bg-[#F8F9FA] border border-gray rounded-xl font-inter text-[#374151] text-[16px] flex flex-col gap-2"
    >
      <div className="flex gap-4 items-center">
        <div className="size-[42px] relative">
          <ReviewCard.Avatar
            src={review.customer.avatar}
            alt={review.customer.name}
          />
          {review.integration && review.url && (
            <ReviewCard.PlatformBadge
              url={review.url}
              platform={review.integration}
            />
          )}
        </div>
        <div>
          <ReviewCard.Name name={review.customer.name} />
          {Object.values(review.customer.integrations)[0]?.username ? (
            <ReviewCard.Username url={review.customer.url}>
              {Object.values(review.customer.integrations)[0]?.username}
            </ReviewCard.Username>
          ) : (
            <ReviewCard.TagLine tagline={review.customer.tagline} />
          )}
        </div>
      </div>
      <ReviewCard.Content html={review.html} />
    </motion.div>
  );
};

ReviewCard.Avatar = function Avatar({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className="w-full h-full object-cover rounded-full"
      width={42}
      height={42}
    />
  );
};

ReviewCard.PlatformBadge = function PlatformBadge({
  url,
  platform,
}: {
  url: string;
  platform: string;
}) {
  const getPlatformLogo = (platform: string) => {
    switch (platform) {
      case "twitter":
        return XLogo;
      case "trustpilot":
        return TrustPilotLogo;
      case "product_hunt":
        return ProductHuntLogo;
      default:
        return G2Logo;
    }
  };

  return (
    <Link
      href={url}
      className="absolute -bottom-1 -right-1 bg-[#F8F9FA] p-0.5 rounded-full"
    >
      <Image
        src={getPlatformLogo(platform)}
        width={12}
        height={12}
        alt={platform}
      />
    </Link>
  );
};

ReviewCard.Name = function Name({ name }: { name: string }) {
  return <div className="leading-none">{name}</div>;
};

ReviewCard.Username = function Username({
  url,
  children,
}: {
  url: string | null;
  children: string | undefined;
}) {
  return url ? (
    <Link href={url}>
      <span className="text-[#4c5870] text-[14px] leading-none">
        @{children}
      </span>
    </Link>
  ) : (
    <span className="text-[#4c5870] text-[14px] leading-none">@{children}</span>
  );
};
ReviewCard.TagLine = function TagLine({ tagline }: { tagline: string | null }) {
  return <span className="text-[#4c5870] text-sm leading-none">{tagline}</span>;
};

ReviewCard.Content = function Content({ html }: { html: string }) {
  return (
    <div
      className="[&>a]:text-[#6701e6] [&>a]:underline hover:[&>a]:no-underline decoration-[#8338ec] hover:[&>a]:text-[#8338ec] underline-offset-2"
      dangerouslySetInnerHTML={{ __html: html.replace(/\n/g, "<br>") }}
    />
  );
};

export default ReviewCard;
