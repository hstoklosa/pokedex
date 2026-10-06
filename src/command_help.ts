import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");
  for (const cmd in commands) {
    const { name, description } = commands[cmd];
    console.log(`${name}: ${description}`);
  }
}
