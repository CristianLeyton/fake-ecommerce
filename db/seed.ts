import { db, Categories, Products, Users } from 'astro:db';

export default async function() {
  await db.insert(Categories).values([
    {name: 'Electronics' },
    {name: 'Books' },
  ]);

  await db.insert(Products).values([
    {name: 'Laptop', price: 99.99, categoryId: '1'},
    {name: 'Novel', price: 19.99, categoryId: '2'}
  ]);

  await db.insert(Users).values([
    {username: 'john_doe', email: 'john@example.com', passwordHash: 'hashed_password' },
  ]);
}