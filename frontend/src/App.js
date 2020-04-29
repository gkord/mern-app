import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ExercicesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';



const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact component={ExercicesList} />
      <Route path="edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path="/user" component={CreateUser}/>
    </BrowserRouter>
  );
};

export default App;
