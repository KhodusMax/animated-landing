import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc3 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Supporting the Parliamentary FEC Committee on policy design and implementation</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>During 2016-2019 the PwC in Ukraine team provided support to the Verkhovna Rada Fuel and Energy Sector Committee (FEC) on policy design and implementation. The project was instrumental in creating and driving an effective platform for public policy debate and bringing the required expertise to support the development of progressive, EU-compliant policies in these areas.</p>
                    <p>21 policy workshops organised during the project have increased the quality and transparency of the discussion process and development of relevant legislation within the FEC, improved the liaison process between the FEC and its stakeholders, laying a strong foundation for future collaboration, and enhanced the capacity of civil society to assess the progress of reform in the energy sector through an online portal (www.energydialog.com).</p>
                    <p>As a result of the engagement, Ukraine has intensified its energy reform efforts, bringing its legislation into compliance with the EU Directives and fulfilling its commitments under the Energy Community Treaty. The new legislation already adopted with GGF support is helping to address Ukraine’s multiple energy sector challenges, create a competitive national market and ensure true energy independence.</p>
                </div>
            </div>
        </>
    )
}

export default Desc3;