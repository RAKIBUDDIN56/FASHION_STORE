import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import defaultimg from '../images/electronic.jpg'
import PropTypes from "prop-types";

function CategoryDisplay({category}){
    const {name,slug,images} = category;

    return (
        <div className="logne">
         <article className="category">
            <div className="img-container">
                <img src={images[0]  || defaultimg} alt="Product Category"/>
                <Link to={'/Product'} className="btn-primary room-link">View Products</Link>
            </div>
            <p className="category-info">{name}</p>
          </article>
        </div>
    );
}

CategoryDisplay.propTypes = {
        category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
};
export default CategoryDisplay;
