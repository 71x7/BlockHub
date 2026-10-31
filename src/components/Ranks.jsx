import { config } from "../config.js";

export default function Ranks() {
  return (
    <section id="ranks" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Rangos</h2>
        <div className="grid grid--3">
          {config.ranks.map((rank) => (
            <article
              key={rank.name}
              className={`card rank ${rank.featured ? "rank--featured" : ""}`}
              style={{ "--rank": rank.color }}
            >
              {rank.featured && <span className="rank__badge">Popular</span>}
              <h3 className="rank__name">{rank.name}</h3>
              <p className="rank__price">{rank.price}</p>
              <ul>
                {rank.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <a className="btn btn--full" href={config.store}>
                Comprar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
