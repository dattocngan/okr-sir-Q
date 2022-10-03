import React, { useEffect, useState } from 'react';
import {
  MDBValidationItem,
  MDBValidation,
  MDBInput,
  MDBRadio,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
} from 'mdb-react-ui-kit';
import { editProfile, getProfile } from '../../api/http';
import Modal from '../UI/Modal';
import Loader from '../UI/Loader';
import Swal from 'sweetalert2';

const EditProfile = () => {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sex, setSex] = useState(0);
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [isEqual, setIsEqual] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProfile().then((response) => {
      setIsLoading(false);
      setName(response.data.user.name);
      setUserName(response.data.user.username);
      setSex(response.data.user.sex);
      if (response.data.user.birthday) {
        setDob(response.data.user.birthday.split('T')[0]);
      }
    });
  }, []);

  useEffect(() => {
    setIsEqual(!newPassword.localeCompare(confirmPassword) ? true : false);
  }, [newPassword, confirmPassword]);

  const submitHandle = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      if (!isChangingPassword) {
        const newProfile = {
          username: userName,
          name: name,
          sex: sex,
          birthday: new Date(dob),
        };
        setIsLoading(true);
        editProfile(newProfile).then((response) => {
          setIsLoading(false);
          if (response.status === 200) {
            localStorage.setItem('name', newProfile.name);
            Swal.fire('Good job!', response.data.message, 'success');
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        });
      } else {
        if (isEqual) {
          setIsLoading(true);
          editProfile({
            oldPassword: password,
            newPassword: newPassword,
          }).then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
              Swal.fire('Good job!', response.data.message, 'success');
              setPassword('');
              setNewPassword('');
              setConfirmPassword('');
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.data.message,
              });
            }
          });
        }
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      {isLoading && <Modal children={<Loader />} />}
      <div className="w-50 py-5">
        <h1 className="mb-3">Profile</h1>
        <MDBTabs pills justify className="mb-3 d-flex">
          <MDBTabsItem className="d-flex">
            <MDBTabsLink
              className="d-flex align-self-stretch align-items-center flex-fill justify-content-center"
              active={!isChangingPassword}
              onClick={() => setIsChangingPassword(false)}
            >
              Edit Profile
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem className="d-flex">
            <MDBTabsLink
              className="d-flex align-self-stretch align-items-center flex-fill justify-content-center"
              active={isChangingPassword}
              onClick={() => setIsChangingPassword(true)}
            >
              Change Password
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
        {!isLoading && !isChangingPassword && (
          <MDBValidation onSubmit={submitHandle}>
            <MDBValidationItem className="mb-5">
              <MDBInput label="Username" defaultValue={userName} disabled />
            </MDBValidationItem>
            <MDBValidationItem
              className="mb-5"
              feedback="Please provide your name."
              invalid
            >
              <MDBInput
                label="Name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </MDBValidationItem>
            <MDBValidationItem
              className="mb-5"
              feedback="Please provide your birthday."
              invalid
            >
              <MDBInput
                type="date"
                label="Birthday"
                defaultValue={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </MDBValidationItem>
            <div>
              <MDBRadio
                name="Sex"
                id="Male"
                label="Male"
                defaultChecked={!sex ? true : false}
                onChange={() => setSex(0)}
              />
              <MDBRadio
                name="Sex"
                id="Female"
                label="Female"
                defaultChecked={sex ? true : false}
                onChange={() => setSex(1)}
              />
            </div>
            <button className="btn btn-primary mt-4">Update Profile</button>
          </MDBValidation>
        )}

        {isChangingPassword && (
          <form onSubmit={submitHandle}>
            <MDBInput
              className="mb-4"
              label="Old Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              minLength={8}
              required
            />

            <MDBInput
              className="mb-4"
              label="New Password"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              minLength={8}
              required
            />

            <MDBInput
              className=""
              label="Confirm Password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              minLength={8}
              required
            />
            <span className="d-block text-danger">
              {!isEqual && confirmPassword && "Confirm password doesn't match"}
            </span>
            <button className="btn btn-primary mt-4">Change Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
