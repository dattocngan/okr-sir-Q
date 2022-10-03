import React, { useEffect, useState } from 'react';
import { getAllObjectives } from '../../api/http';
import Header from './Header';
import OKR from './OKR';

const AllObjectives = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllObjectives().then((response) => {
      setData(response.data.objectives);
    });
  }, []);

  return (
    <>
      <Header />
      {data.map((OkrData, index) => (
        <OKR OkrData={OkrData} key={index} />
      ))}
    </>
  );
};

export default AllObjectives;
