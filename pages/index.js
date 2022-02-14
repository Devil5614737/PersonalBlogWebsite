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
  <Navbar/>
  <main className={styles.main}>
    <div className={styles.mainContainer}>
    <div className={styles.content}>
        <h1>Pc Builds for coders -Budget PCs You Can Build This Festive Season</h1>
        <p>In this blog we are building coding pc under 30k rupees</p>
        <a onClick={handleClick} href="#" className="cta">Read more</a>
      </div>
    </div>
  </main>
  </>
  )
}
