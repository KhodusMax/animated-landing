import { useState } from "react";

import GrayBlock from "../grayBlock/GrayBlock";
import EduDesc from "../descriptions/education/education";
import Desc1 from '../descriptions/education/desc1';
import Desc2 from '../descriptions/education/desc2';
import Desc3 from '../descriptions/education/desc3';
import Desc4 from '../descriptions/education/desc4';
import Desc5 from '../descriptions/education/desc5';

import { db } from "../../DB/db";

import './pages.css';

const Education = () => {
    const {color, img} = db[3];

    const bgColor = color;
    const [select, setSelect] = useState(false)

    const contents = [
        <Desc1 color={bgColor} select={setSelect}/>,
        <Desc2 color={bgColor} select={setSelect}/>,
        <Desc3 color={bgColor} select={setSelect}/>,
        <Desc4 color={bgColor} select={setSelect}/>,
        <Desc5 color={bgColor} select={setSelect}/>
    ]

    const content = select + 1 ? contents[select] : null;

    return (
        <div className='background' style={{backgroundImage: `url(${img})`}}>
            <GrayBlock color={color} select={3}/>
            <EduDesc select={setSelect}/>
            {content}
        </div>
    )

   
}
export default Education;