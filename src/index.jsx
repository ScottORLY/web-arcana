import styles from './styles.module.css'

document.body.appendChild(
    <div id={styles.app} >
        <div id={styles.main}>
            <h1 id={styles.title}>TAROT ARCANA</h1>
            <h1 id={styles.description}>
                The premiere divination simulator for iOS.
            </h1>
        </div>
        <div id={styles.images}>
            <h1>Augmented reality divination available now!</h1>
            <img className={styles.image} src='/img/product.webp' />
        </div>
        <div id={styles.badges}>
            <a href='https://apple.co/3aLanUp'>
                <img className={styles.image} src='/img/appstore_badge.svg' />
            </a>
        </div>
        <div id={styles.privacy} >
            <h1>Privacy Policy</h1>
            <p>
                TAROT ARCANA does not collect, store or transmit any personally identifiable information.
            </p>
        </div>
    </div>
)
