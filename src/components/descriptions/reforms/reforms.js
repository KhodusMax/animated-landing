import { useState } from 'react';

import './reforms.css';

const RefDesc = ({select}) => {
    const [contentState, setContentState] = useState(true);

    const content = contentState ? <Veiw1 select={select}/> : <Veiw2 select={select}/>;

    return (
        <div className='description reforms'>
            {content}
            <div className='buttons'>
                <div className='round btn' onClick={() => setContentState(true)} style={{backgroundColor: contentState ? '#E27588' : 'white'}}/>
                <div className='round btn' onClick={() => setContentState(false)} style={{backgroundColor: contentState ? 'white' : '#E27588'}}/>
            </div>
        </div>
    )
}

const Veiw1 = ({select}) => {
    return (
        <>
            <div className='small-blocks ref-one' onClick={() => select(0)}>
                <div className='round'/>
                Supporting the Government's reforms agenda</div>
            <div className='small-blocks ref-two' onClick={() => select(1)}>
                <div className='round'/>
                Assistance in the preparation of the annual report and update of Kyiv City Development Strategy</div>
            <div className='small-blocks ref-three' onClick={() => select(2)}>
                <div className='round'/>
                Supporting the Parliamentary FEC Committee on policy design and implementation</div>
            <div className='small-blocks ref-four' onClick={() => select(3)}>
                <div className='round'/>
                Multiple projects aimed at building peace and Donbas’ recovery</div>
            <div className='small-blocks ref-five' onClick={() => select(4)}>
                <div className='round'/>
                Recovery of governance and facilitation of reconciliation in affected communities in Ukraine</div>
            <div className='small-blocks ref-six' onClick={() => select(5)}>
                <div className='round'/>
                Labour Code</div>
        </>
    )
}

const Veiw2 = ({select}) => {
    return (
        <>
            <div className='small-blocks ref-one' onClick={() => select(6)}>
                <div className='round'/>
                Support to the National Anti-Corruption Bureau of Ukraine</div>
            <div className='small-blocks ref-two' onClick={() => select(7)}>
                <div className='round'/>
                Support in conducting monitoring of implementation of EU-Ukraine Association Agreement</div>
            <div className='small-blocks ref-three' onClick={() => select(8)}>
                <div className='round'/>
                Assistance to the MEDT in implementation of the Government Procurement Agreement</div>
            <div className='small-blocks ref-four' onClick={() => select(9)}>
                <div className='round'/>
                HRM model for the public procurement reform team – ProZorro</div>

        </>
    )
}

export default RefDesc;