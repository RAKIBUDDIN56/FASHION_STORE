import React from 'react'
import Background from "../Components/Background";
import InnerCover from "../Components/Innercover";
import Addform from "../Components/Addform";
import {Link} from 'react-router-dom';

export default function AddProduct() {
    return<>
        <Background>
             <InnerCover title="SMART SHOPPING" subtitle="Shop at your ease">
                <Link to='/Product' className="btn-primary">
                    BACK TO PRODUCTS
                </Link>
             </InnerCover>
        </Background>
        <Addform/>
    </>
}
