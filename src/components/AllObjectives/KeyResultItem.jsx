import React, { useState, useEffect } from 'react'
import avatar from "../../assets/images/img.jpg";
import ContentEditable from 'react-contenteditable';

const KeyResultItem = ({data, getColor, timeConverter, deleteKeyResult, updateKeyResult}) => {
  const [currentAchievement, setCurrentAchievement] = useState(data.currentAchievement);
  const [target, setTarget] = useState(data.target);
  const progress = data.currentAchievement / data.target;
  const color = getColor(progress);
  const [editable, setEditable] = useState(true);

  // const isEditable = (e) => {
  //   if (editable === true) {
  //     setEditable(false);
  //     e.target.innerText='done'
  //   } else {
  //     setEditable(true);
  //     e.target.innerText = "edit";
  //     updateKeyResult(data.id, {
  //       id: data.id,
  //       status: data.status,
  //       objectiveId: data.objectiveId,
  //       content: data.content,
  //       target: target,
  //       currentAchievement: currentAchievement,
  //       unit: data.unit,
  //       deadlineAt: data.deadlineAt,
  //     });
  //   }
  // };

  // useEffect(
  //   () =>
  //     updateKeyResult(data.id, {
  //       id: data.id,
  //       status: data.status,
  //       objectiveId: data.objectiveId,
  //       content: data.content,
  //       target: target,
  //       currentAchievement: currentAchievement,
  //       unit: data.unit,
  //       deadlineAt: data.deadlineAt,
  //     }),
  //   [target, currentAchievement]
  // );

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
        {/* <ContentEditable
          className="col-2 col-lg-1"
          html={currentAchievement.toString()}
          disabled={editable}
          onChange={(e) => setCurrentAchievement(parseInt(e.target.value))}
        />
        <ContentEditable
          className="col-2 col-lg-1"
          html={target.toString()}
          disabled={editable}
          onChange={(e) => setTarget(parseInt(e.target.value))}
        /> */}
      </div>
      {/* <div className="d-md-flex ps-2">
        <button
          className="btn rounded-circle text-black-50 p-0 material-icons"
          onClick={isEditable}
        >
          edit
        </button>
        <button
          className="btn rounded-circle text-black-50 p-0 material-icons"
          onClick={() => deleteKeyResult(data.id)}
        >
          close
        </button>
      </div> */}
    </li>
  );
}

export default KeyResultItem