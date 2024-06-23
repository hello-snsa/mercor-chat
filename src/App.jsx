import './App.css'
import ErrorBoundary from './utils/ErrorBoundary'
import Routes from './routes/Routes'
import SideBar from './app/layouts/SideBar'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const [currentLocation, setCurrentLocation] = useState("");

  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location])

  return (
    <div className='app-container'>
      <ErrorBoundary>
        {currentLocation!="/login"?<div className='app-header'>
        <SideBar />
        </div>:null}
      </ErrorBoundary>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </div>
  )
}

export default App
