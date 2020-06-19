import React, {Component} from "react";
import axios from'axios'
import {Link} from "react-router-dom";
import Paypal from "../Components/Paypal";


const CartDet = props => (

    <tr className='table-secondary'>
        <td>{props.product.name}</td>
        <td>{props.product.price}$</td>
        <td> {props.product.from}</td>
        <td> {props.product.state}</td>
        <td>{props.product.discount}% OFF</td>
        <td><a href="#" onClick={ () => { props.deleteCart(props.product._id)}}><button className='btn btn-danger'>Remove</button>
        </a></td>

    </tr>



);


export default class Cart extends Component{
    constructor(props) {
        super(props);

        this.state={
            carts:[],
            name:'',
            description:'',
            price:0,
            category:'',
            from:'',
            state:'',
            discount:0
        }

        this.deleteCart = this.deleteCart.bind(this);


    }

    componentDidMount() {
        axios.get('http://localhost:5000/cart/')
            .then(response => {
                this.setState({carts  : response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }
    details(){
        return this.state.carts.map(currentProduct => {
            return <CartDet product={currentProduct} deleteCart={this.deleteCart} key={currentProduct._id}/>;
        })



    }

    deleteCart(id) {
        axios.delete('http://localhost:5000/cart/'+id)
            .then(response => { console.log(response.data)});
        this.setState({
            carts: this.state.carts.filter(el => el._id !== id)
        })


    }
    total(){
         const price=this.state.carts.reduce((total,cart)=> total+cart.price,0);
        const discount=this.state.carts.reduce((total,cart)=> total+cart.discount,0);

        return price - (price*discount)/100
    };

     transactionSuccess =() =>{
       console.log('Payment successful ')
    };
     transactionError =() => {
         console.log('Paypal error')
     }
     transactionCanceled =() =>{
         console.log('Payment canceled')
     }
    onSubmit(){
         alert('You are parched successfully! Back To Home page')
    }



    render() {
        return(

            <div className='all'>
                <h3 className='all'>Your Shopping Cart</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>From</th>
                        <th>State</th>
                        <th>Discount</th>
                        <th>Remove</th>


                    </tr>
                    </thead>
                    { this.details() }

                </table>





                <h2 className='net-price'>Total :{this.total()} $</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <Paypal
                                    toPay={this.total()}
                                    onSuccess={this.transactionSuccess}
                                    transactionError={this.transactionError}
                                    transactionCanceled={this.transactionCanceled}
                                />



                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <a href='/'><button className='btn-cash-on-delivery' onClick={this.onSubmit}>Cash On Delivery</button></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}