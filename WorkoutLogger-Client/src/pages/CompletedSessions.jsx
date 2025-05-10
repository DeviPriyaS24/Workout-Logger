import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getCompletedPlansApi } from "../services/allAPI";



const CompletedSessions = () => {

    const [completedPlans,setCompletedPlans] = useState([])

    useEffect(()=>{
        getCompletedPlans()
    },[])

    const getCompletedPlans = async()=>{
        let result = await getCompletedPlansApi()
        const filtered = result.data.filter((plan) => plan.completed === true);
        console.log(filtered);
        setCompletedPlans(filtered)
    }

  return (
    <>
      <div className="completedses-div container mt-3">
        <h2 className="completed-heading text-center fw-bolder">Completed Workout Sessions</h2>
        <Table striped bordered hover responsive className="shadow-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Workout</th>
              <th>Date</th>
              <th>Duration(mins)</th>
              <th>Calories Burned(kilo Calories)</th>
            </tr>
          </thead>
          <tbody>
            {completedPlans?.map((eachCompletedPlan,index)=>(
                <tr key={index}>
              <td>{index+1}</td>
              <td>{eachCompletedPlan?.exercise}</td>
              <td>{eachCompletedPlan?.date}</td>
              <td>{eachCompletedPlan?.duration}</td>
              <td>{eachCompletedPlan?.calories}</td>
            </tr>
            ))}
            
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CompletedSessions;
