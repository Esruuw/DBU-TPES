// App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import RegistrationForm from './registration/RegistrationForm';
// import Login from './login/Login';
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
import CriteriaList from './criterialist/CriteriaList.jsx';
import TeacherP from './page2/TeacherP.jsx';
import Login from './LoginPage/Login.jsx';

function App() {
  const [content, setContent] = useState('Main');

  const renderContent = () => {
    switch (content) {
      case 'AddTeacher':
        return <AddTeachers />;
      case 'AddParticipants':
        return <AddStudents />;
      case 'ListParticipants':
        return <StudentsList />;
      case 'AddCriteria':
        return <AddCriteria />;
      case 'SeeCriteria':
        return <CriteriaList />;
      case 'Check':
        return <TeacherP />;
      case 'Result':
        return <Result />;
      default:
        return <Content />;
    }
  }

  return (
    <Router>
      <div className='all'>
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/deptId" element={<DeptId />} />
          <Route path="/result" element={<Result />} />
          <Route path="/loginPage" element={<Login/>} />
          <Route path="/resultt" element={<Resultt />} />
          <Route path="/firstsem" element={<FirstSemister />} />
          <Route path="/secondsem" element={<SecondSemister />} />
          <Route path="/teachers_list" element={<TeacherList />} />
          <Route path="/teachers_detail2" element={<Forms />} />
          <Route path="/third-detail" element={<ThirdDetail />} />
        </Routes>
        <div className="dashboard">
          <Sidebar setContent={setContent} />
          <div className='dashboard--content'>
            {renderContent()}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
