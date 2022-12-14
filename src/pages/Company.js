import React from "react";
import bg from "../images//backgrounds/bits.svg";
// Images
import au1 from "../images/aboutus/au1.jpg";
import au2 from "../images/aboutus/au2.jpg";
import au3 from "../images/aboutus/au3.jpg";

function Company() {
  return (
    <div className="py-5 company" style={{ backgroundImage: `url(${bg})` }}>
      <div id="about-us-header-div">
        <h2 id="about-us-header">
          ABOUT <span className="color1">US</span>
        </h2>
      </div>
      <div className="container-md">
        <div className="parallax-text">
          <h4>
            <b>Skill Hunt</b> is a national employment platform specialising in
            jobs for web developers, such as front-end, back-end and full-stack
            web development. It provides an opportunity for employers to connect
            with job seekers looking for meaningful employment in the web
            development industries around Philippines.
          </h4>
        </div>
        <div
          className="parallax"
          style={{ backgroundImage: `url(${au1})` }}
        ></div>
        <div className="parallax-text">
          <h4>
            <b>Skill Hunt</b> provides a more personalised approach to
            recruitment whilst ensuring that your job ads enjoy widespread
            distribution to the right candidates. It partners with Philippines
            largest employment sites so that your job ads reach the largest
            audience, including JobStreet, Kalibr, Indeed, LinkedIn, and
            BossJob.
          </h4>
        </div>
        <div
          className="parallax"
          style={{ backgroundImage: `url(${au2})` }}
        ></div>
        <div className="parallax-text">
          <h4>
            <b>Skill Hunt</b> also features a host of benefits across its job
            packages to truly maximise your recruitment campaign, including
            professionally written job ads, beautiful bespoke imagery, socials
            media campaigns across Facebook and Instagram, priority featured
            listings, unlimited candidate searches and resume views, plus so
            much more!
          </h4>
        </div>
        <div
          className="parallax"
          style={{ backgroundImage: `url(${au3})` }}
        ></div>
        <div className="parallax-text">
          <h4>
            The <b>Skill Hunt</b> online database provides a platform for both
            active and passive job seekers to create a profile and upload their
            CV so that business owners looking for staff can get in touch with
            potential candidates. Our purpose is to connect job seekers and
            employers so they can each find their dream job and ideal team
            member.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Company;
