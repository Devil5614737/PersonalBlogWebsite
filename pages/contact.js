import React from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/Contact.module.css';

function contact() {
    const handleClick=(e)=>{
        e.preventDefault()
    }
  return (
    <>
    <Navbar/> 
    <main className={styles.main}>
        <div className={styles.mainContainer}>
            <form action="" className={styles.form}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name'/>
                <label htmlFor="Email">Email</label>
                <input type="email" id='email'/>
                <label htmlFor="message">Message</label>
                <textarea id='message'></textarea>
                <input onClick={handleClick} className={styles.submit} type="submit" value='submit'/>
            </form>
        </div>
    </main>
    </>
  )
}

export default contact