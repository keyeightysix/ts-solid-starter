import { createSignal, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const initialContext = {};

const theContext = createContext();

console.log("there");

export function theProvider(props) {
  const [store, setStore] = createStore(initialContext);
  console.log(store);
  const theProvidedStore = [store, setStore];

  return (
    <theContext.Provider value={theProvidedStore}>
      {props.children}
    </theContext.Provider>
  );
}

export function useTheContext() {
  return useContext(theContext);
}
