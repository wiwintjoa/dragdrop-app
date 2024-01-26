// onDragStart
const start = {
  draggableId: "answer-1",
  type: "TYPE",
  source: {
    droppableId: "column-answer",
    index: 0,
  },
};

// onDragUpdate
const update = {
  ...start,
  destination: {
    droppableId: "column-answer",
    index: 1,
  },
};

// onDragEnd
const result = {
  ...update,
  reason: "DROP",
};
