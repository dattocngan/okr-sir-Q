import React from 'react'
import { Link } from 'react-router-dom';
import avatar from "../../assets/images/img.jpg";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-between pb-sm-5 pb-3">
      <h2 className="">Objective Detail</h2>
      <Link to={"/create_okr"}>
        <button className="d-flex align-items-center btn py-2 px-3 btn-primary border-0 rounded-pill">
          <i className="material-icons text-white">add</i>
          <span className="text-white d-none d-xl-block">
            Create new objective
          </span>
        </button>
      </Link>
      <div className="d-flex align-items-center align-content-end justify-content-lg-end">
        <button className="material-icons btn btn-floating d-none d-sm-block me-5">
          notifications
        </button>
        <img
          src={avatar}
          className="h-3rem w-3rem object-cover rounded-circle me-3"
          alt=""
        />
        <strong className="justify-content-center d-none d-xxl-flex">
          Aibles
        </strong>
        <i className="ms-3 material-icons">expand_more</i>
      </div>
    </header>
  );
}

export default Header