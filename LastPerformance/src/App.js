import './App.css';
import UI  from './components/home/UI'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/Registration/registration'
import Deptid from './components/DeptId/deptid'
import Login from './components/login/Login.jsx';
//import StudForm from './components/StudForm/StudForm.jsx';
import About from './components/About/about.jsx';
import Header from './components/Header/header.jsx'; 
import Forms from './pages/Forms.jsx';
import DashbResult from './page2/DashbResult.jsx';
// import EvaluatePeerForm from './components/EvaluatePeerForm/evaluatepeerform.jsx';
import AllOne from './page3/AllOne.jsx';
import TeacherP from './page4/TeacherP.jsx';
import ThreePage from './components/TeachersPage/ThreePage.jsx';
import DeptPage from './page5/DeptPage.jsx';
import DeptResult from './components/DeptResult/DeptResult.jsx';
import DeptResultPage from './page6/DeptResultPage.jsx';
import PeerResultPage from './page7/PeerResultPage.jsx';
import HrmResult from './page8/HrmResult.jsx';

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
  <Route path="/about" element={<About />} />
  <Route path="/dash-result" element={<DashbResult />} />
  <Route path="/teachers_form_peer" element={<AllOne />} />
  <Route path="/teachers_page" element={<TeacherP />} />
  <Route path="/three_page" element={<ThreePage />} />
  <Route path="/dept_page" element={<DeptPage />} />
  <Route path="/Dept_result" element={<DeptResult />} />
  <Route path="/Dept_result_Page" element={<DeptResultPage />} />
  <Route path="/teachers_peer_result" element={<PeerResultPage />} />
  <Route path="/hrm_result" element={<HrmResult />} />

</Routes>
</BrowserRouter>



    </div>
  );
}

export default App;



