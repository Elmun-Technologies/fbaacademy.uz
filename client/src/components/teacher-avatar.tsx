import { useState, useMemo } from "react";
import { PublicMediaPicture } from "@/components/public-media-picture";
import { isSpaBundledMediaUrl, resolveBundledPublicUrl, resolvePublicMediaSrc, teacherAvatarUrl } from "@/lib/public-media";

const TEACHER_TOKEN_RE = /^@@(teacher-\d+)$/;

function avatarFallbackUrl(name: string): string {
  const q = encodeURIComponent(name.trim() || "FBA");
  return `https://ui-avatars.com/api/?name=${q}&size=512&background=4338ca&color=fef3c7&bold=true`;
}

export default function TeacherAvatar({
  name,
  src,
  className,
  fetchPriority,
}: {
  name: string;
  src?: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto";
}) {
  const resolved = useMemo(() => {
    const trimmed = src?.trim() ?? "";
    const tokenMatch = trimmed.match(TEACHER_TOKEN_RE);
    if (tokenMatch) {
      return teacherAvatarUrl(tokenMatch[1]);
    }
    if (trimmed.startsWith("/")) {
      return resolveBundledPublicUrl(trimmed);
    }
    if (trimmed) {
      return resolvePublicMediaSrc(trimmed) || trimmed;
    }
    return "";
  }, [src]);

  const initial = resolved || avatarFallbackUrl(name);
  const [url, setUrl] = useState(initial);
  const fallback = avatarFallbackUrl(name);
  const onFail = () => {
    setUrl((current) => (current === fallback ? current : fallback));
  };

  if (isSpaBundledMediaUrl(url)) {
    return (
      <PublicMediaPicture
        src={url}
        alt={name}
        className={className}
        loading={fetchPriority === "high" ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={fetchPriority}
        onError={onFail}
      />
    );
  }

  return (
    <img
      src={url}
      alt={name}
      className={className}
      loading={fetchPriority === "high" ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={fetchPriority}
      onError={onFail}
    />
  );
}
