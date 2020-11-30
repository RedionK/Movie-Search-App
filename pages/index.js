import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const searchMovies = async (e) => {
    e.preventDefault();
    const query = "Bruce";

    fetch();
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
      </main>
    </div>
  );
}
