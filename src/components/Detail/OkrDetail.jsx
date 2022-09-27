import React from 'react'
import OkrDetailKeyResults from './OkrDetailKeyResults'
import OkrDetailObjective from './OkrDetailObjective'

const OkrDetail = () => {
  return (
    <div className="w-100">
      <OkrDetailObjective />
      <OkrDetailKeyResults />
    </div>
  );
}

export default OkrDetail