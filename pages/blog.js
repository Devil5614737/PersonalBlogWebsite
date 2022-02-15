import Navbar from '../components/navbar';
import styles from '../styles/Blog.module.css';

export default function Blog(){
    return(
        <>
        <Navbar/>
        <main className={styles.main}>
            <div className={styles.mainContainer}>
               
                <div className={styles.blogContainer}>
                    <p className={styles.blogTitle}>PC Builds for Coders -Budget PCs You Can Build This Festive Season</p>
                    <p className={styles.blogDate}>Sun Dec 19 2021</p>
                    <p className={styles.blog}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, libero provident expedita eveniet aliquid, inventore fugiat perferendis tempore commodi enim error. Reiciendis aut facilis non sint voluptate officia perferendis quasi est. Natus nisi molestiae adipisci. Nemo numquam nihil fugit quo est nostrum at ut. Atque quod recusandae commodi distinctio, totam similique saepe tempora quibusdam officia exercitationem quis illum, numquam explicabo molestiae iure possimus a id sapiente? Dignissimos explicabo vel deleniti voluptatem, eum inventore, numquam, quod temporibus magnam nam repellendus incidunt consequatur architecto quas sapiente aliquam nostrum earum. Eum, totam delectus excepturi modi voluptates iure minima? Consectetur qui molestiae architecto aspernatur repellendus officia voluptas est a consequatur, quisquam magni veritatis temporibus incidunt dolore similique accusamus. Saepe rerum alias magnam asperiores libero, sunt necessitatibus soluta vitae inventore, ullam quisquam, impedit repudiandae exercitationem temporibus dolore quae! Debitis, culpa soluta ipsum omnis dolorum magnam dolorem fugit, obcaecati, hic unde dignissimos suscipit tempore. Aut delectus provident, dignissimos labore repellat quasi illo, amet at ipsam reprehenderit dolore dolorum voluptate ipsa eius! Nemo, alias! Fugit placeat exercitationem vel, qui tempora error voluptas ratione soluta reprehenderit earum? Voluptatibus vero eos aut officia repellat minima quod non illo expedita consequatur porro cum impedit sint, voluptas, dolor distinctio praesentium voluptatum?</p>
                </div>
            </div>
        </main>
        </>
    )
}