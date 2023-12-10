import React from "react";
import { useDispatch } from "react-redux";

const DELETE_ACTIVITY = "DELETE_ACTIVITY";

const Activity = ({ id, name, duration }) => {
  const dispatch = useDispatch();

  const deleteActivity = () => {
    dispatch({
      type: DELETE_ACTIVITY,
      payload: {
        id,
      },
    });
  };

  return (
    <div className="section">
      <p>
        <b>Activity:</b> {name} <b>Duration:</b> {duration}
        <button className="button-55" role="button" style={{ margin: "15px" }} onClick={deleteActivity}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default Activity;
