import { RedBlock } from "../../../img/redBlock";

import './investment.css'

const Desc1 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Paying Taxes</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content investment black'>
                    <p>PwC, jointly with The World Bank Group, conducts an annual study called Paying Taxes (part of Doing Business ranking). This is our pro bono work which evaluates the ease of paying taxes in 190 countries across the globe, including Ukraine. Upon completion of a study for a particular year, our tax team led by Partner Viacheslav Vlasov presents proposals to the Ukraine’s Ministry of Finance aimed at improving tax policy in our country.</p>
                </div>
            </div>
        </>
    )
}

export default Desc1;