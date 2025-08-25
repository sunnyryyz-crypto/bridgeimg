const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const sampleQuestion = {
  id: 101,
  question: "A 45-year-old man presents with epigastric pain that improves after eating. Endoscopy reveals a duodenal ulcer. Which of the following medications is most likely responsible for this condition?",
  options: [
    { id: "A", text: "Metformin" },
    { id: "B", text: "Ibuprofen" },
    { id: "C", text: "Lisinopril" },
    { id: "D", text: "Atorvastatin" },
  ],
  correctAnswer: "B",
  explanation: "NSAIDs such as ibuprofen inhibit prostaglandin synthesis, impairing mucosal protection in the GI tract, which predisposes to peptic ulcers."
};

app.get("/api/questions/1", (req, res) => {
  res.json(sampleQuestion);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
