const { API_URL } = import.meta.env;

// Cache simple con tiempo de expiración
const cache = new Map();
const CACHE_DURATION = 30 * 1000; // 30 segundos

export function query(url: string) {
  const now = Date.now();
  const cacheKey = `${url}-${Math.floor(now / CACHE_DURATION)}`;

  // Si tenemos una respuesta en caché y no ha expirado, la devolvemos
  if (cache.has(cacheKey)) {
    return Promise.resolve(cache.get(cacheKey));
  }

  // Si no hay caché o ha expirado, hacemos la petición
  return fetch(`${API_URL}/api/${url}`, {
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
