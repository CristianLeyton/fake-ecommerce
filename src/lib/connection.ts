const { STRAPI_HOST, STRAPI_TOKEN } = import.meta.env;

export function query(url: string) {
  return fetch(`http://fireworks.com/api/${url}`, {
    headers: {
      "Cache-Control": "max-age=60, stale-while-revalidate=30",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);
}
