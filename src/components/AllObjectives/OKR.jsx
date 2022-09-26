import React, { useState } from 'react'
import KeyResults from './KeyResults'
import Objective from './Objective'

const OKR = ({OkrData}) => {
  let [toggleKeyResult, setToggleKeyResult] = useState('');
  const getToggle = (data) => setToggleKeyResult(data);

  return (
    <div className="w-100">
      <Objective
        content={OkrData.content}
        deadlineAt={OkrData.deadlineAt}
        type={OkrData.type}
        status={OkrData.status}
        toggle={getToggle}
      />
      <KeyResults keyResults={OkrData.keyResult} />
    </div>
  );
}

export default OKR