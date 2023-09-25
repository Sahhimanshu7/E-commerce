import './App.css';
import { Routes, Route } from "react-router-dom";
import SigIn from './Pages/SignIn';
import HomePage from '../src/Pages/HomePage'

function App() {
  return (
    <div className="App">
        <Routes> 
          <Route path='/' element={<HomePage />}/>
          <Route path = '/signin' element={<SigIn />}/>
        </Routes>   
      
    </div>
  );
}

export default App;
