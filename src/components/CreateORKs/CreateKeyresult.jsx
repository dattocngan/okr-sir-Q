import React, { useState, useEffect } from "react";
import KeyresultItem from "./KeyresultItem";

const CreateKeyresult = ({ getKeyresultData }) => {
  const [keyresults, setKeyresults] = useState([
    {
      id: 1,
      name: "",
      target: "",
      dueDate: "",
      unit: "%",
    },
  ]);

  useEffect(() => {
    getKeyresultData(keyresults);
  }, [keyresults]);

  const addKeyresult = () => {
    setKeyresults([
        ...keyresults, 
        {
            id: keyresults.length + 1,
            name:'',
            target:'',
            dueDate:'',
            unit:'%'
        }
    ])
  };

  const deleteKeyresult = (id) => {
    setKeyresults(keyresults.filter((keyresult) => keyresult.id !== id))
  };
  
  const updateKeyresult = (id, newValue) => {
    setKeyresults(keyresults.map(keyresult => {
        if (keyresult.id === id) 
            return newValue;
        else    return keyresult;
    }))
  };

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
        className="btn btn-floating btn-outline-primary btn-floating material-icons mb-4 ms-5 ripple-surface-primary"
        onClick={addKeyresult}
      >
        add
      </button>
    </div>
  );
};

export default CreateKeyresult;
