import { h } from "preact";
import style from "./style";

const Link = ({ text, link, children }) => (
  <a href={link} target="_blank" class={style.link}>
    {text || link}
    {children}
  </a>
);

export default Link;