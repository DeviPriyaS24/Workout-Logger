import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import './bootstrap.min.css'
import Home from './pages/Home'
import AddPlans from './components/AddPlans'
import Landing from './pages/Landing'
import ScheduledWorkouts from './pages/ScheduledWorkouts'
import CompletedSessions from './pages/CompletedSessions'




function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schedules" element={<ScheduledWorkouts />} />
        <Route path="/completed" element={<CompletedSessions />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
