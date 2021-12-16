import { RedBlock } from "../../../img/redBlock";

import './gender.css'

const Desc4 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>PwC EMEA Pride Week</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content gender black'>
                    <p>To "Celebrate & Educate" is the purpose of this second year's PwC EMEA Pride Week programme with discussions around the importance of bringing visibility into the workplace, real-life examples of stepping up, Shine communities educating people on gender identity and many more.</p>
                </div>
            </div>
        </>
    )
}

export default Desc4;