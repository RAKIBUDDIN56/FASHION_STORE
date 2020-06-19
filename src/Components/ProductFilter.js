import React from 'react';
import { useContext } from "react";
import { ProductContext } from "../Content";
import Title from "./Title";
import {Link} from 'react-router-dom';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function ProductFilter({products}){
    const context = useContext(ProductContext);
    const {handleChange,category} = context
    let types = getUnique(products, "category");
    types = ["all", ...types];
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    return (
        <section className="filter-container">
            <Title title="search product" />
            <form className="filter-form">
                <div >
                    <label htmlFor="category">Product Category</label>
                    <select
                        name="category"
                        id="category"
                        onChange={handleChange}
                        className="form-control"
                        value={category}>
                        {types}
                    </select>
                </div>
                <div>
                    <Link to='/AddProduct' className="btn-primary">
                        ADD PRODUCT TO THIS CATEGORY
                    </Link>
                </div>
            </form>
        </section>
    );
}
