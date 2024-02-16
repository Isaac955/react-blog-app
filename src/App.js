import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './blog/Blog';
import Technology from './blog/Technology'
import Design from './blog/Design'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Blog/>}/>
      <Route path="Technology" element={<Technology/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
