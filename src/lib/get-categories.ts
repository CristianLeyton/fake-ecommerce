import { query } from "./connection";
const { API_URL } = import.meta.env;

export function getCategories() {
  return query("categories").then((res) => {
    return res.map((element) => ({
      id_categorie: element.id,
      name: element.name,
      description: element.description,
      image: {
        url: `${API_URL}/storage_public/${element.urlImage}`,
      },
    }));
  });
}
