import React from 'react'
import './styles.css'
import twitterlogo from '../images/iconmonstr-twitter-1.svg'
import instalogo from '../images/iconmonstr-instagram-11.svg'
import githublogo from '../images/iconmonstr-github-1.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div><img src={twitterlogo} /></div>
        <div><img src={instalogo} /></div>
        <div><img src={githublogo} /></div>
    </div>
  )
}

export default Footer