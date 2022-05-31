import React from 'react';
import DroppableItem from '../DroppableItem';

const DroppableColumn = ({ column, columnId, key}) => {
    return  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}

  >
    <h2>{column.name}</h2>
    <div style={{ margin: 8 }}>
      <DroppableItem column={column} columnId={columnId}/>
    </div>
  </div>
}
export default DroppableColumn;