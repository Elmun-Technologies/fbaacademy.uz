import TeacherAvatar from "@/components/teacher-avatar";

/** Consistent instructor portrait framing across pages. Parent must be `relative`. */
const PORTRAIT_CLASS =
  "absolute inset-0 h-full w-full max-w-none object-cover object-[center_22%] transition-transform duration-500 group-hover:scale-[1.02]";

type InstructorPhotoProps = {
  name: string;
  src?: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto";
};

export function instructorPortraitClass(extra?: string): string {
  return extra ? `${PORTRAIT_CLASS} ${extra}` : PORTRAIT_CLASS;
}

export default function InstructorPhoto({ name, src, className, fetchPriority }: InstructorPhotoProps) {
  return (
    <TeacherAvatar
      name={name}
      src={src}
      className={className ?? PORTRAIT_CLASS}
      fetchPriority={fetchPriority}
    />
  );
}
