import { useSpring, animated, config } from 'react-spring';
import {  BrowserRouter as Router, Routes, Link } from 'react-router-dom';

import { backImg } from '../../img/back';
import { LogoMap } from '../../img/logo-map';
import { Img3030 } from '../../img/3030';

import { db } from '../../DB/db';

import './grayBlock.css'


const GrayBlock = (props) => {

  const navItems = db.map((item, i) => {
    return (
      <Link to={`/${item.link}`} key={i} style={{textDecorationLine: 'none'}}>
        <div 
          img={item.img}
          onMouseEnter={(e) => e.target.style.color = item.color } 
          onMouseLeave={(e) => i !== props.select ? e.target.style.color = 'white' : e.target.style.color = item.color}
          style={{borderColor: i === props.select ? props.color : 'null', color: i === props.select ? props.color : 'null'}}
          >
            {item.title}
        </div>
      </Link>
    )
  })

    return(
      <>
        <div className='backNumbers'><Img3030 color={props.color}/></div>
        <div className='grayBlock'>{backImg}</div>
        <div className='nav'>{navItems}</div>
        <div className='logoMap'><LogoMap color={props.color}/></div>
      </>
    )
}

export default GrayBlock;