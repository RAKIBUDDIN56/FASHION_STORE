import React, {Component} from "react";
import axios from 'axios'
import Paypal from "../Components/Paypal";


export default class BuyNow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            description:'',
            price:0,
            category:'',
            from:'',
            state:'',
            discount:0,
            total:0


        };






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
                    discount:response.data.discount
                })
            })
            .catch(error =>{
                console.log(error)
            })

    }
    onSubmit(){
        alert('You have purchased successfully.Go back to Home page ')
     }
    transactionSuccess =() =>{
        console.log('Payment successful ')
    };
    transactionError =() => {
        console.log('Paypal error')
    }
    transactionCanceled =() =>{
        console.log('Payment canceled')
    }

    render() {
        return (
            <div className='all'>
                <div ><br/>
                    <    h2>Your shopping cart</h2>
                    <table className='table'>
                        <thead className='thead-light'>

                        <tr className='table-secondary'>
                            <td>Product Name</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Category</td>
                            <td>From</td>
                            <td>State</td>
                            <td>Discount</td>
                        </tr>
                        </thead>




                        <tr className='table-info'><td>{this.state.name}</td>
                            <td>{1}</td>
                            <td>{this.state.price}$</td>
                            <td>{this.state.category}</td>
                            <td>{this.state.from}</td>
                            <td>{this.state.state}</td>
                            <td>{this.state.discount} $</td>
                        </tr>


                    </table>
                </div>
                <div className='card-body'>
                    <h3 className='net-price'>Total price:{this.state.price - (this.state.price *this.state.discount)/100.0} $</h3>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <Paypal
                                        toPay={this.state.price - this.state.discount}
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

                    <b/><br/>
                </div>

            </div>



        )
    }
}