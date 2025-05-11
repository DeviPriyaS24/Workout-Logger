import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="container-fluid main d-flex flex-column justify-content-center align-items-center">
        <h1 className="main-h1">FitAhead</h1>
        <p className="main-p">Plan, Train, Conquer</p>
      </div>

      <div className="sub container-fluid d-flex flex-column justify-content-center align-items-center">
        <h2>Stay on Track, Step by Step</h2>
        <p>Plan your workout. Stay consistent. Track your progress.</p>
        <dl>
          <dt>
            <i class="fa-solid fa-calendar-days"></i> Plan Ahead
          </dt>
          <dd>
            Schedule workouts for tomorrow or later. Choose exercises, set reps
            or durations, and define your goals.
          </dd>
          <dt>
            <i class="fa-solid fa-stopwatch"></i> Log Workouts
          </dt>
          <dd>
            Log planned or freestyle workouts with sets, reps, weight, or
            duration.
          </dd>
          <dt>
            <i class="fa-regular fa-square-check"></i> Mark as Done
          </dt>
          <dd>
            {" "}
            Complete your workout and mark it as fulfilled. Stay accountable and
            track consistency.
          </dd>
          <dt>
            <i class="fa-solid fa-award"></i> Track Progress
          </dt>
          <dd>
            {" "}
            View your history, monitor streaks, and visualize progress through
            stats and graphs.
          </dd>
        </dl>
        <Link className="btn btn-outline-success fw-bolder fs-5" to="/home">
          Build Your Routine
        </Link>
      </div>
    </>
  );
};

export default Landing;
