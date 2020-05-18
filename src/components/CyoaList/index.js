import { h } from "preact";
import style from "./style.less";
import { Subtitle } from "../Text/Title";
import Para from "../Text/Paragraph";

import darkwoodLogo from "../../assets/images/darkwood-logo.svg";

const Strings = [
  {
    title: `Dark Celtic Woods`,
    text: "A Celtic themed CYOA set in a ancient wooded forest, original IP.",
    logo: darkwoodLogo,
    style: style.darkwood,
  },
];

const CYOAs = () => (
  <>
    {Strings.map((cyoaItem) => (
      <a href="/assets/cyoa-darkwood/index.html" class={style.link}>
        <div class={`${style.box} ${cyoaItem.style}`}>
          <div>
            <Subtitle text={cyoaItem.title} />
            <Para text={cyoaItem.text} />
          </div>
          <img src={cyoaItem.logo} alt="cyoa logo" class={style.logo} />
        </div>
      </a>
    ))}
  </>
);

export default CYOAs;
