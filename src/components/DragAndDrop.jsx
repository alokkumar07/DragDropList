import { useRef, useState } from "react";

export default function DragAndDrop({ initialState }) {
  const [data, setData] = useState(initialState);
  console.log(initialState);

  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  };
  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (e, targetContainer) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev) => {
      const newData = { ...prev };

      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i !== item
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {Object.keys(data).map((container, idxx) => {
        return (
          <div
            style={{
              marginBottom: "10px",
              padding: "1rem",
              width: 250,
              background: "gray",
            }}
            key={idxx}
            onDrop={(e) => handleDrop(e, container)}
            onDragOver={handleDragOver}
          >
            <strong>{container}</strong>

            {data[container].map((item, idx) => {
              return (
                <div
                  style={{
                    marginBottom: "20px",
                    backgroundColor: "blue",
                    color: "white",
                    padding: "3px",
                    width: "120px",
                    cursor: "pointer",
                  }}
                  key={idx}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item, container)}
                  onDragEnd={handleDragEnd}
                >
                  <h3>{item} </h3>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
