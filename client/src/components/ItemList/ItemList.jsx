import React, { useState } from 'react';
import Item from '../Item/Item';

const ItemList = ({ items, onItemClick, onDeleteItem, onAddItem }) => {
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  const handleInputChange = (event) => {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddItem(newItem);
    setNewItem({
      name: '',
      description: '',
      price: 0,
      stock: 0,
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Название"
          value={newItem.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Описание"
          value={newItem.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Цена"
          value={newItem.price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Количество"
          value={newItem.stock}
          onChange={handleInputChange}
        />
        <button type="submit">Добавить товар</button>
      </form>
      {items.map((item) => (
        <Item key={item.id} item={item} onClick={onItemClick} onDelete={onDeleteItem} />
      ))}
    </div>
  );
};

export default ItemList;

