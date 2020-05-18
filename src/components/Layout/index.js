import { h } from "preact";
import style from "./style.less";
import Title from "../Text/Title";
import Para from "../Text/Paragraph";
import Tools from "../Tools";

const Layout = () => (
  <div class={style.wrapper}>
    <Title text="Portal Jumper CYOA's" />
    <Para text="Welcome to my interactive CYOA site, " />
    <Tools />
  </div>
);

export default Layout;
