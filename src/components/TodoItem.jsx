function TodoItem({ task, onDelete }) {
  return (
    <li className="todo-item">
      <span className="task-text">{task.title}</span>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem