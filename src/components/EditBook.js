/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(" ");
  const [author, setAuthor] = useState(" ");
  const [deskripsi, setDeskripsi] = useState(" ");
  const [stok, setStok] = useState(" ");
  const [price, setPrice] = useState(" ");
  const history = useNavigate();
  const { id } = useParams();

  const updateBook = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/book/${id}`, {
      title: title,
      coverImage: coverImage,
      author: author,
      deskripsi: deskripsi,
      stok: stok,
      price: price,
    });
    history.push("/");
  };

  useEffect(() => {
    getBookById();
  }, []);

  const getBookById = async () => {
    const response = await axios.get(`http://localhost:5000/book/${id}`);
    setTitle(response.data.title);
    setCoverImage(response.data.CoverImage);
    setAuthor(response.data.author);
    setDeskripsi(response.data.deskripsi);
    setStok(response.data.stok);
    setPrice(response.data.price);
  };

  return (
    <div>
      <form onSubmit={updateBook}>
        <div className="field mt-3">
          <label className="label">Title: </label>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="field mt-3">
          <label className="label">Cover image: </label>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
            placeholder="cover image"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
          />
        </div>

        <div className="field mt-3">
          <label className="label">Author: </label>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
            placeholder="author book"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="field mt-3">
          <label className="label">Deskripsi: </label>
          <textarea
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
            placeholder="Deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </div>

        <div className="field mt-3">
          <label className="label">Stok: </label>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
            placeholder="stok"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
          />
        </div>

        <div className="field mt-3">
          <label className="label">Price: </label>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div
          className="field mt-3
                "
        >
          <button className="btn btn-success">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
