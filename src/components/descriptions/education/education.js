import './education.css';

const EduDesc = ({select}) => {

    return (
        <div className='description education'>
            <Veiw1 select={select}/>
        </div>
    )
}

const Veiw1 = ({select}) => {
    return (
        <>
            <div className='small-blocks ref-one' onClick={() => select(0)}>
                <div className='round'/>
                Educating the tax inspectors of the future</div>
            <div className='small-blocks ref-two' onClick={() => select(1)}>
                <div className='round'/>
                Digital upskilling of our people</div>
            <div className='small-blocks ref-three' onClick={() => select(2)}>
                <div className='round'/>
                Tomorrow’s Audit Today</div>
            <div className='small-blocks ref-four' onClick={() => select(3)}>
                <div className='round'/>
                Corruption risks assessment at Kyiv-Mohyla Academy</div>
            <div className='small-blocks ref-five' onClick={() => select(4)}>
                <div className='round'/>
                Nurturing the talents of Ukraine through PwC Academy’s bespoke solutions</div>
        </>
    )
}

export default EduDesc;