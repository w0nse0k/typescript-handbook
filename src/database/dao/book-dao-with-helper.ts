/**
 * <h3>Book Data Access Object</h3>
 * @author Jacob
 */
import { db } from "../db-helper.js";
import { type Book } from "../lib.js";

/**
 * 상품 목록
 */
export async function listBooks(size: number, page: number) {
  return db.list<Book>(
    "select id, title, price, created_at from book limit ?,?",
    (page - 1) * size,
    size,
  );
}

/**
 * 상품 1개
 */
export async function getBook(id: number) {
  return db.one<Book>(
    "select id, title, price, created_at from book where id=?",
    id,
  );
}

/**
 * 상품 추가
 */
export async function addBook(book: Book) {
  return db.upsert(
    "insert book(title, price) values(?,?)",
    book.title,
    book.price,
  );
}

/**
 * 상품 수정
 */
export async function updateBook(book: Book) {
  return db.upsert(
    "update book set title=?, price=? where id=?",
    book.title,
    book.price,
    book.id,
  );
}

/**
 * 상품 삭제
 */
export async function deleteBook(id: number) {
  return db.upsert("delete from book where id=?", id);
}
