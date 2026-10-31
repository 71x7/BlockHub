import { config } from "../config.js";

export default function Staff() {
  return (
    <section id="staff" className="section">
      <div className="container">
        <h2 className="section__title">Staff</h2>
        <div className="grid grid--4">
          {config.staff.map((member) => (
            <article key={member.name} className="card staff">
              <img
                src={`https://mc-heads.net/avatar/${member.name}/96`}
                alt={`Skin de ${member.name}`}
                width="96"
                height="96"
                loading="lazy"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
