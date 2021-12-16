import { RedBlock } from "../../../img/redBlock";

import './gender.css'

const Desc3 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description black'>
                <h2>Creating an inclusive workplace</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="black" strokeWidth="2"></path></svg>
                <div className='content gender black'>
                    <p>At PwC, we are committed to creating a fully inclusive workplace where everyone can be themselves. This is not just because it is the right thing to do, but because an inclusive workplace enables us to embrace the diverse backgrounds and perspectives of all our people to create better outcomes for our clients and society.</p>
                </div>
            </div>
        </>
    )
}

export default Desc3;