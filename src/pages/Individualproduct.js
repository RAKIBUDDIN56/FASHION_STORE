import React, {Component} from "react";
import axios from 'axios'
import {Link} from "react-router-dom";
import StyledBackground from "../Components/StyledBackground";
import InnerCover from "../Components/Innercover";
import img from "../images/cover.png"
let id;

export default class Individualproduct extends Component{

    constructor(props) {
        super(props);
        this.myfunction=this.myfunction.bind(this);

        console.log(this.props);
        this.state = {
            name:'',
            description:'',
            price:0,
            category:'',
            from:'',
            state:'',
            discount:0
        };
       id = this.props.match.params._id;
    }

    myfunction() {
        let text = prompt("Enter the discount for this product",0);
        if(text===null || text===""){
            this.setState({
                discount:0
            })
        }
        else{
            this.setState({
                discount:text
            })
        }

        axios.post('http://localhost:5000/product/update/' + id,this.state.discount)
            .then(res => console.log(res.data))
            .catch(error =>{
                console.log(error)
            })
    }


    componentDidMount() {
        axios.get('http://localhost:5000/product/' +this.props.match.params._id)
            .then(response =>{
                this.setState({
                    name:response.data.name,
                    description:response.data.description,
                    price:response.data.price,
                    category:response.data.category,
                    from:response.data.from,
                    state:response.data.state,
                    discount:response.data.discount,

                })
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        return <>
            <StyledBackground img={img}>
                <InnerCover title={this.state.name}>
                    <Link to='/Product' className='btn-primary'>
                        Back to Product
                    </Link>
                </InnerCover>
            </StyledBackground>
            <section className="product-one">
                <div className="product-one-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{this.state.description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>Price : {this.state.price}</h6>
                        <h6>Category : {this.state.category}</h6>
                        <h6>State : {this.state.state}</h6>
                        <h6>Shipping from : {this.state.from}</h6>
                        <h6>Discount : {this.state.discount}</h6>
                        <button className='btn-primary' onClick={this.myfunction}>ADD DISCOUNT</button>
                    </article></div>
            </section>
        </>
    }
}
