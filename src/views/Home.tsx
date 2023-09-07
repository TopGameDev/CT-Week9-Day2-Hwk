import React, { useCallback, useState } from "react"
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import CategoryType from "../types/category";

type Task = {
    id:number,
    task:string
}

type HomeProps = {
    flashMessage: (message: string|null, category: CategoryType|null) => void,
}



export default function Home({flashMessage}: HomeProps) {
const [tasks, setTasks] = useState<Task[]>([]);
const [newTask, setNewTask] = useState<Task>({id: 1, task: ''});

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({...newTask, [event.target.name]: event.target.value})
}

const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setTasks([...tasks, newTask])
    setNewTask({id: tasks.length + 2, task: ''})
    flashMessage(`${newTask.task} has been created`, 'success')
}

const delTask = useCallback((id: number) => {
  setTasks(tasks.filter(task => task.id !== id));
  flashMessage(`Task has been deleted`, 'danger')
}, [tasks])

// const edTask = useCallback((id:number) => {
//   const editTask = tasks.find((i) => i.id === id);
//   setNewTask(editTask)
// }, [tasks])

  return (
    <>
        <h1>Please Add a Task</h1>
        <TaskForm handleChange={handleInputChange} handleSubmit={handleFormSubmit} newTask={newTask}/>
        { tasks.map(t => <TaskCard task={t} key={t.id} delTasks={delTask} handleChange={handleInputChange} handleSubmit={handleFormSubmit}/>)}
    </>
  )
}