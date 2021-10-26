import react from 'react';
import '../css/form.css';

export default function Form(){
  return (
     <div className="App">
      <div className ="form">
        <div className ="header">
          Welcome
        </div>
        <div className = "idField">
          <label for ="email">
            Email
            <input type ="email"></input>
          </label>
        </div>
        <div className = "passwordField">
          <label for ="password">
            Password
            <input type ="password"></input>
          </label>
        </div>
        <div className ="loginButton">
          <button>Login</button>
        </div>
        <div className ="signUp">
          <a className ="signUpButton" href ="#signUp">
            Sign Up
          </a>
          <a className = "demoButton" href ="#demo">
            Try Demo
          </a>
        </div>
      </div>
    </div>
  )

}
