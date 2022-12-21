import { Injector, common } from "replugged";
import { capitalize, isStartsWithLink } from "./helpers";

const inject = new Injector();

export function start(): void {
  inject.after(common.messages, "sendMessage", (args) => {
    const { content } = args[1];

    if (isStartsWithLink(content)) {
      return args;
    }

    args[1].content = capitalize(content);

    return args;
  });
}

export function stop(): void {
  inject.uninjectAll();
}
