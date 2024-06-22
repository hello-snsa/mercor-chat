import './App.css'
import ErrorBoundary from './utils/ErrorBoundary'
import Routes from './routes/Routes'
import SideBar from './app/layouts/SideBar'

function App() {

  return (
    <div>
      <ErrorBoundary>
        <SideBar />
      </ErrorBoundary>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </div>
  )
}

export default App
