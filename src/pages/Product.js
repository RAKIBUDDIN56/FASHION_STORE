import React from 'react'
import Background from "../Components/Background";
import InnerCover from "../Components/Innercover";
import {Link} from 'react-router-dom';
import ProductContainer from "../Components/ProductContainer";


const Product = () => {
    return <>
        <Background background="productBackground">
            <InnerCover title="OUR PRODUCTS" subtitle="If you cant stop Thinking, Jut Buy it.">
                <Link to='/' className="btn-primary">
                    BACK TO HOME
                </Link>
            </InnerCover>
        </Background>
        <ProductContainer/>
        </>
};

export default Product;
