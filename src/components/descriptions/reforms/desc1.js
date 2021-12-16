import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc1 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Supporting the Government's reforms agenda</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>Over the years, PwC in Ukraine has supported the reforms agenda of the Ukrainian Government. Our experts have taken part in a number of initiatives, including development of the Ukrainian Tax Code and new Labour Code, Ukrainian transfer pricing and 'deoffshorization' regulations, opening the farmland market, the introduction of transparent customs clearance (AEO), tax rulings and FATCA procedures. Our support has been a combination of pro-bono projects, as well as contributing to the activities of AmCham, where our experts over the years have held the positions of Co-Chairs of relevant committees, and PwC cooperation with the UK Good Governance Fund/DFID.</p>
                </div>
            </div>
        </>
    )
}

export default Desc1;