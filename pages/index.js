import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'



export default function Home() {
const router=useRouter();


const handleClick=()=>{
router.push('/blog')
}




  return (
    <>
   <Head>
    
    <meta
      name="description"
      content="Free code tutorials ,website clones, Coding Blogs,Coding Solutions"
    />
    <meta
      name="keywords"
      content="HTML, CSS, JavaScript Sass React Styled-components Firebase Clone Demo Github Coding Blogs"
    />

    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="blob:https://personal-blog-website-psi.vercel.app/blog#"
    />
    <meta name="author" content="Kaushik sheel" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Coding Blogs and coding solutions</title>
    <meta property="og:title" content="Coding Blogs and tutorials" />
    <meta
      property="og:description"
      content="Free code tutorials ,coding blogs"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>

  </Head>
  <Navbar/>
  <main className={styles.main}>
    <div className={styles.mainContainer}>
    <h1 className={styles.mainContainerTitle}>
                    CodingHub Blogs and coding solutions
                </h1>
    <div className={styles.content}>
        <Link href='#'>
          <p className={styles.contentTitle}>Pc Builds for coders -Budget PCs You Can Build This Festive Season</p>
        </Link>
        <p>In this blog we are building coding pc under 30k rupees</p>
        <a onClick={handleClick} href="#" className="cta">Read more</a>
      </div>
    </div>
  </main>
  </>
  )
}
