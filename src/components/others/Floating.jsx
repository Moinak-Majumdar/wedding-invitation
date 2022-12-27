import '../../styles/floating.css'

const Floating = () => {
    return (
        <section className='absolute min-h-screen min-w-full z-20'>
            <div className="bubbles">
                <img src={require(`../../assets/image/balloon (2).png`)} alt='bubble' />
                <img src={require(`../../assets/image/balloon (1).png`)} alt='bubble' />
                <img src={require(`../../assets/image/balloon (3).png`)} alt='bubble' />
                <img src={require(`../../assets/image/balloon (4).png`)} alt='bubble' />
                <img src={require(`../../assets/image/balloon (6).png`)} alt='bubble' />
                <img src={require(`../../assets/image/balloon (5).png`)} alt='bubble' />
                <img src={require(`../../assets/image/balloon (8).png`)} alt='bubble' />
                <img src={require(`../../assets/image/balloon (3).png`)} alt='bubble' />
                <img src={require(`../../assets/image/balloon (6).png`)} alt='bubble' />
                <img src={require(`../../assets/image/balloon (7).png`)} alt='bubble' />
            </div>
        </section>
    )
}

export default Floating