import React from 'react';

function Header({ image, title }) {
  return (
    <header className='header'>
      <img src={image} alt="header" />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
