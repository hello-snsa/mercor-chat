import "../components/aiSearch/aiSearch.css";
import ErrorBoundary from "../../utils/ErrorBoundary";
import ChatCanvas from "../components/aiSearch/ChatCanvas";
import SearchBar from "../components/aiSearch/SearchBar";

export default function AiSearch() {
  return (
    <div className="aiSearch">
      {/* chat section */}
      <ErrorBoundary>
        <div className="chatContainer">
          <ChatCanvas />
        </div>
      </ErrorBoundary>
      {/* Search bar */}
      <ErrorBoundary>
        <div className="searchBar">
          <SearchBar />
        </div>
      </ErrorBoundary>
    </div>
  )
}
