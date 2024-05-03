import axios from "axios";
import { useEffect, useState } from "react";
import "./studentform.css";
import API_URL from "../../config";

const Studentform = ({ teacher }) => {
  const [performance, setPerformance] = useState("");
  const [punctuality, setPunctuality] = useState("");
  const [feedback, setFeedback] = useState("");
  const [studentId, setStudentId] = useState(null);
  const [subjectKnowledge, setSubjectKnowledge] = useState("");
  const [assesmentMethod, setAssesmentMethod] = useState("");
  const [interactionWithStudent, setInteractionWithStudent] = useState("");
  const [classRoomManagement, setClassRoomManagement] = useState("");
  const [communicationWithStudent, setCommunicationWithStudent] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [comprehensiveFeedback, setComprehensiveFeedback] = useState("");

  useEffect(() => {
    setStudentId(localStorage.getItem("studentId"));
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/evaluation/createOne`,
        {
          studentId: studentId && studentId,
          teacherId: teacher.teacherId,
          feedback,
          performance,
          punctuality,
          subjectKnowledge,
          assesmentMethod,
          interactionWithStudent,
          classRoomManagement,
          communicationWithStudent,
          classRoom,
          comprehensiveFeedback,
        }
      );
      if (response.status === 201) {
        console.log(response.data);
        console.log("evaluation summition succeed...");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const options = [
    { label: "Very Low", value: "veryLow" },
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "Good", value: "good" },
    { label: "Very Good", value: "veryGood" },
  ];

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="container1">
        <h2 align="center">
          {teacher && teacher.teacherId} |{teacher && teacher.name} |{" "}
          {teacher && teacher.department}
        </h2>
        <div className="formdiv">
          <div className="formdiv1">
            <h2>Performance</h2>
            {options.map((option) => (
              <div key={option.value} className="formdiv1b">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "50px",
                  }}
                >
                  <div> {option.label} </div>
                  <input
                    type="checkbox"
                    name="performance"
                    value={option.value}
                    onChange={(e) => setPerformance(e.target.value)}
                    checked={performance === option.value}
                  />
                </h4>
              </div>
            ))}
          </div>

          <div className="formdiv2">
            <h2>Puncuality</h2>
            {options.map((option) => (
              <div key={option.value} className="formdiv2b">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "50px",
                  }}
                >
                  <div> {option.label} </div>
                  <input
                    type="checkbox"
                    name="punctuality"
                    value={option.value}
                    onChange={(e) => setPunctuality(e.target.value)}
                    checked={punctuality === option.value}
                  />
                </h4>
              </div>
            ))}
          </div>

          {/* borderrrrrrrrrrrrrrr */}

          <div className="formdiv3">
            <h2>Subject Knowledge</h2>
            {options.map((option) => (
              <div key={option.value} className="formdiv3b">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "50px",
                  }}
                >
                  <div> {option.label} </div>
                  <input
                    type="checkbox"
                    name="subjectKnowledge"
                    value={option.value}
                    onChange={(e) => setSubjectKnowledge(e.target.value)}
                    checked={subjectKnowledge === option.value}
                  />
                </h4>
              </div>
            ))}
          </div>
        </div>
        {/* borderrrrrrrrrrrrrrr */}

        <div className="formdivsecond">
          <div className="formdivsecond1">
            <h2>Assesment Method</h2>
            {options.map((option) => (
              <div key={option.value} className="formdivsecond1b">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "50px",
                  }}
                >
                  <div> {option.label} </div>
                  <input
                    type="checkbox"
                    name="assesmentMethod"
                    value={option.value}
                    onChange={(e) => setAssesmentMethod(e.target.value)}
                    checked={assesmentMethod === option.value}
                  />
                </h4>
              </div>
            ))}
          </div>

          {/* borderrrrrrrrrrrrrrr */}
          <div className="formdivsecond2">
            <h2>Interaction With Student</h2>
            {options.map((option) => (
              <div key={option.value} className="formdivsecond2b">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "50px",
                  }}
                >
                  <div> {option.label} </div>
                  <input
                    type="checkbox"
                    name="interactionWithStudent"
                    value={option.value}
                    onChange={(e) => setInteractionWithStudent(e.target.value)}
                    checked={interactionWithStudent === option.value}
                  />
                </h4>
              </div>
            ))}
          </div>

          <div className="formdivsecond2">
            <h2>Communication With Student</h2>
            {options.map((option) => (
              <div key={option.value} className="formdivsecond2b">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "50px",
                  }}
                >
                  <div> {option.label} </div>
                  <input
                    type="checkbox"
                    name="communicationWithStudent"
                    value={option.value}
                    onChange={(e) =>
                      setCommunicationWithStudent(e.target.value)
                    }
                    checked={communicationWithStudent === option.value}
                  />
                </h4>
              </div>
            ))}
          </div>
          <div className="formdivsecond2">
            <h2>Class Room</h2>
            {options.map((option) => (
              <div key={option.value} className="formdivsecond2b">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "50px",
                  }}
                >
                  <div> {option.label} </div>
                  <input
                    type="checkbox"
                    name="classRoom"
                    value={option.value}
                    onChange={(e) => setClassRoom(e.target.value)}
                    checked={classRoom === option.value}
                  />
                </h4>
              </div>
            ))}
          </div>
        </div>
        {/* borderrrrr */}

        <div className="formdivthird">
          {/* borderrrrrrrrrrrrrrr */}
          {/* <div className="formdivthird2">
          <h2>Interaction With Student</h2>

          <div className="formdivthird2a">
            <h4>
              Very Low <input type="checkbox" />
            </h4>
          </div>

          <div className="formdivthird2b">
            <h4>
              Low <input type="checkbox" />
            </h4>
          </div>

          <div className="formdivthird2c">
            <h4>
              Medium <input type="checkbox" />
            </h4>
          </div>

          <div className="formdivthird2d">
            <h4>
              Good <input type="checkbox" />
            </h4>
          </div>

          <div className="formdivthird2e">
            <h4>
              Very Good <input type="checkbox" />
            </h4>
          </div>
        </div> */}

          {/* borderrrrrrrrrrrrrrr */}

          <div className="formdivthird3">
            <h2>Class Room Management</h2>
            {options.map((option) => (
              <div key={option.value} className="formdivthird3b">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "50px",
                  }}
                >
                  <div> {option.label} </div>
                  <input
                    type="checkbox"
                    name="classRoomManagement"
                    value={option.value}
                    onChange={(e) => setClassRoomManagement(e.target.value)}
                    checked={classRoomManagement === option.value}
                  />
                </h4>
              </div>
            ))}
          </div>

          <div className="formdivthird3">
            <h2>Class Room Management</h2>
            {options.map((option) => (
              <div key={option.value} className="formdivthird3b">
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "50px",
                  }}
                >
                  <div> {option.label} </div>
                  <input
                    type="checkbox"
                    name="classRoomManagement"
                    value={option.value}
                    onChange={(e) => setClassRoomManagement(e.target.value)}
                    checked={classRoomManagement === option.value}
                  />
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="feedbackcomment">
          <div className="feedback">
            <h3>Comprehensive Feedback</h3>
            <label htmlFor="name" className="feedbacklabel">
              <textarea
                name="feedback"
                id=""
                cols="50"
                rows="10"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Put Your Feedback Here......"
              ></textarea>
            </label>
          </div>

          <div className="comment">
            <h3>Comprehensive Feedback</h3>
            <label htmlFor="name" className="commentlabel">
              <textarea
                name="comment"
                id=""
                cols="50"
                rows="10"
                value={comprehensiveFeedback}
                onChange={(e) => setComprehensiveFeedback(e.target.value)}
                placeholder="Put Your Comment Here......"
              ></textarea>
            </label>
          </div>
        </div>

        <div className="buttons">
          <label htmlFor="" className="buttonsubmit">
            <button type="submit">Submit</button>
          </label>
        </div>
      </div>
    </form>
  );
};
export default Studentform;
