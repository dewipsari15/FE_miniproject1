import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase.js";
import Swal from "sweetalert2";
// import swal from "sweetalert";

const AddBook = () => {
  const [title, setTitle] = useState(" ");
  const [coverImage, setCoverImage] = useState(null);
  const [author, setAuthor] = useState(" ");
  const [deskripsi, setDeskripsi] = useState(" ");
  const [stok, setStok] = useState(" ");
  const [price, setPrice] = useState(" ");
  const navigate = useNavigate();

  const saveBook = async (downloadUrl) => {
    try {
      // untuk mengirimkan file multipart ke server
      const formData = {
        title: title,
        coverImage: downloadUrl,
        author: author,
        deskripsi: deskripsi,
        stok: stok,
        price: price,
      };
      console.log(formData);
      await axios.post(`http://localhost:5000/api/book`, formData);
      Swal.fire({
        icon: "success",
        title: "Good job!",
        text: "Menu added successfully",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const submit = (event) => {
    // untuk storage
    const storageRef = ref(storage, `images/${coverImage.name}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, coverImage)
      .then((snapshot) => {
        console.log("Upload berhasil");
        console.log(snapshot);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        getDownloadURL(storageRef).then((downloadUrl) => {
          // url nya ini nanti untuk dikirim ke server API yang dimasukkan ke database
          saveBook(downloadUrl);
          console.log(downloadUrl);
        });
      });
  };

  const save = (e) => {
    e.preventDefault();
    submit();
    Swal.fire("Good job!", "You clicked the button!", "success");
  };

  return (
    <div>
      <div onSubmit={save} className="text-center">
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
            type="file"
            className="form-control"
            placeholder="cover"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => setCoverImage(e.target.files[0])}
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
        <br />
        <button className="btn btn-success" onClick={save}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddBook;
