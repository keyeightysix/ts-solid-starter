/* @refresh reload */

import { render } from "solid-js/web";
import Nested from "./nested";
import { theProvider } from "./counter";

function App() {
  return (
    <>
      <h1>Welcome to Counter App</h1>
      <Nested name="component #1" />
    </>
  );
}

render(
  () => (
    <theProvider>
      <App />
    </theProvider>
  ),
  document.getElementById("app")
);
