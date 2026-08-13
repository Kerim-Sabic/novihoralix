"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const mobileNav = [
  { href: "/platform", label: "Platform" },
  { href: "/for-hospitals", label: "Hospitals" },
  { href: "/for-clinicians", label: "Clinicians" },
  { href: "/evidence", label: "Evidence" },
  { href: "/security", label: "Security" },
  { href: "/investors", label: "Investors" },
  { href: "/product-tour", label: "Product tour" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setOpen(false);
    if (detailsRef.current) detailsRef.current.open = false;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!detailsRef.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      close();
      summaryRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open]);

  return (
    <details
      className="mobile-nav"
      ref={detailsRef}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary ref={summaryRef} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
        <span /><span />
      </summary>
      <nav aria-label="Mobile">
        {mobileNav.map((item) => {
          const current = pathname === item.href || (item.href === "/resources" && pathname.startsWith("/resources/"));
          return <Link href={item.href} key={item.href} onClick={close} aria-current={current ? "page" : undefined}>{item.label}</Link>;
        })}
        <Link className="button button-light" href="/for-hospitals#request" onClick={close}>Request demo</Link>
      </nav>
    </details>
  );
}
