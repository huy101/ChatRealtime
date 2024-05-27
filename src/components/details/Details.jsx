import "./Details.scss";
import React, { useState } from "react";
const Details = () => {
  const [open, setOpen] = useState("false");
  return (
    <div className="details">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Hoang Son</h2>
        <p>Lorem ipsum dolor sit, amet</p>
      </div>
      <div className="info">
        <div className="options">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arrowDUp.png" alt="" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>Shared photos </span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <div className="photos">
          <div className="photosItem">
            <div className="photoDetail">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"
                alt=""
              />
              <span>photo -2024</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
        <div className="photos">
          <div className="photosItem">
            <div className="photoDetail">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"
                alt=""
              />
              <span>photo -2024</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
        <div className="photos">
          <div className="photosItem">
            <div className="photoDetail">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"
                alt=""
              />
              <span>photo -2024</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
        <div className="photos">
          <div className="photosItem">
            <div className="photoDetail">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"
                alt=""
              />
              <span>photo -2024</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
        <div className="photos">
          <div className="photosItem">
            <div className="photoDetail">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"
                alt=""
              />
              <span>photo -2024</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
        <div className="photos">
          <div className="photosItem">
            <div className="photoDetail">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"
                alt=""
              />
              <span>photo -2024</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
        <div className="photos">
          <div className="photosItem">
            <div className="photoDetail">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"
                alt=""
              />
              <span>photo -2024</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
        <div className="options">
          <div className="title">
            <span>share photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block user</button>
        <button className="logout"></button>
      </div>
    </div>
  );
};

export default Details;
