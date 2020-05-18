import { h } from "preact";
import style from "./style.less";
import { Subtitle } from "../Text/Title";
import Para from "../Text/Paragraph";

const Strings = {
  journalTitle: "Journal",
  journalText:
    "The journal allows you to import jumps you have made, make notes and place cool stuff in your warehouse.",
  journalLink: "/assets/tools/journal.html",
  formTitle: "Build Form",
  formText:
    "The Form App lets you construct your own Interactive CYOA via a simple web form that outputs a mobile ready .app.html file that runs on all good web browsers.",
  formLink: "/assets/tools/build-form.html",
};

const Tools = () => (
  <div class={style.wrap}>
    <a class={style.linkwrap} href={Strings.journalLink}>
      <div class={style.toolBox}>
        <Subtitle text={Strings.journalTitle} />
        <Para text={Strings.journalText} />
      </div>
    </a>
    <a class={style.linkwrap} href={Strings.formLink}>
      <div class={style.toolBox}>
        <Subtitle text={Strings.formTitle} />
        <Para text={Strings.formText} />
      </div>
    </a>
  </div>
);

export default Tools;
