import React from 'react';
import './Button.css';

function Button({ onEdit, onDelete, itemId }) {
  return (
    <div className="item-buttons">
      <button className="button-edit" onClick={() => onEdit(itemId)}>Редактировать</button>
      <button className="button-delete" onClick={() => onDelete(itemId)}>Удалить</button>
    </div>
  );
}

export default Button;
