import React from 'react'
import KeyResultItem from './KeyResultItem';

const KeyResults = ({keyResults}) => {
  console.log(typeof keyResults, keyResults);
  console.log(keyResults[0]);
  // keyResults.map()
  return (
    <ul className="ms-5 ps-1 border-start list-unstyled">
      <KeyResultItem/>
    </ul>
  );
}

export default KeyResults