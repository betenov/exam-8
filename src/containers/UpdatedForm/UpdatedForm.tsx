import React from 'react';

const UpdatedForm = () => {
  return (
    <div>
      <h2>Edit a quote</h2>
      <div>
        <select>
        <option>Something</option>
        </select>

        <h5>Author</h5>
        <input type={"text"}/>
        <h5>Quote text</h5>
        <textarea></textarea>
      </div>
      <button>Save</button>
    </div>
  );
};

export default UpdatedForm;