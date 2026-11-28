"use client";

import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

/* Shows only the first `initialCount` items, with a "Show more / Show
   less" toggle to reveal the rest — used anywhere a list of pills/features
   was making a card too tall. `items` is an array of already-rendered React
   nodes (not a render function) on purpose: the callers using this are
   plain Server Components, and a function prop can't cross the
   Server-to-Client Component boundary — only serializable values (including
   plain JSX elements) can. */
export default function ExpandableList({
  items,
  initialCount = 3,
  wrapperClassName,
  toggleClassName = "text-xs font-bold text-slate-500 hover:text-[#FF5C00] transition-colors duration-200",
  expandLabel,
  collapseLabel = "Show less",
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > initialCount;
  const visibleItems = expanded ? items : items.slice(0, initialCount);

  return (
    <>
      <div className={wrapperClassName}>{visibleItems}</div>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className={`inline-flex items-center gap-1.5 mt-3 ${toggleClassName}`}
        >
          {expanded ? collapseLabel : expandLabel || `Show ${items.length - initialCount} more`}
          {expanded ? <BsChevronUp size={10} /> : <BsChevronDown size={10} />}
        </button>
      )}
    </>
  );
}
