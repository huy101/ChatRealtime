import List from "./components/list/List.jsx";
import Chat from "./components/chat/Chat.jsx";
import Details from "./components/details/Details.jsx";
import Login from "./components/login/Login.jsx";
import Notification from "./components/notification/Notification.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase.js";
import { useEffect } from "react";
import { useUserStore } from "./lib/userStore.js";
import { useChatStore } from "./lib/chatStore.js";
// import { Router, Route, Navigate } from "react-router-dom";
const App = () => {
  const { chatId } = useChatStore();

  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  if (isLoading) return <div className="loading">Loading...</div>;
  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Details />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
