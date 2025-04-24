import { query } from "./connection";

export function getAllProducts() {
  return query("products").then((res) => {
    return res.map((element) => ({
      id_product: element.id,
      name: element.name,
      description: element.description,
      price: element.price,
      sku: element.sku,
      image: {
        url: `http://fireworks.com/storage_public/${element.urlImage}`,
      },
    }));
  });
}

export function getProducts(id_categoria) {
  return query("products").then((res) => {
    return res
      .filter(
        (element) => element.categorie_id.toString() === id_categoria.toString()
      )
      .map((element) => ({
        id_product: element.id,
        name: element.name,
        description: element.description,
        price: element.price,
        sku: element.sku,
        image: {
          url: `http://fireworks.com/storage_public/${element.urlImage}`,
        },
      }));
  });
}
