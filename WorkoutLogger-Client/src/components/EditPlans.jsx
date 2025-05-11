import React, { useEffect, useState } from "react";
import { Modal, FloatingLabel, Form, Button } from "react-bootstrap";
import { editPlanApi } from "../services/allAPI";

const EditPlans = ({ show, handleClose, selectedPlan, refreshList }) => {
  const [updatedplansData, setUpdatedPlansData] = useState({
    exercise: "",
    img: "",
    duration: "",
    calories: "",
    date: "",
    notes: "",
    completed: false,
  });

  useEffect(() => {
    if (selectedPlan) {
      setUpdatedPlansData(selectedPlan);
    }
  }, [selectedPlan]);

  const onUpdateClick = async () => {
    const result = await editPlanApi(updatedplansData.id, updatedplansData);
    if (result?.status >= 200 && result?.status < 300) {
      alert("Plan updated successfully");
      handleClose();
      refreshList();
    } else {
      alert("Failed to update plan");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bolder text-success">
          Edit Workout Plan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel label="Exercise" className="mb-3">
          <Form.Control
            type="text"
            value={updatedplansData.exercise}
            onChange={(e) =>
              setUpdatedPlansData({
                ...updatedplansData,
                exercise: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel label="Image" className="mb-3">
          <Form.Control
            type="text"
            value={updatedplansData.img}
            onChange={(e) =>
              setUpdatedPlansData({ ...updatedplansData, img: e.target.value })
            }
          />
        </FloatingLabel>
        <FloatingLabel label="Duration" className="mb-3">
          <Form.Control
            type="number"
            value={updatedplansData.duration}
            onChange={(e) =>
              setUpdatedPlansData({
                ...updatedplansData,
                duration: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel label="Calories Burned" className="mb-3">
          <Form.Control
            type="number"
            value={updatedplansData.calories}
            onChange={(e) =>
              setUpdatedPlansData({
                ...updatedplansData,
                calories: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <FloatingLabel label="Date" className="mb-3">
          <Form.Control
            type="date"
            value={updatedplansData.date}
            onChange={(e) =>
              setUpdatedPlansData({ ...updatedplansData, date: e.target.value })
            }
          />
        </FloatingLabel>
        <FloatingLabel label="Notes" className="mb-3">
          <Form.Control
            type="text"
            value={updatedplansData.notes}
            onChange={(e) =>
              setUpdatedPlansData({
                ...updatedplansData,
                notes: e.target.value,
              })
            }
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={onUpdateClick}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPlans;
