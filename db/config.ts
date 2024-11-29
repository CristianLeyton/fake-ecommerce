import { defineDb, defineTable, column } from 'astro:db';

// Definición de la tabla Categories
const Categories = defineTable({
  columns: {
    id: column.number({ primaryKey: true }), // Identificador único
    name: column.text({unique: true}), // Nombre de la categoría
    urlImage: column.text({ optional: true }), //Url de la imagen alojada
    active: column.boolean({default: true})
  },
});

// Definición de la tabla Products
const Products = defineTable({
  columns: {
    id: column.number({ primaryKey: true }), // Identificador único
    name: column.text({unique: true}), // Nombre del producto
    description: column.text({ optional: true }), // Nombre del producto
    price: column.number({ optional: true }), // Precio del producto
    categoryId: column.number({ references: () => Categories.columns.id }), // Relación con Categories
    urlImage: column.text({ optional: true }), //Url de la imagen alojada
    sku: column.text({ optional: true, unique: true}), // Nombre del producto
    active: column.boolean({default: true})
  },
});

// Definición de la tabla Users
const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }), // Identificador único
    username: column.text(), // Nombre de usuario
    email: column.text(), // Correo electrónico
    passwordHash: column.text(), // Hash de la contraseña
  },
});

// Exportar la configuración de la base de datos
export default defineDb({
  tables: { Categories, Products, Users },
});
