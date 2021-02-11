import React from "react";
import "./footer.css";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
function Footer() {
  return (
    <div className="footer">
      <div className="footer__box">
        <h2>About Us</h2>
        <p>
          “Nidhi” is a Hindi word, which means finance or fund. Nidhi means a
          company which has been incorporated exclusively with the object of
          developing the habit of thrift and reserve funds amongst its members.
        </p>
        <h3>Contacts</h3>
        <p><span><PhoneIcon/>0470 2627330</span>  <span><MailIcon/>info@drkindianidhi.com</span></p>
        <p><span><PhoneIcon/>+91 8547398330</span></p>
      </div>
      <div className="footer__box">
        <h2>Registered Office</h2>
        <p>
          DRK India Nidhi Limited, KP VII/500(B), Kalluvilla Veedu, 18th Mile,
          Kizhuvilam P.O, Attingal, Trivandrum, Kerala 695104
        </p>
        <h3>Working Hours</h3>
        <p>Mon-Fri: 10:00 AM - 5:30 PM</p>
        <p>Sat : 10:00 AM - 2:00 PM</p>
        <p>Transaction time - 10:00 AM TO 4:15 PM</p>
        <p>2nd and 4th Saturday Holiday</p>
      </div>
      <div className="footer__box">
        <h2>Latest News</h2>
      </div>
    </div>
  );
}

export default Footer;
