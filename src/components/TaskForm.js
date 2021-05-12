import React, { useRef } from 'react';
import taskFormClasses from './TaskForm.module.css';

const TaskForm = (props) => {
  const titleRef = useRef();
  const dayTimeRef = useRef();
  const descriptionRef = useRef();
  const reminderRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const newTask = {
      title: titleRef.current.value,
      day: dayTimeRef.current.value,
      description: descriptionRef.current.value,
      reminder: reminderRef.current.checked,
    };

    titleRef.current.value = '';
    dayTimeRef.current.value = '';
    descriptionRef.current.value = '';
    reminderRef.current.checked = false;

    props.addTask(newTask);
  };
  return (
    <div className={taskFormClasses.formSection}>
      <h2>Task Form</h2>
      <form onSubmit={submitHandler}>
        <div className={taskFormClasses.formGroup}>
          <label htmlFor='title'>Title</label>
          <input
            className={taskFormClasses.formInput}
            type='text'
            id='title'
            placeholder='Task Title'
            required
            ref={titleRef}
          />
        </div>
        <div className={taskFormClasses.formGroup}>
          <label htmlFor='day'>Day &amp; Time</label>
          <input
            className={taskFormClasses.formInput}
            type='text'
            id='day'
            placeholder='Add day and time'
            required
            ref={dayTimeRef}
          />
        </div>
        <div className={taskFormClasses.formGroup}>
          <label htmlFor='description'>Description</label>
          <textarea
            className={taskFormClasses.formInput}
            id='description'
            rows='5'
            placeholder='Write description here...'
            required
            ref={descriptionRef}
          ></textarea>
        </div>
        <div
          className={`${taskFormClasses.formGroup} ${taskFormClasses.checkbox}`}
        >
          <label htmlFor='setReminder'>Set Reminder</label>
          <input
            className={`${taskFormClasses.formInput} ${taskFormClasses.formInputCheck}`}
            type='checkbox'
            id='setReminder'
            ref={reminderRef}
          />
        </div>
        <div className={taskFormClasses.formGroup}>
          <input type='submit' value='Save Item'></input>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
