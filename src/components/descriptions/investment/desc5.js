import { RedBlock } from "../../../img/redBlock";

import './investment.css'

const Desc5 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Developing tax changes and changes to the taxation of the iron ore business in Ukraine</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content investment black'>
                    <p>The PwC in Ukraine team helped to maintain the dialog between the authorities and business representatives providing valuable insight on the tax regulations in other countries exporting iron ore: Australia, China, India, South Africa, Russia, Kazakhstan, Brazil, and Canada.</p>
                    <p>In tight cooperation with PwC’s experts from each of these countries, we collected lots of information about tax regimes, analysed the tax burden for the companies producing iron ore and showed the impact of the possible rate increase on the Ukrainian companies and the competitive position of Ukraine on the world iron ore market.</p>
                </div>
            </div>
        </>
    )
}

export default Desc5;