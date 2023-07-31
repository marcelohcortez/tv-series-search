import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Details from './routes/show/show.component';
import Results from './routes/results/results.component';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/results/:name' element={<Results />} />
      <Route path='/show/:id' element={<Details />} />
    </Routes>
  )
}

export default App
