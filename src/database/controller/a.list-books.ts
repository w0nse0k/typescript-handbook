/**
 * 책 목록 가져오기
 */
import { bookString } from "../lib.js";
import { listBooks } from "../dao/book-dao.js";

const books = await listBooks(10, 1);
books.forEach((book) => console.log(bookString.call(book)));
