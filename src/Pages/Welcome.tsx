import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <>
            <h1>Welcome!</h1>
            <Link to="/user-names">See User Names</Link>
        </>
    )
}

export default WelcomePage;