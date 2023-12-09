import Rgister from './Component/Rgister';
import './App.css';
import Login from './Component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Dashbord from './Component/Dashbord';
import { setLogout } from './Redux/LoginAction';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { ActionTypes } from './Redux/ActionType';

function App() {

  const dispatch = useDispatch()
  const logindata = useSelector((state) => state?.login[0]?.email);
  const [auth, setAuth] = useState(Boolean(logindata))
  console.log(Boolean(logindata));
  console.log(logindata);

   useEffect(() => {
    let time1 = localStorage.getItem('token');
    const time = JSON.parse(time1);

    if (time === null) {
      console.log("null");
      dispatch(setLogout());
      // setAuth(false)
    }
    else if (time.expiresIn < Date.now()) {
      console.log("time1-", time.expiresIn);
      localStorage.removeItem('token')
      dispatch(setLogout());
      console.log("heelo")
      // setAuth(false)
    }
    else {
      setAuth(true)
      dispatch({
        type: ActionTypes.SET_LOGIN,
        payload: time
      })
      console.log("bello");
    }

  }, [])
 
  function RequireAuth({ children }) {
    console.log("knhjjnhnnj",Boolean(logindata));
    // return Boolean(logindata)? children : <Navigate to="/login" />; //
     return Boolean(logindata)? children : <Login/>;
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Rgister />} />
         
          <Route path="/dash" element={
            <RequireAuth>
              <Dashbord />
            </RequireAuth>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
