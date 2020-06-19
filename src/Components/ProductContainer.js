import React from 'react';
import ProductFilter from './ProductFilter'
import ProductList from './ProductList'
import {withProductConsumer} from "../Content";
import Loading from "./Loading";

function ProductContainer({ context }) {
    const { loading, sortedproducts, products } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <ProductFilter products={products} />
            <ProductList products={sortedproducts} />
        </>
    );
}

export default withProductConsumer(ProductContainer);
