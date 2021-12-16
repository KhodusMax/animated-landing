import { useState } from 'react';

import './investment.css';

const InvDesc = ({select}) => {
    const [contentState, setContentState] = useState(true);

    const content = contentState ? <Veiw1 select={select}/> : <Veiw2 select={select}/>;

    return (
        <div className='description investment'>
            {content}
            <div className='buttons'>
                <div className='round btn' onClick={() => setContentState(true)} style={{backgroundColor: contentState ? '#EB8C00' : 'white'}}/>
                <div className='round btn' onClick={() => setContentState(false)} style={{backgroundColor: contentState ? 'white' : '#EB8C00'}}/>
            </div>
        </div>
    )
}

const Veiw1 = ({select}) => {
    return (
        <>
            <div className='small-blocks ref-one' onClick={() => select(0)}>
                <div className='round'/>
                Paying Taxes</div>
            <div className='small-blocks ref-two' onClick={() => select(1)}>
                <div className='round'/>
                Supporting Eurobonds issues of Ukrainian market players</div>
            <div className='small-blocks ref-three' onClick={() => select(2)}>
                <div className='round'/>
                Authorised Economic Operator</div>
            <div className='small-blocks ref-four' onClick={() => select(3)}>
                <div className='round'/>
                DCFTA Compliance Support</div>
            <div className='small-blocks ref-five' onClick={() => select(4)}>
                <div className='round'/>
                Developing tax changes and changes to the taxation of the iron ore business in Ukraine</div>
            <div className='small-blocks ref-six' onClick={() => select(5)}>
                <div className='round'/>
                Export Promotion Office</div>
        </>
    )
}

const Veiw2 = ({select}) => {
    return (
        <>
            <div className='small-blocks ref-one' onClick={() => select(6)}>
                <div className='round'/>
                Expats’ Handbook</div>
        </>
    )
}

export default InvDesc;