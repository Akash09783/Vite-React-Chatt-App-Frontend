import Message from "./Message.jsx"
import useGetConversations from "../../hooks/useGetConversations.js";
const Messages = () => {
  useGetConversations();
  return (
    <div className="px-4 flex-1 overflow-auto">

      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}

export default Messages
