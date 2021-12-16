import { useState } from "react";

import GrayBlock from "../grayBlock/GrayBlock";
import CultDesc from "../descriptions/culture/culture";
import Desc1 from "../descriptions/culture/desc1";
import Desc2 from "../descriptions/culture/desc2";

import { db } from "../../DB/db";

import './pages.css';

const Culture = () => {
    const {color, img} = db[4];

    const bgColor = color;
    const [select, setSelect] = useState(false)

    const contents = [
        <Desc1 color={bgColor} select={setSelect}/>,
        <Desc2 color={bgColor} select={setSelect}/>
    ]

    const content = select + 1 ? contents[select] : null;

    return (
        <div className='background' style={{backgroundImage: `url(${img})`}}>
            <GrayBlock color={color} select={4}/>
            <CultDesc select={setSelect}/>
            {content}
        </div>
    )

   
}
export default Culture;