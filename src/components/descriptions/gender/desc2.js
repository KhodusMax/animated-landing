import { RedBlock } from "../../../img/redBlock";

import './gender.css'

const Desc2 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Our female colleagues regularly top highly reputable international and national rankings</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content gender black'>
                    <p>In 2018, Olga Balytska, Real Estate Practice Leader, was ranked among the TOP 100 most successful women in Ukraine (according to nv.ua).</p>
                    <p>Starting from 2018, Zhanna Brazhnyk (Tax Litigation) has been named as Women in Tax in Ukraine by the International Tax Review, which recommends the best female professionals in taxation.</p>
                    <p>The professional achievements of Olga Trifonova (Transfer Pricing), Olga Melnychenko (Employment Law) and Vita Miroshnychenko (International Trade and Customs) are regularly recognized by independent international rankings.</p>
                </div>
            </div>
        </>
    )
}

export default Desc2;