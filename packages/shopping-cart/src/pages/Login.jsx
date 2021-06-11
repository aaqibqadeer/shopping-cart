import { Link } from 'react-router-dom';
import InputField from '../components/InputField';

export default function Login(props) {
  
  return(
    <div className="bg-light p-5 my-5 col-5 mx-auto border border-2">
      <h3 className="text-center mb-4">Enter your credentials</h3>
      <form className="">
        <InputField label="Email:" type="text" placeholder="Enter email address"/>
        <InputField label="Password:" type="password" placeholder="Enter password"/>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-sm m-2">Login</button>
          <Link to="/register" className="btn btn-primary btn-sm m-2">Register</Link>
        </div>
      </form>
    </div>
  )
}