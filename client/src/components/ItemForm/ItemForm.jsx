import React, { useState, useEffect } from 'react';

const ItemForm = ({ item, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    if (item) {
      setFormData(item);
    }
  }, [item]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item ? item.id : null, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Название"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Описание"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Цена"
        value={formData.price}
        onChange={handleChange}
      />
      <input
        type="number"
        name="stock"
        placeholder="Количество"
        value={formData.stock}
        onChange={handleChange}
      />
      <button type="submit">{item ? 'Сохранить изменения' : 'Добавить товар'}</button>
      {item && <button type="button" onClick={onCancel}>Отмена</button>}
    </form>
  );
};

export default ItemForm;
