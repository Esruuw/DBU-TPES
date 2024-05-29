import React from "react";
import './ThreePage.css';

function ThreePage({ setEvaluationView }) {
  return (
    <div className="third-page">
      <div className="box" onClick={() => setEvaluationView("studentResult")}>
        <h2>Student Result</h2>
      </div>
      <div className="box" onClick={() => setEvaluationView("peerResult")}>
        <h2>Peer Result</h2>
      </div>
      <div className="box" onClick={() => setEvaluationView("departmentResult")}>
        <h2>Department Result</h2>
      </div>
      <div className="box" onClick={() => setEvaluationView("totalResult")}>
        <h2>Total Result</h2>
      </div>
    </div>
  );
}

export default ThreePage;

