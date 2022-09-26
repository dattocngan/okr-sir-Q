import React from 'react'
import avatar from "../../assets/images/img.jpg";

const KeyResultItem = ({content, target, currentAchievement, getColor}) => {
    const progress = currentAchievement / target;
    const color = getColor(progress);
  return (
    <li className=" ms-3 d-flex flex-row align-items-center w-100 my-4">
      <img src={avatar} alt="" className="square-2rem rounded-circle" />
      <div className="row w-100 m-0 align-items-center">
        <strong className="col-6 col-lg-9  ">{content}</strong>
        <span className="col-2 col-lg-1 ">{currentAchievement}</span>
        <span className="col-2 col-lg-1 ">{target}</span>
        <span className={`col-2 col-lg-1 text-${color}`}>
          {(progress * 100).toFixed(0) + " %"}
        </span>
      </div>
    </li>
  );
}

export default KeyResultItem