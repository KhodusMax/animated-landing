import { useSpring, animated} from 'react-spring';
import { Link } from 'react-router-dom'

import './main.css';

export const DescMain = () => {

    const descMainStyle = useSpring({
        to: {opacity: 1},
        from: {opacity: 0},
        delay: 9000
    })

    return (
        <animated.div className='description' style={descMainStyle}>
            <div className='h1'>In 2021 Ukraine celebrates the 30th anniversary of Independence</div>
            <div>
                <p className='text'>We would like to use this great occasion and highlight the most important investments of PwC in Ukraine during all these years of our presence on the market. This project is aimed at bringing together landmark contributions of our team into the development of our country to make it more business-friendly and investor-attractive.</p>
                <p className='text'>Feel free to search this site to explore key areas where our team in Ukraine made a significant impact on the market.</p>
            </div>
            <Link to='/reforms' style={{textDecorationLine: 'none'}}>
                <div className='button'>GO</div>
            </Link>
        </animated.div>
    )
}