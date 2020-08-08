import React from 'react'
import { PropTypes } from 'prop-types';

export const GifGridItem = ({id, title,url}) => {
   // console.log(id, title, url);
    return (
        <div className="card animate__animated animate__fadeIn animate__delay-1s">
            <img src={url} alt={title} />
            <p> {title?title.toLowerCase():'titulo no definido'} </p>
        </div>
    )
}


//definicon de default props y de isrequired


//validacion de propiedades
GifGridItem.propTypes = {
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
};

//definir propiedades por defect
GifGridItem.defaultProps = {
};


// 1.enzyme
// 2.enzyme to jSON
// 3. debe mostar el comp correctamente
    
// shallow
// wrapper 
// expect wrapper toMatchSnapshot 
