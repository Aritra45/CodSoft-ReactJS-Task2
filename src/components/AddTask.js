import React, { useState } from 'react';
import './../styles/AddTask.css'; 

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !date || !time) {
      alert('Please fill out all fields');
      return;
    }
    onAdd({ text, date, time });
    setText('');
    setDate('');
    setTime('');
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label style={{fontWeight:'bold'}}>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label style={{fontWeight:'bold'}}>Date</label>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label style={{fontWeight:'bold'}}>Time</label>
        <input
          type='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          step="300"
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
