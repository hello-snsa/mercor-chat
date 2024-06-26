import "../components/aiSearch/aiSearch.css";
import ErrorBoundary from "../../utils/ErrorBoundary";
import ChatCanvas from "../components/aiSearch/ChatCanvas";
import SearchBar from "../components/aiSearch/SearchBar";
import { useState } from "react";

export default function AiSearch() {
  const [userQuery, setUserQuery] = useState('');
  const [messages, setMessages] = useState([]);

  return (
    <div className="aiSearch">
      <ErrorBoundary>
        <ChatCanvas userQuery={userQuery} messages={messages} setMessages={setMessages} />
      </ErrorBoundary>
      <ErrorBoundary>
        <SearchBar userQuery={userQuery}setUserQuery={setUserQuery} setMessages={setMessages}/>
      </ErrorBoundary>
    </div>
  )
}
