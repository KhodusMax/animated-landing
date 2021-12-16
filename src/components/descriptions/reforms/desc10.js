import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc10 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>HRM model for the public procurement reform team – ProZorro</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>Under the UK-UA: Reform Assistance programme funded by UKAID, the PwC in Ukraine team supported the ProZorro team within the MEDT to implement a Human Resources Management (HRM) model based on the High Performing Organisation (HPO) concept of HRM, which is based on line managers rather than a dedicated HR team.</p>
                    <p>With project support, the ProZorro team defined annual personal goals and KPIs as well as annual strategic KPIs for the organisation aligned with the long-term strategic goals of the organisation. It was the first time such project was implemented in the first time this was done in the public sector in Ukraine.</p>
                </div>
            </div>
        </>
    )
}

export default Desc10;