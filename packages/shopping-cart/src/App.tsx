import React from "react";
import { useState } from "react";
import Header from "./pages/Header.jsx";

export const AuthContext = React.createContext({});
export const UsersContext = React.createContext({});
export const LoadingContext = React.createContext({});

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<any>([{name:"aaqib", email:"aaqib@gmail.com", password:"abc12345"}]);

  function updateStatus(status:any) {
    setAuthStatus(status)
  }

  function addUser(user:any) {
    setUsers([...users,user])
  }

  function updateLoading(status:any) {
    setIsLoading(status)
  }

  return (
    <div className="App">
      {isLoading && <div className="overlay">
        <div className="d-flex justify-content-center">
          <div className="spinner-border m-5 p-5" role="status">
          </div>
        </div>
      </div>}
      <LoadingContext.Provider value={{ isLoading, updateLoading }}>
        <UsersContext.Provider value={{users, addUser}}>
          <AuthContext.Provider value={{authStatus, updateStatus}}>
              <Header/>
          </AuthContext.Provider>
        </UsersContext.Provider>
      </LoadingContext.Provider>
    </div>
  );
}

export default App;
