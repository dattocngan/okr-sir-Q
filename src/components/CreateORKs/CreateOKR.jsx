import React, { useState, useEffect, useCallback } from "react";
import { createObjectives } from "../../api/http";
import CreateKeyresult from "./CreateKeyresult";
import CreateObjective from "./CreateObjective";

const CreateOKR = () => {
  const [newOkr, setNewOkr] = useState({});
  const [objectiveData, setObjectiveData] = useState({});
  const [keyresultData, setKeyresultData] = useState([]);
  const [wasValidated, setWasValidated] = useState('');

  const submitHandler = (e) => { 
    console.log({ ...objectiveData, keyResults: keyresultData });
    setWasValidated("was-validated");
    // setNewOkr({ ...objectiveData, keyResult: keyresultData });
    
    if (!e.target.checkValidity()) {
      e.preventDefault();
    } else {
      createObjectives({ ...objectiveData, keyResults: keyresultData }).then(response => console.log(response));
    }
  };

  // useEffect(() => console.log(newOkr), [newOkr]);

  const getObjectiveData = useCallback((data) => setObjectiveData(data), []);

  const getKeyresultData = useCallback((data) => setKeyresultData(data),[]);

  return (
    <>
      <h1>Create OKR</h1>
      <form
        noValidate
        onSubmit={submitHandler}
        className={wasValidated}
      >
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
