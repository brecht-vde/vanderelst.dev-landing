import { Site } from "@/utilities/types";
import Renderer from "@/utilities/markdown/renderer";

interface Props {
  site: Site;
}

export default function Bio({ site }: Props) {
  return (
      <h1
        className="text-2xl lg:text-4xl font-medium"
        dangerouslySetInnerHTML={{ __html: Renderer.render(site.profile.bio) }}
      />
  );
}
