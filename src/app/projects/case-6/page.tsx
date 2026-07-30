import { permanentRedirect } from "next/navigation";
import { projectPath } from "@/lib/case-seo";

export default function LegacyCaseSixPage() {
  permanentRedirect(projectPath("case-6"));
}
