const initialData = {
  answers: {
    "answer-1": { id: "answer-1", content: "Flexibility is important" },
    "answer-2": { id: "answer-2", content: "Digital is detox" },
    "answer-3": { id: "answer-3", content: "Cash is King" },
    "answer-4": { id: "answer-4", content: "Learn the Language" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Answers",
      answerIds: ["answer-1", "answer-2", "answer-3", "answer-4"],
    },
    "column-2": {
      id: "column-2",
      title: "Questions",
      answerIds: [],
    },
  },
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
