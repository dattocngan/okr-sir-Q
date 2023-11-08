import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../store/Auth/AuthContext';
import Swal from 'sweetalert2';

import { deleteObjective, getAllObjectives } from '../../api/http';
import Header from './Header';
import OKR from './OKR';
import Loader from '../UI/Loader';
import Modal from '../UI/Modal';

const AllObjectives = () => {
  const [data, setData] = useState([]);
  const [, setIsAuth] = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWithBackdrop, setIsLoadingWithBackdrop] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getAllObjectives().then((response) => {
      if (response.status === 200) {
        setData(response.data.objectives);
      } else if (response.status === 401) {
        setIsAuth(false);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
      setIsLoading(false);
    });
  }, [setIsAuth]);

  const deleteOkr = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoadingWithBackdrop(true);
        deleteObjective(id).then((response) => {
          if (response.status === 200) {
            setIsLoadingWithBackdrop(false);
            setData(data.filter((item) => item.id !== id));
            Swal.fire('Deleted!', response.data.message, 'success');
          }
        });
      }
    });
  };

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      {isLoadingWithBackdrop && <Modal children={<Loader />} />}
      {!isLoading && data.length === 0 && (
        <h5>Hiện đang chưa có mục tiêu nào. Hãy đi tạo 1 cái nào!</h5>
      )}
      {data.map((OkrData) => {
        // console.log(OkrData);
        return (
          <OKR OkrData={OkrData} key={OkrData.id} onDeleteOkr={deleteOkr} />
        );
      })}
    </>
  );
};

export default AllObjectives;
