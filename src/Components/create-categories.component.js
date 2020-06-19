import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCategories extends Component {
    constructor(props) {
        super(props);

        this.onChangeCategoryLabel = this.onChangeCategoryLabel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            categoryLabel: '',
        }
    }

    componentDidMount() {
        this.setState({
            categoryLabel:''
        })
    }

    onChangeCategoryLabel(e){
        this.setState({
            categoryLabel: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const category = {
             categoryLabel: this.state.categoryLabel
        }
        console.log(category);

       axios.post("http://localhost:5000/categories/add", category)
            .then(res => console.log(res.data));

        window.location = '/';
    }
    render() {
        return (
            <div className='all'>
                <h3 className='all'>Create New Category Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Category Label : </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.categoryLabel}
                                onChange={this.onChangeCategoryLabel}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Create Category Log " className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
