import { RedBlock } from "../../../img/redBlock";

import './gender.css'

const Desc1 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Women hold over 50% of managerial positions at PwC in Ukraine</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content gender black'>
                    <p>Gender democracy and, particularly, creation of equal conditions and opportunities for professional development across gender is one of the key priorities of the firm's internal policy.</p>
                    <p>In terms of the gender profile, we are in the lead of global trends and are proud that over 70% of employees of PwC in Ukraine are women and that they hold over 50% of managerial positions.</p>
                </div>
            </div>
        </>
    )
}

export default Desc1;