import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { InputField } from "../components";
import { useRegisterHook } from "../utils/api/useRegisterHook";
import { withAuth } from "../store";
import { Overlay } from "../AppStyle.jsx";

export const Register = withAuth(({ authStatus }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { res, register } = useRegisterHook();

  const history = useHistory();

  useEffect(() => {
    if (authStatus) {
      history.replace("/");
    }
  }, [history, authStatus]);

  const validUser = () => password === confirmPassword;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validUser()) {
      const newUser = {
        name: name,
        email: email,
        password: password,
      };
      register(newUser);
    } else {
      alert("Passwords does not match");
    }
  };

  return (
    <>
      {res.loading && (
        <Overlay>
          <div className="d-flex justify-content-center">
            <div className="spinner-border m-5 p-5" role="status"></div>
          </div>
        </Overlay>
      )}
      {!res.loading && (
        <div className="bg-light p-5 my-5 col-5 mx-auto border border-2">
          <h3 className="text-center mb-4">Create your account</h3>
          <form className="needs-validation" onSubmit={handleSubmit}>
            <InputField
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChange={setName}
            />
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
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Repeat password"
              value={confirmPassword}
              onChange={setConfirmPassword}
            />
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-sm m-2">
                Register
              </button>
              <Link to="/login" className="btn btn-primary btn-sm m-2">
                Login
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
});
