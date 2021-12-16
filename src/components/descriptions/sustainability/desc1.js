import { RedBlock } from "../../../img/redBlock";

import './sustainability.css'

const Desc1 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Accelerating the journey to Net Zero</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content sust black'>
                    <p>We have seen an increase in the number of global companies committing to net zero; now companies need to translate pledges into real business transformation. This is key for both long-term business success and to address the climate crisis at the unprecedented scope and scale required.</p>
                    <p>We are proud to be a knowledge advisor to big corporations on their journey to net zero transformation. Using PwC’s experience in supporting companies on net zero and on business transformation more broadly, we have come together to create a guide to help companies as they move from ambition to action.</p>
                </div>
            </div>
        </>
    )
}

export default Desc1;