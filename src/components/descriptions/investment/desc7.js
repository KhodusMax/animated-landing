import { RedBlock } from "../../../img/redBlock";

import './investment.css'

const Desc7 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Expats’ Handbook</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content investment black'>
                    <p>PwC experts in Ukraine developed a free guide – Expats’ Handbook to encourage foreign investment in Ukraine and help foreigners coming to Ukraine for personal or business goals.</p>
                    <p>The Handbook provides a general overview of the key rules and requirements that foreigners need to know about the Ukrainian tax and legal environment to allow them to become comfortable and to avoid being overburdened with formalities. Expats’ Handbook is available <a href='https://www.pwc.com/ua/en/services/tax/expat-pocketbook.html'>online</a> in many languages, including English, German, Chinese, French and Polish.</p>
                </div>
            </div>
        </>
    )
}

export default Desc7;