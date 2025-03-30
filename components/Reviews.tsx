import dynamic from "next/dynamic";
const ReviewsGrid = dynamic(() => import("./ReviewsGrid"));

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
interface ReviewType {
  customer: Customer;
  integration: string | null;
  url: string | null;
  html: string;
}
const Reviews = async () => {
  const response = await fetch(
    "https://cal.com/_next/data/vifRycJQbcKSJsj1ThL5Z/en.json",
    { cache: "force-cache" }
  );

  // I had to cache the response instead of revalidating
  // the path every 24 hours
  // because the API endpoint gets invalidated with time.

  const data = await response.json();
  const { reviews } = data.pageProps.senjaWidgetData;
  const requiredReviews: ReviewType[] = [];
  for (let i = 0; i < reviews.length; i++) {
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
    } = reviews[i];
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

  return <ReviewsGrid reviews={requiredReviews} />;
};
export default Reviews;
