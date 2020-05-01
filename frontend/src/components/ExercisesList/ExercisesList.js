import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Tr } from 'styled-bootstrap-components';
import axios from 'axios';

const ExerciseList = () => {
  // State
  const [exercises, setExercises] = useState([]);

  // Effects
  useEffect(() => {
    axios
      .get('http://localhost:5000/exercises')
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Component to render
  const Exercise = ({ exercise, deleteExercise }) => (
    <Tr light>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <Link
          to={`/edit/${exercise._id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <Button>edit</Button>
        </Link>{' '}
        <Button onClick={() => deleteExercise(exercise._id)}>delete</Button>
      </td>
    </Tr>
  );
  const exerciseList = () => {
    return exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  };
  const deleteExercise = (id) => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => console.log(res.data));

    setExercises(exercises.filter((elem) => elem._id !== id));
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <Table responsiveMd theadLight bordered>
        <thead>
          <Tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </Tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </Table>
    </div>
  );
};

export default ExerciseList;
