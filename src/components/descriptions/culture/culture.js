import './culture.css';

const CultDesc = ({select}) => {

    return (
        <div className='description culture'>
            <Veiw1 select={select}/>
        </div>
    )
}

const Veiw1 = ({select}) => {
    return (
        <>
            <div className='small-blocks ref-one' onClick={() => select(0)}>
                <div className='round'/>
                Exploring art masterpieces with PwC</div>
            <div className='small-blocks ref-two' onClick={() => select(1)}>
                <div className='round'/>
                National selection for Eurovision Song Contest</div>
        </>
    )
}

export default CultDesc;