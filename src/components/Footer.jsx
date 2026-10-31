import { config } from "../config.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {config.name}. No afiliado a Mojang ni Microsoft.</p>
        <a href="https://github.com/71x7" target="_blank" rel="noreferrer">
          github.com/71x7
        </a>
      </div>
    </footer>
  );
}
