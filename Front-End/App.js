import './App.css';
import Login from './Login';
import Createac from './Createac';
import Home from './home';
import Contact from './contact';
import Contact01 from './contact01';
import Garden from './garden';
import About from './about';
import Remainder from './remainder';
import Link1 from './link1';
import Link2 from './link2';
import Link3 from './link3';
import Link4 from './link4';
import Janlink from './janlink';
import Aprillink from './aprillink';
import Journal from './journal';
import Julylink from './julylink';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
     {/* <Navbar /> */}
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/createac"element={<Createac/>}/>
        {/* <Route path="/Navbar" element={<Navbar/>}/> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/contact01" element={<Contact01/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/garden" element={<Garden/>}/>
        <Route path="/remainder" element={<Remainder/>}/>
        <Route path="/link1" element={<Link1/>}/>
        <Route path="/link2" element={<Link2/>}/>
        <Route path="/link3" element={<Link3/>}/>
        <Route path="/link4" element={<Link4/>}/>
        <Route path="/journal" element={<Journal/>}/>
        <Route path="/janlink" element={<Janlink/>}/>
        <Route path="/aprillink" element={<Aprillink/>}/>
        <Route path="/julylink" element={<Julylink/>}/>
      </Routes>
    </Router>
  );
}
export default App;