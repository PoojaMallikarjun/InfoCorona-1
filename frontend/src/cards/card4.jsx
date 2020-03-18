import React from 'react';

import './card-style.css';

const Card_d = props => {
    return (
        <div className="card text-center shadow">

            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.text1}:{props.text2}</p>

            </div>
        </div>
    );
}
export default Card_d;