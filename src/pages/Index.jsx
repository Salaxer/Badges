
import React from 'react'
import './styles/Badges.css'
import './styles/index.css'
import astronautas from '../images/astrounautas.svg'
import confLogo from '../images/platzi-conf-logo.svg'
import { Link } from 'react-router-dom';
function Notfound(){
    return(
        <React.Fragment>
            <div className="Badges__hero">
                <div className="Badge__hero--container">
                    <div className="Badge-hero--main">
                        <img src={confLogo} alt=""/>
                        <h1>Print your Badges</h1>
                        <p>The easiest way to manage your conference</p>
                        <Link to="/badges" className="btn btn-primary">
                            Start Now
                        </Link>
                    </div>
                    <div className="Badge-hero--main">
                        <img src={astronautas} alt=""/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Notfound;