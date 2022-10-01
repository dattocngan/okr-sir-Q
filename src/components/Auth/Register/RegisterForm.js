import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MDBValidation, MDBValidationItem, MDBInput } from 'mdb-react-ui-kit';
import { register } from '../../../api/http';

const RegisterForm = () => {
  const [registerInput, setRegisterInput] = useState({
    fullname: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const submitHandler = (e) => {
    if (e.target.checkValidity()) {
      register({
        name: registerInput.fullname,
        username: registerInput.username,
        password: registerInput.password,
      }).then((response) => {
        alert(response.data.message);
        if (response.status === 201) {
          navigate('/auth/login');
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
    <MDBValidation
      noValidate={true}
      className={`text-center mx-auto row row-cols-1 gy-3 gx-0 shadow-4 p-5`}
      onSubmit={submitHandler}
    >
      <h2>Register</h2>
      <MDBValidationItem
        feedback="Please input fullname"
        invalid
        className="col mb-2"
      >
        <MDBInput
          label="Fullname"
          name="fullname"
          value={registerInput.fullname}
          type="text"
          required
          onChange={registerInputHandler}
        />
      </MDBValidationItem>
      <MDBValidationItem
        feedback="Please input username"
        invalid
        className="col mb-2"
      >
        <MDBInput
          label="Username"
          name="username"
          value={registerInput.username}
          type="text"
          required
          onChange={registerInputHandler}
        />
      </MDBValidationItem>
      <MDBValidationItem
        feedback="Please enter a valid password (minimum length 8)"
        invalid
        className="col mb-2"
      >
        <MDBInput
          label="Password"
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
        Register
      </button>
      <p className="small">
        Don't have an account?
        <Link to="/auth/login">
          <span className="text-success" role="button">
            Login here
          </span>
        </Link>
      </p>
    </MDBValidation>
  );
};

export default RegisterForm;
