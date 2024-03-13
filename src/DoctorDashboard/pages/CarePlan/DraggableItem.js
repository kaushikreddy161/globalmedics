import React from 'react'
import "./DraggableItem.css";


const DraggableItem = ({ provided, item }) => {
    return (
        <div className="item-card-k"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
            <span className="material-symbols-outlined">drag_indicator</span>
            <div className="char-avatar">{item.label.charAt(0)}</div>
            <p className="label-k">{item.label}</p>
        </div>
    );
};

export default DraggableItem;