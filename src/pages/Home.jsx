import React from "react";
import Form from "../components/Form";
import { useGlobalContext } from "../contexts/context";
import { v4 as uuid } from "uuid";

const Home = () => {
  const uniqId = uuid();
  const smallId = uniqId.slice(0, 6);
  const { data, setData } = useGlobalContext();

  const addNewForm = () => {
    setData((prev) => [
      ...prev,
      {
        id: smallId,
        name: "",
        email: "",
        password: "",
        employeeList: [],
      },
    ]);

    // Log the updated data to the console
    console.log("Updated Data:", data);
  };

  return (
    <div className="container my-5">
      <div className="d-flex flex-wrap gap-3">
        {data?.map((item, i) => (
          <Form formId={item.id} key={i} index={i} />
        ))}

        <div className="add-new-form">
          <span className="plus-icon" onClick={addNewForm}>
            +
          </span>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
