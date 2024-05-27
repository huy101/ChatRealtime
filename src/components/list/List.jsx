import ChatList from "./chatList/ChatList.jsx";
import UserInfo from "./userinfo/UserInfo.jsx";
import "./list.scss";
const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
