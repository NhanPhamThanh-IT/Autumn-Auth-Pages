import background from '../assets/background.jpg'
import trees from '../assets/trees.png'
import '../styles/background.css'

const BackgroundComponent = (props) => {
    const { children } = props;

    return (
        <div>
            <img src={background} alt="Background" className="bg" />
            <img src={trees} alt="Trees" className="trees" />

            {children}
        </div>
    )
}

export default BackgroundComponent