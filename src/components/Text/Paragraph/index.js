import { h } from "preact";
import style from "./style";

const Paragraph = ({ text, children }) => (
  <div class={style.Paragraph}>
    {text}
    {children}
  </div>
);

export default Paragraph;
