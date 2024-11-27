import React, { useState } from "react";

const ResumeReview = () => {
  const [resume, setResume] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    fetch("/api/resume-review/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume }),
    })
      .then(response => response.json())
      .then(data => setFeedback(data.feedback))
      .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <h1>Resume Review</h1>
      <textarea
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        placeholder="Paste your resume here"
      />
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default ResumeReview;
