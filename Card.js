import React from "react"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

function Card() {
    return (
        <div className="card">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Card