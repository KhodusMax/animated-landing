import { RedBlock } from "../../../img/redBlock";

import './education.css'

const Desc5 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Nurturing the talents of Ukraine through PwC Academy’s bespoke solutions</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content education black'>
                    <p>Since 2009 we have been developing our talent and skills business through PwC Academy in Ukraine, which is a part of the growing network of PwC Academies present in over 40 countries worldwide.</p>
                    <p>Through the decade of our presence in Ukraine, we have invested over 20,000 hours into the development of professional skills of our clients’ staff, with 12,000 graduates enjoying new career horizons upon the completion of our 3000 training sessions.</p>
                    <p>We constantly adapt our courses to meet the needs of modern business, customising them to our clients’ requirements and helping both our clients and individuals to win in the market. Our experts have developed 135 unique programs; we offer 14 professional qualifications and certifications (incl. ‘blue ocean’ ones), and constantly continue to develop and deliver solutions to address in detail markets’ needs, aspirations and challenges in order to assess current competencies, identify knowledge and skills gaps.</p>
                    <p>We have been chosen as a the trusted Learning Partner by such reputable companies (both private and state businesses) as Ukrainian Railways, Naftogaz Ukraine, Ukreximbank, Oschadbank, Reckitt Benckiser, Toyota, Ukrainian Sea Ports Administration, IMC, Teva Ukraine, Watsons, Ascania, Moneyveo, Yazaki, ATB, Acino, Vodafone, OTP Bank, Smart-Holding, EPAM, Softserve, Global Logic, KWS, Metlife Ukraine, Philip Morris Ukraine, IDS Group, EU Anti-corruption Initiative, Ukrsibbank, Agrokebets, Ukrhydroenerho and many others.</p>
                    <p>PwC Academy deploys the social mission of providing high quality professional education and expertise to the Ukrainian professional community and networks. Academy regularly shares expertise at a variety of professional events, conferences and webinars. The Academy's team cooperates closely with the leading professional bodies both locally and internationally.</p>
                </div>
            </div>
        </>
    )
}

export default Desc5;