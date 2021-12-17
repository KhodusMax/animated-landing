import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-router-dom';

import { frame } from '../../img/frame';
import { number1, number2 } from '../../img/numbers';
import { Img3030 } from '../../img/3030';
import { RedBlock } from '../../img/redBlock';
import { map } from '../../img/map';
import { logo } from '../../img/logo';
import { LogoMap } from '../../img/logo-map';
import { backImg } from '../../img/back';
import { DescMain } from '../descriptions/main/main';

import { db } from '../../DB/db';

import './animation.css';

const Animation = () => {
    const backgroundStyle = useSpring({
      to: {'background': 'none'},
      from: {'background': '#303030'},
      delay: 8700
    })
    const frameStyle = useSpring({
        to: [{ opacity: 1}, {opacity: 0, delay: 1000}],
        from: { opacity: 0},
        delay: 2000
      })
      const firstNum = useSpring({
        to: [{x: -130, opacity: 1}, {opacity: 0}],
        from: {x: 100, opacity: 1},
        delay: 3000
      })
      const secondNum = useSpring({
        to: [{x: 330, opacity: 1}, {opacity: 0}],
        from: {x: 100, opacity: 1},
        delay: 3000
      })
      const numbersStyle = useSpring({
        to: [{opacity: 1}, {opacity: 0}],
        from: {opacity: 0},
        delay: 3100
      })
      const redBlockStyle = useSpring({
        to: [{opacity: 1}, {opacity:0, delay: 4200}],
        from: {opacity: 0},
        delay: 3800
      })
      const mapAndLogoStyle = useSpring({
        to:[{opacity: 1}, {opacity: 0, delay: 1500}],
        from: {opacity: 0},
        delay: 4300
      })
      const logoMapStyle = useSpring({
        to: [{opacity: 1}],
        from: {opacity: 0},
        delay: 7000
      })
      const grayBlockStyle = useSpring({
        to:[{opacity: 1}],
        from: {opacity: 0},
        delay: 4300
      })

      const navItems = db.map((item, i) => {
        return (
          <Link to={`/${item.link}`} style={{textDecorationLine: 'none'}}>
            <div 
              key={i}
              img={item.img}
              onMouseEnter={(e) => e.target.style.color = item.color} 
              onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {item.title}
            </div>
          </Link>
        )
      })


      return (
        <animated.div className='background'>
            <animated.div className='background' style={backgroundStyle}/>
            <animated.div className='backNumbers' style={numbersStyle}><Img3030/></animated.div>
            <animated.div className='frame' style={frameStyle}>{frame}</animated.div>
            <animated.div className='numbers' style={firstNum}>{number1}</animated.div>
            <animated.div className='numbers' style={secondNum}>{number2}</animated.div>
            <animated.div className='grayBlock' style={grayBlockStyle}>{backImg}</animated.div>
            <animated.div className='logoMap' style={logoMapStyle}><LogoMap/></animated.div>
            <animated.div className='redBlock' style={redBlockStyle}><RedBlock color={"#E0301E"}/></animated.div>
            <animated.div className='map' style={mapAndLogoStyle}>{map}</animated.div>
            <animated.div className='logo'style={mapAndLogoStyle}>{logo}</animated.div>
            <animated.div className='nav' style={logoMapStyle}>
              {navItems}
            </animated.div>
            <DescMain/>
        </animated.div>
      )
}

export default Animation;