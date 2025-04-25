export async function revalidate() {
  if (import.meta.env.DEV) return;

  const response = await fetch("/api/revalidate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Error al revalidar");
  }
}
