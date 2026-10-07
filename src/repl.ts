import { createInterface } from "node:readline";

import { getCommands } from "./commands.js";

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

    const cmdName = input[0];

    const cmds = getCommands();
    const cmd = cmds[cmdName];

    if (!cmd) {
      console.log(
        `Unknown command: "${cmdName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    cmd.callback(cmds);

    rl.prompt();
  });
}
