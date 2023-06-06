import React from "react"; 


export default function Main({page}){
    
const renderPage = ()=>{
    switch (page){
        case("about"):
        return (
            <div>
                <h1>About Me</h1>
                <p> <img src="/Mee.jpg" height="100" alt="" id = "me"></img> Hi there, my name is Shelby. After working in finanacials for years I wanted to try something more creative than crunching numbers, I took a big step and signed up for the UW's coding bootcamp.</p> 
 <p>While there's nothing wrong with crunching, I've found I prefer coding! I'm consistently working to improve my skills, please see below to see what I've built so far. Thank you!  </p>
            </div>
        )
        case("main"):
        return (
            <div>
                <h1>Portfolio</h1>
            </div>
        )

        case("resume"):
        return (
            <div>
                <h1>Resume</h1>
            </div>
        )

        case("contact"):
        return (
            <div>
                <h1>Contact</h1>
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

