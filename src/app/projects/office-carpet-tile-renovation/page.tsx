import ProjectPlanningReference, { planningReferenceMetadata } from "@/components/ProjectPlanningReference";
import { projectPlanningReferences } from "@/lib/project-planning-references";

const reference = projectPlanningReferences[1];
export const metadata = planningReferenceMetadata(reference);
export default function OfficePlanningPage() {
  return <ProjectPlanningReference reference={reference} />;
}
