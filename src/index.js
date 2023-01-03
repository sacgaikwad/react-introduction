//import some react tools
import ReactDOM from "react-dom/client";

//import first component
import { App } from "./App"

//target root div
const rootDiv = document.getElementById("root");

//transform the root div into react node
const reactRoot = ReactDOM.createRoot(rootDiv);

//inject our app component into the react node
reactRoot.render(<App></App>);