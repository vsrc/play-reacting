import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <>
            <h1>Welcome!</h1>
            <div>
                <Link to="/user/names">See User Names</Link>
            </div>
            <div>
                <Link to="/counter">Counter</Link>
            </div>
        </>
    )
}

export default WelcomePage;