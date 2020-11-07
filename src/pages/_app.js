import Head from "next/head";
import Link from "next/link";
import "../styles/app.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Next.js Rendering</title>
    </Head>
    <div className="app">
      <div className="navbar">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/csr">
          <a>Client-Side Rendering</a>
        </Link>
        <Link href="/ssr">
          <a>Server-Side Rendering</a>
        </Link>
        <Link href="/ssg">
          <a>Static-Site Generation</a>
        </Link>
      </div>
      <div className="content">
        <Component {...pageProps} />
      </div>
    </div>
  </>
);

export default MyApp;
