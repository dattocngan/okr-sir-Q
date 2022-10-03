import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { createObjectives } from '../../api/http';
import CreateKeyresult from './CreateKeyresult';
import CreateObjective from './CreateObjective';

const CreateOKR = () => {
  const [newOkr, setNewOkr] = useState({});
  const [objectiveData, setObjectiveData] = useState({});
  const [keyresultData, setKeyresultData] = useState([]);
  const [wasValidated, setWasValidated] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    setWasValidated('was-validated');
    // setNewOkr({ ...objectiveData, keyResult: keyresultData });
    e.preventDefault();
    if (!e.target.checkValidity()) {
      return;
    } else {
      createObjectives({ ...objectiveData, keyResults: keyresultData }).then(
        (response) => {
          if (response.status === 201) {
            Swal.fire('Good job!', response.data.message, 'success').then(
              () => {
                navigate('/');
              }
            );
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: response.data.message,
            });
          }
        }
      );
    }
  };

  const getObjectiveData = useCallback((data) => setObjectiveData(data), []);

  const getKeyresultData = useCallback((data) => setKeyresultData(data), []);

  return (
    <>
      <h1>Create OKR</h1>
      <form noValidate onSubmit={submitHandler} className={wasValidated}>
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
