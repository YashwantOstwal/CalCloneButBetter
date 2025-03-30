import { useId } from "react";

const DropDownTemplate = ({
  data,
}: {
  data: {
    href: string;
    icon: string;
    title: string;
    description?: string;
  }[];
}) => {
  const id = useId();
  return (
    <div className="grid grid-rows-4 gap-1 grid-flow-col-dense">
      {data.map((eachItem) => (
        <div
          key={eachItem.href + id}
          className="px-4 py-3 rounded-2xl flex items-center gap-4 hover:bg-[#f5f5f5]"
        >
          <div className="min-w-12 max-w-12 h-12 rounded-lg bg-red-300"></div>
          <div className="space-y-1">
            <div className="text-[15px] font-semibold leading-none tracking-wide">
              {eachItem.title}
            </div>
            <p className="text-[15px] leading-tight text-black/40 text-wrap">
              {eachItem?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DropDownTemplate;
