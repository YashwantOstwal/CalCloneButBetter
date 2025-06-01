import ReviewsGrid from "./ReviewsGrid";
import { cachedReviews } from "./reviews";
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
interface ReviewType {
  customer: Customer;
  integration: string | undefined;
  url: string | undefined;
  html: string;
}
const Reviews = async () => {
  // const response = await fetch(
  //   "https://cal.com/_next/data/vifRycJQbcKSJsj1ThL5Z/en.json",
  //   { cache: "no-store" }
  // );
  // const data = await response.json();
  // const { reviews } = data.pageProps.senjaWidgetData;

  const requiredReviews: ReviewType[] = [];
  for (let i = 0; i < cachedReviews.length; i++) {
    const {
      customer: {
        id,
        name,
        avatar,
        tagline,
        integrations: { product_hunt, twitter },
      },
      integration,
      url,
      html,
    } = cachedReviews[i];
    requiredReviews.push({
      customer: {
        id,
        name,
        avatar,
        tagline,
        url,
        integrations: {
          product_hunt,
          twitter,
        },
      },
      integration,
      url,
      html,
    });
  }
  return <ReviewsGrid reviews={requiredReviews} limits={10} />;
};
export default Reviews;
