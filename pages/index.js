import { useSession, getSession } from "next-auth/client";
import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Brands } from "../components/Brands";
import Slider from "../components/Slider";

const Home = () => {
  const [session] = useSession();
  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main>
          <Slider />
          <Brands />
        </main>
      )}
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
