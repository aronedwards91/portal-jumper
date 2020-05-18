import { h } from "preact";
import style from "./style.less";
import Title from "../Text/Title";
import Para from "../Text/Paragraph";
import Tools from "../Tools";
import CYOAs from "../CyoaList";

const Layout = () => (
  <div class={style.wrapper}>
    <Title text="Portal Jumper CYOA's" />
    <Para text="Welcome to my interactive CYOA site, " />
    <Tools />
    <CYOAs />
  </div>
);

export default Layout;
