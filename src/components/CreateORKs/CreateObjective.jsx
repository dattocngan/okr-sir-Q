import React, { useState, useEffect } from "react";

const CreateObjective = ({ getObjectiveData }) => {
    const [objective, setObjective] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [goalType, setGoalType] = useState("");
    const [reason, setReason] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        getObjectiveData({
            objective: objective,
            dueDate: dueDate,
            goalType: goalType,
            status: status,
        });
    }, [objective, dueDate, goalType, reason, status]);

    return (
      <div id="objective">
        <div className="col-12 col-sm-10 col-md-9 col-lg-8 mt-4 pe-2">
          <p className="fw-bold">Aspirational objective:</p>
          <div className="d-flex">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/%E7%8E%8B%E4%B8%80%E5%8D%9A.jpg/800px-%E7%8E%8B%E4%B8%80%E5%8D%9A.jpg"
              alt=""
              className="rounded-circle me-3 h-3rem w-3rem object-cover"
            />
            <div className="flex-fill ">
              <input
                type="text"
                placeholder="type objective"
                name="content"
                className="form-control h-3rem bg-white shadow-custom rounded-pill border-0 ps-3"
                required
                onChange={(e) => setObjective(e.target.value)}
                value={objective}
              />
              <div className="invalid-feedback ms-3">Objective is required</div>
            </div>
          </div>
        </div>
        <div className="row g-3 row-cols-1 row-cols-sm-2 mt-2">
          <div className="col col-sm-4 col-md-3 col-lg-2">
            <p className="fw-bold">Due date:</p>
            <input
              className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
              type="date"
              id=""
              name="deadlineAt"
              placeholder="..."
              required
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
            <div className="invalid-feedback ms-3">Due date is required</div>
          </div>
          <div className="col">
            <p className="fw-bold">Goal type:</p>
            <input
              className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
              type="text"
              placeholder="..."
              name="type"
              required
              onChange={(e) => setGoalType(e.target.value)}
              value={goalType}
            />
            <div className="invalid-feedback ms-3">Goal type is required</div>
          </div>
        </div>
        <div className="row g-3 row-cols-1 row-cols-sm-2 mt-2">
          <div className="col">
            <p className="fw-bold">Reason:</p>
            <input
              className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
              type="text"
              placeholder="..."
              name="reason"
              required
              onChange={(e) => setReason(e.target.value)}
              value={reason}
            />
            <div className="invalid-feedback ms-3">Reason is required</div>
          </div>
          <div className="col-sm-4 col-md-3 col-lg-2">
            <p className="fw-bold">Status:</p>
            <input
              className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
              type="text"
              placeholder="..."
              name="status"
              required
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            />
            <div className="invalid-feedback ms-3">Status is required</div>
          </div>
        </div>
      </div>
    );
};

export default CreateObjective;
