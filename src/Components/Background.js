
import React from "react";

const Background = ({ children, background }) => {
    return <header className={background}>{children}</header>;
};

Background.defaultProps = {
    background: "defaultBackground"
};
export default Background;

