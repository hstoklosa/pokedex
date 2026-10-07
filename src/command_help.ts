import { State } from "./state.js";

export function commandHelp(state: State) {
  const { commands } = state;

  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");

  for (const cmd in commands) {
    const { name, description } = commands[cmd];
    console.log(`${name}: ${description}`);
  }
}
