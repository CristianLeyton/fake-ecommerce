const { API_URL } = import.meta.env;


export function query(url: string) {
  // Hacemos la petición sin caché del lado del cliente
  return fetch(`${API_URL}/api/${url}`, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);
}
