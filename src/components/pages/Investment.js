import { useState } from "react";

import GrayBlock from "../grayBlock/GrayBlock";
import InvDesc from "../descriptions/investment/investment";
import Desc1 from '../descriptions/investment/desc1';
import Desc2 from '../descriptions/investment/desc2';
import Desc3 from '../descriptions/investment/desc3';
import Desc4 from '../descriptions/investment/desc4';
import Desc5 from '../descriptions/investment/desc5';
import Desc6 from '../descriptions/investment/desc6';
import Desc7 from '../descriptions/investment/desc7';

import { db } from "../../DB/db";

import './pages.css';

const Investment = () => {
    const {color, img} = db[1];

    const bgColor = '#ff9d0a';
    const [select, setSelect] = useState(false)

    const contents = [
        <Desc1 color={bgColor} select={setSelect}/>,
        <Desc2 color={bgColor} select={setSelect}/>,
        <Desc3 color={bgColor} select={setSelect}/>,
        <Desc4 color={bgColor} select={setSelect}/>,
        <Desc5 color={bgColor} select={setSelect}/>,
        <Desc6 color={bgColor} select={setSelect}/>,
        <Desc7 color={bgColor} select={setSelect}/>
    ]

    const content = select + 1 ? contents[select] : null;

    return (
        <div className='background' style={{backgroundImage: `url(${img})`}}>
            <GrayBlock color={color} select={1}/>
            <InvDesc select={setSelect}/>
            {content}
        </div>
    )

   
}
export default Investment;