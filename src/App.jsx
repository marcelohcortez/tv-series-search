import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Details from './routes/details/details.component'

import './App.css'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  )
}

export default App
