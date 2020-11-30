import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
const [queriedMovies, setQueriedMovies] = useState([]);

export default function Home() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
    const query = "Spider Man";
    let URL = `https://api.themoviedb.org/3/search/movie?api_key=bb0fa06f949fe0af4ffdc970ba8e73c7&language=en-US&query=${query}&page=1&include_adult=false`;
    fetch(URL).then((res) =>
      res.json().then((json) => setQueriedMovies(json.results))
    );
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
          <input type="text" className="input" />
          <button className="button" type="submit">
            Search
          </button>
        </form>
        {queriedMovies.map((queriedMovie) => (
          <div
            style={{ borderStyle: "solid", width: "200px", height: "200px" }}
          >
            {queriedMovie}
          </div>
        ))}
      </main>
    </div>
  );
}
