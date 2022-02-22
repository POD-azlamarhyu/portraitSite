import Head from 'next/head';
import React from 'react';
import Top from './components/organisms/top';


const Home = () => {
  return (
    <>
      <Head>
        <title>portrate</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='minimum-scale=1,initial-scale=1,width=device-width'/>
      </Head>
      <Top />
    </>
  )
}

export default Home;