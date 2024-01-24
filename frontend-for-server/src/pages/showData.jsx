import React, { useState } from 'react';

export default function Showdata({ showCard }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const handleItemClick = (item) => {
    if (!isEditing) {
      setSelectedItem(item);
    } else {
      setEditedItem(null);
      setIsEditing(false);
      setSelectedItem(item);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedItem({ ...selectedItem });
  };

  const handleSave = () => {
    setSelectedItem(editedItem);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedItem(null);
    setIsEditing(false);
  };

  return (
    <div className="showdata">
      <h1>ShowData</h1>
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
      <div className="right-panel">
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
        ) : (
          <>
            <h2>Selected Item</h2>
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
      </div>
    </div>
  );
}
