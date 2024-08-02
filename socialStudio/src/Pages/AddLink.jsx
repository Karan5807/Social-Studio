import React from "react";
import { useState } from "react";

const AddLink = () => {
  const TaskList = [];

  const [taskData, setTaskData] = useState({
    Title: "",
    Link: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    TaskList.push(taskData);
    localStorage.setItem("Data", JSON.stringify(TaskList));
  };
  return (
    <div className="container">
      <div className="container text-black text-lg font-sans font-medium">
        Social Studio
      </div>
      <div className="container m-2">
        <label className="text-lg font-serif text-black m-2 p-2">Title</label>
        <input
          className="container border-2 rounded-md border-black max-w-60 text-center"
          type="text"
          name="Title"
          placeholder="Tilte Please"
          value={taskData.Title}
          onChange={handleChange}
        />
      </div>
      <div className="container m-2">
        <label className="text-lg font-serif text-black m-2 p-2">Link</label>
        <input
          className="container border-2 rounded-md border-black max-w-60 text-center"
          type="url"
          name="Link"
          placeholder="Link Please"
          value={taskData.Link}
          onChange={handleChange}
        />
      </div>
      <div className="container">
        <button onClick={handleSubmit} className="text-black">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddLink;
