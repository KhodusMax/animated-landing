import { RedBlock } from "../../../img/redBlock";

import './social.css'

const Desc1 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Building trust in society and solving important problems</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content social'>
                    <p>PwC’s in Ukraine's corporate social responsibility goes beyond donating to charity. We have been constantly investing both money and effort to create impact and value where it is the most needed.</p>
                    <p>We work alongside organisations from across the globe to help solve important social and environmental problems. Our people are our greatest asset, and by using their skills and sharing their time we contribute to the communities in which we live and work.</p>
                    <p>All these years we have been working closely with Tabletochki Charity Fund, Down Syndrome Organization, International Women's Club of Kyiv, Korosten Rehabilitation Centre, and Laska Charity Shop. We follow and support their activities and initiatives as well as frequently organise various fundraising events for the respective NGOs.</p>
                </div>
            </div>
        </>
    )
}

export default Desc1;