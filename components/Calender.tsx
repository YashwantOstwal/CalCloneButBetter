import React, { useMemo } from "react";
const Calender = ({ active }: { active: number }) => {
  const { daysOfWeek, date, firstDay, monthsInfo, getColor } = useMemo(() => {
    const date = new Date();
    const firstDay = new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-01`
    );
    const monthsInfo = [
      { month: "Jan", days: 31 },
      {
        month: "Feb",
        days:
          date.getFullYear() % 4 === 0 &&
          (date.getFullYear() % 100 !== 0 || date.getFullYear() % 400 === 0)
            ? 29
            : 28,
      },
      { month: "Mar", days: 31 },
      { month: "Apr", days: 30 },
      { month: "May", days: 31 },
      { month: "Jun", days: 30 },
      { month: "Jul", days: 31 },
      { month: "Aug", days: 31 },
      { month: "Sep", days: 30 },
      { month: "Oct", days: 31 },
      { month: "Nov", days: 30 },
      { month: "Dec", days: 31 },
    ];
    const getColor = (date: number, active: number) => {
      if (active === 0 && date >= 15 && date <= 24) {
        if (date === 20) return "bg-[#101010] text-white";
        return "bg-[#F3F4F6] text-[#101010]";
      }
      if (active === 1 && date >= 2 && date <= 9) {
        if (date === 5) return "bg-[#101010] text-white";
        return "bg-[#F3F4F6] text-[#101010]";
      }
      if (active === 2 && date >= 22 && date <= 30) {
        if (date === 25) return "bg-[#101010] text-white";
        return "bg-[#F3F4F6] text-[#101010]";
      }
      return "text-[#9ca3af]";
    };
    return {
      daysOfWeek: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      firstDay,
      date,
      monthsInfo,
      getColor,
    };
  }, []);

  return (
    <div className="px-5 py-6 w-fit overflow-hidden mx-auto">
      <span className="text-[16px] text-[#101010] font-semibold mr-1">
        {monthsInfo[date.getMonth()].month}
      </span>
      <span className="text-[14px] text-[#6b7280]">{date.getFullYear()}</span>
      <div className="flex">
        {daysOfWeek.map((eachDay) => (
          <span
            key={eachDay}
            className={`text-[12px] w-14 h-12 grid place-items-center ${
              eachDay == "SUN" || eachDay == "SAT"
                ? "text-[#9ca3af]"
                : "text-[#374151]"
            }`}
          >
            {eachDay}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 grid-flow-row text-[14px] gap-1 ">
        {Array.from(
          {
            length: monthsInfo[date.getMonth()].days,
          },
          (_, i: number) => i + 1
        ).map((eachDate, index) => (
          <div
            style={{
              gridColumnStart: `${((firstDay.getDay() + index) % 7) + 1}`,
              gridRowStart: `${
                Math.floor((firstDay.getDay() + index) / 7) + 1
              }`,
            }}
            key={eachDate}
            className={`size-[52px] grid place-items-center relative rounded-md font-semibold ${getColor(
              index + 1,
              active % 3
            )}`}
          >
            {date.getDate() == eachDate && (
              <div
                style={{ backgroundColor: "black" }}
                className="w-[3px] p-[3px] rounded-full saturation-0 absolute bottom-2"
              />
            )}
            {eachDate}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
