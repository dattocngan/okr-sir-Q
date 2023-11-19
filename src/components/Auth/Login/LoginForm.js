import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBValidation, MDBValidationItem, MDBInput } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';

import AuthContext from '../../../store/Auth/AuthContext';
import { login, setHeader } from '../../../api/http';
import Modal from '../../UI/Modal';
import Loader from '../../UI/Loader';

const LoginForm = () => {
  const [loginInput, setLoginInput] = useState({
    username: '',
    password: '',
  });
  const [, setIsAuth] = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    if (e.target.checkValidity()) {
      setIsLoading(true);
      login(loginInput).then((response) => {
        setIsLoading(false);
        if (response.status === 200) {
          setHeader(response.data.token);
          setIsAuth(true);
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

  const loginInputHandler = (e) => {
    setLoginInput((prev) => {
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
        <h2>Đăng nhập</h2>
        <MDBValidationItem
          feedback="Hãy nhập tên đăng nhập "
          invalid
          className="col mb-2"
        >
          <MDBInput
            label="Tên đăng nhập"
            name="username"
            value={loginInput.username}
            type="text"
            required
            onChange={loginInputHandler}
          />
        </MDBValidationItem>
        <MDBValidationItem
          feedback="Hãy nhập mật khẩu có hiểu lực (độ dài tối thiểu 8)"
          invalid
          className="col mb-2"
        >
          <MDBInput
            label="Mật khẩu"
            name="password"
            value={loginInput.password}
            type="password"
            minLength={8}
            required
            onChange={loginInputHandler}
          />
        </MDBValidationItem>
        <button
          type="submit"
          className="btn-lg btn-success btn-block mb-4 border-0 fw-bold"
        >
          Đăng nhập
        </button>
        <p className="small">
          Không có tài khoản?
          <Link to="/auth/register">
            <span className="text-success" role="button">
              Đăng kí ở đây
            </span>
          </Link>
        </p>
      </MDBValidation>
    </>
  );
};

export default LoginForm;
