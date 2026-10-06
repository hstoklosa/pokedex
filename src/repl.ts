import { createInterface } from "node:readline";

import { getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
  if (!input.length) return [];
  return input.toLowerCase().trim().split(/ +/);
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();
  rl.on("line", (line) => {
    const input = cleanInput(line);

    if (!input.length) {
      rl.prompt();
      return;
    }

    const cmds = getCommands();
    const cmd = cmds[input[0]];

    if (cmd) {
      cmd.callback(cmds);
    } else {
      console.log("Unknown command");
    }

    rl.prompt();
  });
}
