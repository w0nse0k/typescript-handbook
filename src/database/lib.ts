import { type ConnectionConfig } from "mariadb";

export const connectionConfig: ConnectionConfig = {
  host: process.env.DB_HOST!,
  port: +process.env.DB_PORT!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_SCHEMA!,
};

export interface Book {
  id?: number;
  title: string;
  price: number;
  created_at?: Date;
}

export function bookString(book?: Book) {
  return book
    ? `Book {id: ${book.id}, title: ${book.title}, price: ${book.price}, created_at: ${book.created_at?.toLocaleString("sv-SE")}}`
    : undefined;
}
