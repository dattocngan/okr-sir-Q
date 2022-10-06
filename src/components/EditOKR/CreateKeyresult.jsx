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
        id: ++index,
        name: '',
        target: '',
        unit: 'PERCENT',
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
        if (val._id === id || val.id === id) {
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
              key={keyresult._id ? keyresult._id : keyresult.id}
              id={keyresult._id ? keyresult._id : keyresult.id}
              isDefault={true}
              isGettingFromDb={keyresult._id ? true : false}
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
              key={keyresult._id ? keyresult._id : keyresult.id}
              id={keyresult._id ? keyresult._id : keyresult.id}
              isDefault={false}
              deleteKeyresult={deleteKeyresult}
              isGettingFromDb={keyresult._id ? true : false}
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
