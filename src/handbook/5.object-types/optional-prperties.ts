/**
 * <h3>Optional Properties</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties
 */
interface Shape {
  name: string;
}
function getShape(): Shape {
  return { name: "Circle" };
}

// optional properties: ?가 붙은 속성은 선택적 속성으로, 객체를 생성할 때 해당 속성을 포함하지 않아도 된다.
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  console.log("Painting shape at position: ", shape.name, opts.xPos, opts.yPos);
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

// Destructuring pattern with default values: 객체 구조 분해 할당 시 기본값을 설정할 수 있다.
function paintShape2({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("Painting shape at position: ", shape.name, xPos, yPos);
}

paintShape2({ shape });
paintShape2({ shape, xPos: 100 });
