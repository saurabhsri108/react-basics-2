import React from 'react';
import footerClasses from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerClasses.footer}>
      <p>Copyright &copy; 2021 | Saurabh Srivastava</p>
      <p> All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
