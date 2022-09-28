import React, { useEffect, useState } from 'react'
import KeyResultItem from './KeyResultItem';

const KeyResults = ({keyResults, toggle, getColor, getAverage, timeConverter, getKeyResults}) => {
  const [krData, setKrData] = useState(keyResults);
  const countAverage = () => (krData.length === 0) ? 0 : krData.reduce((prev, curr) => prev + (curr.currentAchievement/curr.target), 0) / krData.length;
  
  const deleteKeyResult = (id) => {
    console.log('this id: ' + id);
    krData.forEach(element => {
      console.log(element.id);
    });
    setKrData(krData.filter((kr) => kr.id !== id));
  }
  
  const updateKeyResult = (id, newValue) => {
    setKrData(
      keyResults.map((kr) => {
        if (kr.id === id) return newValue;
        return kr;
      })
    );
  } 

  useEffect(() => {
    getAverage(countAverage);
    getKeyResults(krData);
    // console.log(krData);
  }, [getAverage, countAverage, krData]);
  

  return (
    <ul className={`ms-lg-5 ps-1 border-lg-start list-unstyled ${toggle}`}>
      {keyResults.map((kr, index) => (
        <KeyResultItem
          deleteKeyResult={deleteKeyResult}
          updateKeyResult={updateKeyResult}
          data={kr}
          timeConverter={timeConverter}
          key={index}
          getColor={getColor}
        />
      ))}
    </ul>
  );
}

export default KeyResults