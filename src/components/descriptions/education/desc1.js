import { RedBlock } from "../../../img/redBlock";

import './education.css'

const Desc1 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Educating the tax inspectors of the future</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content education black'>
                    <p>For the last decade, PwC in Ukraine has been cooperating with the University of the State Fiscal Service of Ukraine with the aim to develop smart future tax inspectors, well versed in tax trends and best international practices. PwC has contributed over 1000 pro bono hours into dozens of knowledge seminars and case studies, and developed a special training course on the practical aspects of international taxation, which was attended by more than 200 students. In addition, we helped the University to upgrade its IT infrastructure, and introduced a quarterly PwC stipend for the best tax student.</p>
                </div>
            </div>
        </>
    )
}

export default Desc1;