import React, { useEffect, useState } from "react";
import "../../styles/TeacherList.css";
import axios from "axios";
import API_URL from "../../config";

const TeacherList = ({ setCurrent, setSelectedTeacher }) => {
  const [teachers, setTeachers] = useState();

  useEffect(() => {
    const getAllTeachers = async () => {
      const response = await axios.get(`${API_URL}/teacher/findAll`);
      if (response.status === 200) {
        setTeachers(response.data);
        console.log(response.data);
      }
    };
    getAllTeachers();
  }, [setTeachers]);

  const handleNewEvaluation = (selectedTeacher) => {
    setSelectedTeacher(selectedTeacher);
    setCurrent("evaluationForm");
  };

  return (
    <div className="teacher--listA">
      <div className="list--headerA">
        <h2>List Of Teachers</h2>
    
      </div>

      <div className="list--containerA">
        {teachers &&
          teachers.map((teacher) => ( 
            <div className="list"
            key={teacher._id}
            onClick={()=>handleNewEvaluation(teacher)}>
              <div className="teacher--detailA">
                <h2> {teacher.name} </h2>
              </div>
              <span className="spancourse"> {teacher.course} </span>
              <span className="spanother"> {teacher.department} </span> 
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeacherList;
