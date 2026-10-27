/**
 * 책 1권 가져오기
 */
import { bookString } from "../lib.js";
import { getBook } from "../dao/book-dao.js";

const book = await getBook(30);
console.log(bookString(book));
