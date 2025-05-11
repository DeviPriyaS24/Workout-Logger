import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import {
  deletePlansApi,
  getPlansApi,
  markAsCompletedApi,
} from "../services/allAPI";
import EditPlans from "../components/EditPlans";

const ScheduledWorkouts = () => {
  const [scheduledPlansData, setScheduledPlansData] = useState([]);

  const [deletePlanData, setDeletePlanData] = useState([]);

  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    getScheduledPlans();
  }, [deletePlanData]);

  const getScheduledPlans = async () => {
    let result = await getPlansApi();
    setScheduledPlansData(result.data);
    console.log(result.data);
  };

  const deletePlan = async (planId) => {
    let result = await deletePlansApi(planId);
    console.log(planId);
    setDeletePlanData(result.data);
    console.log(result.data);
  };

  const markAsCompleted = async (planId) => {
    let result = await markAsCompletedApi(planId);
    console.log(result.data);
    getScheduledPlans();
  };

  const handleEdit = (plan) => {
    setSelectedPlan(plan);
    setShowEditModal(true);
  };

  return (
    <>
      <h1 className="text-center fw-bolder scheduled-heading">
        Scheduled Workouts
      </h1>
      <div className="container-fluid row g-4 justify-content-center my-3">
        {scheduledPlansData?.map((eachPlans, index) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4 card-contain"
            key={index}
          >
            <Card
              style={{
                width: "100%",
                backgroundColor: "#ADD8E6",
                color: "grey",
                fontWeight: "bold",
              }}
              className="shadow-sm border-0 rounded scheduled-card"
            >
              <Card.Img
                variant="top"
                src={eachPlans.img}
                style={{ height: "200px", objectFit: "cover" }}
                className="rounded"
              />
              <Card.Body>
                <Card.Title className="fw-bolder fs-4 text-center text-info">
                  {eachPlans.exercise}
                </Card.Title>
                <Card.Text>Duration(mins): {eachPlans.duration}</Card.Text>
                <Card.Text>
                  Scheduled Date:{" "}
                  <span className="text-danger">{eachPlans.date}</span>
                </Card.Text>
                <Card.Text>Note: {eachPlans.notes}</Card.Text>
                <div className="d-flex justify-content-evenly">
                  <Button
                    className="btn"
                    style={{ backgroundColor: " #ccffcc" }}
                    onClick={() => handleEdit(eachPlans)}
                  >
                    <i class="fa-solid fa-file-pen"></i> Edit
                  </Button>
                  <Button
                    onClick={() => deletePlan(eachPlans?.id)}
                    className="btn"
                    style={{ backgroundColor: " #ffcccc" }}
                  >
                    <i class="fa-solid fa-trash"></i> Delete
                  </Button>
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <Button
                    onClick={() => markAsCompleted(eachPlans?.id)}
                    className="btn bg-secondary"
                  >
                    <i class="fa-regular fa-square-check"></i>{" "}
                    {eachPlans.completed ? "Completed" : "Mark as Completed"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <EditPlans
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        selectedPlan={selectedPlan}
        refreshList={getScheduledPlans}
      />
    </>
  );
};

export default ScheduledWorkouts;
