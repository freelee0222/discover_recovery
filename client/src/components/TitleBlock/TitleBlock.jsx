import React from 'react'

function TitleBlock(props) {
    return (
        <>
            <main className="headerBox">
                <h1 className="feedback"><u>{props.warning}</u></h1><br/>
                <h2 className="col-md-12 subHeader">{props.subTitle}</h2>
                <h1 className="col-md-12 headerBlue">{props.titleStart} <span className="headerBlack"> {props.titleMid}</span> {props.titleEnd}</h1>
                <div className="block col-md-3"></div>
                <p className="col-md-12">{props.titleFill}</p>
                {props.children}
            </main>
        </>
    )
}

export default TitleBlock