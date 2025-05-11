import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { AddPlansApi } from "../services/allAPI";

const AddPlans = () => {
  const [show, setShow] = useState(false);

  const [plansData, setPlansData] = useState({
    exercise: "",
    img: "",
    duration: "",
    calories: "",
    date: "",
    notes: "",
    completed: false,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onAddClick = async () => {
    if (
      plansData.exercise &&
      plansData.img &&
      plansData.duration &&
      plansData.date &&
      plansData.notes
    ) {
      let result = await AddPlansApi(plansData);
      console.log(result.data);
      if (result.status >= 200 && result.status <= 300) {
        alert("New Plan added successfully");
      } else {
        alert("Something went wrong, please contact the Admin");
      }
    } else {
      alert("Please add all the plan details properly");
    }
  };

  return (
    <>
      <div className="container addPlan-div d-flex flex-column">
        <h3 className="text-center mt-5 fw-bolder">Add Workout Plans</h3>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary border my-3 fw-bolder fs-5"
            onClick={handleShow}
          >
            Add
          </button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bolder text-primary">
            Add new Workout Plan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInputExercise"
            label="Exercise"
            className="mb-3"
          >
            <Form.Control
              type="text"
              onChange={(e) =>
                setPlansData({ ...plansData, exercise: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputExerciseImg"
            label="Image"
            className="mb-3"
          >
            <Form.Control
              type="text"
              onChange={(e) =>
                setPlansData({ ...plansData, img: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputDuration"
            label="Duration"
            className="mb-3"
          >
            <Form.Control
              type="number"
              onChange={(e) =>
                setPlansData({ ...plansData, duration: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputCalories"
            label="Calories Burned"
            className="mb-3"
          >
            <Form.Control
              type="number"
              onChange={(e) =>
                setPlansData({ ...plansData, calories: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputDate"
            label="Date"
            className="mb-3"
          >
            <Form.Control
              type="Date"
              onChange={(e) =>
                setPlansData({ ...plansData, date: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputNotes"
            label="Notes"
            className="mb-3"
          >
            <Form.Control
              type="text"
              onChange={(e) =>
                setPlansData({ ...plansData, notes: e.target.value })
              }
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-success"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            className="btn btn-success"
            variant="primary"
            onClick={onAddClick}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPlans;
