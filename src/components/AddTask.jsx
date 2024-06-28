import React from 'react';

const AddTask = () => {
  return (
    <div className="input-group">
      <input type="text" placeholder="Add Todo..." />
      <button className="addBtn">Add</button>
    </div>
  );
};

export default AddTask;
