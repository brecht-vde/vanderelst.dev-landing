import { Site } from "@/utilities/persistence/queries";
import Bio from "@/components/bio";

// Wait for solution: https://github.com/vercel/next.js/issues/42292
export default (async function Home() {
  const site = await Site();

  return (
    <main>
      <Bio site={site} />
    </main>
  );
} as unknown as () => JSX.Element);
