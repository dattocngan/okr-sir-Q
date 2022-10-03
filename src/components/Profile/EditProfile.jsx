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

const EditProfile = () => {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sex, setSex] = useState(0);
  const [dob, setDob] = useState('');

  const [isChangingPassword, setIsChangingPassword] = useState(false);

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
        editProfile(newProfile).then((response) => console.log(response));
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
        <MDBValidation onSubmit={submitHandle}>
          {!isLoading && !isChangingPassword && (
            <>
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
            </>
          )}

          {!isLoading && isChangingPassword && (
            <>
              <MDBValidationItem
                className="mb-5"
                feedback="Please provide your old password."
                invalid
              >
                <MDBInput label="Old Password" type="password" required />
              </MDBValidationItem>
              <MDBValidationItem
                className="mb-5"
                feedback="Please provide your new password."
                invalid
              >
                <MDBInput label="New Password" type="password" required />
              </MDBValidationItem>
              <MDBValidationItem
                className="mb-5"
                feedback="Please confirm your new password."
                invalid={false}
              >
                <MDBInput label="Confirm Password" type="password" required />
              </MDBValidationItem>
            </>
          )}
          <button className="btn btn-primary mt-4">
            {isChangingPassword ? 'Change Password' : 'Update Profile'}
          </button>
        </MDBValidation>
      </div>
    </div>
  );
};

export default EditProfile;
