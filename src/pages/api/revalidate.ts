import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") !== "application/json") {
    return new Response(null, { status: 400 });
  }

  try {
    // Aquí puedes agregar lógica adicional si es necesario
    return new Response(JSON.stringify({ revalidated: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error al revalidar" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
