import React from 'react';
import taskItemClasses from './TaskItem.module.css';
import { FaTimes } from 'react-icons/fa';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`${taskItemClasses.taskItem} ${
        task.reminder ? taskItemClasses.done : ''
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className={taskItemClasses.heading}>
        <h3>{task.title}</h3>
        <FaTimes
          style={{
            color: 'darkred',
            cursor: 'pointer',
          }}
          onClick={() => onDelete(task.id)}
        />
      </div>
      <span>{task.day}</span>
      <span>{task.reminder}</span>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;
