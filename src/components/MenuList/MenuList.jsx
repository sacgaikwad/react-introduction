import { useState } from "react";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import customStyle from "./style.module.css";

export function MenuList(props) {
  let arrayOfDifficulty = ["Low", "Medium", "High", "Insane"];

  const difficultyList = [];

  for (let difficulty of arrayOfDifficulty) {
    difficultyList.push(
      <MenuListItem
        key={difficulty}
        isSelected={props.Difficulty == difficulty}
        onClick={props.onItemClick}
        Difficulty={difficulty}
      />
    );
  }

  return <div className={customStyle.container}>{difficultyList}</div>;
}
