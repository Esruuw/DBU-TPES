import React, { useState } from "react";
import "./TeacherP.css";
import TeachersList from "../components/TeachersPage/TeachersList";
import ThreePage from "../components/TeachersPage/ThreePage";
import TeachersPage from "../components/TeachersPage/teacherspage";
import TeachersFormResult from "../components/TeachersFormResult/TeachersFormResult";
import DeptResult from "../components/DeptResult/DeptResult";

export default function TeacherP() {
  const [current, setCurrent] = useState("teacherList");
  const [selectedTeacher, setSelectedTeacher] = useState();
  const [evaluationView, setEvaluationView] = useState(null);

  return (
    <div>
      <div className="firstText1">
        <h1>DEBRE BERHAN UNIVERSITY</h1>
        <h2>Teachers Performance Evaluation Form</h2>
      </div>
      <h3>
        <h4>Select one of the teachers to see the evaluation result!</h4>

        {current === "evaluationForm" && !evaluationView && (
          <button className="buttonn" onClick={() => setCurrent("teacherList")}>
            Back to teacher list
          </button>
        )}
        {evaluationView && (
          <button className="buttonn" onClick={() => setEvaluationView(null)}>
            Back to evaluation form
          </button>
        )}
      </h3>

      {current === "teacherList" && (
        <TeachersList
          setCurrent={setCurrent}
          setSelectedTeacher={setSelectedTeacher}
        />
      )}

      {current === "evaluationForm" && !evaluationView && (
        <ThreePage setEvaluationView={setEvaluationView} />
      )}

      {evaluationView === "studentResult" && (
        <TeachersPage teacher={selectedTeacher} />
      )}

      {evaluationView === "peerResult" && (
        <TeachersFormResult teacher={selectedTeacher} />
      )}


{evaluationView === "departmentResult" && (
        <DeptResult teacher={selectedTeacher} />
      )}

      {/* Add similar blocks for peerResult and departmentResult if needed */}
    </div>
  );
}

// import React, { useState } from "react";
// import './TeacherP.css';
// import TeachersList from "../components/TeachersPage/TeachersList";
// import ThreePage from "../components/TeachersPage/ThreePage";
// import TeachersPage from "../components/TeachersPage/teacherspage";

// export default function TeacherP() {
//   const [current, setCurrent] = useState("teacherList");
//   const [selectedTeacher, setSelectedTeacher] = useState();
//   const [evaluationView, setEvaluationView] = useState(null);

//   return (
//     <div>
//       <div className="firstText1">
//         <h1>DEBRE BERHAN UNIVERSITY</h1>
//         <h2>Teachers Performance Evaluation Form</h2>
//       </div>
//       <h3>
//         <h4>Select one of the teachers to see the evaluation result!</h4>

//         {current === "evaluationForm" && !evaluationView && (
//           <button className="buttonn" onClick={() => setCurrent("teacherList")}>
//             Back to teacher list
//           </button>
//         )}
//         {evaluationView && (
//           <button className="buttonn" onClick={() => setEvaluationView(null)}>
//             Back to evaluation form
//           </button>
//         )}
//       </h3>

//       {current === "teacherList" && (
//         <TeachersList
//           setCurrent={setCurrent}
//           setSelectedTeacher={setSelectedTeacher}
//         />
//       )}

//       {current === "evaluationForm" && !evaluationView && (
//         <ThreePage
//           setEvaluationView={setEvaluationView}
//         />
//       )}

//       {(evaluationView === "studentResult" ||
//         evaluationView === "peerResult" ||
//         evaluationView === "departmentResult" ||
//         evaluationView === "totalResult") && (
//         <TeachersPage teacher={selectedTeacher} />
//       )}

//     </div>
//   );
// }
