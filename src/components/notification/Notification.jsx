import "./notification.scss";
import { ToastContainer } from "react-toastify";
const Notification = () => {
  return (
    <div className="notification">
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default Notification;
