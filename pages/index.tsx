import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Banner from "../components/banner";
import Card from "../components/card";

const Home: NextPage = () => {

  const handleOnBannerBtnClick =() => {
    console.log("hi banner button");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Expert</title>
        <meta name="description" content="4" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>

      <main className={styles.main}>
        <Banner 
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick} 
        />

        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" alt="hero-image" width={700} height={400}/>
        </div>
        
        <div className="cardLayout">
          <Card 
            name="Starbucks"
            imgUrl="/static/hero-image.png" 
            href="/coffee-store/starbucks" 
            className={styles.card}
          />
          <Card 
            name="Starbucks"
            imgUrl="/static/hero-image.png" 
            href="/coffee-store/starbucks" 
            className={styles.card}
          />
        </div>

      </main>
    </div>
  )
}

export default Home