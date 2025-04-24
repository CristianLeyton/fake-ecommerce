import { query } from "./connection";

export function getCategories() {
  return query("categories").then((res) => {
    return res.map((element) => ({
      id_categorie: element.id,
      name: element.name,
      description: element.description,
      image: {
        url: `http://fireworks.com/storage_public/${element.urlImage}`,
      },
    }));
  });
}
