import "./login.scss";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    URL: "",
  });
  const handleAvatar = (e) => {
    if (e.target.file[0]) {
      setAvatar({
        file: e.target.file[0],
        url: URL.createObjectURL(e.target.file[0]),
      });
    }
  };
  // const navigate = useNavigate();
  return (
    <div className="login">
      <div className="item">
        <h2>Welcomesdvdasv</h2>
        <form>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create</h2>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            sfsdvds
          </label>
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
