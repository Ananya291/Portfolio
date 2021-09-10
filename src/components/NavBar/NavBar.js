import React from 'react'
import "./NavBar.css"

function NavBar() {
    var name = "<AT />"
    return (
        // <div className="container-fluid">
        <nav class="navbar navbar-expand-lg fixed-top navbar-light">
            <a className="navbar-brand" href="#">{name}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                <ul class="navbar-nav navi">
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Experience</a>
                    </li>  
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
        // </div>
    )
}

export default NavBar
