import { RedBlock } from "../../../img/redBlock";

import './education.css'

const Desc4 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Corruption risks assessment at Kyiv-Mohyla Academy</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content education black'>
                    <p>Forensic experts from PwC in Ukraine and Kinstellar lawyers jointly assessed the potential corruption risks in the activities of the National University of Kyiv-Mohyla Academy (NaUKMA).</p>
                    <p>During the project, the team analyzed the structure, key processes and internal policies of the academy, as well as interviewed representatives of the administration, students and faculty.</p>
                    <p>As a result, the team identified the most vulnerable activities to corruption; identified key potential threats of corruption at the university; analyzed existing anti-corruption measures; formed a list of possible corruption risks, determined the probability of their occurrence and potential consequences.</p>
                    <p>The project was initiated by the academy itself. Aiming to meet the standards of integrity and transparency, NaUKMA turned to the international practices of Kinstellar and PwC, which is an unprecedented phenomenon among Ukrainian universities.</p>
                    <p>NaUKMA actively promotes the development of a culture of academic integrity and the formation of an anti-corruption worldview among its community. In addition, the academy seeks to improve its own tools and measures to prevent corruption in accordance with the requirements of Ukraine's anti-corruption legislation and best international practices. The joint team of both companies considers it an honor to help the academy in this project.</p>
                </div>
            </div>
        </>
    )
}

export default Desc4;