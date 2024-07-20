import React, { useState } from 'react';
import './../styles/Task.css'

const Task = ({ task, onDelete, onUpdate, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);
  const [updatedDate, setUpdatedDate] = useState(task.date);
  const [updatedTime, setUpdatedTime] = useState(task.time);

  const handleUpdate = () => {
    if (!updatedText || !updatedDate || !updatedTime) {
      alert('Please fill out all fields');
      return;
    }
    onUpdate(task.id, {
      text: updatedText,
      date: updatedDate,
      time: updatedTime,
    });
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className='edit-form'>
          <input
            type='text'
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <input
            type='date'
            value={updatedDate}
            onChange={(e) => setUpdatedDate(e.target.value)}
          />
          <input
            type='time'
            value={updatedTime}
            onChange={(e) => setUpdatedTime(e.target.value)}
          />
          <button
            style={styles.updateButton}
            onClick={handleUpdate}
            className='zoom'
          >
            Update
          </button>
        </div>
      ) : (
        <div onDoubleClick={() => onToggle(task.id)}>
          <h3>{task.text}</h3>
          <p>
            {task.date} at {task.time}
          </p>
          <button
            style={styles.editButton}
            onClick={() => setIsEditing(true)}
            className='zoom'
          >
            Edit
          </button>
          <button
            style={styles.deleteButton}
            onClick={() => onDelete(task.id)}
            className='zoom'
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  editButton: {
    backgroundColor: '#f8f8f8',
    color: '#333',
    border: '1px solid #ccc',
    padding: '0.3rem 0.6rem',
    marginRight: '0.5rem',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '0.3rem 0.6rem',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '0.3rem 0.6rem',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Task;
