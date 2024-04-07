"use client";

import { useEffect, useRef, useState } from "react";

export function useVisibleComponent(
  initialValue: boolean,
  simple?: boolean
) {
  const [visibleComponent, setVisibleComponent] =
    useState<boolean>(initialValue);

  const ref = useRef<HTMLDivElement | null>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setVisibleComponent(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      event.target instanceof Node &&
      !ref.current.contains(event.target)
    ) {
      setVisibleComponent(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    if (!simple) document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      if (!simple) document.addEventListener("click", handleClickOutside, true);
    };
  });
  return {
    visibleComponent,
    ref,
    setVisibleComponent,
  };
}
