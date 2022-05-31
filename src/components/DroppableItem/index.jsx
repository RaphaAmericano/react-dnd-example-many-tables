import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import DraggableItem from '../DraggableItem';

const DroppableItem = ({ column, columnId }) => {
    return <Droppable key={columnId} droppableId={columnId}>
        {(provided, snapshot) => {
            return <div
            {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                    background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                    padding: 4,
                    width: 250,
                    minHeight: 500
                }}
            >
                {column.items.map((item, index) => {
                    return (
                    <DraggableItem item={item} index={index}/>
                    );
                })}
                {provided.placeholder}
            </div>
        }}
    </Droppable> 
}
export default DroppableItem;