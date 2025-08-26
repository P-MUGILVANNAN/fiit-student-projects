import React from 'react';

const TaskItem = ({ task, onToggleTask, onDeleteTask }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          id={`task-${task.id}`}
        />
        <label
          className={`form-check-label ${task.completed ? 'text-muted text-decoration-line-through' : ''}`}
          htmlFor={`task-${task.id}`}
        >
          {task.text}
          {task.dueDate && (
            <span className="ms-2 badge bg-warning text-dark">
              Due: {formatDate(task.dueDate)}
            </span>
          )}
        </label>
      </div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;