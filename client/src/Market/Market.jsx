import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import './App.css';
import axios from 'axios';
//import Chat from './components/Chat/Chat';
import ItemList from '../components/ItemList/ItemList';
import ItemForm from '../components/ItemForm/ItemForm';
function Market(){
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editingMode, setEditingMode] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/items/');
      setItems(response.data);
    } catch (error) {
      setError('Error fetching data. Please try again later.');
      console.error('Error fetching data:', error);
    }
  };

  const handleAddItem = async (item) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/items/', item);
      setItems([...items, response.data]);
      setShowAddForm(false);
    } catch (error) {
      setError('Error adding item. Please try again later.');
      console.error('Error adding item:', error);
    }
  };

  const handleUpdateItem = async (id, updatedItem) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/items/${id}/`, updatedItem);
      const updatedItems = items.map((item) => (item.id === id ? response.data : item));
      setItems(updatedItems);
      setSelectedItem(null);
      setEditingMode(false);
    } catch (error) {
      setError('Error updating item. Please try again later.');
      console.error(`Error updating item with ID ${id}:`, error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/items/${id}/`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      setError('Error deleting item. Please try again later.');
      console.error(`Error deleting item with ID ${id}:`, error);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setEditingMode(true);
    setShowAddForm(false);
  };

  const handleFormCancel = () => {
    setSelectedItem(null);
    setEditingMode(false);
    setShowAddForm(false);
    setError(null);
  };

  const handleShowAddForm = () => {
    setShowAddForm(true);
    setEditingMode(false);
    setSelectedItem(null);
    setError(null);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Link to="/">
        <button className="button-back">Назад</button>
      </Link>
      
      {showAddForm && <ItemForm onSubmit={handleAddItem} onCancel={handleFormCancel} />}
      {editingMode && <ItemForm item={selectedItem} onSubmit={handleUpdateItem} onCancel={handleFormCancel} />}
      <ItemList items={items} onItemClick={handleItemClick} onDeleteItem={handleDeleteItem} onAddItem={handleAddItem} />
    </div>
  );
}
export default Market;