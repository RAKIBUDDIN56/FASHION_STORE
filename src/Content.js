import React, {Component} from 'react';
import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state = {
        products:[],
        sortedproducts:[],
        loading: true,
        category:'all'
    };

    componentDidMount() {
        axios.get('http://localhost:5000/product/')
            .then(response => {
                this.setState({
                    products  : response.data,
                    sortedproducts:response.data,
                    loading:false
                })
            })
            .catch(error => {
                console.log(error);
            })
    }


    getProduct = slug => {
        let tempProd = [...this.state.products];
        const product = tempProd.find((product) =>product.slug === slug);
        return product;
    }
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);

        this.setState(
            {
                [name]: value
            },
            this.filterProduct
        );
    };

    filterProduct = () => {
        let {products,category} = this.state;

        let tempProducts = [...products];

        if (category !== "all") {
            tempProducts = tempProducts.filter(product => product.category === category);
        }

        this.setState({
            sortedproducts: tempProducts
        });
    };

    render() {
        return (
            <ProductContext.Provider value={{...this.state, getProduct:this.getProduct,handleChange:this.handleChange}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <ProductConsumer>
            {value => <Component {...props} context={value}/>}
        </ProductConsumer>
    }
}

export {ProductProvider,ProductConsumer,ProductContext};
