import "../components/aiSearch/aiSearch.css";
import ErrorBoundary from "../../utils/ErrorBoundary";
import ChatCanvas from "../components/aiSearch/ChatCanvas";
import SearchBar from "../components/aiSearch/SearchBar";
import { useState } from "react";

export default function AiSearch() {
  const [userQuery, setUserQuery] = useState('');

  return (
    <div className="aiSearch">
      {/* chat section */}
      <ErrorBoundary>
        <div className="chatContainer">
          <ChatCanvas userQuery={userQuery}/>
        </div>
      </ErrorBoundary>
      {/* Search bar */}
      <ErrorBoundary>
        <div className="searchBar">
          <SearchBar setUserQuery={setUserQuery}/>
        </div>
      </ErrorBoundary>
    </div>
  )
}
