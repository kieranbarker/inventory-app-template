import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("http://localhost:3000/items");
      const items = await response.json();
      setItems(items);
    }

    fetchItems();
  }, []);

  return (
    <>
      <h1>Inventory</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
