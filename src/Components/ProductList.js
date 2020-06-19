import React from 'react';
import ProductDisplay from "./ProductDisplay";

const ProductList = ({ products }) => {
    if (products.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no products matched your search parameters</h3>
            </div>
        );
    }
    return (
        <section className="productlist">
            <div className="productlist-center">
                {products.map(item => {
                    return <ProductDisplay key={item.id} product={item} />;
                })}
            </div>
        </section>
    );
};

export default ProductList;
