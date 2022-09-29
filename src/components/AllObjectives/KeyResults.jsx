import React, { useEffect, useState } from 'react'
import KeyResultItem from './KeyResultItem';

const KeyResults = ({keyResults, toggle, getColor, getAverage, timeConverter, getKeyResults}) => {
  const [krData, setKrData] = useState(keyResults);
  const countAverage = (krData.length === 0) ? 0 : krData.reduce((prev, curr) => prev + (curr.currentAchievement/curr.target), 0) / krData.length;
  
  const deleteKeyResult = (id) => {
    console.log('this id: ' + id);
    setKrData(krData.filter((kr) => kr.id !== id));
  }
  
  const updateKeyResult = (id, newValue) => {
    setKrData(
      krData.map((kr) => {
        if (kr.id === id) return newValue;
        return kr;
      })
    );
  } 

  useEffect(() => {
    getAverage(countAverage);
    getKeyResults(krData);
    // console.log(krData);
    // krData.forEach((element) => {
    //   console.log(element.id);
    // });
  }, [getAverage, countAverage, krData, getKeyResults]);
  

  return (
    <>
      <ul className={`mx-lg-5 border-lg-start list-unstyled ${toggle}`}>
        {krData.map((kr, index) => (
          <KeyResultItem
            deleteKeyResult={deleteKeyResult}
            updateKeyResult={updateKeyResult}
            data={kr}
            timeConverter={timeConverter}
            key={index}
            getColor={getColor}
          />
        ))}
      {/* <button type='submit' className='btn btn-sm '>Edit</button> */}
      </ul>
    </>
  );
}

export default KeyResults