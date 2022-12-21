import {Injector, webpack} from "replugged";
import {capitalize, isStartsWithLink} from "./helpers";

const inject = new Injector();

interface SendMessageEvent {
  content: string;
  invalidEmojis: string[];
  tts: boolean;
  validNonShortcutEmojis: string[];
}

export async function start(): Promise<void> {
  const sendMessageMod = await webpack.waitForModule<{
    sendMessage: (channelId: string, message: SendMessageEvent) => void;
  }>(webpack.filters.byProps("sendMessage"));

  if (sendMessageMod) {
    inject.after(sendMessageMod, "sendMessage", (args) => {
      const { content } = args[1];

      if (isStartsWithLink(content)) {
        return args;
      }

      args[1].content = capitalize(content);

      return args;
    });
  }
}



export function stop(): void {
  inject.uninjectAll();
}
