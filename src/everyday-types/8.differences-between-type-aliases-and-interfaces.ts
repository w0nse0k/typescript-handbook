/**
 * <h3>Differences Between Type Aliases and Interfaces</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 */

// Extending an interface
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

function getBear(): Bear {
  return {
    name: "Winnie",
    honey: true,
  };
}

const bear = getBear();
console.log(bear.name, bear.honey); // "Winnie", true

// Intersection types with type aliases
type Animal2 = {
  name: string;
};

type Bear2 = Animal2 & {
  honey: boolean;
};

function getBear2(): Bear2 {
  return {
    name: "Winnie",
    honey: true,
  };
}

const bear2 = getBear2();
console.log(bear2.name, bear2.honey); // "Winnie", true
