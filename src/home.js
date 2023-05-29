import { useState ,useEffect} from "react";



export default function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);


  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  const title = "React Dynamic shopping list";

  return (
    <>
    <div className=" p-3 ">
      <h1 className="text-white text-4xl mt-3">{title}</h1>
      <div className="shopping-list mt-3">
        <h2 className=" font-bold">Items To Buy</h2>
        <form onSubmit={onSubmit} className="flex items-center justify-center flex-col mt-4">
          <input
            className="bg-gray-200 rounded-md p-3 text-zinc-950 mt-3"
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button className="bg-pink-900 p-3 m-3 rounded-md">Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item
              key={item + index}
              item={item}
              onRemoveItem={onRemoveItem}
            />
          ))}
        </ul>
        <div className="total font-bold">Total: <strong>{items.length}</strong> item(s)</div>
      </div>
      <div>
        <h2 className="flex items-start justify-start">cossi wing@2023</h2>
      </div></div>
    </>
  );
}

function Item({ item, onRemoveItem }) {
  function handleRemoveItem() {
    onRemoveItem(item);
  }

  return (
    <li className="gap-3 flex items-center justify-center">
      {item}
      <button className="delete p-1 " onClick={handleRemoveItem}>
        delete
      </button>
    </li>
  );
}
