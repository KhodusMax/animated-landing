import './gender.css';

const GendDesc = ({select}) => {

    return (
        <div className='description gender'>
            <Veiw1 select={select}/>
        </div>
    )
}

const Veiw1 = ({select}) => {
    return (
        <>
            <div className='small-blocks ref-one' onClick={() => select(0)}>
                <div className='round'/>
                Women hold over 50% of managerial positions at PwC in Ukraine</div>
            <div className='small-blocks ref-two' onClick={() => select(1)}>
                <div className='round'/>
                Our female colleagues regularly top highly reputable international and national rankings</div>
            <div className='small-blocks ref-four' onClick={() => select(2)}>
                <div className='round'/>
                Creating an inclusive workplace</div>
            <div className='small-blocks ref-five' onClick={() => select(3)}>
                <div className='round'/>
                PwC EMEA Pride Week</div>
        </>
    )
}

export default GendDesc;