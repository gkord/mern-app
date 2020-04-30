import React, { useState } from 'react';
import { Button, FormGroup, FormControl } from 'styled-bootstrap-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = () => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    console.log(exercise);

    window.location = '/';
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <label>Username</label>
          <FormControl
            select
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map((user) => {
              return (
                <option value={user} key={user}>
                  {user}
                </option>
              );
            })}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <label>Description</label>
          <FormControl
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label>Duration (in mins)</label>
          <FormControl
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label>Date</label>
          <div>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Button type="submit">Create Exercise</Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default CreateExercise;
