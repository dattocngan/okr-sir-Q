import React, { useState, useEffect } from "react";
import CreateKeyresult from "./CreateKeyresult";
import CreateObjective from "./CreateObjective";

const CreateOKR = () => {
  const [newOkr, setNewOkr] = useState({});
  const [objectiveData, setObjectiveData] = useState({});
  const [keyresultData, setKeyresultData] = useState([]);
  const [wasValidated, setWasValidated] = useState('');

  const submitHandler = (e) => {
    if (!e.target.checkValidity()) {
      e.preventDefault();
    }

    setWasValidated("was-validated");
    setNewOkr({ ...objectiveData, keyresultData: keyresultData });
  };

  useEffect(() => console.log(newOkr), [newOkr]);

  const getObjectiveData = (data) => setObjectiveData(data);

  const getKeyresultData = (data) => setKeyresultData(data);

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
