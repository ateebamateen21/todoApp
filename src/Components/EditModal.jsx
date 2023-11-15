// Component for editing a todo item that pops up like a modal
// Path: todoApp/src/Components/EditModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css'; 

const EditModal = ({ isOpen, onClose, onUpdate }) => {
  const [editedText, setEditedText] = useState('');
  console.log("I clicked edit modal")

  const handleUpdate = () => {
    onUpdate(editedText);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="edit-modal">
      <h2>Edit Task</h2>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default EditModal;
