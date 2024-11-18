import { query } from "./connection";
const {STRAPI_HOST} = import.meta.env

export function getAllProducts() {
    return query('products?fields[0]=name&fields[1]=description&fields[2]=id_product&fields[3]=price&populate[image][fields][1]=url')
    .then(res => {

        res.data.forEach(element => {
            element.image.url = `${STRAPI_HOST}${element.image.url}` 
        });

        return res.data
    })
}