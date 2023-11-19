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
          title: 'Rất tiếc...',
          text: 'Đã có lỗi!',
        });
      }
      setIsLoading(false);
    });
  }, [setIsAuth]);

  const deleteOkr = (id) => {
    Swal.fire({
      title: 'Bạn chắc chắn chứ?',
      text: "Bạn sẽ không thể khôi phục lại!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đúng, Xóa!',
      cancelButtonText:'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoadingWithBackdrop(true);
        deleteObjective(id).then((response) => {
          if (response.status === 200) {
            setIsLoadingWithBackdrop(false);
            setData(data.filter((item) => item.id !== id));
            Swal.fire('Xóa!', response.data.message, 'success');
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
