import { Site } from "@/utilities/types";
import Link from "next/link";

interface Props {
  site: Site;
}

export default function Navigation({ site }: Props) {
  return (
    <ul className="flex flex-col lg:flex-row gap-2 lg:gap-10 text-md lg:text-base">
      {site.navigation.map((navigation) => {
        let element: string | JSX.Element = navigation.value;

        if (navigation.url) {
          element = (
          <Link
            className="underline underline-offset-8 decoration-dotted decoration-2 decoration-emerald-500"
            href={navigation.url}
            target="_blank"
          >
            {navigation.value}
          </Link>);
        }

        return (
          <li key={navigation.value}>
            <span className="lg:whitespace-pre-line">{element}</span>
          </li>
        );
      })}
    </ul>
  );
}
