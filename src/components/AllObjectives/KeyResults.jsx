import React, { useEffect } from 'react'
import KeyResultItem from './KeyResultItem';

const KeyResults = ({keyResults, toggle, getColor, getAverage}) => {
  const countAverage = (keyResults.length === 0) ? 0 : keyResults.reduce((prev, curr) => prev + (curr.currentAchievement/curr.target), 0) / keyResults.length;

  useEffect(() => {
    getAverage(countAverage);
  }, [getAverage, countAverage]);
  
  return (
    <ul className={`ms-5 ps-1 border-start list-unstyled ${toggle}`}>
      {keyResults.map((kr, index) => (
        <KeyResultItem
          content={kr.content}
          target={kr.target}
          currentAchievement={kr.currentAchievement}
          key={index}
          getColor={getColor}
        />
      ))}
    </ul>
  );
}

export default KeyResults