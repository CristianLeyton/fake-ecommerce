const { API_URL } = import.meta.env;

// Cache con timestamp
const cache = new Map();
const CACHE_DURATION = 2 * 60 * 1000; // 2 minutos

export function query(url: string) {
  const now = Date.now();
  const cacheKey = url;
  const cachedData = cache.get(cacheKey);

  // Si tenemos datos en caché y no han expirado, los devolvemos
  if (cachedData && now - cachedData.timestamp < CACHE_DURATION) {
    return Promise.resolve(cachedData.data);
  }

  // Hacemos la petición con headers que permiten caché pero con revalidación
  return fetch(`${API_URL}/api/${url}`, {
    headers: {
      "Cache-Control": "max-age=300, stale-while-revalidate=60", // 5 minutos de caché, 1 minuto de revalidación
    },
  })
    .then((res) => res.json())
    .then((res) => {
      const data = res.data;
      // Guardamos en caché con timestamp
      cache.set(cacheKey, {
        data,
        timestamp: now,
      });
      return data;
    });
}
