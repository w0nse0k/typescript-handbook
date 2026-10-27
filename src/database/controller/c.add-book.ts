/**
 * 책 추가
 */
import { type Book } from "../lib.js";
import { addBook } from "../dao/book-dao-with-helper.js";

const book: Book = {
  title: "한 입 크기로 잘라 먹는 리액트",
  price: 29700,
};
const result = await addBook(book);
console.log(result);
