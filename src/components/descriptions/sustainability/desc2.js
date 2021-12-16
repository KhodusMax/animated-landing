import { RedBlock } from "../../../img/redBlock";

import './sustainability.css'

const Desc2 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Vision of municipal waste management reform in Ukraine</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content sust black'>
                    <p>In our cities – in the streets, parks, neighbourhoods – we see empty bottles and cigarette ends every day. No outdoor picnic goes without looking for a clean, not littered place. These problems are not merely the legacy of the days bygone. This is happening in our lifetimes and it is our responsibility to find a solution to this problem. At PwC, we care.</p>
                    <p>We have the professional skills and strong personal commitment to contribute to the search for a solution to the waste management problem in Ukraine. We believe that the economic and social crisis currently spreading throughout the world can create a momentum for change. In this period, people think not about returning to the world they had, but rather about creating the world they have dreamt about. This is a chance for fundamental reforms. And now is time to act.</p>
                    <p>The foundation of the waste management system reform in Ukraine has been laid. We are confident that strong leaders sharing the same goal and working together can make the transformation a success.</p>
                    <p>We want to leverage our knowledge and unique positioning to share advanced ideas in order to raise awareness of all stakeholders and encourage working together.</p>
                    <p>During 2020 our team has been working on the in-depth research of waste management both in Ukraine and globally, involving key stakeholders of the sector. The ultimate goal of this work was to find an answer to the question why the reform has been moving slowly in Ukraine and how to find consensus with all the stakeholders of the sector to start moving with real speed and in the right direction.</p>
                    <p>The first outcome is the report, “From the third world to the first”, where we have analysed problems and perspectives of the waste management sector in Ukraine and compiled a list of tasks, which are, in our view, necessary steps instrumental to the success of the sector reform. Although this report is not an exhaustive roadmap, it helps to confirm that we are on the right track.</p>
                    <p>Our further efforts are directed to actively joining the public discussion on the waste management problem in Ukraine and helping stakeholders to find win-win solutions.</p>
                </div>
            </div>
        </>
    )
}

export default Desc2;