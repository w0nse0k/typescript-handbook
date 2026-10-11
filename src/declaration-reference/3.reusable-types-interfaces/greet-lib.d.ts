interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

function greet(setting: GreetingSettings): void;

export { greet, GreetingSettings };
