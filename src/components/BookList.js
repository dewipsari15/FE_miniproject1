// import { React, useEffect, useState } from "react"; 
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookList = () => {
    const [books, setBooks] = useState([{ title: "How to fight", coverImage: "https://swebtoon-phinf.pstatic.net/20200416_238/158700005250075sKX_JPEG/M_details.jpg?type=crop540_540", author: "Park Tae Joon", deskripsi: "", stok: 15, price: "57.000" }]);

    // const getBooks = async () => { 
    //   const response = await axios.get("http://localhost:5000/products"); 
    //   setBooks(response.data); 
    // }; 
    const getBooks = async () => {
        try {
            const { data, status } = await axios.get(
                "http://localhost:5000/products/",
                [{ title: "How to fight", coverImage: "https://swebtoon-phinf.pstatic.net/20200416_238/158700005250075sKX_JPEG/M_details.jpg?type=crop540_540", author: "Park Tae Joon", deskripsi: "", stok: 15, price: "57.000" }]
            );
            if (status === 200) {
                setBooks(data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteBooks = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getBooks();
    };
    // useEffect(() => {
    //     getBooks();
    // }, [{ title: "How to fight", coverImage: "https://swebtoon-phinf.pstatic.net/20200416_238/158700005250075sKX_JPEG/M_details.jpg?type=crop540_540", author: "Park Tae Joon", deskripsi: "", stok: 15, price: "57.000" }]);

    return (
        <div>
            {/* Button add */}
            <Link to="/add" className="btn btn-primary mt-4">
                Add Books
            </Link>
            {/* Card book */}
            {books.map((book, index) => (
                <body key={index} className="row">
                    <div className="card col-md-3 mt-3" key={book.id}>
                        <img src={book.coverImage} className="card-img-top" width="415px" height="415px" />
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">{book.author}</p>
                            <p className="card-text">{book.deskripsi}</p>
                            <div className="d-flex justify-content-between">
                                <p className="card-text">Stok: {book.stok}</p>
                                <p className="card-text">Rp.{book.price},00</p>
                            </div>
                            <div className="d-flex justify-content-evenly">
                                <button
                                    onClick={() => deleteBooks(book.id)} className="btn btn-danger">Delete</button>
                                <button to={`/edit/${book.id}`}
                                    className="btn btn-primary">Edit</button>
                            </div>
                        </div>
                    </div>
                </body>
            ))}
        </div>
    );
};

export default BookList;
