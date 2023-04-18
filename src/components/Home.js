import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([
    {
      title: "How to fight",
      coverImage:
        "https://swebtoon-phinf.pstatic.net/20200416_238/158700005250075sKX_JPEG/M_details.jpg?type=crop540_540",
      author: "Park Tae Joon",
      deskripsi:
        "How to Fight menceritakan tentang seorang pecundang bernama Yoo Hobin yang berusaha bangkit dari kesengsaraan dengan memanfaatkan newtube (plesetan youtube) sebagai media.",
      stok: 15,
      price: "57.000",
    },
  ]);

  return (
    <div>
      <div className="mt-5 d-flex">
        <div className="text-center">
          <h1>
            Welcome to, <br />
            Book House Store
          </h1>
          <h6>
            An online bookstore is a website specifically designed and built to
            sell books and similar products. Online bookstores can be visited by
            anyone from all over the world to find and buy the books they want
            without having to leave the house.
          </h6>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-bookstore-logo_23-2149331309.jpg?w=2000"
            alt="Bootstrap"
            width="80%"
            height="100%"
          />
        </div>
      </div>
      <hr />
      {books.map((book, index) => (
        <div key={index} className="row">
          <div className="row">
            <div className="card col-md-3 mt-3" key={book.id}>
              <img
                src={book.coverImage}
                className="card-img-top"
                width="415px"
                height="415px"
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.deskripsi}</p>
                <Link to="" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Home;
