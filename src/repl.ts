import { createInterface } from "node:readline";

import { getCommands } from "./commands.js";
import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  if (!input.length) return [];
  return input.toLowerCase().trim().split(/ +/);
}

export function startREPL(state: State) {
  const { rl, commands } = state;

  rl.prompt();
  rl.on("line", (line) => {
    const input = cleanInput(line);

    if (!input.length) {
      rl.prompt();
      return;
    }

    const cmdName = input[0];
    const cmd = commands[cmdName];

    if (!cmd) {
      console.log(
        `Unknown command: "${cmdName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    cmd.callback(state);
    rl.prompt();
  });
}
