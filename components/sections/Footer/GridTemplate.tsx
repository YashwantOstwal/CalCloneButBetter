import Link from "next/link";

interface ListItem {
  key: string;
  href: string;
}

interface GridTemplateProps {
  listTitle: string;
  listItems: ListItem[];
}

export default function GridTemplate({
  listTitle,
  listItems,
}: GridTemplateProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-[17px] font-semibold mb-1">{listTitle}</div>
      {listItems.map((eachItem) => (
        <Link
          href={eachItem.href}
          key={eachItem.key}
          className="text-base hover:opacity-50"
        >
          {eachItem.key}
        </Link>
      ))}
    </div>
  );
}
