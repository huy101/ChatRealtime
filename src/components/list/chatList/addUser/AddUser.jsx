import "./addUser.scss";

const AddUser = () => {
  return (
    <div className="addUser">
      <form>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Hoang Son</span>
        </div>
        <button>Add user</button>
      </div>
    </div>
  );
};

export default AddUser;
