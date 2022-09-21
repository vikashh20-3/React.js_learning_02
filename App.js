import './App.css';
import About from "./router/About"
import Contact from "./router/Contact"
import Home from './router/Home';
import Header from './router/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route,Link} from "react-router-dom";
import Todo from './router/Todo';



function App() {
  return (
  <>
  <Header/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/todolist' element={<Todo/>}/>
<Route path='/contact' element={<Contact/>}/>
  

  </Routes>
  </>
    );
}

export default App;
