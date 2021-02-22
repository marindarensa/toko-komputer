import React from "react"
import Navbar from "../components/Navbar"

export default class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Navbar />
                <h1>Ini Halaman Admin</h1>
            </div>
        )
    }
}
