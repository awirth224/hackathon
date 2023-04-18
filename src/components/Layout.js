import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Disney Made Easy</title>
            <meta name='description' content='Genereate Next App' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        {children}
    </>
  );
  
  export default Layout;