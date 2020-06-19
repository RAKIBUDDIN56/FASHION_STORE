import React, {Component} from 'react';
import {CategoryContext} from "../Context";
import Loading from "./Loading";
import CategoryDisplay from "./CategoryDisplay";
import Title from "./Title";

class Category extends Component {
    static contextType = CategoryContext
    render() {
        let { loading, categories: categories} = this.context;
        categories = categories.map(category =>{
            return <CategoryDisplay key = {category.id} category={category}/>
        })

        return (
            <section className="featured-rooms">
                <Title title="Product Categories"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:categories}
                </div>
            </section>
        );
    }
}

export default Category;
