import { Link, Redirect } from 'react-router-dom';
import { useReducer, useContext } from "react";
import InputField from '../components/InputField';
import { AuthContext } from "../App";
import { UsersContext } from "../App";

export default function Login(props) {

  const {authStatus, updateStatus} = useContext(AuthContext);
  const {users, addUser} = useContext(UsersContext);

  function formReducer(state, event) {
    return {
      ...state,
      [event.name]: event.value
    }
  }

  const [formObject, setFormObject] = useReducer(formReducer, {email:"", password:""});
  
  function handleChange(event) {
    setFormObject(event)
  }

  function userExists() {
    return users.some(user => user.email === formObject.email && user.password === formObject.password )
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(userExists()) {
      setTimeout(() => {
        alert("Login Successfull!")
        updateStatus(true);
        props.history.replace("/");
        
      }, 2000);
    } 
    else {
      alert("Wrong Credentials");
    }
  }
  
  return(
    <div className="bg-light p-5 my-5 col-5 mx-auto border border-2">
      <h3 className="text-center mb-4">Enter your credentials</h3>
      <form className="" onSubmit={handleSubmit}>
        <InputField label="Email:" name="email" type="text" placeholder="Enter email address" value={formObject.email}  onValueChange={handleChange}/>
        <InputField label="Password:" name="password" type="password" placeholder="Enter password" value={formObject.password}  onValueChange={handleChange}/>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-sm m-2">Login</button>
          <Link to="/register" className="btn btn-primary btn-sm m-2">Register</Link>
        </div>
      </form>
    </div>
  )
}