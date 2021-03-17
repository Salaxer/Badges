import React from 'react'
import '../pages/styles/Badges.css'
function Notfound(){
    return(
        <React.Fragment>
            <div className="Badges__hero">
                <div className="Badges__container">
                    <img style={{width: '100%'}} className="Badges__hero--img" src="https://http.cat/404.jpg" alt=""/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Notfound;