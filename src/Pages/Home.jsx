import React from 'react';
import Navbar from '../components/Navbar';

import Timex from '../components/Timex';

function Home({ setAuth }) {
  return (
    <div>
      <Navbar setAuth={setAuth}></Navbar>

      <Timex></Timex>
    </div>
  );
}

export default Home;
