import React, { Component } from 'react';
import styles from './App.css';
import Background from './images/noise.jpg';


class App extends Component {
  componentWillMount() {
    document.body.style.font = "16px Helvetica, Sans-Serif";
    document.body.style.lineHeight = "24px";
    document.body.style.color = "brown";
  }

  componentWillUnmountn() {
    document.body.style.font = null;
    document.body.style.lineHeight = null;
    document.body.style.background = null;
  }
  render() {
    const skillStyle = {
      height: '200px'
    }

    const experienceStyle = {
      height: '340px'
    }

    const backgroundImage = {
      backgroundImage: `url(${Background})` 
    }

    return (
      <div className={styles.App}>
        <div id="page-wrap">
          <img src={require("./images/khang.jpg")} alt="Khang's Photo" id="pic" />

          <div id="contact-info" className="vcard">

            <h1 className="fn">Trần Đức Khang</h1>

            <p>
              Cell: <span className="tel">093-181-7758</span><br />
            Email: <a className="email" href="mailto:khangtdk0612@gmail.com">khangtdk0612@gmail.com</a><br />
            Address: <span className="address">40C Ly Tu Trong, P.Ben Nghe, Quan 1, TP.HCM</span>
            </p>
          </div>

          <div id="description">
            <p>
              Graduated as valedictoria of Information technology faculty at Huflit University,
              I am looking for a professional, challenging and dynamic working environment
              where I could have chance to improve my technical skill as well as soft skills,
              accumulate necessary working experiences for my career path. My strength are
              hard working ability, honesty, adaptability for both individual and team work job.
            </p>
          </div>

          <div className={styles.clear}></div>
        
        <dl>
            <dd className={styles.clear}></dd>
            
            <dt>Education</dt>
            <dd>
                <h2>Huflit University</h2>
                <p><strong>Major:</strong> Information Technology<br /></p>
            </dd>
            
            <dd className="clear"></dd>
            
            <dt style={skillStyle}>Skills</dt>
            <dd>
                <h2>Quite Good</h2>
                <p>JavaScript (ES6), HTML, CSS, Bootstrap.</p>
                
                <h2>Good</h2>
                <p>C#, OOP methodologies, Angular, SQL Server.</p>

                <h2>Basic</h2>
                <p>MongoDb, NodeJs, ExpressJs, Python, SCSS.</p>
            </dd>
            
            <dd className="clear"></dd>
            
            <dt style={experienceStyle}>Experience</dt>
            <dd>
                <h2>TechUK <span>Software Developer - 04/2019 to 11/2019</span></h2>
                <ul>
                    <li>Project EyePOS</li>
                    <li>Project Description: A custom Point of Sale system for Longdan Ltd based on Odoo 11.</li>
                    <li>Team size: 12</li>
                    <li>Responsibility: Make and improve some features and make some new reports.</li>                    
                </ul>
                
                <h2>Orient Software Corporation <span>Internship - 12/2019 to 03/2020</span></h2>
                <ul>
                    <li>Trained on developing application with MEAN Stack.</li>
                    <li>Using MongoDB Cloud for managing data.</li>
                    <li>Using NodeJs &amp; ExpressJs for backend server side.</li>
                    <li>Using Angular Material for UI.</li>
                    <li>Completed an simple application based on Trello.</li>
                </ul> 
            </dd>
            
            <dd className={styles.clear}></dd>
            
            <dt>Hobbies</dt>
            <dd><p>Playing games, Reading book, Listening music.</p></dd>
            
            <dd className="clear"></dd>
            
            <dt>Certifications</dt>
            <dd><p>TOEIC: 670</p></dd>
            
            <dd className="clear"></dd>
        </dl>
        
        <div className={styles.clear}></div>
        </div>
      </div>
    );
  }
}

export default App;
