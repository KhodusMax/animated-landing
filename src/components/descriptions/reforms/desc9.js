import { RedBlock } from "../../../img/redBlock";

import './reforms.css'

const Desc9 = ({color, select}) => {

    return (
        <>
            <div className='redBlock'><RedBlock color={color}/></div>
            <div className='full-description'>
                <h2>Assistance to the MEDT in implementation of the Government Procurement Agreement</h2>
                <svg className="close"  onClick={() => select(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L17 1M1 1L17 17" stroke="#fff" strokeWidth="2"></path></svg>
                <div className='content reforms'>
                    <p>On November 12, 2015 Ukraine joined the Government Procurement Agreement (GPA) – a plurilateral agreement within the framework of the WTO. At present, the Agreement has 21 parties comprising 48 WTO members.</p>
                    <p>The fundamental aim of the GPA is to open government procurement between its parties. The GPA parties have opened procurement activities estimated to be worth more than US$ 1.7 trillion annually to international competition. Under the UK-UA: Reform Assistance programme funded by UKAID, with support of PwC, a pilot unit named “GPAinUA” was established, focusing its efforts on encouraging Ukrainian suppliers to take part in public procurement tenders abroad. Moreover, PwC developed promotional campaign materials on participation in Ukrainian public tenders for exporters from the GPA countries as well as conducted a series of workshops on participation in tenders abroad for Ukrainian exporters.</p>
                    <p>The delivered outputs contributed towards the achievement of the intended outcome of the project of increased two-way participation in public procurement between Ukraine and Government Procurement Agreement parties as 39 Ukrainian companies have won in USA public procurement (tenders) since November 2016 and 47 foreign suppliers have participated in Ukrainian public procurement since February 2017.</p>
                </div>
            </div>
        </>
    )
}

export default Desc9;