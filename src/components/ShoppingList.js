import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("All");

  // ✅ Fetch initial items
  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((r) => r.json())
      .then((data) => setItems(data));
  }, []);

  // ✅ Add item
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // ✅ Delete item
  function handleDeleteItem(deletedItem) {
    setItems(items.filter((item) => item.id !== deletedItem.id));
  }

  // ✅ Toggle cart status
  function handleToggleCart(updatedItem) {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  }

  // ✅ Filter items
  const itemsToDisplay = items.filter((item) => {
    if (filter === "All") return true;
    return item.category === filter;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onAddItem={handleAddItem} />
      <Filter onCategoryChange={setFilter} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            item={item}
            onUpdateItem={handleToggleCart}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
