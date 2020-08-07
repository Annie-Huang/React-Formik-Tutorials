import React from 'react';
import './App.css';
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm";

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <RegistrationForm />
      <EnrollmentForm />
      <FormikContainer/>
    </div>
  );
}

export default App;
