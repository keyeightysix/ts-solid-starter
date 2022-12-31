import type { Component } from "solid-js";

import { createSignal, createContext, useContext, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import logo from "./logo.svg";
import styles from "./App.module.css";

const initialState = {
  some : 'Thing'
}

const Context = createContext(initialState);

const Provider: Component = (props: any) => {

    const [state, setState] = createStore(initialState);
    const toPass = [state, setState];

    return (
        <Context.Provider value={toPass}>
            {props.children}
        </Context.Provider>
    );
}

function useTheContext() {
    return useContext(Context) 
};

const Inner: Component = () => {

    const [state, setState] = useTheContext();
    return (
        <div>Some {state.some}</div>
    );
}

const App: Component = () => {
  return (
    <Provider>
      <div class={styles.App}>Loaded</div>
      <Inner />
    </Provider>
  );
};

export default App;
