import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

type Task = {
    id: number,
    task: string
}

type TaskCardProps = {
    task: Task,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event:React.FormEvent) => void,
    delTasks: (id:number) => void
}

export default function TaskCard({task, delTasks, handleChange, handleSubmit}: TaskCardProps) {
  const [editing, setEditing] = useState(false)

  const handleEdit = () => {
    setEditing(true)
  }

  return (
    <Card key={task.id}>
        <Card.Body className = 'card-body'>
            <Card.Title>{task.task}</Card.Title>
            <div>
              <Button onClick={() => delTasks(task.id)}>X</Button>
              <Button onClick={handleEdit}>Edit</Button>
            </div>
        </Card.Body>
        {editing && 
          <div>
              <Form onSubmit={handleSubmit} className="edit-field">
                <Form.Control onChange={handleChange} name='task' value={task.task}/>
                <Button  variant='success' type='submit'>Finish</Button>
              </Form>
          </div>
        }
    </Card>
  )
}