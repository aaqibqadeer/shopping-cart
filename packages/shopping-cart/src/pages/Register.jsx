import {Link} from 'react-router-dom';
import { useContext, useReducer, useEffect } from "react";
import { InputField } from '../components/InputField';
import { AuthContext, UsersContext, LoadingContext } from "../App";
import { useHistory } from "react-router-dom";

export function Register(props) {
  
  const {addUser} = useContext(UsersContext);
  const {updateLoading} = useContext(LoadingContext);
  const { authStatus } = useContext(AuthContext);
  const [formObject, setFormObject] = useReducer(formReducer, {name:"", email:"", password:"", confirmPassword:""});
  const history = useHistory();
  
  let timer;

  useEffect(() => {
    if(authStatus) {
      history.replace("/");
    }
  });
  
  function formReducer(state, event) {
    return {
      ...state,
      [event.name]: event.value
    }
  }
  
  function handleChange(event) {
    setFormObject(event)
  }

  function validUser() {
    return formObject.password === formObject.confirmPassword;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(validUser()) {
      updateLoading(true)
      timer = setTimeout(() => {
        updateLoading(false);
        addUser({name:formObject.name, email:formObject.email, password:formObject.password})
        alert("New account created successfull!")
        clearTimeout(timer);
      }, 2000);
    } 
    else {
      alert("Passwords does not match");
    }
  }

  return(
    <div className="bg-light p-5 my-5 col-5 mx-auto border border-2">
      <h3 className="text-center mb-4">Create your account</h3>
      <form className="needs-validation" onSubmit={handleSubmit}>
        <InputField name="name" label="Name:" type="text" placeholder="Enter your name" value={formObject.name}  onValueChange={handleChange} />
        <InputField name="email" label="Email:" type="email" placeholder="Enter email address" value={formObject.email}  onValueChange={handleChange} />
        <InputField name="password" label="Password:" type="password" placeholder="Enter password" value={formObject.password}  onValueChange={handleChange} />
        <InputField name="confirmPassword" label="Confirm Password:" type="password" placeholder="Repeat password" value={formObject.confirmPassword}  onValueChange={handleChange} />
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-sm m-2">Register</button>
          <Link to="/login" className="btn btn-primary btn-sm m-2">Login</Link>
        </div>
      </form>
    </div>
  )
}