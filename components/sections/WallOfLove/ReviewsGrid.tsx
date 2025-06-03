"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ReviewCard from "./ReviewsCard";

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
  url: string | undefined;
}
interface ReviewProp {
  customer: Customer;
  integration: string | undefined;
  url: string | undefined;
  html: string;
}
interface ReviewsGridProps {
  reviews: ReviewProp[];
  limit: number;
}
const ReviewsGrid = ({ reviews, limit }: ReviewsGridProps) => {
  const mediaQuery = useMediaQuery<"base" | "sm" | "md">(["base", "sm", "md"]);
  const breakPointsMappedToColumns = {
    base: 1,
    sm: 2,
    md: 3,
  };
  const [state, setState] = useState(limit);
  const [windowTop, setWindowTop] = useState(0);
  const renderReviews = reviews.slice(0, state);

  const handleClick = () => {
    setState((prev) => prev + limit);
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
  if (typeof mediaQuery != "string") return null;
  const columnReviews: ReviewProp[][] = [];
  const columns = breakPointsMappedToColumns[mediaQuery];

  for (let i = 0; i < columns; i++) {
    columnReviews.push(
      renderReviews.filter((_, index) => index % columns === i)
    );
  }
  return (
    <div className="relative">
      <div className="flex gap-3">
        {columnReviews.map((column, index) => (
          <div key={index} className="flex-1 flex flex-col gap-3">
            {column.map((review) => (
              <ReviewCard key={review.customer.id} review={review} />
            ))}
          </div>
        ))}
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
export default ReviewsGrid;
