import { useState, useEffect } from "react"
import axios from "axios"
import "./todolist.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons"

interface Task {
  id: number
  title: string
  text: string
  done: boolean
  createdAt: string
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [editingTask, setEditingTask] = useState<number | null>(null)
  const [editedTaskText, setEditedTaskText] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then((response) => {
      setTasks(response.data)
    })
  }, [])

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [
        ...tasks,
        {
          id: Date.now(),
          title: newTaskTitle,
          text: newTask,
          done: false,
          createdAt: new Date().toLocaleString(),
        },
      ]

      axios.post("http://localhost:3000/tasks", {
        title: newTaskTitle,
        text: newTask,
        done: false,
        createdAt: new Date().toLocaleString(),
      })

      setTasks(updatedTasks)
      setNewTask("")
      setNewTaskTitle("")
    }
  }

  const handleToggleDone = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    )

    axios.put(`http://localhost:3000/tasks/${id}`, {
      done: !tasks.find((task) => task.id === id)?.done,
    })

    setTasks(updatedTasks)
  }

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)

    axios.delete(`http://localhost:3000/tasks/${id}`)

    setTasks(updatedTasks)
  }

  const handleEditTask = (id: number) => {
    setEditingTask(id)
    setEditedTaskText(tasks.find((task) => task.id === id)?.text || "")
  }

  const handleSaveEdit = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: task.title,
            text: editedTaskText,
            createdAt: new Date().toLocaleString(),
          }
        : task
    )

    const editedTask = tasks.find((t) => t.id === id)

    axios.put(`http://localhost:3000/tasks/${id}`, {
      title: editedTask?.title,
      text: editedTaskText,
      createdAt: new Date().toLocaleString(),
    })

    setTasks(updatedTasks)
    setEditingTask(null)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Task Title..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.done ? "done" : ""}>
            <span
              className="task-title"
              style={{
                color: "Purple",
                fontWeight: "bold",
                fontSize: "120%",
                textTransform: "uppercase",
                backgroundColor: "white",
                borderRadius: "5px",
                padding: "5px",
                fontStyle: "italic",
              }}
            >
              {task.title}
            </span>
            {editingTask === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                />
                <button
                  className="btns"
                  onClick={() => handleSaveEdit(task.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <span className="content">{task.text}</span>
            )}
            <br />
            <span className="created-at">{task.createdAt}</span>
            <div>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggleDone(task.id)}
              />
              {editingTask !== task.id ? (
                <button onClick={() => handleEditTask(task.id)}>
                  Edit{" "}
                  <FontAwesomeIcon
                    icon={faPenSquare}
                    className="edit-icon"
                    onClick={() => handleEditTask(task.id)}
                  />
                </button>
              ) : null}
              <button onClick={() => handleDeleteTask(task.id)}>
                Delete{" "}
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete-icon"
                  onClick={() => handleDeleteTask(task.id)}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
