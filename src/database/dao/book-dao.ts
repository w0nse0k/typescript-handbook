/**
 * <h3>MariaDB Node.js connector</h3>
 * 1. 커넥션을 만든다.
 * 2. 쿼리를 실행해서 결과를 받는다.
 * 3. finally 구문에서 커넥션을 끊는다.
 * 4. 결과를 리턴한다.
 * @see https://www.npmjs.com/package/mariadb
 */
import mariadb, { type UpsertResult } from "mariadb";
import { connectionConfig, type Book } from "../lib.js";

/**
 * 상품 목록
 */
export async function listBooks(size: number, page: number) {
  let conn;
  try {
    conn = await mariadb.createConnection(connectionConfig);
    return await conn.execute<Book[]>(
      "select id, title, price, created_at from book limit ?,?",
      [(page - 1) * size, size],
    );
  } finally {
    if (conn) conn.end();
  }
}

/**
 * 상품 1개
 */
export async function getBook(id: number) {
  let conn;
  try {
    conn = await mariadb.createConnection(connectionConfig);
    const books = await conn.execute<Book[]>(
      "select id, title, price, created_at from book where id=?",
      [id],
    );
    return books[0];
  } finally {
    if (conn) conn.end();
  }
}

/**
 * 상품 추가
 */
export async function addBook(book: Book) {
  let conn;
  try {
    conn = await mariadb.createConnection(connectionConfig);
    return await conn.execute<UpsertResult>(
      "insert book(title, price) values(?,?)",
      [book.title, book.price],
    );
  } finally {
    if (conn) conn.end();
  }
}

/**
 * 상품 수정
 */
export async function updateBook(book: Book) {
  let conn;
  try {
    conn = await mariadb.createConnection(connectionConfig);
    return await conn.execute<UpsertResult>(
      "update book set title=?, price=? where id=?",
      [book.title, book.price, book.id],
    );
  } finally {
    if (conn) conn.end();
  }
}

/**
 * 상품 삭제
 */
export async function deleteBook(id: number) {
  let conn;
  try {
    conn = await mariadb.createConnection(connectionConfig);
    return await conn.execute<UpsertResult>("delete from book where id=?", [
      id,
    ]);
  } finally {
    if (conn) conn.end();
  }
}
