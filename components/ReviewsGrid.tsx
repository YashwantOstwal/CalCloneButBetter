"use client";
import Image from "next/image";
import Link from "next/link";
import XLogo from "../public/WallOfLove/XLogo.png";
import G2Logo from "../public/WallOfLove/G2Logo.png";
import ProductHuntLogo from "../public/WallOfLove/ProductHuntLogo.png";
import TrustPilotLogo from "../public/WallOfLove/TrustPilotLogo.png";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { easeInOut } from "motion";

interface Integrations {
  product_hunt?: {
    username: string;
  };
  twitter?: {
    username: string;
  };
}

interface Customer {
  id: string;
  name: string;
  avatar: string;
  tagline: string | null;
  integrations: Integrations;
  url: string | null;
}
interface ReviewProp {
  customer: Customer;
  integration: string | null;
  url: string | null;
  html: string;
}
interface ReviewsGridProps {
  reviews: ReviewProp[];
}
const ReviewsGrid = ({ reviews }: ReviewsGridProps) => {
  const [state, setState] = useState(10);
  const [windowTop, setWindowTop] = useState(0);
  const renderReviews = reviews.slice(0, state);

  const handleClick = () => {
    setState((prev) => prev + 10);
    setWindowTop(document.documentElement.getBoundingClientRect().top);
  };
  useEffect(() => {
    if (windowTop !== 0) {
      window.scrollTo({
        top: -windowTop,
        behavior: "instant",
      });
    }
  }, [state, windowTop]);
  return (
    <div className="relative">
      <div className="sm:hidden flex flex-col gap-3">
        {renderReviews.map((review) => (
          <ReviewCard key={review.customer.id} review={review} />
        ))}
      </div>
      <div className="hidden sm:flex md:hidden gap-3">
        <div className="flex-1 flex flex-col gap-3">
          {renderReviews
            .filter((_, i) => i % 2 == 0)
            .map((review) => {
              return <ReviewCard key={review.customer.id} review={review} />;
            })}
        </div>
        <div className="flex-1 flex flex-col gap-3">
          {renderReviews
            .filter((_, i) => i % 2 == 1)
            .map((review) => {
              return <ReviewCard key={review.customer.id} review={review} />;
            })}
        </div>
      </div>
      <div className="hidden md:flex gap-3">
        <div className="flex flex-col flex-1 gap-3">
          {renderReviews
            .filter((_, i) => i % 3 == 0)
            .map((review) => {
              return <ReviewCard key={review.customer.id} review={review} />;
            })}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          {renderReviews
            .filter((_, i) => i % 3 == 1)
            .map((review) => {
              return <ReviewCard key={review.customer.id} review={review} />;
            })}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          {renderReviews
            .filter((_, i) => i % 3 == 2)
            .map((review) => {
              return <ReviewCard key={review.customer.id} review={review} />;
            })}
        </div>
      </div>
      {state < 50 && (
        <div className="absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-b from-transparent to-[#F4F4F4] grid place-items-center">
          <button
            onClick={handleClick}
            className=" px-4 py-2 text-sm bg-[#F4F4F4] border border-gray rounded-xl font-inter"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
};
const ReviewCard = ({ review }: { review: ReviewProp }) => {
  const getIntegration = (integration: string) => {
    if (integration == "twitter") return XLogo;
    if (integration == "trustpilot") return TrustPilotLogo;
    if (integration === "product_hunt") return ProductHuntLogo;
    else return G2Logo;
  };
  return (
    <motion.div
      initial={{ scale: 0.75, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: easeInOut, duration: 0.175 }}
      className="p-4 bg-[#F8F9FA] border border-gray rounded-xl font-inter text-[#374151] text-[16px] flex flex-col gap-2"
    >
      <div className="flex gap-4 items-center">
        <div className="size-[42px] relative bg-red-300 ">
          {/* <Image
            src={review.customer.avatar}
            alt={review.customer.name}
            className="w-full h-auto rounded-full"
            width={42}
            height={42}
          /> */}

          {review.integration && review.url && (
            <Link
              href={review.url}
              className="absolute -bottom-1 -right-1 bg-[#F8F9FA] p-0.5 rounded-full"
            >
              <Image
                src={getIntegration(review.integration)}
                width={12}
                height={12}
                // className="rounded-full"
                alt={review.integration}
              />
            </Link>
          )}
        </div>
        <div>
          <div className="leading-none">{review.customer.name}</div>
          {Object.values(review.customer.integrations)[0]?.username ? (
            review.customer.url ? (
              <Link href={review.customer.url}>
                <span className="text-[#4c5870] text-[14px] leading-none">
                  @{Object.values(review.customer.integrations)[0]?.username}
                </span>
              </Link>
            ) : (
              <span className="text-[#4c5870] text-[14px] leading-none">
                @{Object.values(review.customer.integrations)[0]?.username}
              </span>
            )
          ) : (
            <span className="text-[#4c5870] text-[14px] leading-none">
              {review.customer.tagline}
            </span>
          )}
        </div>
      </div>
      <div
        className="[&>a]:text-[#6701e6] hover:[&>a]:underline  decoration-[#8338ec] hover:[&>a]:text-[#8338ec] underline-offset-2"
        dangerouslySetInnerHTML={{ __html: review.html.replace(/\n/g, "<br>") }}
      />
    </motion.div>
  );
};
export default ReviewsGrid;
