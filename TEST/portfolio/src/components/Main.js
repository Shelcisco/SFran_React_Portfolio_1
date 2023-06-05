import React from "react"; 


export default function Main({page}){
    
const renderPage = ()=>{
    switch (page){
        case("about"):
        return (
            <div>
                <h1>About Me</h1>
            </div>
        )
        case("main"):
        return (
            <div>
                <h1>Portfolio</h1>
            </div>
        )
    }
}

    return(
<div className="container">
    {renderPage()}
</div>
    )
}

