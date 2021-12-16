import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc2 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Assistance in the preparation of the annual report and update of Kyiv City Development Strategy</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>As part of its GGF support, the PwC in Ukraine team helped the Kyiv City State Administration to review and update the strategy of Kyiv.</p>
                    <p>The project helped to address some of the serious challenges in the strategic, management and financial performance of the City of Kyiv. Thanks to the support from the project team, the first annual report of Kyiv City was published in 2015, helping the State Administration to reach a debt restructuring agreement with its bondholders and therefore saved Kyiv City citizens hundreds of millions of dollars.</p>
                    <p>Moreover, the process of developing the Kyiv City Strategy 2025 helped to build a consensus among the top management of Kyiv City on the long-term vision and priorities of the city’s development.</p>
                </div>
            </div>
        </>
    )
}

export default Desc2;