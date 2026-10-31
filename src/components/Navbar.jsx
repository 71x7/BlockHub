import { useState } from "react";
import { config } from "../config.js";

const links = [
  { href: "#features", label: "Modos" },
  { href: "#ranks", label: "Rangos" },
  { href: "#staff", label: "Staff" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="brand">
          <span className="brand__logo" aria-hidden="true" />
          {config.name}
        </a>
        <button
          className="navbar__toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--small" href={config.discord} target="_blank" rel="noreferrer">
            Discord
          </a>
        </nav>
      </div>
    </header>
  );
}
