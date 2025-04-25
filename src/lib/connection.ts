const { PUBLIC_API_URL } = import.meta.env;

// Cache para almacenar las respuestas
const cache = new Map();
const CACHE_DURATION = 5 * 1000; // 5 segundos

export function query(url: string) {
  const now = Date.now();
  const cacheKey = `${url}-${Math.floor(now / CACHE_DURATION)}`;

  // Si tenemos una respuesta en caché y no ha expirado, la devolvemos
  if (cache.has(cacheKey)) {
    return Promise.resolve(cache.get(cacheKey));
  }

  // Si no hay caché o ha expirado, hacemos la petición
  return fetch(`${PUBLIC_API_URL}/api/${url}`, {
    headers: {
      "Cache-Control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      const data = res.data;
      // Guardamos en caché
      cache.set(cacheKey, data);
      return data;
    });
}
