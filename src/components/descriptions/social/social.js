import './social.css';

const SocDesc = ({select}) => {

    return (
        <div className='description social'>
            <Veiw1 select={select}/>
        </div>
    )
}

const Veiw1 = ({select}) => {
    return (
        <>
            <div className='small-blocks ref-one' onClick={() => select(0)}>
                <div className='round'/>
                Building trust in society and solving important problems</div>
            <div className='small-blocks ref-two' onClick={() => select(1)}>
                <div className='round'/>
                Cooperation with Tabletochki Charity Foundation</div>
        </>
    )
}

export default SocDesc;