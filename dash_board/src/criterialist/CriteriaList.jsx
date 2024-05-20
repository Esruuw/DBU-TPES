import React, { useEffect, useState } from "react";
import "./CriteriaList.css";
import axios from "axios";
import API_URL from "../config";

const CriteriaList = () => {
  const [criterias, setCriteria] = useState([]);
  // const [criteria_Id, setCriteria_Id] = useState([]);

  useEffect(() => {
    console.log("useffect");
    const getAllStudents = async () => {
      try {
        const response = await axios.get(`${API_URL}/criteria/findAll`);
        if (response.status === 200) {
          console.log("insidfe", response.data);
          setCriteria(response.data);
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
    getAllStudents();
  }, []);

  const handleDeleteStudent = async (criteria_Id) => {
    // console.log('teacher id: ', teacherId)
    try {
      const response = await axios.delete(
        `${API_URL}/criteria/deleteById/${criteria_Id}`
      );
      if (response.status === 200) {
        setCriteria(criterias.filter((criteria) => criteria._id !== criteria_Id));
      }
    } catch (error) {
      // console.error("Error deleting teacher:", error);
    }
  };

  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>List Of Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="oromo">Oromo</option>
        </select>
      </div>

      {/* Table structure */}
      <table className="teacher--table">
        <thead>
          <tr className="table--header">
            <th>Criteria_Id</th>
            <th>Criteria</th>
            <th>Action</th>
            <th>AddCriteria</th>


            {/* <th>Action</th> */}
  
          </tr>
        </thead>
        <tbody>
          {/* Map through teachers */}
          {criterias.map((criteria) => (
            <tr key={criteria._id}>
                <td>{criteria.criteria_Id}</td>
               <td>{criteria.standard_criteria}</td>
              {/* <td>{student.role}</td> */}
              {/* <td>{student.department}</td>
              <td>{student.semister}</td>
              <td>{student.year}</td> */}
              {/* <td>{teacher.department}</td>
              <td>{teacher.year}</td>
              <td>{teacher.semester}</td> */}
              <td>
                <button onClick={() => handleDeleteStudent(criteria._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CriteriaList;
