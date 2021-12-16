import { RedBlock } from "../../../img/redBlock";

import './investment.css'

const Desc6 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Export Promotion Office</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content investment black'>
                    <p>The Government of Ukraine (GoU) has recognised that current structures in Ukraine to support trade are not sufficient to address the rapidly changing international and national trade environment.</p>
                    <p>According to the Strategic Trade Development Road Map for 2017-2021 as a part of the Export Strategy of Ukraine (developed and approved internally by MEDT), support for trade requires institutional enhancement and capacity building for both institutions and personnel. The strategy therefore proposed establishing a dedicated institution to promote exports. An Export Promotion Office (EPO) was set up in November 2016; however, this is only an advisory and consultative body to the MoEDT. The GoU needed to take the next step, turning this body into a fully-fledged export promotion support institution which can develop and support an export-friendly ecosystem between government institutions and the business community in Ukraine.</p>
                    <p>The project team analysed the benefits of the proper institutional establishment of the EPO and advised on the steps to be taken to transform EPO into a permanent export support and promotion body. In order to achieve it, the PwC project team delivered the following outputs:<br/>
                    - Concept paper on the optimal model for the export promotion support institution<br/>
                    - Advice on the optimal legal status of the export promotion support institution, including potential funding sources, regional network, and recommendations of any legislative changes, if required
                    - Recommendations on the key operational documents of the export promotion support institution, including staff schedules, key business processes, business plan and plan for roll-out activities</p>
                    <p>This led to the set-up to the State Institution: Export Promotion Office (SIEPO). The team then went on to help the young institution to improve its internal processes. The team delivered the following:<br/>
                    - Analysis of international good practice of using KPIs across international trade promotion organisations<br/>
                    - Development of the methodology for the development of KPIs system for EPO<br/>
                    - Development of KPI library for EPO</p>
                    <p>Our project team, together with SIEPO, developed a chain framework which will help to assign clear roles and responsibilities for every structural unit within the supply chain. The chain helped in two ways (i) it specified activities and responsible structural units for the activities within a new/existing exporter path from the beginning to the end; (ii) it set a clear vision for SIEPO’s personnel on how every unit contributes to the overall organisational impact. In this way, the project contributed towards improving the governance of the organisation, helping it to become more strategic and effective in its mission of supporting business-led export growth.</p>
                </div>
            </div>
        </>
    )
}

export default Desc6;