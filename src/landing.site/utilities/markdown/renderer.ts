import MarkdownIt from "markdown-it";
import { gradientPlugin } from "./plugins/gradient";

let _md: MarkdownIt;

const Renderer = (): MarkdownIt => {
  if (!_md) {
    _md = new MarkdownIt();
    _md.use(gradientPlugin);
  }
  return _md;
};

export default Renderer();
