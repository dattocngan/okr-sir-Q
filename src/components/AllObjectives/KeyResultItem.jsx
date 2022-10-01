import React from 'react'
import avatar from "../../assets/images/img.jpg";

const KeyResultItem = ({data, getColor, timeConverter}) => {
  const progress = data.currentAchievement / data.target;
  const color = getColor(progress);

  return (
    <li
      className="d-flex flex-row align-items-center w-100 my-4 g-0"
      id={data.id}
    >
      <img src={avatar} alt="" className="square-2rem rounded-circle me-2" />
      <div className="row flex-grow-1 align-items-center">
        <span className="col">{data.content}</span>
        <span className="col-2">{timeConverter(data.deadlineAt)}</span>
        <span className="col-2 col-lg-1">{data.currentAchievement}</span>
        <span className="col-2 col-lg-1">{data.target}</span>
        <span className={`col-2 col-lg-1 text-${color}`}>
          {(progress * 100).toFixed(0) + " %"}
        </span>
      </div>
    </li>
  );
}

export default KeyResultItem