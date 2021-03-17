import React from 'react';
import conflogo from '../images/badge-header.svg';
import './styles/Badge.css';
import Gravatar from './Gravatar';

// Para hacer un componente lo que hacemos es crear una
// nueva clase, pero simpre que este extendida a un react
// componen
// Cada clase debe de llevar un render para que react
// Reconozca lo que lleva dentro
// despues de eso le retornamos el componente


class Badge extends React.Component {    
    render(){
        const {
            firstName,
            lastName,
            email,
            jobTitle,
            twitter,
            } = this.props;
        return( 
        <div className="Badge">
            <div className="Badge_header">
                <img src={conflogo} alt="Logo de la conferencia"/>
            </div>
            <div className="Badge_section-name">
                <Gravatar 
                className="Badge_avatar"
                email={email}/>
                <h1>{firstName} <br/> {lastName}</h1>
            </div>
            <div className="Badge_section-info">
                <p>{jobTitle}</p>
                <a href={"https://twitter.com/"+twitter}>@{twitter}</a>
            </div>
            <div className="Badge_footer">
                #platziConf
            </div>
        </div>
        );
    }
}

export default Badge;