import { useState } from "react";

import GrayBlock from "../grayBlock/GrayBlock";
import RefDesc from "../descriptions/reforms/reforms";
import Desc1 from '../descriptions/reforms/desc1';
import Desc2 from '../descriptions/reforms/desc2';
import Desc3 from '../descriptions/reforms/desc3';
import Desc4 from '../descriptions/reforms/desc4';
import Desc5 from '../descriptions/reforms/desc5';
import Desc6 from '../descriptions/reforms/desc6';
import Desc7 from '../descriptions/reforms/desc7';
import Desc8 from '../descriptions/reforms/desc8';
import Desc9 from '../descriptions/reforms/desc9';
import Desc10 from '../descriptions/reforms/desc10';

import { db } from "../../DB/db";

import './pages.css';

const Reforms = () => {
    const {color, img} = db[0];

    const bgColor = '#A43E50';
    const [select, setSelect] = useState(false)

    const contents = [
        <Desc1 color={bgColor} select={setSelect}/>,
        <Desc2 color={bgColor} select={setSelect}/>,
        <Desc3 color={bgColor} select={setSelect}/>,
        <Desc4 color={bgColor} select={setSelect}/>,
        <Desc5 color={bgColor} select={setSelect}/>,
        <Desc6 color={bgColor} select={setSelect}/>,
        <Desc7 color={bgColor} select={setSelect}/>,
        <Desc8 color={bgColor} select={setSelect}/>,
        <Desc9 color={bgColor} select={setSelect}/>,
        <Desc10 color={bgColor} select={setSelect}/>
    ]

    const content = select + 1 ? contents[select] : null;

    return (
        <div className='background' style={{backgroundImage: `url(${img})`}}>
            <GrayBlock color={color} select={0}/>
            <RefDesc color={color} select={setSelect}/>
            {content}
        </div>
    )

   
}


export default Reforms;