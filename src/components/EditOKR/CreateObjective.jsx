import React, { useState, useEffect } from "react";
import avatar from "../../assets/images/img.jpg";

const CreateObjective = ({ getObjectiveData, defaultContent, defaultDeadlineAt, defaultType, defaultReason, defaultStatus }) => {
    const [objective, setObjective] = useState(defaultContent);
    const [dueDate, setDueDate] = useState(defaultDeadlineAt);
    const [goalType, setGoalType] = useState(defaultType);
    const [reason, setReason] = useState(defaultReason);
    const [status, setStatus] = useState(defaultStatus);
    
    useEffect(() => {
        getObjectiveData({
          content: objective,
          deadlineAt: new Date(dueDate),
          type: goalType,
          reason: reason,
          status: status,
        });
    }, [objective, dueDate, goalType, reason, status, getObjectiveData]);

    useEffect(() => {
      setDueDate(defaultDeadlineAt.split("T")[0]);
      setObjective(defaultContent);
      setGoalType(defaultType);
      setReason(defaultReason);
      setStatus(defaultStatus);
    }, [defaultContent, defaultDeadlineAt, defaultReason, defaultStatus, defaultType]);

    return (
      <div id="objective">
        <div className="col-12 col-sm-10 col-md-9 col-lg-8 mt-4 pe-2">
          <p className="fw-bold">Mục tiêu hướng tới :</p>
          <div className="d-flex">
            <img
              src={avatar}
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
              <div className="invalid-feedback ms-3">Mục tiêu là bắt buộc</div>
            </div>
          </div>
        </div>
        <div className="row g-3 row-cols-1 row-cols-sm-2 mt-2">
          <div className="col col-sm-4 col-md-3 col-lg-2">
            <p className="fw-bold">Hạn cuối:</p>
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
            <div className="invalid-feedback ms-3">Hạn cuối là bắt buộc</div>
          </div>
          <div className="col">
            <p className="fw-bold">Lĩnh vực:</p>
            <input
              className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
              type="text"
              placeholder="..."
              name="type"
              required
              onChange={(e) => setGoalType(e.target.value)}
              value={goalType}
            />
            <div className="invalid-feedback ms-3">Lĩnh vực là bắt buộc</div>
          </div>
        </div>
        <div className="row g-3 row-cols-1 row-cols-sm-2 mt-2">
          <div className="col">
            <p className="fw-bold">Lý do:</p>
            <input
              className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
              type="text"
              placeholder="..."
              name="reason"
              required
              onChange={(e) => setReason(e.target.value)}
              value={reason}
            />
            <div className="invalid-feedback ms-3">Lý do là bắt buộc</div>
          </div>
          <div className="col-sm-4 col-md-3 col-lg-2">
            <p className="fw-bold">Trạng thái:</p>
            <select
              className="h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3 form-select"
              aria-label="Default select example"
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={status}
            >
              <option value="NOT_STARTED">Chưa bắt đầu</option>
              <option value="IN_PROGRESS">Trong tiến trình</option>
            </select>
            <div className="invalid-feedback ms-3">Trạng thái là bắt buộc</div>
          </div>
        </div>
      </div>
    );
};

export default CreateObjective;
