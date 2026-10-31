import { useEffect, useState } from "react";

const empty = { loading: false, online: false, players: 0, max: 0, version: "" };

export function useServerStatus(ip, interval = 60000) {
  const [status, setStatus] = useState({ ...empty, loading: true });

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    async function load() {
      try {
        const res = await fetch(`https://api.mcsrvstat.us/3/${ip}`, { signal: controller.signal });
        const data = await res.json();
        if (!active) return;
        setStatus({
          loading: false,
          online: Boolean(data.online),
          players: data.players?.online ?? 0,
          max: data.players?.max ?? 0,
          version: data.version ?? "",
        });
      } catch (error) {
        if (active && error.name !== "AbortError") setStatus(empty);
      }
    }

    load();
    const id = setInterval(load, interval);
    return () => {
      active = false;
      controller.abort();
      clearInterval(id);
    };
  }, [ip, interval]);

  return status;
}
