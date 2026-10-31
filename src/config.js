export const config = {
  name: "BlockHub",
  tagline: "Survival, minijuegos y una comunidad que no para de crecer.",
  ip: "play.blockhub.net",
  discord: "https://discord.gg/",
  store: "#",
  features: [
    { icon: "⚔️", title: "Survival", text: "Economía, claims y trabajos en un mundo limpio y sin lag." },
    { icon: "🏁", title: "Parkour", text: "Rutas con checkpoints, cronómetro y top semanal de tiempos." },
    { icon: "🛡️", title: "Anticheat", text: "Protección activa y staff presente a toda hora." },
    { icon: "🎁", title: "Eventos", text: "Torneos y recompensas cada semana para toda la comunidad." },
  ],
  ranks: [
    { name: "VIP", price: "$5", color: "#4ade80", perks: ["Prefijo en chat", "2 homes extra", "Kit semanal"] },
    { name: "MVP", price: "$12", color: "#38bdf8", perks: ["Todo lo de VIP", "Fly en el lobby", "5 homes extra", "Cosméticos"], featured: true },
    { name: "Legend", price: "$25", color: "#f59e0b", perks: ["Todo lo de MVP", "Partículas únicas", "Acceso anticipado", "Rol en Discord"] },
  ],
  staff: [
    { name: "71x7", role: "Owner" },
    { name: "Steve", role: "Admin" },
    { name: "Alex", role: "Moderador" },
    { name: "Herobrine", role: "Soporte" },
  ],
  faq: [
    { q: "¿Qué versiones soporta el servidor?", a: "Puedes entrar desde cualquier versión de Java Edition desde la 1.20 en adelante." },
    { q: "¿Cómo entro al servidor?", a: "Agrega la IP en Multijugador y pulsa Unirse. No necesitas mods." },
    { q: "¿Cómo reporto a un jugador?", a: "Abre un ticket en nuestro Discord con pruebas y el staff lo revisa." },
    { q: "¿Los rangos son pay to win?", a: "No. Los rangos son cosméticos y de comodidad, sin ventajas en combate." },
  ],
};
