import { useState } from 'react';

let dateCreated = new Date().toLocaleDateString();

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const [createdAt, setCreatedAt] = useState(dateCreated);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    if (!day) {
      alert('Please add day and time');
    }

    onAdd({ text, day, reminder, createdAt });

    setText('');
    setDay('');
    setCreatedAt('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='DD/MM/YYYY - 00:00PM'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' className='btn btn-block' value='Save Task' />
    </form>
  );
};

export default AddTask;
