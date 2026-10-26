// oxlint-disable no-unused-vars
/**
 * <h3>TypeScript Specific ES Module Syntax</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax
 */
// interface나 type을 import할 때는 type을 붙인다. javascript로 변환할 때 삭제된다.
import { createCatName, type Cat, type Dog } from "./animal.js";

type Animals = Cat | Dog;

const name = createCatName();
