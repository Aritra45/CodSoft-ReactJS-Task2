import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onUpdate, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default TaskList;
