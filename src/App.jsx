import { Routes, Route } from 'react-router-dom'

import Header from './routes/header/header.component'
import Home from './routes/home/home.component'
import Details from './routes/details/details.component'

import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />} >
        <Route index element={<Home />} />
        <Route path='details' element={<Details />} />
      </Route>
    </Routes>
  )
}

export default App
