import React, { useState } from 'react';
import { Button, FormGroup, FormControl } from 'styled-bootstrap-components';
import axios from 'axios';

const CreateUser = () => {
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
    };

    console.log(user);

    axios
      .post('http://localhost:5000/users/add', user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setUsername('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Create New User</h3>
        <FormGroup>
          <label>Username</label>
          <FormControl
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" dark>
            Create User
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default CreateUser;
