import type { LmsCourse } from "@/lib/lms-course-types";
import { SBR_STRATEGIC_BUSINESS_REPORTING } from "./sbr-strategic-business-reporting";

const LMS_COURSES: Record<string, LmsCourse> = {
  "sbr-strategic-business-reporting": SBR_STRATEGIC_BUSINESS_REPORTING,
};

export function getLmsCourse(slug: string): LmsCourse | undefined {
  return LMS_COURSES[slug];
}

export function getAllLmsCourses(): LmsCourse[] {
  return Object.values(LMS_COURSES);
}

export { SBR_STRATEGIC_BUSINESS_REPORTING };
