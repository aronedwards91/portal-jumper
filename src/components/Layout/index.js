import { h } from "preact";
import style from "./style.less";
import Title, { Subtitle } from "../Text/Title";

const Layout = () => (
  <div class={style.wrapper}>
    <Title text="Portal Jumper CYOA's" />
    <Subtitle text="Welcome to my interactive CYOA site, " />
  </div>
);

export default Layout;
