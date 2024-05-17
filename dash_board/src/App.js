import './App.css';
import Sidebar from './components/Sidebar'; 
import Content from './components/Content';
import Profile from './components/Profile';
import RegistrationForm from './registration/RegistrationForm';
import Login from './login/Login';
import DeptId from './deptId/DeptId';
import Result from './otherpage/Result.jsx';
import AddTeachers from './addteachers/AddTeachers.jsx';
import Resultt from './resultdetail/Resultt.jsx';
import FirstSemister from './components/FirstSemister.jsx';
import SecondSemister from './components/SecondSemister.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeacherList from './components/TeacherList.jsx';
import Forms from './pages/Forms.jsx';
import { ThirdDetail } from './resultdetail2/ThirdDetail.jsx';
import AddStudents from './addstudents/AddStudent.jsx';
import StudentsList from './studentslist/StudentsList.jsx';
import AddCriteria from './addcriteria/AddCriteria.jsx';

function App() {
  return (
    <Router>
      <div className='all'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/deptId" element={<DeptId />} />
          <Route path="/result" element={<Result />} /> {/* Add this route */}
          <Route path="/login" element={<Login />} />
          <Route path="/addteachers" element={<AddTeachers />} />
          <Route path="/resultt" element={<Resultt />} />
          <Route path="/firstsem" element={<FirstSemister />} />
          <Route path="/secondsem" element={<SecondSemister />} />
          <Route path="/teachers_list" element={<TeacherList />} />
          <Route path="/teachers_detail2" element={<Forms />} />
          <Route path="/third-detail" element={<ThirdDetail />} />
          <Route path="/add-stud" element={<AddStudents />} />
          <Route path="/stud-list" element={< StudentsList/>} />
          <Route path="/criteria-page" element={< AddCriteria/>} />

       </Routes>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className='dashboard--content'>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
