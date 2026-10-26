/**
 * <h3>MariaDB Node.js connector</h3>
 * @see https://www.npmjs.com/package/mariadb
 */
import mariadb, { type ConnectionConfig } from "mariadb";

const connectionConfig: ConnectionConfig = {
  host: process.env.DB_HOST!,
  port: +process.env.DB_PORT!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_SCHEMA!,
};

listBooks();

async function listBooks() {
  let conn;
  try {
    conn = await mariadb.createConnection(connectionConfig);
    const books = await conn.query(
      "select id, title, price, created_at from book limit ?,?",
      [0, 10],
    );
    books.forEach((elem: unknown) => console.log(elem));
  } finally {
    if (conn) conn.end();
  }
}
