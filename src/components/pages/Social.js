import { useState } from "react";

import GrayBlock from "../grayBlock/GrayBlock";
import SocDesc from "../descriptions/social/social";
import Desc1 from "../descriptions/social/desc1";
import Desc2 from "../descriptions/social/desc2";

import { db } from "../../DB/db";

import './pages.css';

const Social = () => {
    const {color, img} = db[6];
    
    const bgColor = '#A43E50';
    const [select, setSelect] = useState(false)

    const contents = [
        <Desc1 color={bgColor} select={setSelect}/>,
        <Desc2 color={bgColor} select={setSelect}/>

    ]

    const content = select + 1 ? contents[select] : null;

    return (
        <div className='background' style={{backgroundImage: `url(${img})`}}>
            <GrayBlock color={color} select={6}/>
            <SocDesc color={color} select={setSelect}/>
            {content}
        </div>
    )

   
}
export default Social;