import { useState } from "react";
import customStyle from "./style.module.css";

export function MenuListItem(props) {
  let [isHovered, setIsHover] = useState(false);

  function activate() {
    setIsHover(true);
  }

  function deActivate() {
    setIsHover(false);
  }

  function getBackGroundColor() {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        console.log(props.isSelected);
        return "#eff0ef";
      }
    }
  }

  function onItemClick() {
    props.onClick(props.Difficulty);
  }

  return (
    <div
      onClick={onItemClick}
      className={customStyle.container}
      onMouseEnter={activate}
      onMouseLeave={deActivate}
      style={{ backgroundColor: getBackGroundColor() }}
    >
      Set to : {props.Difficulty}
    </div>
  );
}
