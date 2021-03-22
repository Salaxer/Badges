import React from 'react';
import './styles/BadgeDetails.css'
import confLogo from '../images/platzi-conf-logo.svg'
import Badge from '../components/Badge';
import {Link} from 'react-router-dom';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
// Aqui dividimos las responsabilidades entre la UI y la programacion interna

function useIncreaseCount(max) {
    const [count, setCount] = React.useState(max);
    if (count>max) {
        setCount(0);
    }
    return[count, setCount];
}


function BadgeDetails(props) {
    const [count, setCount] = useIncreaseCount(4);

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
                                <button onClick={() => {
                                    setCount(count+1);
                                }} className="btn btn-primary mb-4 mr-4">
                                    Increase Count {count}
                                </button>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal onDeleteBadge={props.onDeleteBadge} isOpen={props.modalIsOpen} onClose={props.onCloseModal}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;