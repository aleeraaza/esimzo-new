"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import PrimaryButton from "../common/PrimaryButton";

type Props = {
  visibleCount: number;
  totalCount: number;
  children: React.ReactNode;
};

export default function ExpandableGrid({
  visibleCount,
  totalCount,
  children,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = totalCount > visibleCount;

  return (
    <>
      <div
        className="-mt-2 grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3"
        style={{
          /* All cards stay in the DOM for SEO — just clip the overflow */
          maxHeight: expanded
            ? "none"
            : `${Math.ceil(visibleCount / 3) * 68}px`,
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out",
        }}
      >
        {children}
      </div>

      {hasMore && (
        <div className="mt-4 flex justify-center">
          <PrimaryButton
            onClick={() => setExpanded((prev) => !prev)}
            className="group flex "
          >
            {expanded ? "Show Less" : `See All ${totalCount} Countries`}
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </PrimaryButton>
        </div>
      )}
    </>
  );
}
