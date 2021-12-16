import { RedBlock } from "../../../img/redBlock";

import './education.css'

const Desc2 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Digital upskilling of our people</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content education black'>
                    <p>At PwC, we transformed ourselves through a global digital upskilling initiative that took 7 million hours of routine work and redirected it towards higher-value activities that clients needed and our people enjoyed doing. People and tech working together for a better outcome.</p>
                </div>
            </div>
        </>
    )
}

export default Desc2;