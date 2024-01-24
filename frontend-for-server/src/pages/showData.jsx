import "./ShowData.css";
import React, { useState } from 'react';

export default function ShowData({ showCard }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  const handleItemClick = (item) => {
    if (!isEditing && !isCreating) {
      setSelectedItem(item);
    } else {
      setEditedItem(null);
      setIsEditing(false);
      setIsCreating(false);
      setSelectedItem(item);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedItem({ ...selectedItem });
    setIsCreating(false);
  };

  const handleSave = () => {
    setSelectedItem(editedItem);
    setIsEditing(false);
    setIsCreating(false);
  };

  const handleCancel = () => {
    setEditedItem(null);
    setIsEditing(false);
    setIsCreating(false);
  };

  const handleCreateToggle = () => {
    setIsCreating(!isCreating);
    setEditedItem(null);
    setIsEditing(false);
    setSelectedItem(null);
  };

  const handleCreateSave = () => {
    const newItemWithId = { ...newItem, id: Math.random() }; 
    showCard.push(newItemWithId);
    setNewItem({ name: '', description: '' }); 
  };
  
  return (
    <div className="showdata">
      <div className="left-panel">
        <h2>DB List Items</h2>
        <ul>
          {showCard.map((card) => (
            <li
              key={card.name}
              image={card.image}
              onClick={() => handleItemClick(card)}
            >
              {card}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-panel fixed-panel">
        {isEditing ? (
          <>
            <h2>Edit Item</h2>
            <input
              type="text"
              value={editedItem.name}
              onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
            />
            <textarea
              value={editedItem.description}
              onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
         ) : isCreating ? (
            <>
              <input
                type="text"
                placeholder="Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={newItem.description}
                onChange={(e) =>
                  setNewItem({ ...newItem, description: e.target.value })
                }
              />
              <button onClick={handleCreateSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
            {selectedItem ? (
              <div>
                <h3>{selectedItem.props.name}</h3>
                <img src={selectedItem.props.image} alt={selectedItem.props.name} />
                <button onClick={handleEdit}>Edit</button>
              </div>
            ) : (
              <p>Select an item from the left panel.</p>
            )}
          </>
        )}
        <button onClick={handleCreateToggle}>
        {isCreating ? 'Cancel Create' : 'Create New'}
      </button>
      </div>
    </div>
  );
}



