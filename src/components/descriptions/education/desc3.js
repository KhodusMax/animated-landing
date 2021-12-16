import { RedBlock } from "../../../img/redBlock";

import './education.css'

const Desc3 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Tomorrow’s Audit Today</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content education black'>
                    <p>At PwC we constantly change the way we look at audits through our investment in technology. Tomorrow's audit today is real, and we are excited to share how PwC is reimagining the audit experience of our clients.</p>
                    <p>Technology shapes today's world, which is constantly changing and opening new opportunities, and business leaders have to be always one step ahead. This inspires PwC to move at the speed of innovation with regards to audit.</p>
                    <p>A blend of people + technology. That’s what drives us today and it’s how we are bringing the audit into the future. Our unique value proposition is a symbiosis of professional skills and innovative enthusiasm of a highly qualified team and advanced technologies</p>
                    <p>Find out how we are <a href='https://www.youtube.com/watch?v=FZCBbFROER8' target='_blank'>reimagining the possible</a> for our clients and companies around the world every day</p>
                </div>
            </div>
        </>
    )
}

export default Desc3;