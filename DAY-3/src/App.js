import './App.css';
import Login from './Login';
import Createac from './Createac';
import Navbar from './Navbar';
import home from './home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/createac"element={<Createac/>}/>
        
        {/* <Route path="/Navbar" element={<Navbar/>}/> */}
      </Routes>
    </Router>
  );
}
export default App;