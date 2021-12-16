import { RedBlock } from "../../../img/redBlock";

import './investment.css'

const Desc2 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Supporting Eurobonds issues of Ukrainian market players</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content investment black'>
                    <p>Throughout the years of PwC presence on the Ukrainian market, the PwC audit team in Kyiv has continuously taken part in Eurobonds issues by large Ukrainian enterprises, with the aim to increase investments in the Ukrainian economy.</p>
                    <p>PwC's scope of work in this kind of transaction usually includes the provision of Comfort Letters which assure the participants of the transactions that the figures in an Offering Memorandum were accurate.</p>
                </div>
            </div>
        </>
    )
}

export default Desc2;