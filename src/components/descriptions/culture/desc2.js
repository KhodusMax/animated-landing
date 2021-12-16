import { RedBlock } from "../../../img/redBlock";

import './culture.css'

const Desc2 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>National selection for Eurovision Song Contest</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content culture black'>
                    <p>The PwC in Ukraine team ensured the integrity and accuracy of the voting process by verifying the correctness of the voting results at the National selection of Ukraine's participant for the 2016-2020 Eurovision Song Contests.</p>
                    <p>Eurovision is one of the most exciting social projects delivered by the PwC Assurance team driven by Partner Olena Volkova.</p>
                    <p>We are honored to have secured the transparency and accuracy of the voting process of the Contest, as Eurovision provides Ukraine with an opportunity to promote our talents and our country itself as a marvelous cultural and tourist destination.</p>
                </div>
            </div>
        </>
    )
}

export default Desc2;