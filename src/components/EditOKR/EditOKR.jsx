import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import { getObjective, updateObjective } from '../../api/http';
import Loader from '../UI/Loader';
import Modal from '../UI/Modal';
import CreateKeyresult from './CreateKeyresult';
import CreateObjective from './CreateObjective';

const EditOKR = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [okr, setOkr] = useState({});
  const [objectiveData, setObjectiveData] = useState({});
  const [keyresultData, setKeyresultData] = useState([]);
  const [wasValidated, setWasValidated] = useState('');

  const objectiveId = useParams().objectiveId;
  const navigate = useNavigate();

  useEffect(() => {
    getObjective(objectiveId).then((response) => {
      setOkr(response.data.objective);
      // console.log(response.data.objective);
      setIsLoading(false);
    });
  }, [objectiveId]);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!e.target.checkValidity()) {
      setIsLoading(false);
      return;
    }
    updateObjective(objectiveId, {
      ...objectiveData,
      keyResults: keyresultData,
    }).then((response) => {
      setIsLoading(false);
      if (response.status === 200) {
        Swal.fire('Good job!', response.data.message, 'success').then(() => {
          navigate('/');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: response.data.message,
        });
      }
    });
    setWasValidated('was-validated');
  };

  const getObjectiveData = useCallback((data) => setObjectiveData(data), []);

  const getKeyresultData = useCallback((data) => setKeyresultData(data), []);

  return (
    <>
      {isLoading && <Modal children={<Loader />} />}
      {!isLoading && (
        <>
          <h1>Edit OKR</h1>
          <form noValidate onSubmit={submitHandler} className={wasValidated}>
            <CreateObjective
              getObjectiveData={getObjectiveData}
              defaultContent={okr.content}
              defaultDeadlineAt={okr.deadlineAt}
              defaultStatus={okr.status}
              defaultReason={okr.reason}
              defaultType={okr.type}
            />
            <CreateKeyresult
              getKeyresultData={getKeyresultData}
              keyResultData={okr.keyResults}
            />
            <button
              data-mdb-ripple-color="light"
              type="submit"
              className="btn btn-primary rounded-pill h-3rem px-5"
            >
              update
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default EditOKR;
