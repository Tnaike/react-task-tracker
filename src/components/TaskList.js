import { FaTimes } from 'react-icons/fa';

const TaskList = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      <ul>
        <li
          className={`task list ${task.reminder && 'reminder'}`}
          onDoubleClick={() => onToggle(task.id)}
        >
          <h3>
            {task.text}{' '}
            <FaTimes className='faIcon' onClick={() => onDelete(task.id)} />
          </h3>
          <p>{task.day}</p>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
