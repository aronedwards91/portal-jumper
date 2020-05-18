import { h } from "preact";
import style from "./style";

const Tooltip = props => {
  const { text = "tooltip", location = "top" } = props;
  return (
    <div class={style.tooltipWrapper}>
      {props.children}
      <div class={`${style.tooltip} ${style[`tooltip-${location}`]}`}>
        <div class={style.tooltipLabel}>{text}</div>
      </div>
    </div>
  );
};

export default Tooltip;
