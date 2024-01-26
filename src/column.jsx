import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Answer from "./answer";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 250px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const AnswerList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "LemonChiffon" : "white"};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <AnswerList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.answers.map((answer, index) => (
                <Answer
                  key={answer.id}
                  answer={answer}
                  index={index}
                  isDraggingOver={snapshot.isDraggingOver}
                />
              ))}
              {provided.placeholder}
            </AnswerList>
          )}
        </Droppable>
      </Container>
    );
  }
}
