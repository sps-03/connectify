import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="my-2 px-4" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
          {loading ? (
            <div className="loading loading-spinner text-gray-400"></div>
          ) : (
            <BsSend className="h-5 w-5 text-sky-500 hover:text-sky-600" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
