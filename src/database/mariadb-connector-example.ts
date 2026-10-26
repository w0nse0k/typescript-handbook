/**
 * <h3>MariaDB Node.js connector</h3>
 *  * 1. 커넥션을 만든다.
 * 2. 쿼리를 실행해서 결과를 받는다.
 * 3. finally 구문에서 커넥션을 끊는다.
 * 4. 결과를 리턴한다.
 * @see https://www.npmjs.com/package/mariadb
 */
import mariadb from "mariadb";
import { connectionConfig, type Book } from "./lib.js";

async function listBooks() {
  let conn;
  try {
    conn = await mariadb.createConnection(connectionConfig);
    const books = await conn.execute<Book[]>(
      "select id, title, price, created_at from book limit ?,?",
      [0, 10],
    );
    return books;
  } finally {
    if (conn) conn.end();
  }
}

const books = await listBooks();
console.log(JSON.stringify(books));
