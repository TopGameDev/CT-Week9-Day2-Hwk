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
    delTasks: (id:number) => void
    editTask: (id:number, editedTask:Task) => void
}

export default function TaskCard({task, delTasks, editTask}: TaskCardProps) {
  const [editing, setEditing] = useState(false)
  const [editedTask, setEditedTask] = useState<Task>(task)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask({...editedTask, task: e.target.value})
  }

  const handleFormSubmit = (e: React.FormEvent, id:number, editedTask:Task) => {
    e.preventDefault()
    editTask(id, editedTask)
  }


  return (
    <Card key={task.id}>
        <Card.Body className = 'card-body'>
            <Card.Title>{task.task}</Card.Title>
            <div>
              <Button onClick={() => delTasks(task.id)}>X</Button>
              <Button onClick={() => setEditing(!editing)}>Edit</Button>
            </div>
        </Card.Body>
            {editing && 
              <div>
                  <Form className="edit-field">
                    <Form.Control value={editedTask.task} onChange={handleInputChange}/>
                    <Button  variant='success' type='submit' onClick={(e) => {
                      setEditing(!editing)
                      handleFormSubmit(e, task.id, editedTask)}}>Finish</Button>
                  </Form>
              </div>
            }
    </Card>
  )
}