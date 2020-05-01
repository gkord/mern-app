import React, { useState, useEffect } from 'react';
import { Button, FormGroup, FormControl } from 'styled-bootstrap-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const EditExercise = ({ match }) => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/exercises/${match.params.id}`)
      .then((res) => {
        setUsername(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(new Date(res.data.date));
      });

    axios
      .get('http://localhost:5000/users/')
      .then((res) => {
        if (res.data.length > 0) {
          setUsers(res.data.map((user) => user.username));
          setUsername(res.data[0].username);
        }
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    console.log(exercise);

    axios
      .post(
        `http://localhost:5000/exercises/update/${match.params.id}`,
        exercise,
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = '/';
  };

  const handleCancel = () => {
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
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </div>
        </FormGroup>

        <FormGroup formInline>
          <Button type="submit" dark mr2>
            Edit Exercise
          </Button>
          <Button type="reset" onClick={handleCancel} dark>
            Cancel
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default EditExercise;
