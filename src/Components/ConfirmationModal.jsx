//This component is for the confirmation modal that pops up when the user clicks on the delete button
// importing the css file for the modal from App.css
import '../App.css';
// ConfirmationModal.jsx
import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal-styles">
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this task?</p>
      <button onClick={onConfirm} className='modal-delete-icon'>Delete</button>
      <button onClick={onClose} className='modal-close-icon'>Cancel</button>
    </Modal>
  );
};

export default ConfirmationModal;
