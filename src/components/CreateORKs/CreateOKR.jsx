import React, { useState, useEffect } from "react";
import CreateKeyresult from "./CreateKeyresult";
import CreateObjective from "./CreateObjective";

const CreateOKR = () => {
  const [newOkr, setNewOkr] = useState({});
  const [objectiveData, setObjectiveData] = useState({});
  const [keyresultData, setKeyresultData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (objectiveData.objective === "") {
      return alert("Please input objective");
    }
    if (objectiveData.dueDate === "") {
      return alert("Please choose due date");
    }
    if (objectiveData.goalType === "") {
      return alert("Please input goal type");
    }
    if (objectiveData.reason === "") {
      return alert("Please input reason");
    }
    if (objectiveData.status === "") {
      return alert("Please input status");
    }
    let flag = false;
    keyresultData.forEach((keyresult) => {
      if (keyresult.name === "") {
        flag = true;
        return alert("Please input keyresult");
      }
      if (keyresult.target === "") {
        flag = true;
        return alert("Please input target");
      }
      if (keyresult.dueDate === "") {
        flag = true;
        return alert("Please choose due date");
      }
      if (keyresult.unit === "") {
        flag = true;
        return alert("Please choose unit");
      }
    });
    if (flag) return;

    setNewOkr({ ...objectiveData, keyresultData: keyresultData });
  };

  // useEffect(() => console.log(newOkr), [newOkr]);

  const getObjectiveData = (data) => setObjectiveData(data);

  const getKeyresultData = (data) => setKeyresultData(data);

  return (
    <>
      <h1>Create OKR</h1>
      <form id="form" noValidate onSubmit={submitHandler}>
        <CreateObjective getObjectiveData={getObjectiveData} />
        <CreateKeyresult getKeyresultData={getKeyresultData} />
        <button
          data-mdb-ripple-color="light"
          type="submit"
          className="btn btn-primary rounded-pill h-3rem px-5"
        >
          Add Objective
        </button>
      </form>
    </>
  );
};

export default CreateOKR;
