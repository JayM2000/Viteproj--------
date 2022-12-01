import React from 'react';
import Cv from '../../assets/cv.pdf';

const Cta = () => {
  return (
    <React.Fragment>
        <div className='cta'>
            <a href={Cv} download className="btn fontsz">Download CV</a>
            <a href="#contact" className="btn btn-primary">Contact T</a>
        </div>
    </React.Fragment>
  )
}

export default Cta;