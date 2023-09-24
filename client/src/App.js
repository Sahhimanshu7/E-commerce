import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from "react-router-dom";
import SigIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes> 
          <Route path = '/signin' element={<SigIn />}/>
        </Routes>   
      
    </div>
  );
}

export default App;
