import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="flex flex-col space-y-2 overflow-auto py-2">
      {conversations.map((conversation, idx) => (
        <Conversation key={conversation._id} conversation={conversation} lastIdx={idx === conversations.length - 1} />
      ))}

      {loading && <span className="loading loading-spinner mx-auto text-gray-400"></span>}
    </div>
  );
};

export default Conversations;
