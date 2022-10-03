import React, { useEffect, useState } from "react";
import {
  MDBValidationItem,
  MDBValidation,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { getProfile } from "../../../api/http";

const EditProfile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState(user.name);
  const [sex, setSex] = useState(user.sex);
  const [dob, setDob] = useState(user.birthday);

  const submitHandle = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
    }
  };
  useEffect(() => {
    getProfile().then((response) => {
      setUser(response.data.user);
    });
  }, []);

  useEffect(() => {
    setName(user.name);
    setSex(user.sex);
    setDob(user.birthday);
  }, [user]);

  return (
    <div className="container py-5">
      <MDBValidation onSubmit={submitHandle} isValidated>
        <MDBValidationItem className="mb-5">
          <MDBInput id="" label="Username" value={user.username} disabled />
        </MDBValidationItem>
        <MDBValidationItem
          className="mb-5"
          feedback="Please provide your name."
          invalid
        >
          <MDBInput id="" label="Name" value={name} required />
        </MDBValidationItem>
        <MDBValidationItem
          className="mb-5"
          feedback="Please provide your old password."
          invalid
        >
          <MDBInput type="password" id="" label="Old Password" required />
        </MDBValidationItem>
        <MDBValidationItem
          className="mb-5"
          feedback="Please provide your new password."
          invalid
        >
          <MDBInput type="password" id="" label="New Password" required />
        </MDBValidationItem>
        <MDBBtn type="submit" className="mt-4">
          Update Profile
        </MDBBtn>
      </MDBValidation>
    </div>
  );
};

export default EditProfile;
