type GreetingLike = string | (() => string) | MyGreeter;
function greet(g: GreetingLike): void;

export { GreetingLike, greet };
