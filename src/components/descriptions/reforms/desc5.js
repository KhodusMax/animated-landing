import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc5 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Recovery of governance and facilitation of reconciliation in affected communities in Ukraine</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>The PwC in Ukraine team performed an assessment of 2 regional and 15 local (city/combined communities) state administrations within 3 project streams:<br/>
                    - Functional diagnostic review, in particular, allocation of operational areas and the subordination procedure in organisational structures, and segregation of roles and responsibilities<br/>
                    - Assessment of functional capabilities of administrations in terms of provision of public and administration services, strategic planning, project management, monitoring and evaluation, stakeholder relationship management, HR management and financial management<br/>
                    - Budget analysis, specifically, actual vs planned allocation of funds, key income and expense drivers, making of potential alternative financial decisions.</p>
                    <p>Based on this analysis, UNDP was provided with a comprehensive report covering recommendations on the improvement of internal processes and capacity building, and Investment development plans for each administration were analysed.</p>
                </div>
            </div>
        </>
    )
}

export default Desc5;