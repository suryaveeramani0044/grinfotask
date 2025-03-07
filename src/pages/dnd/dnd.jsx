import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./dnd.css";
const Dnd = () => {
  const [list, setList] = useState([
    { id: "1", ticket: "Todo" },
    { id: "2", ticket: "Progress" },
    { id: "3", ticket: "Done" },
  ]);

  const onDragEnd = (result) => {
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="dnd-container">
        <Droppable droppableId="dnd-app" type="CARD">
          {(provided) => (
            <div
              className="todo"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <section>Todo</section>
              {list.map((item, i) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={i}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="list-card"
                    >
                      <div className="list-item">{item.ticket}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {/* <Droppable droppableId="dnd-app-progress">
          {(provided) => (
            <div
              className="progrss"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <section>Progross</section>
              <div className="list-item">Read program</div>
              {provided.placeholder}
            </div>
          )}
        </Droppable> */}
      </div>
    </DragDropContext>
  );
};

export default Dnd;
