"use client";

import Link from "next/link";
import { useRef, useState } from "react";

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
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
    detailsRef.current?.removeAttribute("open");
  };

  return (
    <details
      className="mobile-nav"
      ref={detailsRef}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary aria-label={open ? "Close navigation" : "Open navigation"}>
        <span /><span />
      </summary>
      <nav aria-label="Mobile">
        {mobileNav.map((item) => <Link href={item.href} key={item.href} onClick={close}>{item.label}</Link>)}
        <Link className="button button-light" href="/for-hospitals#request" onClick={close}>Request demo</Link>
      </nav>
    </details>
  );
}
