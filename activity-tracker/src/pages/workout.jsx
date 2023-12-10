import React, { useState } from 'react';
import Activity from '../components/Activity';
import AddActivity from '../components/AddActivity';
import { useSelector } from 'react-redux';

const Workout = () => {
  const [isAddingActivity, setAddingActivity] = useState(false);
  const allActivities = useSelector((state) => state);

  const toggleAddActivity = () => {
    setAddingActivity(!isAddingActivity);
  };

  return (
    <div className="workout-wrapper">
      <h2>My Workout</h2>
      <button className="button-55" role="button" style={{ margin: "15px" }} onClick={toggleAddActivity}>
        {isAddingActivity ? "Cancel Add Activity" : "Add Activity"}
      </button>
      {isAddingActivity && <AddActivity />}
      {allActivities.map(({ id, name, duration }) => (
        <Activity key={id} id={id} name={name} duration={duration} />
      ))}
    </div>
  );
};

export default Workout;
