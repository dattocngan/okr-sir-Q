import React, { useState, useEffect, useCallback } from "react";
import KeyresultItem from "./KeyresultItem";

let index = 0;
const CreateKeyresult = ({ getKeyresultData, keyResultData }) => {
  const [keyresults, setKeyresults] = useState(keyResultData);
  console.log(keyResultData);

  useEffect(() => {
    getKeyresultData(keyresults);
  }, [keyresults, getKeyresultData]);

  const addKeyresult = () => {
    setKeyresults([
      ...keyresults,
      {
        id: ++index,
        name: "",
        target: "",
        dueDate: "",
        unit: "",
      },
    ]);
  };

  const deleteKeyresult = (id) => {
    setKeyresults(keyresults.filter((keyresult) => keyresult.id !== id));
  };

  const updateKeyresult = useCallback((id, newValue) => {
    setKeyresults((prev) => {
      const newKeyResults = [...prev];
      for (let [index, val] of newKeyResults.entries()) {
        if (val.id === id) {
          newKeyResults[index] = newValue;
          break;
        }
      }
      return newKeyResults;
    });
  }, []);

  return (
    <div className="mt-4" id="wrapper">
      {keyresults.map((keyresult, index) => {
        if (!index)
          return (
            <KeyresultItem
              defaultContent={keyresult.content}
              defaultDeadlineAt={keyresult.deadlineAt}
              defaultUnit={keyresult.unit}
              defaultCurrentAchievement={keyresult.currentAchievement}
              defaultTarget={keyresult.target}
              key={keyresult._id}
              id={keyresult._id}
              isDefault={true}
              updateKeyresult={updateKeyresult}
            />
          );
        else
          return (
            <KeyresultItem
              efaultContent={keyresult.content}
              defaultDeadlineAt={keyresult.deadlineAt}
              defaultUnit={keyresult.unit}
              defaultCurrentAchievement={keyresult.currentAchievement}
              defaultTarget={keyresult.target}
              key={keyresult._id}
              id={keyresult._id}
              isDefault={false}
              deleteKeyresult={deleteKeyresult}
              updateKeyresult={updateKeyresult}
            />
          );
      })}

      <button
        data-mdb-ripple-unbound="true"
        type="button"
        id="add-keyresult"
        className="material-icons btn btn-outline-primary btn-floating mb-4 ms-5 ripple-surface-primary"
        onClick={addKeyresult}
      >
        {" "}
        add
      </button>
    </div>
  );
};

export default CreateKeyresult;
