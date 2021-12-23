import TaskList from './TaskList';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((taskData, index) => (
        <TaskList
          key={index}
          task={taskData}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
