const initialData = {
  answers: {
    "answer-1": { id: "answer-1", content: "Flexibility is important" },
    "answer-2": { id: "answer-2", content: "Digital is detox" },
    "answer-3": { id: "answer-3", content: "Cash is King" },
    "answer-4": { id: "answer-4", content: "Learn the Language" },
  },
  columns: {
    "column-answer": {
      id: "column-answer",
      title: "Answers",
      answerIds: ["answer-1", "answer-2", "answer-3", "answer-4"],
    },
    "column-question": {
      id: "column-question",
      title: "Questions",
      answerIds: [],
    },
  },
  columnOrder: ["column-question", "column-answer"],
};

export default initialData;
