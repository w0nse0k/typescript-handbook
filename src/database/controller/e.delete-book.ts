/**
 * 책 삭제
 */
import { deleteBook } from "../dao/book-dao.js";

const result = await deleteBook(86);
console.log(result);
