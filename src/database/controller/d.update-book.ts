/**
 * 책 수정
 */
import { type Book } from "../lib.js";
import { updateBook } from "../dao/book-dao.js";

const book: Book = {
  id: 104,
  title: "Node.js + NestJS 교과서",
  price: 36000,
};
const result = await updateBook(book);
console.log(result);
