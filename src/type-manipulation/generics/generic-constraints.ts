/**
 * <h3>Generic Constraints</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
 */
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

loggingIdentity({ length: 10, value: 3 });
