import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { MDBValidation, MDBValidationItem, MDBInput } from 'mdb-react-ui-kit';
import { register } from '../../../api/http';
import Modal from '../../UI/Modal';
import Loader from '../../UI/Loader';

const RegisterForm = () => {
  const [registerInput, setRegisterInput] = useState({
    fullname: '',
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    if (e.target.checkValidity()) {
      setIsLoading(true);
      register({
        name: registerInput.fullname,
        username: registerInput.username,
        password: registerInput.password,
      }).then((response) => {
        setIsLoading(false);
        if (response.status === 201) {
          Swal.fire('Hoàn thành!', response.data.message, 'success').then(() => {
            navigate('/auth/login');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Rất tiếc...',
            text: response.data.message,
          });
        }
      });
    }
  };

  const registerInputHandler = (e) => {
    setRegisterInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      {isLoading && <Modal children={<Loader />} />}
      <MDBValidation
        noValidate={true}
        className={`text-center mx-auto row row-cols-1 gy-3 gx-0 shadow-4 p-5`}
        onSubmit={submitHandler}
      >
        <h2>Đăng kí</h2>
        <MDBValidationItem
          feedback="Hãy nhập nhập họ và tên"
          invalid
          className="col mb-2"
        >
          <MDBInput
            label="Họ và tên"
            name="fullname"
            value={registerInput.fullname}
            type="text"
            required
            onChange={registerInputHandler}
          />
        </MDBValidationItem>
        <MDBValidationItem
          feedback="Hãy điền tên đăng nhập"
          invalid
          className="col mb-2"
        >
          <MDBInput
            label="Tên đăng nhập"
            name="username"
            value={registerInput.username}
            type="text"
            required
            onChange={registerInputHandler}
          />
        </MDBValidationItem>
        <MDBValidationItem
          feedback="Hãy nhập mật khẩu có hiệu lực ( độ dài nhỏ nhất  8)"
          invalid
          className="col mb-2"
        >
          <MDBInput
            label="Mật khẩu"
            name="password"
            value={registerInput.password}
            minLength={8}
            type="password"
            required
            onChange={registerInputHandler}
          />
        </MDBValidationItem>
        <button
          type="submit"
          className="btn-lg btn-success btn-block mb-4 border-0 fw-bold"
        >
          Đăng kí
        </button>
        <p className="small">
          Không có tài khoản?
          <Link to="/auth/login">
            <span className="text-success" role="button">
              Đăng nhập ở đây
            </span>
          </Link>
        </p>
      </MDBValidation>
    </>
  );
};

export default RegisterForm;
