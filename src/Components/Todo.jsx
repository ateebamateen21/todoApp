import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import ConfirmationModal from './ConfirmationModal';
import EditModal from './EditModal';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  const todoForm = <TodoForm edit={edit} onSubmit={submitUpdate} />;
  if (edit.id) {
    return todoForm;  }

  //state to manage the delete modal


  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTodoId, setDeleteTodoId] = useState(null);
  //function to open the delete modal
  const openDeleteModal = (id) => {
    setDeleteModalOpen(true);
    setDeleteTodoId(id);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setDeleteTodoId(null);
  };
  //state to manage the edit modal
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  //function to open the edit modal
  const openEditModal = (id) => {
    setEditModalOpen(true);
    setEditTodoId(id);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditTodoId(null);
  };





  return todos.map((todo, index) => (
    <>
      {deleteModalOpen && (
        <ConfirmationModal
          isOpen={deleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={() => {
            removeTodo(deleteTodoId);
            closeDeleteModal();
          }}
        />
      )}

      {editModalOpen && (
        <EditModal
          isOpen={editModalOpen}
          onClose={closeEditModal}
          onUpdate={(text) => {
            updateTodo(editTodoId, { text });
            closeEditModal();
          }}
        />
      )}


      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => openDeleteModal(todo.id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </>
  ));
};

export default Todo;