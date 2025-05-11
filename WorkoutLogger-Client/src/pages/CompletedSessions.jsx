import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getCompletedPlansApi } from "../services/allAPI";

const CompletedSessions = () => {
  const [completedPlans, setCompletedPlans] = useState([]);

  useEffect(() => {
    getCompletedPlans();
  }, []);

  const getCompletedPlans = async () => {
    let result = await getCompletedPlansApi();
    const filtered = result.data.filter((plan) => plan.completed === true);
    console.log(filtered);
    setCompletedPlans(filtered);
  };

  return (
    <>
      <div className="completedses-div container mt-3">
        <h2 className="completed-heading text-center fw-bolder">
          Completed Workout Sessions
        </h2>
        <Table striped bordered hover responsive className="shadow-sm">
          <thead>
            <tr>
              <th className="head-th">#</th>
              <th className="head-th">Workout</th>
              <th className="head-th">Date</th>
              <th className="head-th">Duration(mins)</th>
              <th className="head-th">Calories Burned(kilo Calories)</th>
            </tr>
          </thead>
          <tbody>
            {completedPlans?.map((eachCompletedPlan, index) => (
              <tr key={index}>
                <td className="content-td">{index + 1}</td>
                <td className="content-td">{eachCompletedPlan?.exercise}</td>
                <td className="content-td">{eachCompletedPlan?.date}</td>
                <td className="content-td">{eachCompletedPlan?.duration}</td>
                <td className="content-td">{eachCompletedPlan?.calories}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CompletedSessions;
