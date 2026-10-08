import { useState } from 'react';

// Q6

function Badge({ label }) {
    return <span> [label]</span>;
}

export default Badge;

// Q7 

const [tasks, setTasks] = useState([]);
const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
};

// Q8

/*
const removeTask = (taskRemove) => {
    setTasks(tasks.filter((task) => task !== taskRemove));
}
*/

function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
}
