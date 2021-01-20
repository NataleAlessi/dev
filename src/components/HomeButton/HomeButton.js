import './HomeButton.css'

const HomeButton = () => {
    const handleClick = () => {
        window.scrollTo({top: 0, behavior:'smooth'})
    }

    return (
        <div className='HomeButton'>
            <button className='BackToTop button' 
                onClick={handleClick}>
                <i className="fas fa-home"></i>
            </button>
        </div>
    )
}

export default HomeButton