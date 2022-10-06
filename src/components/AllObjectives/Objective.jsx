import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/img.jpg';

const Objective = ({
  id,
  content,
  deadlineAt,
  type,
  getToggle,
  getColor,
  average,
  deleteOkrHandler,
}) => {
  let [toggle, setToggle] = useState('d-none');
  const color = getColor(average);

  let shortcut = (e) => {
    if (e.target.innerText === 'expand_more') {
      e.target.innerText = 'remove';
      setToggle('');
    } else {
      e.target.innerText = 'expand_more';
      setToggle('d-none');
    }
  };

  useEffect(() => getToggle(toggle), [toggle, getToggle]);

  return (
    <div className="d-flex align-items-center fw-bold px-3 py-2 rounded-pill shadow-custom">
      <div className="d-flex align-items-center me-3">
        <button
          className=" btn p-0 border-0 me-2 material-icons bg-primary rounded-circle text-white"
          onClick={shortcut}
        >
          expand_more
        </button>
        <img
          src={avatar}
          alt=""
          className="square-2.5rem rounded-circle object-cover align-items-center"
        />
      </div>
      <div className="row flex-grow-1 align-items-center">
        <span className="col-6">{content}</span>
        <span className="col-2">{type}</span>
        <span className="col-2">{deadlineAt}</span>
        <span className={`col-1 text-${color}`}>
          {(average * 100).toFixed(0) + ' %'}
        </span>
        <div className="col-1">
          <div className={`rounded-circle bg-${color} square-1rem`}></div>
        </div>
      </div>
      <Link to={`/objectives/edit/${id}`}>
        <button className="btn btn-sm btn-rounded btn-outline-secondary ripple-surface-primary">
          edit
        </button>
      </Link>

      <button
        className="btn btn-sm btn-rounded btn-outline-secondary ripple-surface-primary ms-2"
        onClick={deleteOkrHandler.bind(null, id)}
      >
        delete
      </button>
    </div>
  );
};

export default Objective;
