import Link from "next/link";
import Image from "next/image";
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero_hero}>
                <div className={styles.hero}>
                    <div className={styles.image_wrapper}>
                        <Image 
                            src="/images/hero/hero.jpg"
                            alt="Hero"
                            fill 
                            style={{objectFit:"cover"}}
                            quality={100}
                        />
                    </div>
                </div>
                <div className={styles.hero_overlay}>
                    <h2>Hero Section</h2>
                    <p>Hero Section Description</p>
                </div> 
        </section>
    )
}