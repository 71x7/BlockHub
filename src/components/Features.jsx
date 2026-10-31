import { config } from "../config.js";

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section__title">Modos de juego</h2>
        <div className="grid grid--4">
          {config.features.map((item) => (
            <article key={item.title} className="card">
              <span className="card__icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
