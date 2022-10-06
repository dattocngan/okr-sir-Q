import React, { useState, useEffect } from 'react';
import KeyresultItemUnit from './KeyresultItemUnit';

const units = [
  {
    value: 'percent',
    unitType: '%',
  },
  {
    value: 'money',
    unitType: '$',
  },
  {
    value: 'number',
    unitType: 'num.',
  },
  {
    value: 'binary',
    unitType: 'bin',
  },
];
const KeyresultItem = ({
  id,
  isDefault,
  deleteKeyresult,
  defaultContent,
  defaultTarget,
  updateKeyresult,
  defaultCurrentAchievement,
  defaultUnit,
  defaultDeadlineAt,
  isGettingFromDb,
}) => {
  const [currentUnit, setCurrentUnit] = useState(
    defaultUnit ? defaultUnit : ''
  );
  const [name, setName] = useState(defaultContent ? defaultContent : '');
  const [currentAchievement, setCurrentAchievement] = useState(
    defaultCurrentAchievement ? defaultCurrentAchievement : ''
  );
  const [target, setTarget] = useState(defaultTarget ? defaultTarget : '');
  const [dueDate, setDueDate] = useState(
    defaultDeadlineAt ? defaultDeadlineAt : ''
  );

  useEffect(() => {
    updateKeyresult(id, {
      content: name,
      currentAchievement: currentAchievement,
      target: target,
      deadlineAt: new Date(dueDate),
      unit: currentUnit.toUpperCase(),
    });
  }, [
    name,
    target,
    dueDate,
    currentAchievement,
    currentUnit,
    id,
    updateKeyresult,
  ]);

  const switchUnitType = (unitType) => setCurrentUnit(unitType);

  return (
    <div className="row g-3 mb-4 key-result align-items-stretch">
      <div className="col col-12 col-md-2 flex-md-fill">
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
      <div className="col col-12 col-md-2 flex-md-fill">
        {isDefault && <p className="fw-bold">Current Achievement:</p>}
        <input
          className="form-control h-3rem bg-white rounded-pill shadow-custom border-0 w-100 px-3"
          type="text"
          placeholder="e.g. Start sales in new countries and hit $200,000 there"
          required
          onChange={(e) => setCurrentAchievement(e.target.value)}
          value={currentAchievement}
        />
        <div className="invalid-feedback ms-3">Key result is required</div>
      </div>
      <div className="col col-md-2">
        {isDefault && <p className="fw-bold">Target:</p>}
        {currentUnit === 'binary' ? (
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
          value={dueDate.split('T')[0]}
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
              currentUnit={currentUnit}
            />
          ))}
        </div>
      </div>
      <i
        className={`col-auto text-center material-icons text-black-50 ripple-surface-dark align-self-center btn shadow-0 p-0 ${
          isGettingFromDb ? 'invisible' : 'visible'
        }`}
        onClick={() => deleteKeyresult(id)}
      >
        {' '}
        close
      </i>
    </div>
  );
};

export default KeyresultItem;
