import React, { useState, useEffect } from "react";

function QuestionCard({ question }) {
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  function handleSelect(optionId) {
    if (!selected) {
      setSelected(optionId);
      setShowExplanation(true);
    }
  }

  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            className={`option-button ${
              selected === opt.id
                ? opt.id === question.correctAnswer
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleSelect(opt.id)}
            disabled={!!selected}
          >
            {opt.id}. {opt.text}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className="explanation">
          <strong>Explanation:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
}

function VideoSnippet() {
  return (
    <div className="video-snippet">
      <h4>Video Snippet: Understanding Duodenal Ulcers</h4>
      <iframe
        width="400"
        height="225"
        src="https://www.youtube.com/embed/QZhvJc7PCVI"
        title="Understanding Stomach and Duodenal Ulcers - Zero To Finals"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function AIChat() {
  return (
    <div className="ai-chat">
      <h4>AI Medical Assistant (Coming Soon)</h4>
      <textarea placeholder="Ask your medical question..." disabled />
      <button disabled>Send</button>
    </div>
  );
}

export default function App() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch("https://bridgeimg-backend.onrender.com/api/questions/1")
      .then((res) => res.json())
      .then((data) => setQuestion(data))
      .catch((err) => console.error(err));
  }, []);

  if (!question) {
    return <div>Loading question...</div>;
  }

  return (
    <div className="app-container">
      <h1>BridgeIMG Q-Bank Demo</h1>
      <QuestionCard question={question} />
      <VideoSnippet />
      <AIChat />
    </div>
  );
}
