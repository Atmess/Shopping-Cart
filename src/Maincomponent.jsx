import { useState } from 'react';
import Header from './Haeder';
import Mainpage from './Mainpage';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <Header />
      <Mainpage />
    </div>
  );
}
