import { useTheContext } from "./counter";

export default function Nested(props) {
  const [store, setStore] = useTheContext();

  const storeSomething = () => {
    setStore();
  };

  return (
    <>
      <div>{store}</div>
      <input type="text" onClick={storeSomething} value={store["props.name"]} />
      <button onClick={storeSomething}>-</button>
    </>
  );
}
