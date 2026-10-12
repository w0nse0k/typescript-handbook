export {};

declare global {
  var myLib: {
    numberOfGreetings: number;
    makeGreeting: (s: string) => string;
  };
}
