import React from 'react';
import CancellationBanner from './CancellationBanner';
import Header from './Header'; // Assuming Header.jsx is in the same folder

const Layout = ({ children }) => {
  return (
    <>
      <CancellationBanner />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;