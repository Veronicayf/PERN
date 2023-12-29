import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TaskList = () => {

    const [tasks, setTasks] = useState([])
    const navigate = useNavigate();

    const loadTask = async () => {

        try {
            const res = await fetch('http://localhost:4000/tasks')
            const data = await res.json()
            setTasks(data)
        } catch (error) {
            console.error('Error loading tasks', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:4000/tasks/${id}`, {
                method: 'DELETE',
            })
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        loadTask()
    }, [])


    return (
        <div>
            <h2>Task List</h2>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>

                    <button onClick={() => navigate(`/${task.id}/edit`)}>✏️</button>
                    <button onClick={() => handleDelete(task.id)}>❌</button>
                </div>
            ))}


        </div>
    );
}

export default TaskList
