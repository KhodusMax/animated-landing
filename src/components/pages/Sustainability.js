import { useState } from "react";

import GrayBlock from "../grayBlock/GrayBlock";
import SusDesc from "../descriptions/sustainability/sustainability";
import Desc1 from '../descriptions/sustainability/desc1';
import Desc2 from '../descriptions/sustainability/desc2';
import Desc3 from '../descriptions/sustainability/desc3';

import { db } from "../../DB/db";

import './pages.css';

const Sustainability = () => {
    const {color, img} = db[2];

    const bgColor = color;
    const [select, setSelect] = useState(false)

    const contents = [
        <Desc1 color={bgColor} select={setSelect}/>,
        <Desc2 color={bgColor} select={setSelect}/>,
        <Desc3 color={bgColor} select={setSelect}/>
    ]

    const content = select + 1 ? contents[select] : null;

    return (
        <div className='background' style={{backgroundImage: `url(${img})`}}>
            <GrayBlock color={color} select={2}/>
            <SusDesc select={setSelect}/>
            {content}
        </div>
    )

   
}
export default Sustainability;