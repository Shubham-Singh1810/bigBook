import './App.css';
import './Responsive.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BestSeller from './components/BestSeller';
import Services from './components/Services';
import Login from './components/Login';
import AdminPannel from './components/AdminPannel';
import EditBook from './components/EditBook';
import Biography from './components/Biography';
import Nobel from './components/Nobel';
import Litrature from './components/Litratur';
import Comic from './components/Comic';
import Protected from "./components/Protected"
import {useState} from "react"
import Footer from './components/Footer';
function App() {
  const [isLogin , setLogin] = useState(false)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/bestSeller' element={<BestSeller/>}/>
        <Route path='/litrature' element={<Litrature/>}/>
        <Route path='/biography' element={<Biography/>}/>
        <Route path='/nobel' element={<Nobel/>}/>
        <Route path='/comic' element={<Comic/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<Login setLogin={setLogin}/>}/>
        <Route path="/adminPannel" element={<Protected AdminPannel={AdminPannel} isLogin={isLogin}/>}/>
        <Route path="/editBook/:id" element={<EditBook/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
