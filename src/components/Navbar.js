import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-bookstore-logo_23-2149331309.jpg?w=2000" alt="Bootstrap" width="70" height="64" />
                        BookStore
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Books">Books</Link>
                            </li>
                        </ul>
                        <ul className="d-flex" role="Account">
                            <Link className="nav-link active me-5" to="/Cart"><i className="fa-solid fa-cart-shopping fa-xl"></i></Link>
                            <Link className="nav-link active me-5" to="/Login"><i className="fa-solid fa-user fa-xl"></i></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar