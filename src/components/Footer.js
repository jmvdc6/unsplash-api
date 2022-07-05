import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://github.com/jmvdc6'
        target='_blank'
        rel='noopener noreferrer'
        className='link'
      >
        Developed by JM Dela Cruz
      </a>
    </footer>
  );
};

export default Footer;
