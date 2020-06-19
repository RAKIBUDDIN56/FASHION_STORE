import React from 'react'

export default function InnerCover({children,title,subtitle}) {
    return (
        <div className="innercover">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
