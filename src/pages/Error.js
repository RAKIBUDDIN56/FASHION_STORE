import React from "react";
import Background from "../Components/Background";
import InnerCover from "../Components/Innercover";
import {Link} from 'react-router-dom';

export default function Home() {
    return <Background>
        <InnerCover title="ERROR" subtitle="Page Not Found">
            <Link to='/' className="btn-primary">
                BACK TO HOME
            </Link>
        </InnerCover>
    </Background>
}
