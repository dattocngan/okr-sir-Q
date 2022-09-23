import React, { useEffect, useState } from "react";
import KeyresultItemUnit from "./KeyresultItemUnit";

const units = [
  {
    value: "percent",
    unitType: "%",
  },
  {
    value: "money",
    unitType: "$",
  },
  {
    value: "number",
    unitType: "num.",
  },
  {
    value: "binary",
    unitType: "bin",
  },
];
const KeyresultItem = ({ id, isDefault, deleteKeyresult, updateKeyresult }) => {
  const [currentUnit, setCurrentUnit] = useState("");
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    updateKeyresult(id, {
      id: id,
      name: name,
      target: target,
      dueDate: dueDate,
      unit: currentUnit,
    });
  }, [name, target, dueDate, currentUnit]);

  const switchUnitType = (unitType) => setCurrentUnit(unitType);

  return (
    <div className="row g-3 mb-4 key-result align-items-stretch">
      <div className="col col-12 col-md-4">
        {isDefault && <p className="fw-bold">Key results:</p>}
        <input
          className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
          type="text"
          placeholder="e.g. Start sales in new countries and hit $200,000 there"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <div className="invalid-feedback ms-3">Key result is required</div>
      </div>
      <div className="col col-md-2">
        {isDefault && <p className="fw-bold">Target:</p>}
        {currentUnit === "binary" ? (
          <div className="form-check form-switch align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              value={target}
              id={`target-${id}`}
              onChange={(e) => setTarget(e.target.checked)}
            />
          </div>
        ) : (
          <>
            <input
              className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
              type="text"
              placeholder="200,000,000"
              required
              onChange={(e) => setTarget(e.target.value)}
              value={target}
            />
            <div className="invalid-feedback ms-3">Target is required</div>
          </>
        )}
      </div>
      <div className="col col-md-2">
        {isDefault && <p className="fw-bold">Due date:</p>}
        <input
          className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
          type="date"
          placeholder="..."
          required
          onChange={(e) => setDueDate(e.target.value)}
          value={dueDate}
        />
        <div className="invalid-feedback ms-3">Due date is required</div>
      </div>
      <div className="col col-md-3">
        {isDefault && <p className="fw-bold">Unit:</p>}
        <div className="form-control h-3rem btn-group rounded-pill shadow-custom overflow-hidden p-0 border-0">
          {units.map((unit, index) => (
            <KeyresultItemUnit
              key={index}
              id={id}
              unitType={unit.unitType}
              value={unit.value}
              switchUnitType={switchUnitType}
            />
          ))}
        </div>
      </div>
      <i
        className="col-auto text-center material-icons text-black-50 ripple-surface-dark align-self-center btn shadow-0 p-0"
        onClick={() => deleteKeyresult(id)}
      >
        {isDefault ? "" : "close"}
      </i>
    </div>
  );
};

export default KeyresultItem;
