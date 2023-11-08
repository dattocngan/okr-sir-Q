import React, { useState, useEffect, useCallback } from 'react';
import KeyresultItem from './KeyresultItem';

let index = 0;
const CreateKeyresult = ({ getKeyresultData, keyResultData }) => {
  const [keyresults, setKeyresults] = useState(keyResultData);
  useEffect(() => {
    getKeyresultData(keyresults);
  }, [keyresults, getKeyresultData]);

  const addKeyresult = () => {
    setKeyresults([
      ...keyresults,
      {
        idIndex: ++index,
        name: '',
        target: '',
        unit: 'PERCENT',
      },
    ]);
  };

  const deleteKeyresult = (idIndex) => {
    setKeyresults(keyresults.filter((keyresult) => keyresult.idIndex !== idIndex));
  };

  const updateKeyresult = useCallback((idIndex, newValue) => {
    setKeyresults((prev) => {
      const newKeyResults = [...prev];
      for (let [index, val] of newKeyResults.entries()) {
        if (val.id === idIndex || val.idIndex === idIndex) {
          newKeyResults[index].content = newValue.content;
          newKeyResults[index].target = newValue.target;
          newKeyResults[index].currentAchievement = newValue.currentAchievement;
          newKeyResults[index].deadlineAt = newValue.deadlineAt;
          newKeyResults[index].unit = newValue.unit;
          break;
        }
      }
      return newKeyResults;
    });
  }, []);

  return (
    <div className="mt-4" id="wrapper">
      {keyresults.map((keyresult, index) => {
        if (!index) {
          return (
            <KeyresultItem
              defaultContent={keyresult.content}
              defaultDeadlineAt={keyresult.deadlineAt}
              defaultUnit={keyresult.unit}
              defaultCurrentAchievement={keyresult.currentAchievement}
              defaultTarget={keyresult.target}
              key={keyresult.id ? keyresult.id : keyresult.idIndex}
              id={keyresult.id ? keyresult.id : keyresult.idIndex}
              isDefault={true}
              isGettingFromDb={keyresult.id ? true : false}
              updateKeyresult={updateKeyresult}
            />
          );
        } else
          return (
            <KeyresultItem
              defaultContent={keyresult.content}
              defaultDeadlineAt={keyresult.deadlineAt}
              defaultUnit={keyresult.unit}
              defaultCurrentAchievement={keyresult.currentAchievement}
              defaultTarget={keyresult.target}
              key={keyresult.id ? keyresult.id : keyresult.idIndex}
              id={keyresult.id ? keyresult.id : keyresult.idIndex}
              isDefault={false}
              deleteKeyresult={deleteKeyresult}
              isGettingFromDb={keyresult.id ? true : false}
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
        {' '}
        add
      </button>
    </div>
  );
};

export default CreateKeyresult;
