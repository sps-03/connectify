import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex cursor-pointer items-center gap-3 rounded-xl p-2 transition-colors duration-200 ${
          isSelected ? "bg-sky-500" : "bg-transparent hover:bg-sky-600"
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="h-10 w-10 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <p className="text-sm font-medium text-gray-200">{conversation.fullName}</p>
        </div>
      </div>

      {!lastIdx && <div className="divider mx-2 h-[1px] bg-gray-500 opacity-50" />}
    </>
  );
};

export default Conversation;
