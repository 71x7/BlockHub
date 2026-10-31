import { config } from "../config.js";

export default function Faq() {
  return (
    <section id="faq" className="section section--alt">
      <div className="container container--narrow">
        <h2 className="section__title">Preguntas frecuentes</h2>
        {config.faq.map((item) => (
          <details key={item.q} className="faq">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
