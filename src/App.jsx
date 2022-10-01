// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllObjectives from './components/AllObjectives/AllObjectives';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import CreateOKR from './components/CreateORKs/CreateOKR';
import EditORK from './components/EditORK/EditORK';
import Sidebar from './components/Sidebar/Sidebar';

import AuthContext from './store/Auth/AuthContext';

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
  const [isAuth] = useContext(AuthContext);
  return (
    <div className="container-fluid px-0">
      <div className="row g-0 app-container">
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
                <Route path="*" element={<Navigate to="" />} />
                <Route path="edit/:objectiveId" element={<EditORK />} />
              </Route>
              <Route path="*" element={<Navigate to="/objectives" />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
