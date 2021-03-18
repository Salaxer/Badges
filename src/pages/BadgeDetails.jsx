import React from 'react';
import './styles/BadgeDetails.css'
import confLogo from '../images/platzi-conf-logo.svg'
import Badge from '../components/Badge';
import {Link} from 'react-router-dom';

// Aqui dividimos las responsabilidades entre la UI y la programacion interna

function BadgeDetails(props) {
    const badge = props.data;
    return(
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>   
                    </div> 
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Badge 
                        firstName={badge.firstName || 'FIRST NAME'} 
                        lastName={badge.lastName || 'LAST NAME'} 
                        twitter={badge.twitter || 'TWITTER'}
                        jobTitle={badge.jobTitle || 'JOBTTITLE'} 
                        email= {badge.email || 'EMAIL'}/>
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div className="">
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                Edit
                                </Link>
                            </div>
                            <div>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;