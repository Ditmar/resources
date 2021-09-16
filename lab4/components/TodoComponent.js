import React from "react";
import { MdDelete, MdBookmarkBorder } from "react-icons/md";
import "../styles.css";
export const TodoComponent = () => {
  return (
    <div>
      <div>
        <h1>Todo app</h1>
        <hr />
      </div>
      <div className="todo__container">
        <div className="todo__list">
          <span>Sistem of task name</span>
          <ul>
            <li>
              <MdBookmarkBorder /> <span>Task1</span>
              <div className="deleteIcon">
                <MdDelete />
              </div>
            </li>
            <li>
              <MdBookmarkBorder /> <span>Task1</span>
              <div className="deleteIcon">
                <MdDelete />
              </div>
            </li>
            <li>
              <MdBookmarkBorder /> <span>Task1</span>
              <div className="deleteIcon">
                <MdDelete />
              </div>
            </li>
          </ul>
          <button type="button">Create new task</button>
        </div>
        <div className="todo__form">
          <h4>form task</h4>
          <form>
            <div>
              <label htmlFor="taskname">Task Name</label>
              <input
                className="todo__form-text"
                type="type"
                value=""
                name="taskname"
              />
            </div>
            <div>
              <label htmlFor="descriptio">Description</label>
              <textarea className="todo__form-text"></textarea>
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
