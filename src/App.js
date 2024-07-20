import React, { useState } from 'react';
import './App.css';
import Header from './../src/components/Header';
import TaskList from './../src/components/TaskList';
import AddTask from './../src/components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      date: '2024-07-01',
      time: '14:30',
      completed: false,
    },
    {
      id: 2,
      text: 'Meeting at School',
      date: '2024-07-02',
      time: '10:00',
      completed: false,
    },
    {
      id: 3,
      text: 'Food Shopping',
      date: '2024-07-03',
      time: '18:00',
      completed: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const addTask = (task) => {
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      <div className='underline'></div><br/>
      <div className='search-container'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='Search Tasks...'
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>
      </div><br/>
      <TaskList tasks={filteredTasks} onUpdate={updateTask} onDelete={deleteTask} onToggle={toggleComplete} />
    </div>
  );
}

export default App;
