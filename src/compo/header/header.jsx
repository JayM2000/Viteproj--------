import React, { useState, useEffect } from 'react';
import Cta from './cta';
import SS from '../../assets/sss.png';
import Socialslink from './Social';
import './header.css';

const Header = () => {
  const [themes, setthemes] = useState(true);

  useEffect(() => {
    if (themes) {
      // here document.documentElement returns parent element i.e. html tag 
      document.documentElement.setAttribute("data-theme", "light");
    }
    else {
      document.documentElement.setAttribute("data-theme", "dark");
    }

  }, [themes]);


  function func(e) {

    setthemes(themes ? false : true);
  }


  return (
    <React.Fragment>
      <br />

      {/* toggle start */}
      <div className='maindiv'>
        <div style={{ marginRight:"10px" }}>
          {
            themes ?
              (
                  <i className='fa-solid fa-sun' style={{ fontSize: "30px", color: "rgb(231 201 6)" }}></i>
                // <img src={Sun} style={{ display: "inline-block", paddingLeft: "100px", height: "30px" }}></img>
              )
              :
              (<i className='fa-solid fa-cloud-moon' style={{ fontSize: "30px", color: "rgb(231 201 6)" }}></i>)
          }
        </div>
        <div>
          <label for="default-toggle" className="lbs inline-flex relative items-center cursor-pointer" >
            <input type="checkbox" checked={themes ? false : true} id="default-toggle" onChange={(e) => func(e)} className="sr-only peer " />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      {/* toggle end */}

      <br />

      <header>
        <div className='container header__container'>
          <h5>hello h5 tag's here</h5>
          <h1>hello h1 tag closing</h1>
          <h5 className='text-light'>fullstack devop</h5>
          
          <Cta />
          <Socialslink />
        
          <div className='me'>
            <img src={SS} alt="img background" />
          </div>

           <a href='#contact' className='scroll_down'>scroll Down</a>
        </div>
      </header>

    </React.Fragment>
  )
}

export default Header;