declare namespace GreetingLib {
  interface LogOptions {
    verbose: boolean;
  }

  interface AlertOptions {
    modal: boolean;
    title: string;
  }
}

export class Greeter {
  constructor(message: string);
  log: (options: GreetingLib.LogOptions) => void;
  alert: (options: GreetingLib.AlertOptions) => void;
}
