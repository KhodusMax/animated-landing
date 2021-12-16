import './sustainability.css';

const SusDesc = ({select}) => {

    return (
        <div className='description sust'>
            <Veiw1 select={select}/>
        </div>
    )
}

const Veiw1 = ({select}) => {
    return (
        <>
            <div className='small-blocks ref-one' onClick={() => select(0)}>
                <div className='round'/>
                Accelerating the journey to Net Zero</div>
            <div className='small-blocks ref-two' onClick={() => select(1)}>
                <div className='round'/>
                Vision of municipal waste management reform in Ukraine</div>
            <div className='small-blocks ref-four' onClick={() => select(2)}>
                <div className='round'/>
                Turning business commitments into real action on climate</div>
        </>
    )
}

export default SusDesc;