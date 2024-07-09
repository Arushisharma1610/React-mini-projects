import React, { useState } from 'react';
import "../index.css";

const Todo = () => {
  const [initial, setInitial] = useState(""); 
  const [data, setData] = useState([]); 
  const [isEditing, setIsEditing] = useState(false); 
  const [currentIndex, setCurrentIndex] = useState(null); 
  const [currentValue, setCurrentValue] = useState("");

  // Function to handle input changes
  const getInputs = (event) => {
    setInitial(event.target.value);
  };

  // Function to add a new to-do item
  const getData = () => {
    if (initial === "") {
      alert("Please Enter Task!");
    } else {
      let storeData = [...data, initial];
      setData(storeData);
      setInitial("");
    }
  };

  // Function to delete a to-do item
  const deleteItem = (index) => {
    let filterData = data.filter((curElem, id) => id !== index);
    setData(filterData);
  };

  // Function to start editing a to-do item
  const startEditing = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setCurrentValue(data[index]);
  };

  // Function to handle changes in the edit input field
  const handleEditChange = (event) => {
    setCurrentValue(event.target.value);
  };

  // Function to save the edited to-do item
  const saveEdit = () => {
    let updatedData = data.map((item, index) => (index === currentIndex ? currentValue : item));
    setData(updatedData);
    setIsEditing(false);
    setCurrentIndex(null);
    setCurrentValue("");
  };

  return (
    <>
      <div className='container'>
        <h1>To Do List</h1>
        <div className='taskInput'>
          <input
            type='text'
            placeholder='Enter Your Task'
            value={initial}
            onChange={getInputs}
          />
          <button onClick={getData}>Add</button>
        </div>
        {data.length > 0 && data.map((curVal, index) => (
          <div key={index} className='taskData'>
            {isEditing && currentIndex === index ? (
              <div >
                <input
                  type='text'
                  value={currentValue}
                  onChange={handleEditChange}
                />
                <button onClick={saveEdit}
                className='savebtn'>
                Save</button>
              </div>
            ) : (
              <div className="taskContent">
                <div className="icons">
                  <i
                    id="deleteIcon"
                    onClick={() => deleteItem(index)}
                    className="fa-solid fa-trash"
                  ></i>
                  <i
                    id="editIcon"
                    onClick={() => startEditing(index)}
                    className="fa-solid fa-edit"
                  ></i>
                </div>
                <p>{curVal}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
