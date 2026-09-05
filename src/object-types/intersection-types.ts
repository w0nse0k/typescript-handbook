/**
 * <h3>Intersection Types</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
 */
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

// Intersection type: & 연산자를 사용하여 두 개 이상의 타입을 결합
type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}
 
// okay
draw({ color: "blue", radius: 42 });
