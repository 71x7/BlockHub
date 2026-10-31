import { useState } from "react";
import { config } from "../config.js";
import { useServerStatus } from "../hooks/useServerStatus.js";

export default function Hero() {
  const status = useServerStatus(config.ip);
  const [copied, setCopied] = useState(false);

  async function copyIp() {
    try {
      await navigator.clipboard.writeText(config.ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const label = status.loading ? "Comprobando..." : status.online ? "En línea" : "Fuera de línea";
  const state = status.loading ? "loading" : status.online ? "online" : "offline";

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <span className={`status status--${state}`}>
          <i />
          {label}
          {status.online && ` · ${status.players}/${status.max} jugadores`}
        </span>
        <h1>
          Bienvenido a <span className="accent">{config.name}</span>
        </h1>
        <p className="hero__text">{config.tagline}</p>
        <div className="hero__actions">
          <button className="btn" onClick={copyIp}>
            {copied ? "¡IP copiada!" : config.ip}
          </button>
          <a className="btn btn--ghost" href={config.discord} target="_blank" rel="noreferrer">
            Unirse al Discord
          </a>
        </div>
        {status.version && <p className="hero__meta">Versión {status.version}</p>}
      </div>
    </section>
  );
}
