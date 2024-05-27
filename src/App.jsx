import List from "./components/list/List.jsx";
import Chat from "./components/chat/Chat.jsx";
import Details from "./components/details/Details.jsx";
import Login from "./components/login/Login.jsx";
// import { Router, Route, Navigate } from "react-router-dom";
const App = () => {
  const user = false;
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
