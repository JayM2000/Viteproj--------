import React,{useState} from 'react';
import {FaHome as Hm} from 'react-icons/fa';
import {BsFillFileEarmarkPersonFill as Ab} from 'react-icons/bs';
import {TiContacts as Cont} from 'react-icons/ti';
import {GiSecretBook as Exp} from 'react-icons/gi'; 
import './nav.css'; 

const Nav = () => {

  const [navs,setnavs] = useState('#');

  return (
    <nav>
      <a href='#' title='Home' onClick={() => setnavs('#')} className={navs === '#' ? 'active' : ''}><Hm className='fnt' /></a>
      <a href='#about' title='About Me' onClick={() => setnavs('#about')} className={navs === '#about' ? 'active' : ''} ><Ab className='fnt' /></a>
      <a href='#exp' title='Skills' onClick={() => setnavs('#exp')} className={navs === '#exp' ? 'active' : ''}><Exp className='fnt'/></a>
      <a href='#contact' title='Contact' onClick={() => setnavs('#cont')} className={navs === '#cont' ? 'active' : ''}><Cont className='fnt'/></a>
    </nav>
  )
}

export default Nav;