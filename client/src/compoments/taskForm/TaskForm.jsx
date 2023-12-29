import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm = () => {

    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const [loading, setloading] = useState(false)

    const navigate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setloading(true)

        const url = params.id
            ? `http://localhost:4000/tasks/${params.id}`
            : 'http://localhost:4000/tasks';

        const method = params.id ? 'PUT' : 'POST';

        const res = await fetch(url, {
            method,
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json' }
        });

        await res.json();

        setloading(false);
        navigate('/');
    }

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const loadTask = async (id) => {
        const res = await fetch(`http://localhost:4000/${id}`)
        const data = await res.json()
        setTask({ title: data.title, description: data.description })
    }

    useEffect(() => {
        if (params.id) {
            loadTask(params.id)
        }
    }, [params.id]);

    return (
        <div>
            <h3>Create Tasks</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name='title' placeholder='Write your title'
                    onChange={handleChange}
                    value={task.title}
                />

                <label>Description</label>
                <textarea name="description" cols="30" rows="4" placeholder='Write your description'
                    onChange={handleChange}
                    value={task.description}
                />

                <button
                    type='submit'
                    disabled={!task.title || !task.description}>
                    Save
                </button>
                {loading ? 'Please Wait' : ' '}
            </form>
        </div>
    )
}

export default TaskForm
