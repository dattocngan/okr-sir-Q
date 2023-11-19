import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/img.jpg';
import AuthContext from '../../store/Auth/AuthContext';

const Header = () => {
  const name = localStorage.getItem('name');

  const [, setIsAuth] = useContext(AuthContext);

  const logoutHandler = () => {
      setIsAuth(false);
      localStorage.removeItem(`name`);
      localStorage.removeItem(`userId`);
    };

  return (
    <header className="d-flex align-items-center justify-content-between pb-sm-5 pb-3">
      <h2 className="">Khám phá các mục tiêu</h2>
      <Link to={'/objectives/create_okr'}>
        <button className="d-flex align-items-center btn py-2 px-3 btn-primary border-0 rounded-pill">
          <i className="material-icons text-white">add</i>
          <span className="text-white d-none d-xl-block">
            Thêm mục tiêu
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
        <div className="justify-content-center d-none d-lg-flex">
          Xin chào <strong>&nbsp; {name}</strong>
        </div>
        <div className="dropdown ms-3">
          <button
            className="btn shadow-0"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">expand_more</i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <Link className="dropdown-item" to={'/user'}>
                Hồ sơ
              </Link>
            </li>
            <li >
                <span className="dropdown-item" onClick={logoutHandler}>
                   Đăng xuất
                </span>
            </li>
          </ul>
        </div>
        {/* <i className="ms-3 material-icons">expand_more</i> */}
      </div>
    </header>
  );
};

export default Header;
