import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
// import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch(
      'https://react-general-c6862-default-rtdb.firebaseio.com/tasks.json'
      // 'http://localhost:5000/tasks'
    );
    const data = await response.json();

    return data;
  };

  const fetchTask = async (id) => {
    const response = await fetch(
      `https://react-general-c6862-default-rtdb.firebaseio.com/tasks.json/${id}`
      // `http://localhost:5000/tasks/${id}`
    );
    const data = await response.json();

    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      const tasks = [];
      for (const key in tasksFromServer) {
        const newTask = tasksFromServer[key];
        tasks.push(newTask);
      }
      setTasks(tasks);
    };

    getTasks();
  }, []);

  const deleteTaskHandler = async (id) => {
    await fetch(
      `https://react-general-c6862-default-rtdb.firebaseio.com/tasks.json/${id}`,
      // `http://localhost:5000/tasks/${id}`,
      {
        method: 'DELETE',
      }
    );

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminderHandler = async (id) => {
    const toggledTask = await fetchTask(id);
    const updatedTask = { ...toggledTask, reminder: !toggledTask.reminder };

    const res = await fetch(
      `https://react-general-c6862-default-rtdb.firebaseio.com/tasks.json/${id}`,
      // `http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      }
    );

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const addTaskHandler = async (task) => {
    const res = await fetch(
      `https://react-general-c6862-default-rtdb.firebaseio.com/tasks.json/`,
      // `http://localhost:5000/tasks`,
      {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
  };

  return (
    <div className='container'>
      <Header
        title='Task Tracker'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <TaskForm addTask={addTaskHandler} />}
      {tasks && tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onDelete={deleteTaskHandler}
          onToggle={toggleReminderHandler}
        />
      ) : (
        <h2 style={{ textAlign: 'center' }}>No tasks to show here</h2>
      )}
      <Footer />
    </div>
  );
};

export default App;
