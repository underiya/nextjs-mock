"use client";

import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";

const cardData = [
  {
    id: 1,
    title: "Critically Severity",
    components: [
      { id: 1, name: "bug1" },
      { id: 1, name: "bug2" },
    ],
  },
  {
    id: 2,
    title: "Major Severity",
    components: [
      { id: 3, name: "bug3" },
      { id: 4, name: "bug4" },
    ],
  },
  {
    id: 3,
    title: "Medium Severity",
    components: [
      { id: 5, name: "bug5" },
      { id: 6, name: "bug6" },
    ],
  },
  {
    id: 4,
    title: "Low Severity",
    components: [
      { id: 7, name: "bug7" },
      { id: 8, name: "bug8" },
      { id: 9, name: "bug9" },
      { id: 10, name: "bug10" },
    ],
  },
];

// interface component {
//   id: number;
//   name: string;
// }
interface Card {
  id: number;
  title: string;
  components: {
    id: number;
    name: string;
  }[];
}
const Drag: React.FC = () => {
  const [data, setData] = useState<Card[]>([]);

  useEffect(() => {
    setData(cardData);
  }, []);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // Check if there's a valid destination
    if (!destination) return;

    const { index: sourceIndex, droppableId: sourceDroppableId } = source;
    const { index: destinationIndex, droppableId: destinationDroppableId } =
      destination;

    // Verify source and destination indices
    if (sourceIndex === undefined || destinationIndex === undefined) return;

    // Extract draggable ID from source droppableId
    const sourceId = sourceDroppableId.split("-")[1];

    // Find the dragged component
    const draggedComponent = data.find((card) => card.id === +sourceId)
      ?.components[sourceIndex];

    if (!draggedComponent) return;

    // Create a deep copy of the data state
    const newData = [...data];

    // Remove the dragged component from the source card
    newData
      .find((card) => card.id === +sourceId)
      ?.components.splice(sourceIndex, 1);

    // Insert the dragged component into the destination card
    const destinationId = destinationDroppableId.split("-")[1];
    newData
      .find((card) => card.id === +destinationId)
      ?.components.splice(destinationIndex, 0, draggedComponent);

    // Update the state with the new data
    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-5">
        {data.map((e, index) => (
          <Droppable key={e.id} droppableId={`droppable-${e.id}`} type="CARD">
            {(provided) => (
              <div
                className="bg-gray-50  rounded-lg"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h1 className="text-lg text-center font-bold">{e.title}</h1>
                {e.components.map((comp, i) => (
                  <Draggable
                    key={comp.id}
                    draggableId={`draggable-${comp.id}`}
                    index={i}
                  >
                    {(provided) => (
                      <div
                        className="text-center p-4  shadow-sm bg-orange-500 m-4 rounded-md cursor-move"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {comp.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Drag;
