import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalComponent({ onHide, show, setEmployeeList, setAllData }) {
  const [isFilled, setIsFilled] = useState(false);
  const [employeeNames, setEmployeeNames] = useState(Array(10).fill(""));

  const handleNameChange = (index, value) => {
    const updatedNames = [...employeeNames];
    updatedNames[index] = value;
    setEmployeeNames(updatedNames);

    // Check if all input fields are filled
    setIsFilled(updatedNames.every((name) => name.trim() !== ""));
  };

  const handleSave = () => {
    console.log(employeeNames);
    onHide();
    setEmployeeList(employeeNames);
  };

  const handleDelete = (index) => {
    const updatedNames = [...employeeNames];
    updatedNames.splice(index, 1);
    setEmployeeNames(updatedNames);
  };

  const addNewInput = () => {
    setEmployeeNames((prev) => [...prev, ""]);
  };

  return (
    <Modal onHide={onHide} show={show} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Employee List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {employeeNames?.map((name, index) => (
          <div className="d-flex gap-2 mb-2" key={index}>
            <span>{index + 1}</span>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        {isFilled && <Button onClick={addNewInput}>Add more</Button>}
        <Button onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
