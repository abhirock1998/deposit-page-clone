import { Button } from '@material-ui/core';
import React from 'react'
import "./top.css";
import PersonIcon from '@material-ui/icons/Person';
function Top() {
    return (
        <div className="top" >
            <div className="top__logo">
                <img src="https://drkindianidhi.com/wp-content/themes/drk-theme/assets/images/logo/drk-logo.png" alt="top-logo"/>
            </div>
            <div className="top__memberBtn">
                <Button variant="outlined"  ><PersonIcon/>For Member Only</Button>
            </div>
        </div>
    )
}

export default Top
