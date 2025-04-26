import { getCategories } from "@lib/get-categories";

export async function GET() {
  const categories = await getCategories();
  return new Response(JSON.stringify(categories), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  });
}
