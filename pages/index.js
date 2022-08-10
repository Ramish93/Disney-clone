import Head from "next/head";
import { Header } from "../components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;