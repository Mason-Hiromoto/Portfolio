import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
