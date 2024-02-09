import Link from "next/link";

function FooterColumnList({ list, title }: { title: string; list: string[] }) {
  return (
    <ul className="mb-10">
      <div className="title font-bold">{title}</div>
      {list.map((item, index) => {
        return (
          <li key={index} className=" text-neutral-500 my-1">
            <Link href={`/${item}`}></Link> {item}
          </li>
        );
      })}
    </ul>
  );
}

export default FooterColumnList;
