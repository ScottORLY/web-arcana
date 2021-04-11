import styles from './styles.module.css'

document.body.appendChild(
    <div id={styles.app} >
        <div id={styles.main}>
            <h1 id={styles.title}>TAROT ARCANA</h1>
            <h1 id={styles.description}>
                iOS Divination simulator
            </h1>
        </div>
        <div id={styles.images}>
            <h1>Augmented reality tarot card divination available now!</h1>
            <img className={styles.image} src='/product.webp' />
        </div>
        <div id={styles.badges}>
            <a href='https://apps.apple.com/us/app/tarot-arcana/id1539747669'>
                <img className={styles.image} src='/appstore_badge.svg' />
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
