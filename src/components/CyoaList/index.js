import { h } from "preact";
import style from "./style.less";
import { Subtitle } from "../Text/Title";
import Para from "../Text/Paragraph";

import darkwoodLogo from "../../assets/images/darkwood-logo.svg";
import pokemonLogo from "../../assets/images/pokemon-logo.png";

const Strings = [
  {
    title: `Pokemon Starter CYOA`,
    text: "A great starter jump by Quicksilvers, rebuld as an interactive CYOA.",
    logo: pokemonLogo,
    style: style.pokemon,
    linkHref:  "/assets/cyoa-pokemon/index.html"
  },
  {
    title: `Dark Celtic Woods`,
    text: "A Celtic themed CYOA set in a ancient wooded forest, original IP.",
    logo: darkwoodLogo,
    style: style.darkwood,
    linkHref:  "/assets/cyoa-darkwood/index.html"
  }
];

const CYOAs = () => (
  <>
    {Strings.map((cyoaItem) => (
      <a href={cyoaItem.linkHref} class={style.link}>
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
