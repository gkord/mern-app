import React, { useState } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  FormText,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
} from 'styled-bootstrap-components';

const CreateExercise = () => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form>
        <FormGroup>
          <label>Username</label>
          <Dropdown>
            <Button
              dropdownToggle
              onClick={() => setHidden(!hidden)}
            >
              Dropdown Button
            </Button>
            <DropdownMenu
              hidden={hidden}
              toggle={() => setHidden(!hidden)}
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownDivider />
              <DropdownItem>Action after divider</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <FormText muted>
            We&#39;ll never share your email with anyone else.
          </FormText>
        </FormGroup>
      </form>
    </div>
  );
};

export default CreateExercise;
