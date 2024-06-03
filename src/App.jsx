import List from "./components/list/List.jsx";
import Chat from "./components/chat/Chat.jsx";
import Details from "./components/details/Details.jsx";
import Login from "./components/login/Login.jsx";
import Notification from "./components/notification/Notification.jsx";
// import { Router, Route, Navigate } from "react-router-dom";
const App = () => {
  const user = true;
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
      <Notification />
    </div>
  );
};

export default App;
