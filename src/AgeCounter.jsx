import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props) {
  //let age = 30;

  let [age, setAge] = useState(20);

  function IncreaseAge() {
    setAge(age + 1);
  }

  console.log("Renderer");
  return (
    <>
      <button type="button" onClick={IncreaseAge}>
        Increase Age
      </button>
      <AgeDisplay age={age} />
    </>
  );
}
