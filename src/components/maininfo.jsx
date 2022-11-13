import React from 'react'
import './styles.css'
import gmaillogo from '../images/iconmonstr-gmail-1.svg'
import linkedinlogo from '../images/iconmonstr-linkedin-1.svg'

const Maininfo = () => {
  return (
    <div className="maininfo">
        <h1>Laura Smith</h1>
        <h4>Front End developer</h4>
        <h6>Mywebsite.something</h6>
        <div className="useful-links">
            <div className="email"><img src={gmaillogo} /><h5>Email</h5></div>
            <div className="linkedin"><img src={linkedinlogo} /><h5>Linkedin</h5></div>
        </div>
    </div>
  )
}

export default Maininfo