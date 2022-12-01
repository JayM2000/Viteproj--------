import React,{ useEffect } from 'react';
import Logo from '../../assets/mmcoelogo.jpeg';
import AOS from "aos";
import "aos/dist/aos.css";
import './portfo.css';

const Portfo = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine"
    });
  }, []);

  return (
    <section data-aos="zoom-in" id='port' className='education'>
      <h5 className='h5comp'>My Education</h5>

      {/* container required */}
      <div className='container'>

        {/* education-card */}
        <div className='cardport'>

          {/* education-card-column */}
          <div className='flexboxs'>
            
              {/* img div */}
              <div data-aos='fade-in' data-aos-delay='100' className='imginfo'> 
                <img className='imgsrc' src={Logo} alt='Images..' />
              </div>

              {/* education info div */}
              <div data-aos='fade-in' data-aos-delay='200' className='eduinfo'>
                <h4>MMMCOE  -  Bachelor of Engineering in COMPUTER, Pune, Maharashtra </h4>
                  <span className='cgpa'>CGPA 8.62/10</span>
                  <span className='year cgpa'>2018 - 2022</span>

                <div className='utags'>
                    <ul className='ultag'>
                      <li className='lists'>
                        <span>•</span>
                        <span className='spns'>Major in Computer Science</span>
                      </li>
                      <li className='lists'>
                        <span>•</span>
                        <span className='spns'>Honours course in Data Science</span>
                      </li>
                      <li className='lists'>
                        <span>•</span>
                        <span className='spns'>Minor in Web Development</span>
                      </li>
                    </ul>
                </div>

              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfo;