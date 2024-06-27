import { useState } from "react";

import "../components/aiSearch/aiSearch.css";
import ErrorBoundary from "../../utils/ErrorBoundary";
import ChatCanvas from "../components/aiSearch/ChatCanvas";
import SearchBar from "../components/aiSearch/SearchBar";

export default function AiSearch() {
  const [userQuery, setUserQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="aiSearch">
      <ErrorBoundary>
        <ChatCanvas userQuery={userQuery} messages={messages} setMessages={setMessages} isLoading={isLoading} setIsLoading={setIsLoading} />
      </ErrorBoundary>
      <ErrorBoundary>
        <SearchBar userQuery={userQuery} setUserQuery={setUserQuery} setMessages={setMessages} isLoading={isLoading} />
      </ErrorBoundary>
    </div>
  )
}
