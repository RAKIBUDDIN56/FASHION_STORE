import React, {Component} from "react";
import axios from 'axios'


export default class EachProduct extends Component {
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
         this.onSubmit=this.onSubmit.bind(this);





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
        const cart = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price,
            from: this.state.from,
            state: this.state.state,
            discount: this.state.discount,
        }
        console.log(cart)

        axios.post('http://localhost:5000/cart/addCart',cart)
            .then(res => console.log(res.data));

        this.setState({
            name:'',
            description:'',
            category:'',
            price:'',
            from:'',
            state:'',
            discount:''
        })
        alert('Product added to your cart successfully !' +
            'Go back to Home page')

    }

    render() {
        return (
            <div className='card'>
              <div className='card-body'><br/>
              <h2 className='header'>Product Details</h2>
                  <table className='table'>
                     <thead className='thead-light'>

                     <tr className='table-secondary'>
                         <td className='td'>Product Name</td>
                         <td className='td'>Price</td>
                         <td className='td'>Category</td>
                         <td className='td'>From</td>
                         <td className='td'>State</td>
                        <td className='td'>Discount</td>
                   </tr>
                 </thead>




                   <tbody>
                   <tr className='table-info'>
                       <td className='tr'>{this.state.name}</td>
                       <td className='tr'>{this.state.price}$</td>
                       <td className='tr'>{this.state.category}</td>
                       <td className='tr'>{this.state.from}</td>
                       <td className='tr'>{this.state.state}</td>
                       <td className='tr'>{this.state.discount} $</td>
                   </tr>
                   </tbody>


                </table>
              </div>
                <div className='card-body' >
                    <h2 className='net-price'>Net Price:{this.state.price - (this.state.price*this.state.discount)/100} $</h2>
                    <a href='/'><button type='submit' className='btn btn-primary' onClick={this.onSubmit}>Add To Cart</button></a>
                </div>

          </div>



        )
    }
}