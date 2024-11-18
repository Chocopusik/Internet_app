import React from 'react';
import '../Button/Button.css';
const Item = ({ item, onClick, onDelete }) => {
  return (
    <div className="item">
      <h2>Игрушка: {item.name}</h2>
      <p>Описание: {item.description}</p>
      <p>Цена: {item.price} руб.</p>
      <p>В наличии: {item.stock} шт.</p>
      <button className="button-edit" onClick={() => onClick(item)}>Редактировать</button>
      <button className="button-delete" onClick={() => onDelete(item.id)}>Удалить</button>
    </div>
  );
};

export default Item;
