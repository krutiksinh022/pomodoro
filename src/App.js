import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {Navigate, Outlet, Route, Routes} from "react-router-dom"

const PrivateRoute = ({auth,...props}) => {
  return auth ? <>
    <Outlet/>
  </> : <>
      <Navigate replace to={"/login"}></Navigate>
  </>
}
function App() {
  const [auth, setAuth] = useState(false)
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        
        <Route path='/login' element={<Login setAuth={setAuth} />}></Route>
        <Route path='/' element={<PrivateRoute auth={auth}></PrivateRoute>}>
        <Route path="/" element={<Home setAuth={ setAuth}/>}></Route>
      </Route>
        
        </Routes>
    </ChakraProvider>
  );
}


export default App;
