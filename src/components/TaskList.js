import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
  return (
    <div className='tasksList'>
      <h2>Tasks List</h2>
      {props.tasks.map((singleTask, index) => (
        <TaskItem
          key={index}
          task={singleTask}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
