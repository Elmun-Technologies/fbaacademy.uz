import { lazy, Suspense, useEffect, useRef, useState, type ComponentProps } from "react";

const LeadFormInner = lazy(() => import("./lead-form"));
const ExtendedLeadFormInner = lazy(() => import("./lead-form-extended"));

type LeadFormProps = ComponentProps<typeof LeadFormInner>;
type ExtendedLeadFormProps = ComponentProps<typeof ExtendedLeadFormInner>;

function FormSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={compact ? "flex flex-col gap-3" : "flex flex-col gap-4"}
      aria-hidden
    >
      <div className="h-11 animate-pulse rounded-xl bg-zinc-800/80" />
      <div className="h-11 animate-pulse rounded-xl bg-zinc-800/80" />
      <div className="h-11 animate-pulse rounded-xl bg-brand/40" />
    </div>
  );
}

export function LazyLeadForm(props: LeadFormProps) {
  return (
    <Suspense fallback={<FormSkeleton compact={props.compact} />}>
      <LeadFormInner {...props} />
    </Suspense>
  );
}

export function LazyExtendedLeadForm(props: ExtendedLeadFormProps) {
  return (
    <Suspense fallback={<FormSkeleton />}>
      <ExtendedLeadFormInner {...props} />
    </Suspense>
  );
}

function useDeferredLoad() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return { shouldLoad, rootRef };
}

/** Loads the lead form only when the block is near the viewport. */
export function DeferredLeadForm(props: LeadFormProps) {
  const { shouldLoad, rootRef } = useDeferredLoad();

  return (
    <div ref={rootRef}>
      {shouldLoad ? <LazyLeadForm {...props} /> : <FormSkeleton compact={props.compact} />}
    </div>
  );
}

export function DeferredExtendedLeadForm(props: ExtendedLeadFormProps) {
  const { shouldLoad, rootRef } = useDeferredLoad();

  return (
    <div ref={rootRef}>
      {shouldLoad ? <LazyExtendedLeadForm {...props} /> : <FormSkeleton />}
    </div>
  );
}
