import {Link} from 'react-router-dom';
export default function Register(props) {
  return(
    <div className="bg-light p-5 my-5 col-5 mx-auto border border-2">
      <h3 className="text-center mb-4">Create your account</h3>
      <form className="">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="text" className="form-control" placeholder="Enter email address" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" placeholder="Enter password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password:</label>
          <input type="password" placeholder="Repeat password" className="form-control" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-sm m-2">Register</button>
          <Link to="/login" className="btn btn-primary btn-sm m-2">Login</Link>
        </div>
      </form>
    </div>
  )
}