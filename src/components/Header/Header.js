import React from "react";

import resumeSvg from "../../assets/resume-header.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}> : 
      <div className={styles.left}>
        <p className={styles.heading}>
           
           Your Gateway to Opportunity:<span className="text-color"> Build a Resume That Opens Doors!</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
