import type MarkdownIt from "markdown-it";
import StateInline from "markdown-it/lib/rules_inline/state_inline";

export function gradientPlugin(md: MarkdownIt) {
  md.inline.ruler.push("gradient", (state: StateInline, silent: boolean) => {
    let start = state.pos;
    let search = state.pos + 1;

    // if (state.src.charCodeAt(start) === 0x5b) return false;
    if (state.src.charCodeAt(search) !== 0xa7) return false;
    if (silent) return false;

    const match = state.src.slice(start).match(/!§(.*?)§!/);

    if (!match) return false;

    const end = start + match[0].length;

    const token = state.push("gradient", "", 0);

    token.content = state.src
      .slice(start, end)
      .replace("!§", "")
      .replace("§!", "");

    state.pos = end;

    return true;
  });

  md.renderer.rules.gradient = (tokens, idx) => {
    return `<span class="gradient">${tokens[idx].content}</span>`;
  };
}
