import React from 'react';
import './styles/PageError.css'


function PageError(props) {
    return <div className="PageError"><p>{props.error.message}</p></div>
}

export default PageError;