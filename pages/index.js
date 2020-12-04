import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  const searchMovies = async (e) => {
    e.preventDefault();

    let URL = `https://api.themoviedb.org/3/search/movie?api_key=bb0fa06f949fe0af4ffdc970ba8e73c7&language=en-US&query=${query}&include_adult=false`;

    try {
      await fetch(URL)
        .then((res) => res.json())
        .then((json) => setMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="logo">Logo</div>
        <div className="title">NextJS Movie App</div>
      </header>

      <main className={styles.main}>
        <form
          style={{ marginBottom: "auto" }}
          action=""
          className="form"
          onSubmit={searchMovies}
        >
          <label htmlFor="" className="label">
            Search your favorite movies:
          </label>{" "}
          <input
            type="text"
            className="input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="button" type="submit">
            Search
          </button>
        </form>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className="modal"
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <div>
            <div>{movie.title}</div>
          </div>
        </Modal>
        <div className={styles.content}>
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <div key={movie.id} className={styles.movieCard}>
                <img
                  onClick={openModal}
                  className="card-image"
                  src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
                  alt=""
                />
                <div className="title">{movie.title}</div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
