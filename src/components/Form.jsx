import React, { useState } from "react";
import ModalComponent from "./Modal";
import { useGlobalContext } from "../contexts/context";
// import { v4 as uuid } from "uuid";

const Form = ({ index, formId }) => {
  // const uniqId = uuid();
  // const smallId = uniqId.slice(0, 6);
  const { data, setData } = useGlobalContext();
  const [modalShow, setModalShow] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    id: formId,
    name: "",
    email: "",
    password: "",
    employeeList: Array(10).fill(""), // Initialize an array with 10 empty strings
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({ ...prev, [name]: value }));
  };

  const setEmployeeList = (employeeList) => {
    setEmployeeData((prev) => ({ ...prev, employeeList: employeeList }));
  };

  const setAllData = () => {
    // Add the entire employeeData to the global data
    setData((prev) => [...prev, employeeData]);
  };

  const handleDeleteForm = (id) => {
    const updatedAfterDelete = data?.filter((item) => item.id !== id);
    setData(updatedAfterDelete);
  };

  return (
    <>
      <form
        action=""
        className="form-wrapper"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="d-flex justify-content-between align-items-center gap-2">
          <span>{index + 1 || 1}</span>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteForm(formId)}
          >
            x
          </button>
        </div>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control shadow-sm"
            onChange={handleInputChange}
            name="name"
            value={employeeData.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">email</label>
          <input
            type="email"
            className="form-control shadow-sm"
            onChange={handleInputChange}
            name="email"
            value={employeeData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">password</label>
          <input
            type="password"
            className="form-control shadow-sm"
            onChange={handleInputChange}
            name="password"
            value={employeeData.password}
            autoComplete="off"
          />
        </div>
        <button
          className="btn btn-success w-100"
          onClick={() => setModalShow(true)}
        >
          Add Employee
        </button>
      </form>
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        setEmployeeList={setEmployeeList}
        setAllData={setAllData}
      />
    </>
  );
};

export default Form;
