import {Link} from 'react-router-dom';
import InputField from '../components/InputField';

export default function Register(props) {

  return(
    <div className="bg-light p-5 my-5 col-5 mx-auto border border-2">
      <h3 className="text-center mb-4">Create your account</h3>
      <form className="">
        <InputField label="Name:" type="text" placeholder="Enter your name"/>
        <InputField label="Email:" type="email" placeholder="Enter email address"/>
        <InputField label="Password:" type="password" placeholder="Enter password"/>
        <InputField label="Confirm Password:" type="password" placeholder="Repeat password"/>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-sm m-2">Register</button>
          <Link to="/login" className="btn btn-primary btn-sm m-2">Login</Link>
        </div>
      </form>
    </div>
  )
}