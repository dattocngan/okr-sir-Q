import React, { useCallback, useState } from 'react'
import KeyResults from './KeyResults'
import Objective from './Objective'

const OKR = ({OkrData}) => {
  let [toggleKeyResult, setToggleKeyResult] = useState('');
  let [average, setAverage] = useState(0);

  const getToggle = useCallback((data) => setToggleKeyResult(data), []);

  const getAverage = useCallback((data) => setAverage(data), []);


  const getColor = (data) => {
    if (data >= 0.7)  return 'success';
    else if (data >= 0.4) return 'warning';
    else  return 'danger';
  }

  return (
    <div className="w-100">
      <Objective
        content={OkrData.content}
        deadlineAt={OkrData.deadlineAt}
        type={OkrData.type}
        getToggle={getToggle}
        getColor={getColor}
        average={average}
      />
      <KeyResults
        keyResults={OkrData.keyResult}
        toggle={toggleKeyResult}
        getColor={getColor}
        getAverage={getAverage}
      />
    </div>
  );
}

export default OKR