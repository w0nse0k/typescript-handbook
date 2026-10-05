// oxlint-disable no-unused-vars
/**
 * <h3>Extending Types</h3>
 * interface extending another interface: 인터페이스가 다른 인터페이스를 확장할 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types
 */
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

console.log(cc); // Output: { color: 'red', radius: 42 }
