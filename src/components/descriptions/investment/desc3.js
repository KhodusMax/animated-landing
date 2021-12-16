import { RedBlock } from "../../../img/redBlock";

import './investment.css'

const Desc3 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Authorised Economic Operator</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content investment black'>
                    <p>The project aimed to support the Ministry of Finance to develop a unified, clear and transparent procedure that will allow Ukrainian customs authorities to process applicants for Authorised Economic Operator (AEO) status.</p>
                    <p>AEO status is an internationally recognised quality mark indicating that a business’ role in the international supply chain is secure, and that a business’ customs controls and procedures are efficient and compliant. Full implementation of the AEO process will provide Ukrainian companies with quicker access to simplified customs procedures and should contribute to an increase in the volume of Ukraine’s foreign trade, which is vitally important for economic growth.</p>
                    <p>In order to achieve the project goals, the PwC project team delivered the following outputs:<br/>
                    - Guidelines and methodology for assessing AEO applicants developed and agreed by beneficiary<br/>
                    - Architectural Technical Requirements (ATRs) for an IT tool and external-facing portal to support the AEO assessment procedure prepared and agreed with the beneficiary<br/>
                    - Training materials developed and training sessions conducted with relevant staff, with the result that the State Fiscal Service (SFS) staff are able to implement the methodology for the AEO process</p>
                    <p>As a result of this project, AEO is now fully functional in Ukraine and the first AEO certificate was presented in March 2021.</p>
                </div>
            </div>
        </>
    )
}

export default Desc3;