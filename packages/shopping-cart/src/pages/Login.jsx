import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext, UsersContext, LoadingContext } from "../App";
import { InputField } from "../components";

export const Login = () => {
  const { authStatus, updateStatus } = useContext(AuthContext);
  const { updateLoading } = useContext(LoadingContext);
  const { users } = useContext(UsersContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (authStatus) {
      history.goBack();
    }
  }, [authStatus, history]);

  const userExists = () =>
    users.some((user) => user.email === email && user.password === password);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLoading(true);
    if (userExists()) {
      let timer = setTimeout(() => {
        updateLoading(false);
        updateStatus(true);
        clearTimeout(timer);
      }, 2000);
    } else {
      updateLoading(false);
      alert("Wrong Credentials");
    }
  };

  return (
    <div className="bg-light p-5 my-5 col-5 mx-auto border border-2">
      <h3 className="text-center mb-4">Enter your credentials</h3>
      <form className="" onSubmit={handleSubmit}>
        <InputField
          label="Email"
          placeholder="Enter email address"
          value={email}
          onChange={setEmail}
        />
        <InputField
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
        />
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-sm m-2">
            Login
          </button>
          <Link to="/register" className="btn btn-primary btn-sm m-2">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};
