import React, { useState } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
} from 'styled-bootstrap-components';

const CreateUser = () => {
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
    };

    console.log(user);

    setUsername('')
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
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" dark>Create User</Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default CreateUser;
