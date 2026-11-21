import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Location from './pages/Location/Location.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import LearnMore from './pages/LearnMore/LearnMore.jsx'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
  )
}

export default App