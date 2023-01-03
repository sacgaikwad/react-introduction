import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";
import customStyle from "./style.module.css";
import { useState } from "react";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("Insane");

  function onMenuListItemClick(difficulty) {
    setCurrentDifficulty(difficulty);
  }

  return (
    <div>
      <h1>Select your Difficulty</h1>
      <div className={customStyle.workspace}>
        <MenuList onItemClick={onMenuListItemClick} />
        <DisplayDifficulty Difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
