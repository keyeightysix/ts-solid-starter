import type { Component } from "solid-js";

import { createSignal, createContext, useContext, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import logo from "./logo.svg";
import styles from "./App.module.css";

const initialState = {
  something : ''
}

const DAWContext = createContext();

const DAWProvider = (props: any) => {
  
  const [state, setState] = createStore(initialState);

  return (
    <DAWContext.Provider value={state}>
      {props.children}
    </DAWContext.Provider>
  );
}

console.log(useContext(DAWContext));

function useDAWContext() { 
  return useContext(DAWContext) 
};

console.log(useDAWContext());

const App: Component = () => {
  
  onMount( () => {
    console.log(useDAWContext());
  });
  
  //const [state] = useDAWContext();
  //console.log(state);
  
  // for a global style store purpose store
  // is better as it'll contain arrays & objects
  //const [getSignal, setSignal] = createSignal();

  return (
    <DAWProvider>
      <div class={styles.App}></div>
    </DAWProvider>
  );
};

export default App;
