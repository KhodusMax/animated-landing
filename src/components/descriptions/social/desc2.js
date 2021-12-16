import { RedBlock } from "../../../img/redBlock";

import './social.css'

const Desc2 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Cooperation with Tabletochki Charity Foundation</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content social'>
                    <p>In Ukraine, more than a thousand children are diagnosed with cancer each year. Unfortunately, not all of them have access to quality medical care. Since 2011, Tabletochki Charity Foundation has been helping Ukrainian families to beat cancer as well as helping doctors to save the lives of children with cancer.</p>
                    <p>In 2020 the PwC in Ukraine team was engaged by the Tabletochki Charity Foundation to conduct a Feasibility Study for establishing a Children's Cancer Centre that could offer a world-class care for all Ukrainian children with cancer and their families for free.</p>
                    <p>According to the project, the Centre will be able to provide medical care in accordance with the most effective treatment protocols, a powerful rehabilitation program and a multidisciplinary approach to the treatment - with this improving patient survival rates up to 75% to the level of countries with developed medical infrastructure. It will be equipped with unique for Ukraine technologies that will allow patients to undergo a full cycle of diagnostics and treatment of childhood cancer within the country, which will fully meet international standards.</p>
                    <p>The PwC in Ukraine team is committed to support Tabletochki Charity Foundation further with both professional advice and cooperation within CR programmes.</p>
                </div>
            </div>
        </>
    )
}

export default Desc2;