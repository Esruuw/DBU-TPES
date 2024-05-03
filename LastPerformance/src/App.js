import './App.css';
import UI  from './components/home/UI'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/Registration/registration'
import Deptid from './components/DeptId/deptid'
import Login from './components/login/Login.jsx';
import StudForm from './components/StudForm/StudForm.jsx';
import About from './components/About/about.jsx';
import Header from './components/Header/header.jsx'; 
import Forms from './pages/Forms.jsx';

function App() {
  return (
    <div>
     {/* <Studentform/> */}
     {/* <UI/> */}


  <BrowserRouter>
<Routes>
  <Route index element = { <Header/ >}/>
  <Route path="/header" element={<Header />} />
  <Route path='/UI' element = { <UI/> }/>
  <Route path='/Studentform' element = { <Forms/> }/>
  <Route path='/RegistrationForm' element = { <RegistrationForm/> }/> 
  <Route path='/Deptid' element = { <Deptid/> }/> 
  <Route path="/login" element={<Login />} />
  <Route path="/studf" element={<StudForm />} />
  <Route path="/about" element={<About />} />

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;


