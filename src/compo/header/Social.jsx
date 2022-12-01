import React from 'react';
import {BsLinkedin as Ink} from 'react-icons/bs';
import {GoMarkGithub as Gith} from 'react-icons/go';

const Social = () => {
  return (
    <div className="header__socials">
        <a href="https://dev-connect-css.netlify.app/" target="_blank"><Ink /></a>
        <a href="https://dev-connect-css.netlify.app/" target="_blank"><Gith /></a>
        <a href="https://dev-connect-css.netlify.app/" target="_blank"><Ink /></a>
    </div>
  )
}

export default Social;