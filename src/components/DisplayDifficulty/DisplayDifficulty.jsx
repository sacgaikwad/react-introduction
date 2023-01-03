import customStyle from "./style.module.css";

export function DisplayDifficulty(props) {
  return (
    <>
      <p className={customStyle.container}>
        {props.Difficulty
          ? "Difficulty set to " + props.Difficulty
          : "No difficulty set"}
      </p>
    </>
  );
}
