import { RedBlock } from "../../../img/redBlock";

import './culture.css'

const Desc1 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Exploring art masterpieces with PwC</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content culture black'>
                    <p>In today's global crisis of trust, the business and art communities are united in their desire to embrace genuine, infallible and time-tested values. From 2018, the PwC team led by Partner Viacheslav Vlasov contributed to this by launching a new cultural project that promotes world and Ukrainian arts among the business community. Under the umbrella of "Exploring art masterpieces with PwC", PwC together with the talented Ukrainian pianist Yevgen Gromov annually hold a music evening devoted to the works of Richard Wagner. In 2019, in collaboration with the Kyiv Art Week and Bereznitsky Art Foundation, PwC presented to a wider audience the works of the Ukrainian sculptor and visual artist Oleksandr Sukholit.</p>
                </div>
            </div>
        </>
    )
}

export default Desc1;