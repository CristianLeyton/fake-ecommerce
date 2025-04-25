const { API_URL } = import.meta.env;
import { revalidate } from "./revalidate";

export function query(url: string) {
  return fetch(`${API_URL}/api/${url}`, {
    headers: {
      "Cache-Control": "max-age=60, stale-while-revalidate=30",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      // Revalidar cada vez que se hace una petición
      revalidate();
      return res.data;
    });
}
