import { Injector, common } from "replugged";
import { capitalize, isStartsWithLink } from "./helpers";

const inject = new Injector();

export function start(): void {
  inject.after(common.messages, "sendMessage", (args) => {
    console.log(args)

    const { content } = args[1];
    console.log(content)
    const words = content.split(" ")
    for (let j of words) {
      
      if (!isStartsWithLink(j)) {
        if (/\W/.test(j.substring(0,1))) {
          const e = j.substring(1)
          console.log(e)
          console.log(j)
          words[words.indexOf(j)] = `${j.substring(0,1)}${capitalize(e)}`
        }
        else {
          words[words.indexOf(j)] = capitalize(j)
        }
      }
    }
    

    args[1].content = words.join(" ");

    return args;
  });
}

export function stop(): void {
  inject.uninjectAll();
}
