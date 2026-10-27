/**
 * 책 목록 가져오기
 */
import { bookString } from "../lib.js";
import { listBooks } from "../dao/book-dao.js";

const books = await listBooks(10, 1);
console.log(books.map(bookString).join("\n"));
