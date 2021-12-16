import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc7 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Support to the National Anti-Corruption Bureau of Ukraine</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>Under the UK-UA: Reform Assistance programme funded by UKAID, PwC in Ukraine has provided a technical assistance to the National Anti-corruption Bureau of Ukraine (NABU) during 2015 -2019.</p>
                    <p>The technical assistance was aimed at:<br/>
                    - Detailed planning of establishment of NABU<br/>
                    - Minimal operational capacity building of NABU<br/>
                    - Strategic development of NABU within key operational areas: IT, Information Security, HR and Public Communications.</p>
                    <p>n total the PwC in Ukraine team has delivered 11 projects for the NABU.</p>
                </div>
            </div>
        </>
    )
}

export default Desc7;