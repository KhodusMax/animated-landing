import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc8 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Support in conducting monitoring of implementation of EU-Ukraine Association Agreement</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>The European Union (EU) – Ukraine Association Agreement (AA), signed in 2014, is the most extensive international legal document that has ever been signed by Ukraine, both in scope and thematic coverage. It lays the roadmap for Ukrainian convergence with EU legislation, standards and principles of operating. Under the UK-UA: Reform Assistance programme funded by UKAID, PwC project team in Ukraine designed a methodology and monitoring system, consisting of ‘scorecards’ for each AA thematic area. The scorecards contain plans with milestones and expected results for each thematic area in order to improve planning, monitoring and the coordination of the AA implementation process. The project team also designed a web tool called ‘Agreement Pulse’ for the online presentation of the scorecards, to communicate achieved progress to a wide audience including civil society.</p>
                    <p>The monitoring system became a practical tool for the control and monitoring of Ministries on the implementation of EU-related commitments as well as a single source of information about Ukrainian progress towards EU association. As a public tool, it helps to engage civil society in the implementation process and make the government more accountable.</p>
                </div>
            </div>
        </>
    )
}

export default Desc8;