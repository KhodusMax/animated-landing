import { RedBlock } from "../../../img/redBlock";

import './sustainability.css'

const Desc3 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Turning business commitments into real action on climate</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content sust black'>
                    <p>Sustainability issues are having an increasingly dramatic impact on businesses, investors, consumers, the workforce and governments. Whilst the Covid-19 pandemic has caused widespread disruption, it has also provided momentum and opportunity to rethink and reconfigure for resilience.</p>
                    <p>At PwC we help organisations plan, source, deliver, finance and measure the wider impact of products and services. We’re helping to future-proof businesses by making them more resilient, agile and sustainable. For decades we have been providing guidance on a wide variety of issues, working with clients from the corporate, private equity and public sector.</p>
                </div>
            </div>
        </>
    )
}

export default Desc3;