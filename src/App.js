import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import Error from "./pages/Error";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Navbar from "./Components/Navbar";

import {Route, Switch} from 'react-router-dom'
import ProductDetails from "./pages/productDetails";
import EachProduct from "./pages/EachProduct";
import Cart from "./pages/Cart";
import BuyNow from "./pages/BuyNow";
import Individualproduct from "./pages/Individualproduct";
import CategoriesList from "./Components/categories-list.component";
import CreateCategories from "./Components/create-categories.component";
import CreateStoreManager from "./Components/create-store-manager.component";
import UsersList from "./Components/customer-list.component";
import registerComponent from "./Components/register.component";
import editStoreManagerComponent from "./Components/edit-store-manager.component";
import storeManagerListComponent from "./Components/store-manager-list.component";
import CustomerListComponent from "./Components/customer-list.component";


function App() {
  return (
    <>
        <Navbar/>
      <Switch>
          <Route exact path="/" component={ProductDetails}/>
          <Route exact path="/Product/" component={Product}/>
          <Route exact path="/AddProduct/" component={AddProduct}/>
          <Route exact path="/EachProduct/:_id" component={EachProduct}/>
          <Route exact path="/Cart/" component={Cart}/>
          <Route exact path="/BuyNow/:_id" component={BuyNow}/>
          <Route exact path="/Individualproduct/:_id" component={Individualproduct}/>
          <Route exact path="/categories-list.component/" component={CategoriesList}/>
          <Route exact path="/create-categories.component/" component={CreateCategories}/>
          <Route exact path="/register.component/" component={registerComponent}/>
          <Route exact path="/edit/:_id" component={editStoreManagerComponent}/>
          <Route exact path="/customer-list.component/" component={CustomerListComponent} />
          <Route exact path="/create-store-manager.component/" component={CreateStoreManager}/>
          <Route exact path="/store-manager-list.component/" component={storeManagerListComponent}/>
          <Route exact path="/Phone/:slug" component={Phone}/>
          <Route exact path="/AddProductNew/" component={AddProduct}/>
          <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
