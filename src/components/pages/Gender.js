import { useState } from "react";

import GrayBlock from "../grayBlock/GrayBlock";
import GendDesc from "../descriptions/gender/gender";
import Desc1 from '../descriptions/gender/desc1';
import Desc2 from '../descriptions/gender/desc2';
import Desc3 from '../descriptions/gender/desc3';
import Desc4 from '../descriptions/gender/desc4'

import { db } from "../../DB/db";

import './pages.css';

const Gender = () => {
    const {color, img} = db[5];

    const bgColor = '#ff9d0a';
    const [select, setSelect] = useState(false)

    const contents = [
        <Desc1 color={bgColor} select={setSelect}/>,
        <Desc2 color={bgColor} select={setSelect}/>,
        <Desc3 color={bgColor} select={setSelect}/>,
        <Desc4 color={bgColor} select={setSelect}/>
    ]

    const content = select + 1 ? contents[select] : null;

    return (
        <div className='background' style={{backgroundImage: `url(${img})`}}>
            <GrayBlock color={color} select={5}/>
            <GendDesc select={setSelect}/>
            {content}
        </div>
    )

   
}
export default Gender;