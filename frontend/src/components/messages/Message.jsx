import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-sky-500" : "bg-gray-600";

  return (
    <div className={`chat ${chatClassName} p-2`}>
      <div className="avatar chat-image">
        <div className="w-10 rounded-full shadow-md">
          <img alt="User profile" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} rounded-lg shadow-md`}>{message.message}</div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-70">{formattedTime}</div>
    </div>
  );
};

export default Message;
