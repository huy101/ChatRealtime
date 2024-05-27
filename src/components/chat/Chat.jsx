import { useEffect, useRef, useState } from "react";
import "./chat.scss";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className="Chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Hoang Son</span>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
        <div className="icon">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              unde sequi fugiat possimus laborum deserunt itaque explicabo.
              Voluptas enim eveniet eius dignissimos. Dolorum ea fuga fugit,
              adipisci optio itaque accusantium.
            </p>
            <span>1 phut truoc</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              unde sequi fugiat possimus laborum deserunt itaque explicabo.
              Voluptas enim eveniet eius dignissimos. Dolorum ea fuga fugit,
              adipisci optio itaque accusantium.
            </p>
            <span>1 phut truoc</span>
          </div>
        </div>
        <div className="" ref={endRef}></div>
        <div className="message own">
          <div className="text">
            <img
              src="https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis elit. Iusto
              uaevcadvadvds
            </p>
            <span>1 phut truoc</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="img.png" alt="" />
          <img src="camera.png" alt="" />
          <img src="mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="type message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <div className="sendButton">Send</div>
      </div>
    </div>
  );
};
export default Chat;
