export async function revalidate() {
  if (import.meta.env.DEV) return;

  const { PUBLIC_API_URL } = import.meta.env;

  try {
    const response = await fetch(`${PUBLIC_API_URL}/api/revalidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.PUBLIC_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.error("Error al revalidar:", response.statusText);
    }
  } catch (error) {
    console.error("Error en la revalidación:", error);
  }
}
