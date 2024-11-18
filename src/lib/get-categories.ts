import { query } from "./connection";
const {STRAPI_HOST} = import.meta.env

export function getCategories() {
    return query('categories?fields[0]=name&fields[1]=description&fields[2]=id_categorie&populate[image][fields][1]=url')
    .then(res => {

        res.data.forEach(element => {
            element.image.url = `${STRAPI_HOST}${element.image.url}` 
        });

        return res.data
    })
}