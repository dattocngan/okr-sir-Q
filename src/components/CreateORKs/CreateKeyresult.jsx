import React, { useState, useEffect, useCallback } from "react";
import KeyresultItem from "./KeyresultItem";

let index = 0;
const CreateKeyresult = ({ getKeyresultData }) => {
  const [disable, setDisable] = useState(false);
  const [keyresults, setKeyresults] = useState([
    {
      id: index,
      name: "",
      target: "",
      dueDate: "",
      unit: "",
    },
  ]);

  useEffect(() => {
    getKeyresultData(keyresults);
    setDisable(keyresults.length === 5 ? true : false);
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
  // setDisable(keyresults.length === 5 ? 'disabled' : '');
  // console.log(keyresults);

  const deleteKeyresult = (id) => {
    setKeyresults(keyresults.filter((keyresult) => keyresult.id !== id));
  };

  const updateKeyresult = useCallback((id, newValue) => {
    // setKeyresults(
    //   keyresults.map((keyresult) => {
    //     if (keyresult.id === id) return newValue;
    //     else return keyresult;
    //   })
    // );
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
              key={keyresult.id}
              id={keyresult.id}
              isDefault={true}
              updateKeyresult={updateKeyresult}
            />
          );
        else
          return (
            <KeyresultItem
              key={keyresult.id}
              id={keyresult.id}
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
        disabled={disable}
      >
        {" "}
        add
      </button>
    </div>
  );
};

export default CreateKeyresult;
