import React from "react";
import { useState } from "react";
import Header from "./pages/Header.jsx";

export const AuthContext = React.createContext({});
export const UsersContext = React.createContext({});

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const [users, setUsers] = useState<any>([{name:"aaqib", email:"aaqib@gmail.com", password:"abc12345"}]);

  function updateStatus(status:any) {
    setAuthStatus(status)
  }

  function addUser(user:any) {
    setUsers([...users,user])
  }

  return (
    <div className="App">
    <UsersContext.Provider value={{users, addUser}}>
      <AuthContext.Provider value={{authStatus, updateStatus}}>
          <Header/>
      </AuthContext.Provider>
    </UsersContext.Provider>
    </div>
  );
}

export default App;
