import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const [item, setItem] = useState({
    id: null,
    name: null,
    description: null,
    price: null,
    category: null,
    image: null,
  });

  // Gets the route parameters (see client/src/main.jsx).
  const params = useParams();

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(`http://localhost:3000/items/${params.id}`);
      const item = await response.json();
      setItem(item);
    }

    fetchItem();
  }, [params.id]);

  useEffect(() => {
    if (item.name) {
      document.title = item.name;
    }
  }, [item.name]);

  return (
    <>
      <h1>{item.name}</h1>
    </>
  );
}

export default Item;
