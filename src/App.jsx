import './App.css'
import ErrorBoundary from './utils/ErrorBoundary'
import Routes from './routes/Routes'
import SideBar from './app/layouts/SideBar'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './app/layouts/Header'

function App() {
  const [currentLocation, setCurrentLocation] = useState("");

  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location])

  return (
    <div className='app-container'>
      <Header />
      <div className='content-separator'>
        <ErrorBoundary>
          {currentLocation != "/login" ? 
            <SideBar />: null}
        </ErrorBoundary>
        <ErrorBoundary>
          <div className='routes'>
          <Routes />
          </div>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
