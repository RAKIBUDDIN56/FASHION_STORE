import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import defaultimg from '../images/fashion.jpg'
import PropTypes from "prop-types";
import iphone3 from '../images/iphone3.jpg';

function ProductDisplay({product}){
    const {name,image,price} = product;
    const img = {image};
    return (
        <div className="logne">
            <article className="category">
                <div className="img-container">
                    <img src={require('../image/'+product.image)} alt="Product"/>
                    <div className="price-top">
                        <h6>{price}</h6>
                    </div>
                    <Link to={'./individualproduct/'+product._id} className="btn-primary room-link">View Details</Link>|
                </div>
                <p className="category-info">{name}</p>
            </article>
        </div>
    );
}

ProductDisplay.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
};
export default ProductDisplay;
