import React, {Component} from "react";
import Background from "../Components/Background";
import InnerCover from "../Components/Innercover";
import phone1 from '../images/iphone1.png';
import {ProductContext} from "../Content";
import {Link} from 'react-router-dom';
import StyledBackground from "../Components/StyledBackground";
import index from "styled-components/dist/styled-components-macro.esm";

export default class Phone extends
    Component{
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: phone1
        };
    }
    static contextType = ProductContext;
    render() {
        const {getProduct} = this.context;
        const product = getProduct(this.state.slug);
        
        const {name,description,price,category,state,discount,from,images} = product;
        const [mainimg,...defaultimg] = images;
        return <>
            <StyledBackground img={mainimg || this.state.defaultBcg}>
            <InnerCover title={`${name}`}>
                <Link to='/Product' className='btn-primary'>
                    Back to Product
                </Link>
            </InnerCover>
            </StyledBackground>
            <section className="product-one">
                <div className="product-one-images">
                    {defaultimg.map((item,index) =>{
                       return <img key ={index} src={item} alt={name}/>
                    })}
                </div>
                <div className="product-one-info">
                    <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>Price : {price}</h6>
                        <h6>Category : {category}</h6>
                        <h6>State : {state}</h6>
                        <h6>Shipping from : {from}</h6>
                        <h6>Discount : {discount}</h6>
                        <button className='btn-primary'>ADD DISCOUNT</button>
                    </article></div>
            </section>
        </>
    }
}
