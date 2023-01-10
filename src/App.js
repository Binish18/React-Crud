import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Create from './Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './Read';
import Update from './Update';

function App() {
  
  return (
    
    <div className="App">
     
        <BrowserRouter>
    <Routes>
    <Route path="/"  exact element={<Create/>} />
    <Route path="/read"  exact element={<Read/>} />
    <Route path="/update"  exact element={<Update/>} />
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
