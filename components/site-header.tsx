"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  ["Selected Work", "/#work"],
  ["Archive", "/#archive"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
] as const;

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  return navigation.map(([label, href]) => <Link href={href} key={href} onClick={onNavigate}>{label}</Link>);
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" aria-label="Site header">
      <Link className="wordmark" href="/" aria-label="Xesco Serrat, home">XS</Link>
      <nav className="site-nav site-nav--desktop" aria-label="Primary navigation">
        <NavigationLinks />
      </nav>
      <details className="site-menu" open={menuOpen} onToggle={(event) => setMenuOpen(event.currentTarget.open)}>
        <summary>Menu <span aria-hidden="true">+</span></summary>
        <nav aria-label="Primary navigation menu"><NavigationLinks onNavigate={() => setMenuOpen(false)} /></nav>
      </details>
    </header>
  );
}
