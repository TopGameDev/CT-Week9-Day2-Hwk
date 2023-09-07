import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react'

type Task = {
    id: number,
    task: string
}

type PostFormProps = {
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event:React.FormEvent) => void,
    newTask: Task
}

export default function TaskForm({handleChange, handleSubmit, newTask}: PostFormProps) {
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Label>Task Title</Form.Label>
        <Form.Control onChange={handleChange} name='task' value={newTask.task}/>
        <Button className='mt-3 w-100' variant='danger' type='submit'>Add Task</Button>
    </Form>
  )
}