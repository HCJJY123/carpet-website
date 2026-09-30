import ProjectPlanningReference, { planningReferenceMetadata } from "@/components/ProjectPlanningReference";
import { projectPlanningReferences } from "@/lib/project-planning-references";

const reference = projectPlanningReferences[0];
export const metadata = planningReferenceMetadata(reference);
export default function HotelPlanningPage() {
  return <ProjectPlanningReference reference={reference} />;
}
