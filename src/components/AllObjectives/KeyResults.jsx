import React, { useEffect } from 'react'
import KeyResultItem from './KeyResultItem';

const KeyResults = ({keyResults, toggle, getColor, getAverage, timeConverter}) => {
  const countAverage = (keyResults.length === 0) ? 0 : keyResults.reduce((prev, curr) => prev + (curr.currentAchievement/curr.target), 0) / keyResults.length;
  
  useEffect(() => getAverage(countAverage), [getAverage, countAverage]);
  
  return (
    <>
      <ul className={`mx-lg-5 border-lg-start list-unstyled ${toggle}`}>
        {keyResults.map((kr, index) => (
          <KeyResultItem
            data={kr}
            timeConverter={timeConverter}
            key={index}
            getColor={getColor}
          />
        ))}
      </ul>
    </>
  );
}

export default KeyResults