import DropDownTemplate from "../DropDownTemplate";
const Solutions = () => {
  const data = [
    [
      {
        href: "https://cal.com/scheduling/individuals",
        title: "For Individuals",
        description: "Personal scheduling made simple",
        icon: "👤", // Replace with real icon components if needed
      },
      {
        href: "https://cal.com/scheduling/teams",
        title: "For Teams",
        description: "Collaborative scheduling for groups",
        icon: "👥",
      },
      {
        href: "https://cal.com/scheduling/enterprises",
        title: "For Enterprises",
        description: "Enterprise-level scheduling solutions",
        icon: "🏢",
      },
      {
        href: "https://cal.com/scheduling/developers",
        title: "For Developers",
        description: "Powerful features and integrations",
        icon: "💻",
      },
    ],
    [
      {
        href: "https://cal.com/scheduling/talent-acquisition-teams",
        title: "Recruiting",
        icon: "📤",
      },
      {
        href: "https://cal.com/scheduling/support",
        title: "Support",
        icon: "📞",
      },
      {
        href: "https://cal.com/scheduling/sales-teams",
        title: "Sales",
        icon: "💰",
      },
      {
        href: "https://cal.com/scheduling/healthcare",
        title: "Healthcare",
        icon: "🧪",
      },
      {
        href: "https://cal.com/scheduling/hr",
        title: "HR",
        icon: "🧑‍💼",
      },
      {
        href: "https://cal.com/scheduling/telehealth",
        title: "Telehealth",
        icon: "💬",
      },
      {
        href: "https://cal.com/scheduling/education",
        title: "Education",
        icon: "🎓",
      },
      {
        href: "https://cal.com/scheduling/marketing",
        title: "Marketing",
        icon: "📈",
      },
    ],
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-[auto-auto]">
      <div className="[text-indent:16px] text-sm opacity-80">by team size</div>
      <div className="[text-indent:16px] text-sm opacity-80">by use case</div>
      {data.map((eachData, i) => (
        <DropDownTemplate data={eachData} key={"Solutions-" + i} />
      ))}
    </div>
  );
};

export default Solutions;
