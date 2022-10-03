// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';

import { setHeader } from './api/http';
import AllObjectives from './components/AllObjectives/AllObjectives';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import CreateOKR from './components/CreateORKs/CreateOKR';
import EditOKR from './components/EditOKR/EditOKR';
import Sidebar from './components/Sidebar/Sidebar';

import AuthContext from './store/Auth/AuthContext';
import EditProfile from './components/Profile/EditProfile';

const MainContainer = ({ children }) => {
  return <main className="col p-3 ps-lg-5 py-5 h-min100vh">{children}</main>;
};

const RouteContent = ({ children }) => (
  <>
    <Sidebar />
    <MainContainer>{children}</MainContainer>
  </>
);

function App() {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const token = localStorage.getItem('token');
  const { decodedToken, isExpired } = useJwt(token);

  useEffect(() => {
    if (token && !isExpired) {
      localStorage.setItem('name', decodedToken?.name);
      setHeader(token);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [token, isExpired, decodedToken?.name, setIsAuth]);

  return (
    <div className="container-fluid px-0">
      <div className="row g-0 h-100vh">
        {isAuth !== null && (
          <Routes>
            {!isAuth && (
              <>
                <Route path="auth">
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                </Route>
                <Route path="*" element={<Navigate to="/auth/login" />} />
              </>
            )}

            {isAuth && (
              <>
                <Route path="objectives">
                  <Route
                    path=""
                    element={<RouteContent children={<AllObjectives />} />}
                  />
                  <Route
                    path="create_okr"
                    element={<RouteContent children={<CreateOKR />} />}
                  />
                  <Route
                    path="edit/:objectiveId"
                    element={<RouteContent children={<EditOKR />} />}
                  />
                </Route>
                <Route
                  path="user"
                  element={<RouteContent children={<EditProfile />} />}
                />
                <Route path="*" element={<Navigate to="/objectives" />} />
              </>
            )}
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
