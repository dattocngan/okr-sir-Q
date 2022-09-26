import React, { useEffect, useState } from "react";
import avatar from '../../assets/images/img.jpg';

const Objective = ({ content, deadlineAt, type, getToggle, getColor, average }) => {
  let [toggle, setToggle ] = useState('');
  const color = getColor(average);
  
  function timeConverter (date) {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[date.getMonth()] + ' ' + date.getDate();
  }

  let shortcut = (e) => {
    if (e.target.innerText === "expand_more") {
      e.target.innerText = "remove";
      setToggle("");
    } else {
      e.target.innerText = "expand_more";
      setToggle("d-none");
    }
  }

  useEffect (() => getToggle(toggle), [toggle, getToggle]);

  return (
    <div className="d-flex flex-row align-items-sm-center align-items-baseline pt-sm-3 pb-2">
      <button
        className="hide btn p-0 border-0 me-2 material-icons bg-primary rounded-circle text-white"
        onClick={shortcut}
      >
        remove
      </button>
      <div className="row d-flex flex-column flex-sm-row align-items-sm-center me-0 w-100">
        <div className="col-sm-5 d-flex flex-row">
          <img
            src={avatar}
            alt=""
            className="square-2.5rem rounded-circle object-cover align-items-center"
          />
          <strong className="d-flex ps-3 align-items-center">{content}</strong>
        </div>
        <strong className="d-none d-lg-flex col-lg-2 text-left">{type}</strong>
        <div className="col-sm-7 col-lg-5 row d-flex justify-content-between ps-5 ps-sm-0">
          <div className="col-9 col-md-8 d-flex justify-content-lg-between justify-content-center">
            <div className="d-flex w-100 flex-row justify-content-sm-center align-items-center">
              <span className="me-2">Due:</span>
              <span className="">{timeConverter(new Date(deadlineAt))}</span>
            </div>
          </div>
          <strong className={`col-3 col-md-2 pe-0 pe-md-3 text-${color}`}>
            {(average * 100).toFixed(0) + " %"}
          </strong>
          <div className="align-items-center col-md-2 d-none">
            <div className={`rounded-circle bg-${color} square-1rem`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
