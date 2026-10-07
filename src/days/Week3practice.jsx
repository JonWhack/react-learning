import { useState } from 'react';

function Week3practice() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');

    function handleTaskNameChange(event) {
        setTaskName(event.target.value);
    }
    function addTask() {
        if(taskName === '') return;
        const newTask = {id: Date.now(), name: taskName, done: false};
        setTasks([...tasks, newTask]);
        setTaskName('');
    }
    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleDone(id) {
        setTasks(
            tasks.map((task) => 
            task.id === id ? {...task, done: !task.done} : task)
        );
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={taskName}
                onChange={handleTaskNameChange}
            />
            <button onClick={addTask}> Add Task</button>
            
            {tasks.length === 0 ? (
                <p>No tasks yet.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.done ? <s> {task.name}</s> : task.name}
                            <button onClick={() => toggleDone(task.id)}>
                                {task.done ? 'Undo' : 'Done'}
                            </button>
                            <button onClick={() => removeTask(task.id)} > Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Week3practice;