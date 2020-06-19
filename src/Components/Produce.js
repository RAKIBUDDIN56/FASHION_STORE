import React, {Component} from 'react';
import {ProductContext} from "../Content";
import Loading from "./Loading";
import Title from "./Title";
import ProductDisplay from "./ProductDisplay";

class Produce extends Component {
    static contextType = ProductContext
    render() {
        let { loading, products: products} = this.context;
        products = products.map(product =>{
            return <ProductDisplay key = {product.id} product={product}/>
        })

        return (
            <section className="featured-rooms">
                <Title title="Products"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:products}
                </div>
            </section>
        );
    }
}

export default Produce;
