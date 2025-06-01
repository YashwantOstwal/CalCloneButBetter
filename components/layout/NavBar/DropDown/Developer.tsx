import DropDownTemplate from "@/components/layout/NavBar/DropDownTemplate";

const Developer = () => {
  const data = [
    {
      href: "https://cal.com/docs",
      icon: "📄", // Replace with actual icon component
      title: "Developer Documentation",
      description: "Documentation for the Cal.com platform",
    },
    {
      href: "https://cal.com/docs/api-reference/v2/introduction",
      icon: "🧩", // Replace with actual icon component
      title: "API",
      description: "Build your own integrations with our public API",
    },
    {
      href: "https://cal.com/docs/atoms/introduction",
      icon: "🛠️", // Replace with actual icon component
      title: "Platform",
      description:
        "Build your pixel perfect booking experience with our Cal Atoms API",
    },
    {
      href: "https://cal.com/docs/starter-kit/introduction",
      icon: "🚀", // Replace with actual icon component
      title: "Starter Kit",
      description: "Build your own scheduling app with our starter kit",
    },
  ];

  return <DropDownTemplate data={data} key="Resources" />;
};

export default Developer;
