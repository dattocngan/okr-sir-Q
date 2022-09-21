import React from "react";

const UnitInput = ({ id, value }) => {
  return (
    <input
      type="radio"
      className="btn-check "
      name={`btnradio-${id}`}
      value={value}
      id={`${value}-${id}`}
      autoComplete="off"
    />
  );
};

const UnitLabel = ({ id, unitType, value, switchUnitType }) => {
  return (
    <label
      htmlFor={`${value}-${id}`}
      className="btn btn-light border-0 text-lowercase py-3 px-2"
      onClick={() => switchUnitType(value)}
    >
      {unitType}
    </label>
  );
};

const KeyresultItemUnit = ({ id, unitType, value, switchUnitType }) => {

  return (
    <>
      <UnitInput
        id={id}
        value={value}
      />
      <UnitLabel
        id={id}
        unitType={unitType}
        value={value}
        switchUnitType={switchUnitType}
      />
    </>
  );
};

export default KeyresultItemUnit;
