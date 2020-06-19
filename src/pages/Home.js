import React from 'react'
import Background from "../Components/Background";
import InnerCover from "../Components/Innercover";
import {Link} from 'react-router-dom';
import Login from "../Components/login";
import Category from "../Components/Category";

export default function Home() {
    return (
        <>
            <Background>
                <InnerCover title="SMART SHOPPING" subtitle="Shop at your ease">
                    <Link to='/Product' className="btn-primary">
                        VIEW PRODUCTS
                    </Link>
                </InnerCover>
            </Background>
            <Login/>
            <Category/>
        </>
    );
}
