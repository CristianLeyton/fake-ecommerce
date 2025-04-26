const { API_URL } = import.meta.env;

export async function query(url: string) {
  const response = await fetch(`${API_URL}/api/${url}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.data;
}
