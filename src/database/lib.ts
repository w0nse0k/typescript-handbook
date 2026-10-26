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

export function bookString(this: Book | undefined) {
  return this === undefined
    ? "Book undefined"
    : `Book {id: ${this.id}, title: ${this.title}, price: ${this.price}, created_at: ${this.created_at?.toLocaleString("sv-SE")}}`;
}
