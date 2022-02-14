import Link from 'next/link';
import styles from '../styles/Home.module.css'
Link

const Navbar=()=>{
return(
    <nav className={styles.nav}>
    <div className={styles.navContainer}>
      <Link href='/'>
        <p className={styles.logo}>CodingHub</p>
      </Link>
      <Link href='/contact'>
        <p className={styles.contactLink}>Contact</p>
      </Link>
    </div>
  </nav>
)
 }

 export default  Navbar;