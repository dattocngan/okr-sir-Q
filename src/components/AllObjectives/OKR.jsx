import React, { useCallback, useEffect, useState } from 'react'
import KeyResults from './KeyResults'
import Objective from './Objective'

const OKR = ({OkrData}) => {
  let [toggleKeyResult, setToggleKeyResult] = useState('');
  let [average, setAverage] = useState(0);
  let [objective, setObjective] = useState({
    id: OkrData.id,
    type: OkrData.type,
    content: OkrData.content,
    reason: OkrData.reason,
    status: OkrData.status,
    deadlineAt: OkrData.deadlineAt,
  });
  let [keyResults, setKeyResults] = useState([...OkrData.keyResult]);
  let [newOkr, setNewOkr] = useState({ ...objective, keyResults });

  const getToggle = useCallback((data) => setToggleKeyResult(data), []);
  const getKeyResults = useCallback((data) => setKeyResults(data), []);
  const getObjective = useCallback((data) => setObjective(data), []);
  const getAverage = useCallback((data) => setAverage(data), []);

  useEffect(() => {
    setNewOkr({ ...objective, keyResults: keyResults });
  }, [objective, keyResults]);

  useEffect(() => console.log(newOkr), [newOkr.keyResults])
  const timeConverter = (data) => {
    let date = new Date(data);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[date.getMonth()] + ' ' + date.getDate();
  }

  const getColor = (data) => {
    if (data >= 0.7)  return 'success';
    else if (data >= 0.4) return 'warning';
    else  return 'danger';
  }

  return (
    <div className="mb-3">
      <Objective
        content={objective.content}
        deadlineAt={timeConverter(objective.deadlineAt)}
        type={objective.type}
        getToggle={getToggle}
        getColor={getColor}
        getObjective={getObjective}
        average={average}
      />
      <KeyResults
        keyResults={keyResults}
        toggle={toggleKeyResult}
        timeConverter={timeConverter}
        getColor={getColor}
        getAverage={getAverage}
        getKeyResults={getKeyResults}
      />
    </div>
  );
}

export default OKR