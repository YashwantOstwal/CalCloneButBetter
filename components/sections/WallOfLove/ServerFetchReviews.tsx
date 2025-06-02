import ReviewsGrid from "./ReviewsGrid";
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
  const response = await fetch(
    "https://widget.senja.io/api/widget-config/6a0c4b74-527a-4058-bded-8a358821c1a0",
    { cache: "force-cache" }
  );
  const { reviews } = await response.json();

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
  return <ReviewsGrid reviews={requiredReviews} limits={10} />;
};
export default Reviews;
