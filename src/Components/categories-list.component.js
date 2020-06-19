import React, { Component } from 'react';
import axios from 'axios';

const Category = props => (
    <tr>
        <td>{props.category.categoryLabel}</td>

        <td>
            <a href="#" onClick={() => { props.deleteCategory(props.category._id) }}>delete</a>
        </td>
    </tr>


)



export default class CategoriesList extends Component {
    constructor(props) {
        super(props);

        this.deleteCategory = this.deleteCategory.bind(this);
        this.state = {categories: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/categories/')
            .then(response => {
                this.setState({ categories: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCategory(id) {
        axios.delete('http://localhost:5000/categories/' + id)
            .then(res => console.log(res.data));

        this.setState({
            categories: this.state.categories.filter(el => el._id !== id)
        })
    }

    categoriesList() {
        return this.state.categories.map(currentCategory => {
            return <Category category={currentCategory} deleteCategory={this.deleteCategory}
                             key={currentCategory._id}/>;
        })

    }


    render() {
        return (
            <div className='all'>
                <h3 className='all'>Logged Categories</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Categories</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.categoriesList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
