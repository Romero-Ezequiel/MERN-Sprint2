import React from 'react';
import Header from './header';
import Main from './main';
import Enlaces from './enlaces';
import Footer from './footer';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Main />
      <Enlaces />
      <Footer />
    </div>
  );
}

export default Home;
