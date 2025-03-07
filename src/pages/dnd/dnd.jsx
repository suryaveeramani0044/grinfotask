import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./dnd.css";
const Dnd = () => {
  const [list, setList] = useState({
    todo: [
      { id: "1", content: "Task 1" },
      { id: "2", content: "Task 2" },
      { id: "3", content: "Task 3" },
    ],
    progress: [
      { id: "4", content: "Task 4" },
      { id: "5", content: "Task 5" },
    ],
    complete: [{ id: "6", content: "Task 6" }],
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let newitem,
      todo = list.todo,
      progress = list.progress,
      complete = list.complete;
    if (source.droppableId === "dnd-app") {
      //   console.log(todo[source.index]);
      newitem = todo[source.index];
      todo.splice(source.index, 1);
    } else if (source.droppableId === "dnd-app-progress") {
      newitem = progress[source.index];
      progress.splice(source.index, 1);
    } else {
      newitem = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === "dnd-app") {
      todo.splice(destination.index, 0, newitem);
    } else if (destination.droppableId === "dnd-app-progress") {
      progress.splice(destination.index, 0, newitem);
    } else {
      complete.splice(destination.index, 0, newitem);
    }
    const newList = {
      todo: [...todo],
      progress: [...progress],
      complete: [...complete],
    };

    setList(newList);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="dnd-container">
        <Droppable droppableId="dnd-app" type="list">
          {(provided) => (
            <div
              className="todo"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <section>Todo</section>
              {list.todo.map((item, i) => (
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
                      <div className="list-item">{item.content}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="dnd-app-progress" type="list">
          {(provided) => (
            <div
              className="progrss"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <section>Progress</section>
              {list.progress.map((item, i) => (
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
                      <div className="list-item">{item.content}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="dnd-app-complete" type="list">
          {(provided) => (
            <div
              className="complete"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <section>Complete</section>
              {list?.complete?.map((item, i) => (
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
                      <div className="list-item">{item.content}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Dnd;
