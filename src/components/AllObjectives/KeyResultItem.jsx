import React from 'react'
import avatar from "../../assets/images/img.jpg";

const KeyResultItem = ({content, target, currentAchievement}) => {
  return (
    <li className=" ms-3 d-flex flex-row align-items-center w-100 my-4">
      <img src={avatar} alt="" className="square-2rem rounded-circle" />
      <div className="row w-100 m-0 align-items-center">
        <strong className="col-8 col-lg-10  ">Get over 10000 new signups</strong>
        <span className="text-end col-2  col-lg-1 pe-lg-5">7841</span>
        <span className="col-2 col-lg-1 text-end pe-lg-5">18%</span>
      </div>
    </li>
  );
}

export default KeyResultItem