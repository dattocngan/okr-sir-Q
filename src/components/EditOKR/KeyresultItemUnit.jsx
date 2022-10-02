import React from "react";

const UnitInput = ({ id, value, currentUnit }) => {
  return value.toUpperCase() === currentUnit ? (
    <input
      type="radio"
      className="btn-check "
      name={`btnradio-${id}`}
      value={value}
      id={`${value}-${id}`}
      autoComplete="off"
      defaultChecked
    />
  ) : (
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

const KeyresultItemUnit = ({ id, unitType, value, switchUnitType, currentUnit }) => {

  return (
    <>
      <UnitInput
        id={id}
        value={value}
        currentUnit={currentUnit}
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
