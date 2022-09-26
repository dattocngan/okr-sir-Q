import React from 'react'
import OKR from './OKR';

const data = [
  {
    id: "0c9c70d5-25c0-4bb1-ade7-84d96905ce85",
    type: "Suc khoe",
    content: "1 ",
    reason: "Objective này sẽ giup co tien",
    status: "NOT_STARTED",
    deadlineAt: "2022-08-29T16:56:58Z",
    keyResult: [
      {
        id: "3be28be6-4e27-4d17-a1a7-70207e743ef1",
        status: "NOT_STARTED",
        objectiveId: "0c9c70d5-25c0-4bb1-ade7-84d96905ce85",
        content: "Đạt học bổng",
        target: 10,
        currentAchievement: 4,
        unit: "MONEY",
        deadlineAt: "2022-08-29T16:58:16Z",
      },
      {
        id: "46d0a645-d57b-4de4-836d-67a476bd8c34",
        status: "NOT_STARTED",
        objectiveId: "0c9c70d5-25c0-4bb1-ade7-84d96905ce85",
        content: "Đạt học bổng",
        target: 10,
        currentAchievement: 0,
        unit: "MONEY",
        deadlineAt: "2022-08-29T16:58:16Z",
      },
    ],
  },
  {
    id: "1235ae29-cd7f-43e7-88b5-1c8666c93032",
    type: "Tasi chinh",
    content: "2 ",
    reason: "Objective này sẽ giup co tien",
    status: "NOT_STARTED",
    deadlineAt: "2022-08-29T16:56:58Z",
    keyResult: [],
  },
  {
    id: "12681ddd-de06-405d-b383-f7b715c715fb",
    type: "Suc khoe",
    content: "3",
    reason: "Objective này sẽ giup co tien",
    status: "NOT_STARTED",
    deadlineAt: "2022-08-29T16:56:58Z",
    keyResult: [],
  },
  {
    id: "1c02c345-7a45-45a2-a886-a2720458d346",
    type: "Suc khoe",
    content: "4",
    reason: "Objective này sẽ giup ",
    status: "NOT_STARTED",
    deadlineAt: "2022-08-29T16:56:58Z",
    keyResult: [],
  },
  {
    id: "27b6a604-84fd-4514-9575-b7d40f454c6f",
    type: "Tasi chinh",
    content: "Đạt 100 trieeu ",
    reason: "Objective này sẽ giup co tien",
    status: "NOT_STARTED",
    deadlineAt: "2022-08-29T16:56:58Z",
    keyResult: [],
  },
  {
    id: "2a3fa9b3-2413-4ccf-9add-6aa9c2f73dc1",
    type: "Tasi chinh",
    content: "Đạt 100 trieeu ",
    reason: "Objective này sẽ giup co tien",
    status: "NOT_STARTED",
    deadlineAt: "2022-08-29T16:56:58Z",
    keyResult: [],
  },
  {
    id: "2d5ed665-cf21-4f0d-b0fe-2515f9eaaf29",
    type: "Tasi chinh",
    content: "Đạt 100 trieeu ",
    reason: "Objective này sẽ giup co tien",
    status: "NOT_STARTED",
    deadlineAt: "2022-08-29T16:56:58Z",
    keyResult: [],
  },
  {
    id: "434af4de-b664-4c72-b4bc-300d3775e670",
    type: "Suc khoe",
    content: "6 mui",
    reason: "Objective này sẽ giup ",
    status: "NOT_STARTED",
    deadlineAt: "2022-08-29T16:56:58Z",
    keyResult: [],
  },
  {
    id: "46845f37-4016-4ee4-a53d-4ba462b9ebc5",
    type: "Tasi chinh",
    content: "Đạt 100 trieeu ",
    reason: "Objective này sẽ giup co tien",
    status: "NOT_STARTED",
    deadlineAt: "2022-08-29T16:56:58Z",
    keyResult: [],
  },
];

const Content = () => {
  return (
    <>
      {data.map((OkrData, index) => (
        <OKR OkrData={OkrData} key={index} />
      ))}
    </>
  );
}

export default Content