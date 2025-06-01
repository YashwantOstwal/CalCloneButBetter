import DropDownTemplate from "@/components/layout/NavBar/DropDownTemplate";

const Resources = () => {
  const data = [
    {
      title: "API",
      description: "Build your own integrations with our public API",
      href: "https://cal.com/docs/api-reference/v2/introduction",
      icon: "🧩",
    },
    {
      title: "Embed",
      description: "Embed Cal.com into your website",
      href: "https://cal.com/embed",
      icon: "🔗",
    },
    {
      title: "Blog",
      description: "Stay up to date with the latest news and updates",
      href: "https://cal.com/blog",
      icon: "📰",
    },
    {
      title: "App Store",
      description: "Integrate with your favorite apps",
      href: "https://cal.com/apps",
      icon: "🛍️",
    },
    {
      title: "Out Of Office",
      description: "Schedule time off with ease",
      href: "https://cal.com/docs/out-of-office",
      icon: "🌴",
    },
    {
      title: "Instant Meetings",
      description: "Meet with clients in minutes",
      href: "https://cal.com/instant-meetings",
      icon: "⚡",
    },
    {
      title: "Collective Events",
      description: "Schedule events with multiple participants",
      href: "https://cal.com/docs/features/collective-events",
      icon: "👥",
    },
    {
      title: "Payments",
      description: "Accept payments for bookings",
      href: "https://cal.com/docs/features/payments",
      icon: "💳",
    },
    {
      title: "Dynamic Group Links",
      description: "Seamlessly book meetings with multiple people",
      href: "https://cal.com/docs/features/group-links",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Developers",
      description: "Build your own integrations with our public API",
      href: "https://cal.com/docs",
      icon: "💻",
    },
    {
      title: "Recurring Events",
      description: "Schedule recurring events",
      href: "https://cal.com/docs/features/recurring-events",
      icon: "🔁",
    },
    {
      title: "Webhooks",
      description: "Get notified when something happens",
      href: "https://cal.com/docs/features/webhooks",
      icon: "📡",
    },
  ];

  return <DropDownTemplate data={data} key="Resources" />;
};

export default Resources;
